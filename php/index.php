<?php

header("Access-Control-Allow-Origin: *");
// error_reporting(E_ALL);
// ini_set('display_errors', 1);
ini_set('memory_limit','1000M');

  /*****************************************
   *  St. Giles MySQL communication handler
  ******************************************/

  $auth = 's$fsqi-928';

  $commands = array(

    array('geolocate','placename'),
    array('search','surname'),
    array('save','surname', 'origin', 'lat', 'lon', 'noAncestry'),
    array('loadLastVisitors','count'),
    array('plaques','name'),
    array('surnames'),
    array('id', 'surname'),
    array('nameFromID', 'id'),
    array('surnamesNarrative'),
    array('test'),
    array('batchCache'),
    array('decadeTotals'),
    array('count'),
    array('surnameRecords', 'surname'),
    array('recentClanspeople', 'surname'),
    array('narrative', 'surname', 'decade'),
    array('narrativeAll', 'surname'),
    array('registerMobile', 'dbID', 'surname'),
    array('updateMobile', 'id', 'surname', 'interested'),
    array('surnameRecords2', 'surname')

  );

  if($_GET['auth'] != $auth) {
    $output = [];
    $output['result'] = 'error';
    $output['description'] = "Error: missing or invalid auth code.";
    http_response_code(404);
    exit();
    returnJSON($output);
  }

  // Initialise database connection
  if($_SERVER['REMOTE_ADDR'] == '::1') {
    $db_host = 'localhost';
    $db_user = 'root';
    $db_password = 'root';
    $db_db = 'stgiles';
  } else {
    $db_host = 'localhost';
    $db_user = 'rayadmin_stgiles';
    $db_password = 'turbonBlort1';
    $db_db = 'rayadmin_stgiles';   
  }
  

  $startDecade = 1560;
  $endDecade = 1890;
 
  $mysqli = @new mysqli(
    $db_host,
    $db_user,
    $db_password,
    $db_db,
    3306
  );
  
  if ($mysqli->connect_error) {
    echo 'Errno: '.$mysqli->connect_errno;
    echo '<br>';
    echo 'Error: '.$mysqli->connect_error;
    exit();
  }
  function returnJSON($array) {
    print json_encode($array);
    exit();
  }


  function nameFromID($id) {
    
    global $mysqli;

    // get the name
    $sq = "SELECT * FROM all_surnames WHERE id = $id LIMIT 1";
    $result = $mysqli->query($sq);
    if($result->num_rows == 0) {
      return false;
    } else {
      $row_all = mysqli_fetch_assoc($result);
      return $row_all;
    }
  }

  function idFromName($surname) {
    
    global $mysqli;

    // get the ID
    $sq = "SELECT id FROM all_surnames WHERE surname='" . $mysqli->real_escape_string($surname) . "'";
    $result = $mysqli->query($sq);
    if($result->num_rows == 0) {
      return false;
    } else {
      $row_all = mysqli_fetch_assoc($result);
      return $row_all['id'];
    }
  }

  function getNarrativeAll($surname, $returnOutput = true) {
    
    global $mysqli;
    global $startDecade;
    global $endDecade;
    global $output;

    $id = idFromName($surname);

    if(!$id) {
      return false;
    }


    $n = $surname;
    $t = 0;
    $data = [ "data" => [], "weights" => [], "parishes" => [], "total" => 0 ];

    for($i = $startDecade; $i <= $endDecade; $i += 10) {
        
        $iEnd = $i + 10;
        
        $result = $mysqli->query("
              SELECT 
                births_merged.`parish_name` AS parish,
                COUNT(births_merged.`parish_name`) AS num_entries,
                ANY_VALUE(geolocation.lat) AS lat, ANY_VALUE(geolocation.lon) AS lon
                
              FROM 
                births_merged
              INNER JOIN geolocation ON
                births_merged.parish_name = geolocation.parish_name AND
                births_merged.county = geolocation.county AND
                births_merged.city = geolocation.city 
              WHERE 
                year >= $i AND year < $iEnd 
                AND surname='" . $mysqli->real_escape_string($n) . "' 

              
              GROUP BY births_merged.parish_name 
              ORDER BY num_entries DESC ");
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        foreach($rows as $row) {
          
          if($row['lat'] != '0' && $row['lon'] != 0) {
            array_push($data['data'], [ $row['lat'], $row['lon'], $i ]);
            array_push($data['weights'], $row['num_entries']);
            array_push($data['parishes'], $row['parish']);
            $data['total'] += $row['num_entries'];
          }
          
        }

        /*
        $result = $mysqli->query("
              SELECT 
                deaths_merged.`parish_name` AS parish,
                COUNT(deaths_merged.`parish_name`) AS num_entries,
                ANY_VALUE(geolocation.lat) AS lat, ANY_VALUE(geolocation.lon) AS lon
                
              FROM 
                deaths_merged
              INNER JOIN geolocation ON 
                deaths_merged.parish_name = geolocation.parish_name AND
                deaths_merged.county = geolocation.county AND
                deaths_merged.city = geolocation.city 
              WHERE 
                year >= $i AND year < $iEnd 
                AND surname='" . $mysqli->real_escape_string($n) . "' 
              
              GROUP BY deaths_merged.parish_name 
              ORDER BY num_entries DESC ");


        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data['deaths']["$i"] = $rows;

        $result = $mysqli->query("
              SELECT 
                marriages_merged.`parish_name` AS parish,
                COUNT(marriages_merged.`parish_name`) AS num_entries,
                ANY_VALUE(geolocation.lat) AS lat, ANY_VALUE(geolocation.lon) AS lon
                
              FROM 
                marriages_merged
              INNER JOIN geolocation ON 
                marriages_merged.parish_name = geolocation.parish_name AND
                marriages_merged.county = geolocation.county AND
                marriages_merged.city = geolocation.city
              WHERE 
                year >= $i AND year < $iEnd 
                AND surname='" . $mysqli->real_escape_string($n) . "' 
              
              GROUP BY marriages_merged.parish_name 
              ORDER BY num_entries DESC ");
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data['marriages']["$i"] = $rows;
        */

    }
    file_put_contents('./data/surnames/narrative_source/ns' . $id . '.json', json_encode($data));

    // update database
    $sq = "UPDATE all_surnames SET isNarrative = 1 WHERE id = $id";
    $result = $mysqli->query($sq);

    $output['data'] = $data;
  }

  function getNarrative($surname, $decade, $returnOutput = true) {
    
    global $mysqli;
    global $startDecade;
    global $endDecade;
    global $output;

    $n = $surname;

    $data = [ 'births' => [], 'deaths' => [], 'marriages' => [] ];

    for($i = $decade - 10; $i <= $decade + 10; $i += 10) {
        
        $iEnd = $i + 10;
        
        $result = $mysqli->query("
              SELECT 
                births_merged.`parish_name` AS parish,
                COUNT(births_merged.`parish_name`) AS num_entries,
                ANY_VALUE(geolocation.lat) AS lat, ANY_VALUE(geolocation.lon) AS lon
                
              FROM 
                births_merged
              INNER JOIN geolocation ON
                births_merged.parish_name = geolocation.parish_name AND
                births_merged.county = geolocation.county AND
                births_merged.city = geolocation.city 
              WHERE 
                year >= $i AND year < $iEnd 
                AND surname='" . $mysqli->real_escape_string($n) . "' 
              
              GROUP BY births_merged.parish_name 
              ORDER BY num_entries DESC ");
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $data['births']["$i"] = $rows;

        $result = $mysqli->query("
              SELECT 
                deaths_merged.`parish_name` AS parish,
                COUNT(deaths_merged.`parish_name`) AS num_entries,
                ANY_VALUE(geolocation.lat) AS lat, ANY_VALUE(geolocation.lon) AS lon
                
              FROM 
                deaths_merged
              INNER JOIN geolocation ON 
                deaths_merged.parish_name = geolocation.parish_name AND
                deaths_merged.county = geolocation.county AND
                deaths_merged.city = geolocation.city 
              WHERE 
                year >= $i AND year < $iEnd 
                AND surname='" . $mysqli->real_escape_string($n) . "' 
              
              GROUP BY deaths_merged.parish_name 
              ORDER BY num_entries DESC ");


        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data['deaths']["$i"] = $rows;

        $result = $mysqli->query("
              SELECT 
                marriages_merged.`parish_name` AS parish,
                COUNT(marriages_merged.`parish_name`) AS num_entries,
                ANY_VALUE(geolocation.lat) AS lat, ANY_VALUE(geolocation.lon) AS lon
                
              FROM 
                marriages_merged
              INNER JOIN geolocation ON 
                marriages_merged.parish_name = geolocation.parish_name AND
                marriages_merged.county = geolocation.county AND
                marriages_merged.city = geolocation.city
              WHERE 
                year >= $i AND year < $iEnd 
                AND surname='" . $mysqli->real_escape_string($n) . "' 
              
              GROUP BY marriages_merged.parish_name 
              ORDER BY num_entries DESC ");
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data['marriages']["$i"] = $rows;

    }

    $output['data'] = $data;
  }

  function getRecords($surname, $returnOutput = true) {

    global $mysqli;
    global $startDecade;
    global $endDecade;
    global $output;

    $data = [];

    $n = strtoupper($surname);

    $sq = "SELECT * FROM all_surnames WHERE surname = '". $mysqli->real_escape_string($n) . "' LIMIT 1";
    $result = $mysqli->query($sq);

    $useCache = false;

    if($result->num_rows > 0) {
      
      $row_all = mysqli_fetch_assoc($result);
      $id = $row_all['id'];

      if($row_all['isCached'] > 0) {
        // get cached from filesystem

        $path = './data/surnames/data' . $id . '.json';
        if(file_exists($path)) {
          $useCache = true;

          $output['result'] = 'success';
          $output['fromCache'] = 'true';
          $output['records'] = json_decode(file_get_contents($path));
          if($returnOutput) {
            returnJSON($output);
          } else {
            exit();
          }
        }
      }
      
      
    } else {
      $output['result'] = 'error';
      $output['error'] = 'Surname not found';
      returnJSON($output);
    }

    ////////////////// BIRTHS
    
    // count per decade
    $sq = "SELECT COUNT(id) AS total, FLOOR( year / 10) * 10 as decade FROM births_merged WHERE surname = '". $mysqli->real_escape_string($n) . "' GROUP BY decade";
    $result = $mysqli->query($sq);
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);


    $data['births'] = [];

    foreach($rows as $key => $value) {
      $data['births']['totals'][ $value['decade'] ] = $value['total'];
    }

    // Family name ranks per decade CAN BE CACHED
    /* $result = $mysqli->query("SELECT Surname, COUNT(Surname), FLOOR( Year / 10) * 10 as decade FROM births GROUP BY Surname, decade ORDER BY decade ASC, COUNT(Surname) DESC");
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $data['births']['rank'] = $rows; */

    $data['births']['girls'] = [];
    $data['births']['boys'] = [];
    $data['births']['girlsLeast'] = [];
    $data['births']['boysLeast'] = [];

    $data['births']['topParishes'] = [];

    // First name name rank per decade
    for($i = $startDecade; $i <= $endDecade; $i += 10) {
        $iEnd = $i + 10;
        $sq = "SELECT forename, COUNT(forename) AS count FROM births_merged WHERE year >= $i AND year < $iEnd AND sex = 'F' AND surname='" . $mysqli->real_escape_string($n) . "' GROUP BY forename ORDER BY count DESC LIMIT 5";
                    
        $result = $mysqli->query($sq);

        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data['births']['girls']["$i"] = $rows;

        $result = $mysqli->query("SELECT forename, COUNT(forename) AS count FROM births_merged WHERE year >= $i AND year < $iEnd AND sex = 'M' AND surname='" . $mysqli->real_escape_string($n) . "' GROUP BY forename ORDER BY count DESC LIMIT 5");
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data['births']['boys']["$i"] = $rows;
    }

    // First name rank least by decade
    for($i = $startDecade; $i <= $endDecade; $i += 10) {
        $iEnd = $i + 10;
        $sq = "SELECT forename, COUNT(forename) AS count FROM births_merged WHERE year >= $i AND year < $iEnd AND sex = 'F' AND surname='" . $mysqli->real_escape_string($n) . "' GROUP BY forename ORDER BY count ASC LIMIT 5";
                    
        $result = $mysqli->query($sq);

        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data['births']['girlsLeast']["$i"] = $rows;

        $result = $mysqli->query("SELECT forename, COUNT(forename) AS count FROM births_merged WHERE year >= $i AND year < $iEnd AND sex = 'M' AND surname='" . $mysqli->real_escape_string($n) . "' GROUP BY forename ORDER BY count ASC LIMIT 5");
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data['births']['boysLeast']["$i"] = $rows;
    }

    // Parish rank per decade
    for($i = $startDecade; $i <= $endDecade; $i += 10) {
        $iEnd = $i + 10;
        $result = $mysqli->query("
              SELECT 
                births_merged.`parish_name` AS parish,
                COUNT(births_merged.`parish_name`) AS num_entries,
                ANY_VALUE(geolocation.lat) AS lat, ANY_VALUE(geolocation.lon) AS lon
                
              FROM 
                births_merged
              INNER JOIN geolocation ON 
              
                births_merged.parish_name = geolocation.parish_name AND
                births_merged.county = geolocation.county AND
                births_merged.city = geolocation.city 
              WHERE 
                year >= $i AND year < $iEnd 
                AND surname='" . $mysqli->real_escape_string($n) . "' 
              
              GROUP BY births_merged.parish_name 
              ORDER BY num_entries DESC 
              LIMIT 5");
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data['births']['topParishes']["$i"] = $rows;

    }


    ////////////////// DEATHS

    // count per decade
    $result = $mysqli->query("SELECT COUNT(id) AS total, FLOOR( year / 10) * 10 as decade FROM deaths_merged WHERE surname = '". $mysqli->real_escape_string($n) . "' GROUP BY decade");
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

    // life expectancy per decade
    $resultLE = $mysqli->query("SELECT AVG(age) AS lifeExpectancy, FLOOR( year / 10) * 10 as decade FROM deaths_merged WHERE surname = '". $mysqli->real_escape_string($n) . "' AND age IS NOT NULL GROUP BY decade");
    $rowsLE = mysqli_fetch_all($resultLE, MYSQLI_ASSOC);



    $data['deaths'] = [];
    foreach($rows as $key => $value) {
      $data['deaths']['totals'][ $value['decade'] ] = $value['total'];
    }

    foreach($rowsLE as $key => $value) {
      $data['deaths']['lifeExpectancy'][ $value['decade'] ] = $value['lifeExpectancy'];
    }


    $data['deaths']['topParishes'] = [];

    // Parish rank per decade
    for($i = $startDecade; $i <= $endDecade; $i += 10) {
        $iEnd = $i + 10;
        $result = $mysqli->query("
              SELECT 
                deaths_merged.`parish_name` AS parish,
                COUNT(deaths_merged.`parish_name`) AS num_entries,
                ANY_VALUE(geolocation.lat) AS lat, ANY_VALUE(geolocation.lon) AS lon
                
              FROM 
                deaths_merged
              INNER JOIN geolocation ON 

                deaths_merged.parish_name = geolocation.parish_name AND
                deaths_merged.county = geolocation.county AND
                deaths_merged.city = geolocation.city 
              WHERE 
                year >= $i AND year < $iEnd 
                AND surname='" . $mysqli->real_escape_string($n) . "' 

              
              GROUP BY deaths_merged.parish_name 
              ORDER BY num_entries DESC 
              LIMIT 5");
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data['deaths']['topParishes']["$i"] = $rows;

    }

    // Family name ranks per decade CAN BE CACHED
    /* $result = $mysqli->query("SELECT Surname, COUNT(Surname), FLOOR( Year / 10) * 10 as decade FROM deaths GROUP BY Surname, decade ORDER BY decade ASC, COUNT(Surname) DESC");
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $data['deaths']['rank'] = $rows; */


    ////////////////// MARRIAGES

    // count per decade
    $result = $mysqli->query("SELECT COUNT(id) AS total, FLOOR( year / 10) * 10 as decade FROM marriages_merged WHERE surname = '" . $mysqli->real_escape_string($n) . "' GROUP BY decade");
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

    $data['marriages'] = [];
    foreach($rows as $key => $value) {
      $data['marriages']['totals'][ $value['decade'] ] = $value['total'];
    }

    $data['marriages']['topParishes'] = [];

    // Family name ranks per decade CAN BE CACHED
    /* $result = $mysqli->query("SELECT GroomSurname, COUNT(GroomSurname), FLOOR( Year / 10) * 10 as decade FROM marriages GROUP BY GroomSurname, decade ORDER BY decade ASC, COUNT(GroomSurname) DESC");
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $data['marriages']['rankGroom'] = $rows;

    // Family name ranks per decade CAN BE CACHED
    $result = $mysqli->query("SELECT BrideMaidenSurname, COUNT(BrideMaidenSurname), FLOOR( Year / 10) * 10 as decade FROM marriages GROUP BY BrideMaidenSurname, decade ORDER BY decade ASC, COUNT(BrideMaidenSurname) DESC");
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $data['marriages']['rankBride'] = $rows;
    */

    // Parish rank per decade
    for($i = $startDecade; $i <= $endDecade; $i += 10) {
        $iEnd = $i + 10;
        $sq = "
              SELECT 
                marriages_merged.`parish_name` AS parish,
                COUNT(marriages_merged.`parish_name`) AS num_entries,
                ANY_VALUE(geolocation.lat) AS lat, ANY_VALUE(geolocation.lon) AS lon
                
              FROM 
                marriages_merged
              INNER JOIN geolocation ON 
                marriages_merged.parish_name = geolocation.parish_name AND
                marriages_merged.county = geolocation.county AND
                marriages_merged.city = geolocation.city
              WHERE 
                year >= $i AND year < $iEnd 
                AND surname='" . $mysqli->real_escape_string($n) . "' 
              
              GROUP BY marriages_merged.parish_name 
              ORDER BY num_entries DESC 
              LIMIT 5";
        
        $result = $mysqli->query($sq);
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data['marriages']['topParishes']["$i"] = $rows;

    }


    // fill in blank decades for totals
    for($i = $startDecade; $i <= $endDecade; $i += 10) {
        if(!isset($data['births']['totals']["$i"])) {
          $data['births']['totals']["$i"] = 0;
        }
        if(!isset($data['deaths']['totals']["$i"])) {
          $data['deaths']['totals']["$i"] = 0;
        }
        if(!isset($data['marriages']['totals']["$i"])) {
          $data['marriages']['totals']["$i"] = 0;
        }
    }

    $output['result'] = 'success';
    $output['isCached'] = 'false';

    // cache data
    if($row_all['num_records'] >= 1) {
      file_put_contents('./data/surnames/data' . $id . '.json', json_encode($data));

      $sq = "UPDATE all_surnames SET isCached = 1 WHERE id = $id LIMIT 1";
      $result = $mysqli->query($sq);
    }

    if($returnOutput) $output['records'] = $data;

    
  }

  function getRecords2() {
   
    global $mysqli;
      $data = [];
      $data['births'] = [];
      $data['deaths'] = [];
      $data['marriages'] = [];

      $n = strtoupper($_GET['surname']);

      ////////////////// BIRTHS


      $sq = "SELECT forename, COUNT(forename) AS count, FLOOR(year / 10) * 10 AS decade FROM births_merged WHERE sex = 'F' AND surname='" . $mysqli->real_escape_string($n) . "' GROUP BY decade, forename ORDER BY decade ASC, count DESC";
                 
      print($sq . "<br/><br/>");

      $result = $mysqli->query($sq);

      $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

      $data['births']['girls'] = $rows;

      $sq = "SELECT forename, COUNT(forename) AS count, FLOOR(year / 10) * 10 AS decade FROM births_merged WHERE sex = 'M' AND surname='" . $mysqli->real_escape_string($n) . "' GROUP BY decade, forename ORDER BY decade ASC, count DESC";

      print($sq . "<br/><br/>");
      

      $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

      $data['births']['boys'] = $rows;
      

      $dbs = ['births', 'deaths', 'marriages'];
      
      foreach($dbs as $i => $value) {

        // count per decade
        $result = $mysqli->query("SELECT COUNT(id) AS total, FLOOR( year / 10) * 10 as decade FROM " . $value . "_merged WHERE surname = '". $mysqli->real_escape_string($n) . "' GROUP BY decade");
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data[$value]['totals'] = $rows;
        // $data[$value]['topParishes'] = [];

        // Parish rank per decade
        $sq = "
              SELECT 
                " . $value . "_merged.`parish_name` AS parish,
                COUNT(" . $value . "_merged.`parish_name`) AS num_entries,
                FLOOR(year / 10) * 10 as decade
              FROM 
                ". $value . "_merged
              
              WHERE 
                surname='" . $mysqli->real_escape_string($n) . "' 

              GROUP BY decade, parish_name 
              ORDER BY decade ASC, num_entries DESC ";


        print($sq . "<br/><br/>");

        $result = $mysqli->query($sq);
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        $data[$value]['topParishes'] = $rows;

        
      }
      

      $output['result'] = 'success';
      $output['records'] = $data;

   
      
  }




  // validate commands and parameters against list
  foreach($commands as $command) {
    $validCommand = false;
    if($_GET['command']==$command[0]) {
      
      if(count($command)==1) {
        $validCommand = true;
        break;
      } else {
        for( $i=1; $i<count($command); $i++) {
          $param = $command[$i];
          if( !isset($_GET[$param])) {
            $output = [];
            $output['result'] = 'error';
            $output['description'] = "Error: missing parameter for command '$command[0]'.";
            returnJSON($output);
          }
        }
        $validCommand = true;
        break;
      }

      
    }

  }
  if(!$validCommand) {
    $output = [];
    $output['result'] = 'error';
    $output['description'] = "Error: missing or unrecognised command $_GET[command].";
    returnJSON($output);
  }





  $output = [];

  switch ($_GET['command']) {

    case "id":

      print idFromName($_GET['surname']);
      exit();

    case "nameFromID":

      $output['data'] = nameFromID($_GET['id']);
      break;

    case "geolocate":

      $result = $mysqli->query("SELECT * FROM geolocation WHERE Parish='$_GET[placename]' LIMIT 1");

      if($result->num_rows > 0) {
        $output['result'] = 'success';
        $output['description'] = "Match found for placename $_GET[placename].";
        $row = $result->fetch_assoc();
        $output['lat'] = $row['lat'];
        $output['lon'] = $row['lon'];
        break;
      } else {
        $output['result'] = 'nomatch';
        $output['description'] = "No match found for placename $_GET[placename].";
        break;  
      }


    case "surnames":
      $output['result'] = 'success';
      $result = $mysqli->query("SELECT * FROM all_surnames ORDER BY num_records DESC ");
      $rows = $result->fetch_all(MYSQLI_ASSOC);
      $output['surnames'] = [];
      foreach($rows as $row) {
        $output['surnames'][] = [ "id" => $row['id'], 'surname' => $row['surname'] ];
      }

      break;

    case "surnamesNarrative":
      $output['result'] = 'success';
      $result = $mysqli->query("SELECT * FROM all_surnames WHERE isNarrative = 0 ORDER BY num_records DESC ");
      $rows = $result->fetch_all(MYSQLI_ASSOC);
      $output['surnames'] = [];
      foreach($rows as $row) {
        $output['surnames'][] = [ "id" => $row['id'], 'surname' => $row['surname'] ];
      }

      break;

    case "count":


      $result = $mysqli->query("SELECT surname FROM all_surnames WHERE num_records = - 1 ORDER BY surname ASC LIMIT 600");
      $rows = mysqli_fetch_all($result);
      
      
      foreach($rows as $row) {
        $result2 = $mysqli->query("
            (SELECT COUNT(id) AS c1 FROM marriages_merged WHERE surname='". $mysqli->real_escape_string($row[0]) . "'  LIMIT 1) UNION
            (SELECT COUNT(id) AS c2 FROM deaths_merged WHERE surname='". $mysqli->real_escape_string($row[0]) . "'   LIMIT 1) UNION
            (SELECT COUNT(id) AS c3 FROM births_merged WHERE surname='". $mysqli->real_escape_string($row[0]) . "'   LIMIT 1)
"); 
        $rows2 = mysqli_fetch_all($result2);
        $total = $rows2[0][0];
        if(isset($rows2[1]) && isset($rows2[1][0])) {
          $total += $rows2[1][0];
        }
        if(isset($rows2[2]) && isset($rows2[2][0])) {
          $total += $rows2[2][0];
        }
        // print("TOTAL FOR $row[0]: $total<br/>");
        $result3 = $mysqli->query("UPDATE all_surnames SET num_records = $total WHERE surname='". $mysqli->real_escape_string($row[0]) . "'");


      }

      print '<html><head><title>REFRESHER</title><meta http-equiv="refresh" content="1"></head><body><h1>REFRESHING...</h1></body></html>';

      break;

	  case "test":
      $output['result'] = 'success';
      // $result = $mysqli->query("SELECT parish_name, COUNT(*) as count FROM `stg_opr_births_baptisms_1_ymd` WHERE surname='STUART' AND year >= 1700 AND year < 1710 GROUP BY parish_name ORDER BY count DESC;");
      $result = $mysqli->query("SELECT parish_name, county, city, COUNT(*) as count FROM `stg_opr_deaths_1_ymd` WHERE surname='STUART' AND year >= 1710 AND year < 1720 GROUP BY parish_name, county, city ORDER BY count DESC;");
      $rows = mysqli_fetch_all($result);
      /* $output['surnames'] = [];
      foreach($rows as $row) {
        $output['surnames'][] = $row[0];
      } */

      print("Bork done.");

      break;

    case "batchCache":

      $sq = "SELECT * FROM all_surnames WHERE isCached = 0 AND num_records >= 1 ORDER BY num_records DESC LIMIT 500";
      $result = $mysqli->query($sq);
      if($result->num_rows>0) {
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        
        foreach($rows as $row) {
          print "Caching $row[surname] ($row[num_records]) records... <br/>";
          getRecords($row['surname'], false);
        }
        print '<html><head><title>REFRESHER</title><meta http-equiv="refresh" content="1"></head><body><h1>REFRESHING BATCH CACHER...</h1></body></html>';
        exit();
      } else {
        print "No uncached results remaining";
      }

      exit();
      break;


    case "surnameRecords":
      
      $surname = $_GET['surname'];
      if($surname != '') {
        getRecords($surname);
      } else {
        $output['result'] = 'error';
        $output['description'] = 'No surname supplied';
      }
      
      break;

    case "narrative":
      
      $surname = $_GET['surname'];
      $decade = $_GET['decade'];
      if($surname != '') {
        getNarrative($surname, $decade);
      } else {
        $output['result'] = 'error';
        $output['description'] = 'No surname supplied';
      }
      
      break;

    case "narrativeAll":
      
      $surname = $_GET['surname'];
      if($surname != '') {
        getNarrativeAll($surname);
      } else {
        $output['result'] = 'error';
        $output['description'] = 'No surname supplied';
      }
      
      break;

    case "surnameRecords2":
      
      $surname = $_GET['surname'];
      if($surname != '') {
        getRecords2($surname);

      } else {
        $output['result'] = 'error';
        $output['description'] = 'No surname supplied';
      }
      
      break;

    case "plaques":
      $output['result'] = 'success';
      $result = $mysqli->query("SELECT plaque FROM plaques WHERE Surname LIKE '".$mysqli->real_escape_string($_GET['name'])."' GROUP BY plaque ORDER BY plaque ASC");
      $rows = mysqli_fetch_all($result);
      $output['plaques'] = [];
      foreach($rows as $row) {
        $output['plaques'][] = $row[0];
      }

      break;

    case "save":

      $lastPage = 0;
      $surname = $_GET['surname'];
      $origin = $_GET['origin'];
      $lat = $_GET['lat'];
      $lon = $_GET['lon'];
      $noAncestry = $_GET['noAncestry'];


      $sql = "INSERT INTO visitors (surname, origin, lat, lon, noAncestry) VALUES ('".$mysqli->real_escape_string($surname)."','".$mysqli->real_escape_string($origin)."','".$mysqli->real_escape_string($lat)."','".$mysqli->real_escape_string($lon)."','".$mysqli->real_escape_string($noAncestry)."')";
      $result = $mysqli->query($sql);
      $id = $mysqli->insert_id;
      $output['result'] = 'success';
      // $output['description'] = 'smas'.$originData.$mysqli->error.' data: '.$_GET['data'];


      $output['result'] = 'success';
      $output['id'] = $id;

      break;

    case "registerMobile":

      $visitorID = intval($_GET['dbID']);
      $surname = $_GET['surname'];

      $sql = "INSERT INTO mobileVisitors (visitorID, surname, interested, IP) VALUES ( $visitorID, '" . $mysqli->real_escape_string($surname) . "', 'unspecified', '" . $_SERVER['REMOTE_ADDR'] . "') LIMIT 1";

      $result = $mysqli->query($sql);
      $id = $mysqli->insert_id;

      $output['result'] = 'success';
      $output['id'] = $id;


      break;

    case "updateMobile":

      $id = intval($_GET['id']);
      $surname = $_GET['surname'];
      $interested = $_GET['interested'];

      $sql = "UPDATE mobileVisitors SET interested = '" . $mysqli->real_escape_string($interested) . "' WHERE id = $id AND surname = '" . $mysqli->real_escape_string($surname) . "' LIMIT 1";

      $result = $mysqli->query($sql);
      $id = $mysqli->insert_id;

      $output['result'] = 'success';
      $output['id'] = $id;
      

      break;


    case "loadLastVisitors":

      $count = intval($_GET['count']);

      $result = $mysqli->query("SELECT * FROM visitors WHERE origin != '' ORDER BY id DESC LIMIT $count");
      
      if($result->num_rows>0) {
        $rows = mysqli_fetch_all($result, true);

        $d = [];
        foreach($rows as $row) {
          $data = [];
          $data['id'] = $row['id'];
          $data['surname'] = $row['surname'];
          $data['origin'] = $row['origin'];
          $data['lat'] = $row['lat'];
          $data['lon'] = $row['lon'];
          $d[] = $data;
        }
        
        
        $output['result'] = 'success';
        $output['data'] = $d;
      } else {
        $output['data'] = null;
        $output['result'] = 'no results';
      }

      break;

    case "decadeTotals":

      // First name name rank per decade
      
      $totals = ['births' => [], 'deaths' => [], 'marriages' => [], 'overall' => [] ];
      $n = ['births', 'deaths', 'marriages'];
      for($j = 0; $j < 3; $j++) {
        $sq = [];

        for($i = $startDecade; $i <= $endDecade; $i += 10) {
          $iEnd = $i + 10;
          $sq[] = "SELECT COUNT(id) AS c2 FROM $n[$j]_merged WHERE year >= $i AND year < $iEnd ";
        }
        $sqMerged = implode(" UNION ", $sq);
        $result = $mysqli->query($sqMerged);
        
        $rows = mysqli_fetch_all($result);
        for($k = 0; $k < count($rows); $k++) {
          $year = $startDecade + ($k * 10);
          $totals[ $n[$j] ][ $year ] = (int)$rows[$k][0];
        }

      }
      
      foreach($totals['births'] as $key => $value) {
        $totals['overall'][$key] = (int)($totals['births'][$key]) + (int)($totals['deaths'][$key]) + (int)($totals['marriages'][$key]);

      }

      print(json_encode($totals));
      break;

    case "recentClanspeople":

      $output['result'] = 'success';
      $surname = $_GET['surname'];
      $result = $mysqli->query("

        SELECT * FROM `visitors` WHERE surname='" . $mysqli->real_escape_string($surname) . "' AND origin != '' GROUP BY origin ORDER BY RAND() LIMIT 10;

        ");

      $rows = $result->fetch_all(MYSQLI_ASSOC);
      $output['origins'] = [];
      $count = 0;
      foreach($rows as $row) {
        $output['origins'][] = [ 'origin' => $row['origin'], 'lat' => $row['lat'], 'lon' => $row['lon'] ];
        
      }

      break;

    case "search":
      
      $output['result'] = 'success';
      $surname = $_GET['surname'];
      $exact = $_GET['exact'];

      if($exact > 0) {
        $result = $mysqli->query("

        SELECT * FROM all_surnames WHERE surname = '".$mysqli->real_escape_string($surname) . "' LIMIT 1

        ");
      } else {
        $result = $mysqli->query("

        (SELECT * FROM all_surnames WHERE surname LIKE '".$mysqli->real_escape_string($surname) . "%' AND num_records > 50 ORDER BY surname ASC LIMIT 10)

        UNION 

        (SELECT * FROM all_surnames WHERE surname LIKE '%".$mysqli->real_escape_string($surname) . "%' AND num_records > 50 ORDER BY surname ASC LIMIT 10)

        ");
      }
      
      $rows = mysqli_fetch_all($result);
      $output['surnames'] = [];
      $count = 0;
      foreach($rows as $row) {
        $output['surnames'][] = [ 'name' => $row[1], 'id' => $row[0], 'num_records' => $row[2] ];
        $count++;
        if($count >= 10) {
          break;
        }
      }

      break;


  }

  returnJSON($output);

  $mysqli->close();
?>