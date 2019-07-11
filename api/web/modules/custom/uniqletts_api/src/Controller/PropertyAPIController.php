<?php

namespace Drupal\uniqletts_api\Controller;

use Drupal\Core\Controller\ControllerBase;

use Drupal\node\Entity\Node;
use Drupal\file\Entity\File;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class PropertyAPIController.
 */
class PropertyAPIController extends ControllerBase {

  /**
   * GET Method.
   *
   * @return json
   *   Return Get string.
   */
  public function get(Request $request) {

    $query = \Drupal::entityQuery('node')
      ->condition('status', 1)
      ->condition('type', 'property');

    $queryParams = array(
      'nid' => (!empty($request->query->get('id'))) ? $request->query->get('id') : null,
      'type' => (!empty($request->query->get('type'))) ? $request->query->get('type') : null,
      'property_type' => (!empty($request->query->get('type'))) ? $request->query->get('type') : null,
      'location' => (!empty($request->query->get('location'))) ? $request->query->get('location') : null,
      'longtitude' => (!empty($request->query->get('longtitude'))) ? $request->query->get('longtitude') : null,
      'latitude' => (!empty($request->query->get('latitude'))) ? $request->query->get('latitude') : null,

      'distance' => (!empty($request->query->get('distance'))) ? $request->query->get('distance') : null,
      'min_price' => (!empty($request->query->get('min_price'))) ? $request->query->get('min_price') : null,
      'max_price' => (!empty($request->query->get('max_price'))) ? $request->query->get('max_price') : null,
      'bedrooms' => (!empty($request->query->get('bedrooms'))) ? $request->query->get('bedrooms') : null
    );
    if(isset($queryParams['type'])) {
        $query->condition('field_property_type', $queryParams['type']);
    }
    if(isset($queryParams['nid'])) {
      $query->condition('nid', $queryParams['nid']);
    }
    if(isset($queryParams['min_price'])) {
      // Add min price fllter
      $query->condition('field_price_ps_', $queryParams['min_price'], '>=');
    }
    if(isset($queryParams['max_price'])) {
      // Add max price flter
      $query->condition('field_price_ps_', $queryParams['max_price'], '<');
    }
    if(isset($queryParams['bedrooms'])) {
      // Add bedroom fllter
     $query->condition('field_bedrooms', $queryParams['bedrooms'], '>=');
    }

    $nids = $query->execute();

    $nodes =  \Drupal\node\Entity\Node::loadMultiple($nids);

    $properties = array();

    foreach ($nodes as $n) {

      $fids = $n->get('field_image')->getValue();

      $images = array();

      foreach ($fids as $key => $value) {
          $file = \Drupal\file\Entity\File::load($value['target_id']);
          $image_url = file_create_url($file->getFileUri());
          array_push($images, $image_url);
      }

      $featureObjs = $n->get('field_property_features')->getValue();
      $features = array();

      foreach($featureObjs as $key => $value) {
        array_push($features, $value['value']);
      }
      $address = array(
          'line1' => $n->get('field_address')->getValue()[0]['address_line1'],
          'line2' => $n->get('field_address')->getValue()[0]['address_line2'],
          'town' => $n->get('field_address')->getValue()[0]['locality'],
          'postcode' => $n->get('field_address')->getValue()[0]['postal_code']
      );
      
      $property = array(
        'id' => $n->id(),
        'title' => $n->getTitle(),
        'short_description' => $n->get('field_short_description')->getValue()[0]['value'],
        'description' => $n->get('field_description')->getValue()[0],
        'images' => $images,
        'price' => $n->get('field_price_ps_')->getValue()[0]['value'],
        'price_type' => $n->get('field_price_type')->getValue()[0]['value'],
        'address' =>  $address,
        'distance' => -1,
        'features' =>  $features,
        'bedrooms' =>  $n->get('field_bedrooms')->getValue()[0]['value'],
        'bathrooms' =>  $n->get('field_bathrooms')->getValue()[0]['value'],
        'coordinates' => array(
          'latitude' => -1,
          'longtitude' =>  -1,
        ),
        'updated' => intval($n->changed->value)
      );

      // echo 'Language: '.$queryParams['longtitude'].'<br>';
      if(isset($queryParams['longtitude']) && isset($queryParams['latitude']) && isset($queryParams['distance'])) {
        // var_dump($this->get_lonlat($n->get('field_address')->getValue()[0]['postal_code']));

        $location_lonlat = array(
          'longtitude' => $queryParams['longtitude'],
          'latitude' => $queryParams['latitude'],
        );
        $property_lonlat = $this->get_lonlat($n->get('field_address')->getValue()[0]['postal_code']);

        $distance = $this->distance($property_lonlat['latitude'], $property_lonlat['longtitude'], $location_lonlat['latitude'], $location_lonlat['longtitude'], 'M');

        $property['coordinates']['latitude'] = $property_lonlat['latitude'];
        $property['coordinates']['longtitude'] =  $property_lonlat['longtitude'];

        $property['distance'] = $distance;

        if($distance < $queryParams['distance']) {
          array_push($properties, $property);
        }
      } else {
        array_push($properties, $property);
      }
    }
    $response['data'] = $properties;
    $response['method'] = 'GET';

    return new JsonResponse( $response );
  }

  function distance($lat1, $lon1, $lat2, $lon2, $unit) {
    if (($lat1 == $lat2) && ($lon1 == $lon2)) {
      return 0;
    }
    else {
      $theta = $lon1 - $lon2;
      $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
      $dist = acos($dist);
      $dist = rad2deg($dist);
      $miles = $dist * 60 * 1.1515;
      $unit = strtoupper($unit);

      if ($unit == "K") {
        return ($miles * 1.609344);
      } else if ($unit == "N") {
        return ($miles * 0.8684);
      } else {
        return $miles;
      }
    }
  }
  function get_lonlat($postcode) {
    $url = 'api.postcodes.io/postcodes/'.$postcode;

    $curlSession = curl_init();
    curl_setopt($curlSession, CURLOPT_URL, $url);
    curl_setopt($curlSession, CURLOPT_BINARYTRANSFER, true);
    curl_setopt($curlSession, CURLOPT_RETURNTRANSFER, true);

    $jsonData = json_decode(curl_exec($curlSession));
    curl_close($curlSession);

    $result = array(
      'longtitude' => $jsonData->result->longitude,
      'latitude' => $jsonData->result->latitude,
    );

    // var_dump($jsonData);

    return $result;

  }

}
