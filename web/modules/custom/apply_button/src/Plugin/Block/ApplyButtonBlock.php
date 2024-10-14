<?php

namespace Drupal\apply_button\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Url;

/**
 * Provides a block for the Apply button.
 *
 * @Block(
 *   id = "apply_button_block",
 *   admin_label = @Translation("Apply Button Block"),
 *   context_definitions = {
 *     "node" = @ContextDefinition("entity:node", label = @Translation("Node"))
 *   }
 * )
 */
class ApplyButtonBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $node = \Drupal::routeMatch()->getParameter('node');
    if ($node) {
      $url = Url::fromRoute('apply_route', ['node' => $node->id()])->toString();
      return [
        '#markup' => '<a href="' . $url . '" class="btn btn-primary">Apply Online</a>',
      ];
    }

    return [];
  }

}
