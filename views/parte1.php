<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Martian+Mono&family=Ubuntu:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/css_parte.css">
    <title>index</title>
</head>
<body>
        <center id="container_part1">
            
            <div><input class="word" id='word' placeholder="enter word"></input></span></div>

            <div class="translation">
                <h3 class='translation_word translation_word_an'>Time</h3>
                <h3 class='translation_word translation_word_ar'>وقت</h3>
            </div>
            <div class="translation">
            <h4 class="counter_num"><h4>
            <h4 class="enter">Next<h4>
            </div>
            
            <div class="bar">
                <div class="bar_total" id='bar_total'></div>
            </div>
        </center>
        <center id="container_part2">
            
            <div><h3 class="word word2" class='translation_word_ar2' id='word'></h3></div>

            <div class="translation">
                <div class='div_select'><input id='choice1' type="radio" name="choice" checked=true value="" id=""><label for="" class='translation_word_an1'>Time </label></div>
                <div class='div_select'><input id='choice2' type="radio" name="choice" value="" id=""><label for="" class='translation_word_an2'>وقت</label></div>
                <div class='div_select'><input id='choice3' type="radio" name="choice" value="" id=""><label for="" class='translation_word_an3'>Time</label></div>
      
            </div>
            <div class="translation">
            <h4 class="counter_num counter_num2"><h4>
            <h4 class="enter enter2">Next<h4>
            </div>
            
            <div class="bar">
                <div class="bar_total2" id='bar_total2'></div>
            </div>
        </center>
        <center id='res' >
            <div class="container_res" id="container_res"></div>
        </center>



        <center id="container_part3">
            
            <div><h3 class='translation_word translation_word_ar_p3'>وقت</h3></div>
            <div><h3 class='translation_word translation_word_an_p3'>Time</h3></div>

            <div class="translation">
                <input class="word word3" id='word_p3'></input>
            </div>
            <div class="translation">
            <h4 class="counter_num counter_num3"><h4>
            <h4 class="enter enter3">Next<h4>
            </div>
            
            <div class="bar">
                <div class="bar_total bar_total3" id='bar_total3'></div>
            </div>
        </center>




        <center>
        <div id="container_result">
           <div class="res_p1">
            <h1 class='title_res'>result parte 1:</h1>
            <div class="num_percent"><div class=" num_percent1"></div></div>
           </div>
           <div class="res_p1">
           <h1 class='title_res'>result parte 2:</h1>
           <div class="num_percent"><div class=" num_percent2"></div></div>
           </div>
           <div class="res_p1">
           <h1 class='title_res'>result parte 3:</h1>
           <div  class="num_percent"><div class=" num_percent3"></div></div>
           </div>
        </div>
        
        </center>
        <?php include('../controllers/parte.php'); ?>


<script src="script/script.js"></script>

</body>
</html>

