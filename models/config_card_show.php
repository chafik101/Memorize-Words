
<?php

include ('config.php');

if(isset($_POST['num_p'])){

    $id = $_POST['num_c'];
    $res = mysqli_query($con, "select * from word where id = $id");
    while($row = mysqli_fetch_array($res)){
        echo '<center class="show_words">';
        echo '<h3 class="show_words_title_card">Card Word</h3>';
        echo '<img class="img_show_words" src="" alt="">';
        echo '<h3 class="title_show_words" >'.$row['word_an'].'</h3>';
        echo '</center>';

       
    }
   
}


?>



            
            
            
            
      