<?php

namespace Drupal\apply_button\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Response;
use Drupal\Core\Form\FormBuilder;
use Symfony\Component\DependencyInjection\ContainerInterface;


/**
 * Provides a controller for handling job applications.
 */
class ApplyController extends ControllerBase {

  /**
   * The form builder service.
   *
   * @var \Drupal\Core\Form\FormBuilder
   */
  protected $formBuilder;

  /**
   * {@inheritdoc}
   */
  public function __construct(FormBuilder $form_builder) {
    $this->formBuilder = $form_builder;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('form_builder'));
  }


  /**
   * Apply handler for the job node.
   *
   * @param int $node
   *   The node ID of the job to apply for.
   *
   * @return \Symfony\Component\HttpFoundation\Response
   *   The response.
   */
  public function apply($node) {
 
    return $this->formBuilder->getForm('\Drupal\apply_button\Form\JobApplicationForm', $node);
  }

}
