<?php
                    include ('../models/config.php');
                    $res = mysqli_query($con, "select * from ratings ");
                    while($row = mysqli_fetch_array($res)){
                        echo '<form class="card_ratings" method="POST"  action="parts.php" >';
                        
                        echo '<h3 class="title_card">'.$row["title"].'</h3>';
                        echo '<div class="percent_btn">';
                        echo '<div class="percent_card">';
                        echo '<h4 class="percent_num">'.$row['percent']."%".'<h4>';
                        echo '</div>';
                        echo '<input type="text"  name="num_c" value="'.$row['num_classification'].'" style="display:none;">';
                        echo '<button class="btn_card"  ">Enter</button> </div>';
                        echo '</form>';
                    }
                    ?>