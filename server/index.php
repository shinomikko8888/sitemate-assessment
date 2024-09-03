<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json");

    include './db-connect.php';

    include './get/get-issues.php';
    $objDB = new dbConnect;
    $conn = $objDB->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    date_default_timezone_set('Asia/Manila');

    if ($method === "GET"){
        $action = isset($_GET['a']) ? $_GET['a'] : '';
        switch($action){
            case 'get-issues':
                getIssues($conn);
                break;
                
        }
    } elseif ($method === "POST"){
        $data = $_POST;
        $action = $data['action'];
        switch($action){
            case 'modify-issues':
                //modigyIssues($conn, 0);
                break;

        }
    }


?>