<?php

namespace Drupal\content_access\Access;

use Drupal\Core\Routing\Access\AccessInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;
use Drupal\Core\Routing\RouteMatchInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Drupal\Core\Url;

/**
 * Class ContentAccessNodePageAccessCheck.
 *
 * Determines access to routes based on permissions defined via
 * $module.permissions.yml files.
 */
class ContentAccessNodePageAccessCheck implements AccessInterface {

  /**
   * {@inheritdoc}
   */
  public function access(AccountInterface $account, RouteMatchInterface $route_match) {
    $node = $route_match->getParameter('node');
    
    // If no node is found, deny access.
    if (!$node) {
      return AccessResult::forbidden()->cachePerUser();
    }

    // Check if a view mode is passed as a parameter in the route.
    $view_mode = \Drupal::routeMatch()->getParameter('view_mode');

    // If no view mode is set, default to 'full'.
    if (!$view_mode) {
      $view_mode = 'full';
    }

    // If the view mode is "full", restrict access to authenticated users.
    if ($view_mode === 'full') {
      if ($account->isAuthenticated()) {
        return AccessResult::allowed()->cachePerUser();
      }
      else {
        // Redirect anonymous users to the login page with a destination back to the full content page.
        $current_path = \Drupal::service('path.current')->getPath();
        $login_url = Url::fromRoute('user.login', [], ['query' => ['destination' => $current_path]])->toString();
        $response = new RedirectResponse($login_url);
        $response->send();
        return AccessResult::neutral(); // Stop further processing.
      }
    }

    // Allow access for all other view modes (like 'teaser' or 'job_listing').
    return AccessResult::allowed()->cachePerUser();
  }

}
