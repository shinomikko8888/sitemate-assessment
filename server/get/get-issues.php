<?php

function getIssues($conn){
    $result = $conn->query("SELECT * FROM entities");
    if ($result && $result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data);
        
    } else {
        echo json_encode(array());
    }
}
?>