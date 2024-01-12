<?php

include ('config.php');

if(isset($_POST['num_p'])){
    $id = $_POST['num_p'];
    $val = $_POST['percent'];
    $sql = "UPDATE parts SET percent=$val WHERE num_parte =$id  ";

    $res =  mysqli_query($con,$sql);

    $res = mysqli_query($con, "select * from parts");
    while($row = mysqli_fetch_array($res)){
        $total_percent += $row['percent'];
        $num_class=$row['num_classification'];
    };

    $sql = "UPDATE ratings SET percent=$total_percent/10 WHERE num_classification =$num_class ";

    $res =  mysqli_query($con,$sql);

    header("Location:http://localhost/etude_an/views/");
};

?>