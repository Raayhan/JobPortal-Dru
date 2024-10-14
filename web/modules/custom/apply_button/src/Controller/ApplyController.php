<?php

namespace Drupal\apply_button\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Response;

/**
 * Provides a controller for handling job applications.
 */
class ApplyController extends ControllerBase {

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
 
    return new Response('You are applying to job with node ID: ' . $node);
  }

}
