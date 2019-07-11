<?php

namespace Drupal\uniqletts_api\Controller;

use Drupal\Core\Controller\ControllerBase;

use Drupal\node\Entity\Node;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class ReviewAPIController.
 */
class ReviewAPIController extends ControllerBase {

  /**
   * GET method.
   *
   * @return string
   *   Return Hello string.
   */
  public function get(Request $request) {

    $query = \Drupal::entityQuery('node')
    ->condition('status', 1)
    ->condition('type', 'contact')
    ->condition('field_contacttype', 'Review');

    $nids = $query->execute();

    $nodes =  \Drupal\node\Entity\Node::loadMultiple($nids);

    if($nodes != null) {

      $reviews = array();

      foreach ($nodes as $n) {
        $review = array(
          'name'=> $n->get('field_firstname')->getValue()[0]['value'].' '.$n->get('field_lastname')->getValue()[0]['value'],
          'message'=> $n->get('field_message')->getValue()[0]['value'],
          'date'=>$n->get('created')->getValue()[0]['value']
        );
        array_push($reviews, $review);
      }
      $response['data'] = $reviews;
    } else {
      // handle no reviews found
      $response['data'] = 'No response found';
    }

    // TODO Returns JSON Object with list of review objects
    $response['method'] = 'GET';

    return new JsonResponse( $response );
  }

  /**
   * Hello.
   *
   * @return string
   *   Return Hello string.
   */
  public function post(Request $request) {


    // TODO Return JSON Object with newly created object response

    $response['data'] = '3 Some test data to return';
    $response['method'] = 'PUT';

    return new JsonResponse( $response );
  }

}
