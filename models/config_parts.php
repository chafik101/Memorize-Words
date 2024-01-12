<?php

include ('config.php');

if(isset($_POST['num_c'])){
    $id = $_POST['num_c'];
    $res = mysqli_query($con, "select * from parts where num_classification = $id");
    while($row = mysqli_fetch_array($res)){
        echo '<form class="card_parte" method="POST" action="parte1.php">';
        echo '<div>';
        echo '<h3 class="title_card">'.$row["title"].'</h3>';
        echo '<h4 class="percent_num">'.$row['percent']."%".'<h4>';
        echo '</div>';
        echo '<input type="text"  name="num_p" value="'.$row['num_parte'].'" style="display:none;">';
        echo '<button class="btn_parts"  type="submit">Enter</button>';
  
        echo '</form>';
    }
};

?>