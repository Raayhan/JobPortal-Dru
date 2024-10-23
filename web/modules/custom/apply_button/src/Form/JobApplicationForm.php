<?php
namespace Drupal\apply_button\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\node\Entity\Node;
use Drupal\file\Entity\File;
use Drupal\Core\File\FileSystemInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class JobApplicationForm.
 */
class JobApplicationForm extends FormBase {

  /**
   * The file system service.
   *
   * @var \Drupal\Core\File\FileSystemInterface
   */
  protected $fileSystem;

  /**
   * Constructs a new JobApplicationForm.
   *
   * @param \Drupal\Core\File\FileSystemInterface $file_system
   *   The file system service.
   */
  public function __construct(FileSystemInterface $file_system) {
    $this->fileSystem = $file_system;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('file_system')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'job_application_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    // Get the node ID (job ID) from the URL.
    $job_id = \Drupal::routeMatch()->getParameter('node');
   
    if ($job_id) {
      $node = Node::load($job_id);
      
      // Ensure the node exists and is of the correct content type (e.g., 'job').
      if ($node && $node->getType() == 'job') {

        $job_title = $node->getTitle();
        $company_name = $node->hasField('field_company_name') && !$node->get('field_company_name')->isEmpty() 
          ? $node->get('field_company_name')->value 
          : $this->t('Unknown Company');

        // Display job and company name.
        $form['job_title'] = [
          '#type' => 'item',
          '#title' => $this->t('Applying for: '),
          '#markup' => $job_title . ' - ' . $company_name,
        ];

        // Applicant details form fields.
        $form['applicant_name'] = [
          '#type' => 'textfield',
          '#title' => $this->t('Applicant Name'),
          '#required' => TRUE,
        ];

        $form['applicant_email'] = [
          '#type' => 'email',
          '#title' => $this->t('Email'),
          '#required' => TRUE,
          '#default_value' => \Drupal::currentUser()->getEmail(),
          '#attributes' => ['readonly' => 'readonly'],
        ];

        $form['applicant_phone'] = [
          '#type' => 'number',
          '#title' => $this->t('Phone'),
          '#required' => TRUE,
        ];

        $form['applicant_cover_letter'] = [
          '#type' => 'textarea',
          '#title' => $this->t('Cover Letter'),
          '#required' => TRUE,
        ];

        // File upload field.
        $form['applicant_cv'] = [
          '#type' => 'managed_file',
          '#title' => $this->t('Upload CV (PDF, DOC, DOCX)'),
          '#required' => TRUE,
          '#upload_location' => 'private://cvs',
          '#upload_validators' => [
            'file_validate_extensions' => ['pdf doc docx'],
          ],
        ];

        $form['applicant_expected_salary'] = [
          '#type' => 'number',
          '#title' => $this->t('Expected Salary'),
          '#required' => TRUE,
        ];

        $form['job_id'] = [
          '#type' => 'hidden',
          '#default_value' => $job_id,
        ];

        $form['submit'] = [
          '#type' => 'submit',
          '#value' => $this->t('Submit Application'),
        ];

      } else {
        // Invalid job.
        \Drupal::messenger()->addError($this->t('Invalid job or job not found.'));
      }
    } else {
      // No job ID found.
      \Drupal::messenger()->addError($this->t('No job selected.'));
    }

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();

    // Handle file upload.
    $file_id = $form_state->getValue('applicant_cv');
    if ($file_id) {
      // Load the file object.
      $file = File::load($file_id[0]);
      $file->setPermanent();
      $file_uri = $file->getFileUri();
      
      if ($file_uri) {
        $file->setFileUri($file_uri);
        $file->save();

        // Save application data to the database.
        \Drupal::database()->insert('job_applications')
          ->fields([
            'job_id' => $values['job_id'],
            'applicant_name' => $values['applicant_name'],
            'applicant_email' => $values['applicant_email'],
            'applicant_phone' => $values['applicant_phone'],
            'applicant_cover_letter' => $values['applicant_cover_letter'],
            'applicant_cv' => $file_uri, // Save the correct file URI after renaming.
            'applicant_expected_salary' => $values['applicant_expected_salary'],
          ])
          ->execute();

        // Display success message.
        $this->messenger()->addMessage($this->t('Your application has been submitted successfully!'));
      } else {
        // Handle error during file moving.
        $this->messenger()->addError($this->t('CV upload failed. Please try again.'));
      }
    } else {
      // Handle file upload error.
      $this->messenger()->addError($this->t('CV upload failed. Please check the file and try again.'));
    }
  }

}
