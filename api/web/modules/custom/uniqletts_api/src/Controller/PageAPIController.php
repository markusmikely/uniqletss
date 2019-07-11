<?php

namespace Drupal\uniqletts_api\Controller;

use Drupal\Core\Controller\ControllerBase;

use Drupal\node\Entity\Node;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class APIController.
 */
class PageAPIController extends ControllerBase {

  /**
   * GET Method.
   *
   * @return string
   *   Return Get string.
   */
  public function get(Request $request) {

    if($request->query->get('page') != null && $request->query->get('page') == 'home') {
      $query = \Drupal::entityQuery('node')
      ->condition('status', 1)
      ->condition('type', 'slide');

      $slide_nids = $query->execute();

      $slide_nodes =  \Drupal\node\Entity\Node::loadMultiple($slide_nids);

      $slides = array();

      foreach ($slide_nodes as $n) {

        $file1 = \Drupal\file\Entity\File::load($n->get('field_wide_image')->getValue()[0]['target_id']);
        if(isset($file1)) {
          $desktop_image_url = file_create_url($file1->getFileUri());
        } else {
          $desktop_image_url = "https://via.placeholder.com/1440x450";
        }

        $file2 = \Drupal\file\Entity\File::load($n->get('field_image')->getValue()[0]['target_id']);
        if(isset($file2)) {
          $mobile_image_url = file_create_url($file2->getFileUri());
        } else {
          $mobile_image_url = "https://via.placeholder.com/400x450";
        }

        $slide = array(
          'title' => $n->getTitle(),
          'button' => array(
            'label' => $n->get('field_button_link')->getValue()[0]['title'],
            'uri' => $n->get('field_button_link')->getValue()[0]['uri']
          ),
          'image' =>  array(
            'url_300x150' =>   $mobile_image_url,
            'url_600x300' =>   $desktop_image_url,
            'url_900x900' =>   $desktop_image_url,
          ),
        );
        array_push($slides, $slide);
      }
      $banner = "With over 120 years experience, we offer a high quality and trustworthy service for properties in your area.";

      $query = \Drupal::entityQuery('node')
      ->condition('status', 1)
      ->condition('type', 'property')
      ->condition('field_featured', 1);

      $property_nids = $query->execute();

      $property_nodes =  \Drupal\node\Entity\Node::loadMultiple($property_nids);

      $features = array();
      $features['sales'] = array();
      $features['lettings'] = array();

      if(count($property_nodes) > 0) {
        foreach ($property_nodes as $n) {

          // $file = (isset($n->get('field_image')->getValue()) ? \Drupal\file\Entity\File::load($n->get('field_image')->getValue()[0]['target_id']) : null;

          $image_url = '';//(isset($file)) ?  file_create_url($file->getFileUri()) : '';

          $property = array(
            'id' => $n->id(),
            'title' => $n->getTitle(),
            'short_description' => $n->get('field_short_description')->getValue()[0]['value'],
            'image' => $image_url,
            'price' =>  $n->get('field_price_ps_')->getValue()[0]['value'],
            'address' =>  array(
              'title' => $n->get('field_address')->getValue()[0]['locality'].', '.explode(' ',$n->get('field_address')->getValue()[0]['postal_code'])[0],
              'line1' => $n->get('field_address')->getValue()[0]['address_line1'],
              'line2' => $n->get('field_address')->getValue()[0]['address_line2'],
              'town' => $n->get('field_address')->getValue()[0]['locality'],
              'country' => $n->get('field_address')->getValue()[0]['country_code'],
              'post_code' => $n->get('field_address')->getValue()[0]['postal_code']
            ),
            'bedrooms'=>  $n->get('field_bedrooms')->getValue()[0]['value'],
            'bathrooms'=>  $n->get('field_bathrooms')->getValue()[0]['value'],
            'price_type' =>  $n->get('field_price_type')->getValue()[0]['value'],
            'property_type' =>  $n->get('field_property_type')->getValue()[0]['value']
          );
          if($property['property_type'] == 'Sales') {
            array_push($features['sales'], $property);
          } else if($property['property_type'] == 'Lettings') {
            array_push($features['lettings'], $property);
          }

        }
      }

      $data = array(
        'slides' => $slides,
        'banner' => $banner,
        'features' => $features
      );
    } else if($request->query->get('id') != null) {
      // Return page object
      $nid = intval($request->query->get('id'));

      $node = \Drupal\node\Entity\Node::load($nid);

      $data = array(
        'title' => $node->getTitle(),
        'html' => $node->get('body')->getValue()[0]['value']
      );
    }

    $response['data'] = $data;
    $response['method'] = 'GET';

    return new JsonResponse( $response );
  }

}
