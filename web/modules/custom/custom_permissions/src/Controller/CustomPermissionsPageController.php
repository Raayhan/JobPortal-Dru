<?php

namespace Drupal\custom_permissions\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Controller for our custom permissions overview page.
 */
class CustomPermissionsPageController extends ControllerBase {

  /**
   * Prints the overview page.
   */
  public function overviewPage() {
    $build = [];
    
    $build['content'] = [
      '#prefix' => '<p>',
      '#markup' => $this->t('This is the overview page.'),
      '#suffix' => '</p>',
    ];

    return $build;
  }

}
