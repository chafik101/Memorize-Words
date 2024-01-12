<?php

include ('../models/config.php');


    $id = $_POST['num_p'];
    $res = mysqli_query($con, "select * from word where num_parte = $id");
    
    echo '<form method="POST" action="../models/percent.php" >';
    echo '<input name="num_P" value="'.$id.'" style="display:none;"></input>' ;
    echo '<div class="last_res" id="last_res">';
        echo '<h1 class="title_res">result:</h1>';
        echo '<input id="last_percent" name="percent" style="display:none;"></input>';
        echo '<center class="num_percent" ><div class="res_percent" id="res_percent"  >90</div><div><button class="btn_percent">Next</button></div></center>';
    echo '</div>';
    
    echo '</from>';

    echo '<script> var list_word_an =[];   var list_word_ar =[];    </script>';
    echo '<script> var num=0  </script>';

    while($row = mysqli_fetch_array($res)){
        echo '<script> list_word_an  </script>';
        echo '<script> list_word_an[num]="'.$row["word_an"].'"  </script>';
;


        echo '<script> list_word_ar  </script>';
        echo '<script> list_word_ar[num]="'.$row["word_ar"].'"  </script>';

        echo '<script> num++ </script>';
        echo '<form  method="POST"  action="percent.php" >';
        echo '<input type="text"  name="num_p" value="'.$row['num_parte'].'" style="display:none;">';
        echo '</from>';
    };
    


?>