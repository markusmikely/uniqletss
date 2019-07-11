<?php

namespace Drupal\uniqletts_api\Controller;

use Drupal\Core\Controller\ControllerBase;

use Drupal\node\Entity\Node;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class APIController.
 */
class ContactAPIController extends ControllerBase {

  /**
   * POST Method.
   *
   * @return json
   *   Return Post string.
   */
  public function get(Request $request) {
    // Create a new contact record and send an email notification
    $contact = array(
      'type' => 'contact',
      'title' => 'Contact Submission -'.date('d/m/Y h:i:s', strtotime(time())),
      'field_contacttype' => 'Contact Message',
      'field_firstname' => (!empty($request->query->get('name'))) ? $request->query->get('name') : null,
      'field_email' => (!empty($request->query->get('email'))) ? $request->query->get('email') : null,
      'field_contact' => (!empty($request->query->get('phone'))) ? $request->query->get('phone') : null,
      'field_message' => (!empty($request->query->get('message'))) ? $request->query->get('message') : null
    );

    $node = Node::create($contact);
    $node->save();

    $response['data'] = 'Thank you '.$request->query->get('name').' your message has been sent. One of our agents will contact you shortly';
    $response['method'] = 'POST';

    return new JsonResponse( $response );
  }

}
