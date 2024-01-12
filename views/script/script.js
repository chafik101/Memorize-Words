

function parte3(){
    var counter = 0;
    var counter_num=15;
    var list_word =[];
    var percent_p3=0;
    var l = 0;
    var bar_percent = 0;
    var xx= "";
    function f_percent_p3(){
        var str_xx = document.getElementById('word_p3').value;
        list_word[l++] =str_xx;
        document.getElementById('word_p3').value=''
        show_word3()
    }
    function show_word3(){
        if(list_word_an.length == counter){

            clearInterval(cont);
            for(let i = 0 ;  i < list_word_an.length ; i++){
                if(list_word[i].toUpperCase() == list_word_an[i].toUpperCase()){
                    percent_p3 +=100/list_word_an.length;
                }
            }
            document.querySelector('.num_percent3').innerHTML=percent_p3.toFixed(0)
            console.log(list_word);
            console.log(percent_p3);
            document.getElementById('container_part3').style.display="none";
            document.getElementById('container_result').style.display="grid";

            var last_res = (Number(document.querySelector(".num_percent1").innerHTML)+Number(document.querySelector(".num_percent2").innerHTML)+Number(document.querySelector(".num_percent3").innerHTML))/3;

            document.querySelector(".res_percent").innerHTML=last_res.toFixed(0)+'%';
            document.getElementById("last_percent").value=last_res.toFixed(0);
            
            document.getElementById('last_res').style.display="block";

        }else{
            var place_word_an = document.querySelector('.translation_word_an_p3');
            var place_word_ar = document.querySelector('.translation_word_ar_p3');
            place_word_an.innerHTML=list_word_an[counter].slice(0,2)+"<span class='xx'>XX</span>"+list_word_an[counter].slice(4,list_word_an[counter].length);
            xx = list_word_an[counter].slice(2,4);
            place_word_ar.innerHTML=list_word_ar[counter];
            counter++ ;
            counter_num=15;
            bar_percent +=100/list_word_an.length;
            document.querySelector('.bar_total3').innerHTML=bar_percent.toFixed(0);
            document.getElementById('bar_total3').style.width=bar_percent+'%';
        }};
         if(list_word_an.length == counter){
         }else{
            var cont = setInterval(counter_f,1000);
            function counter_f(){
                if(counter_num == 0){
                    f_percent_p3()
                }
                document.querySelector('.counter_num3').innerHTML=(counter_num--)+'S';
         } 
    }     
    show_word3()
    var btn =  document.querySelector('.enter3');
    btn.addEventListener('click',f_percent_p3);
    document.querySelector('.word3').addEventListener('keydown',(event)=>{
        if(event.key === 'Enter')
        f_percent_p3()
    })
}

























function parte2(){
    var counter = 0
    var counter_num=15
    var list_choice = []
    var c = 0
    var percent_p2 = 0
    var bar_percent2=0
    var btn =  document.querySelector('.enter2')
    function choice(){
        var choice = document.querySelector('input[name = choice]:checked').value;
        console.log(choice)
        list_choice[c++]=choice
    }
    function show_word2(){
        if(list_word_an.length == counter){
      
            clearInterval(cont)
            console.log(list_choice)
            document.getElementById('res').style.display="grid"
            document.getElementById('container_part2').style.display="none"
            

            var ul = document.createElement('ul')
            var res = document.getElementById('container_res')
            for (let i = 0 ; i<list_word_an.length ; i++){
              if (list_choice[i]==list_word_an[i]){
                percent_p2 +=100/list_word_an.length
              }
              document.querySelector('.num_percent2').innerHTML=percent_p2.toFixed(0)
              var li = document.createElement('li')
              let txt = document.createTextNode(list_choice[i]+'/'+list_word_an[i]+"=="+list_word_ar[i])
              var btn_p3  =document.createElement('button')
              btn_p3.appendChild(document.createTextNode("Next"))
              btn_p3.className="btn_p3"
              li.appendChild(txt)
              
              ul.appendChild(li)
              if(list_choice[i]==list_word_an[i]){
                li.className='res_true'
                
              }else{
                li.className='res_false'
                
              }
            }
            li.appendChild(btn_p3)
            res.appendChild(ul)
            var res_p2 = document.getElementById('res')
            
            btn_p3.addEventListener("click",function() {
                res_p2.style.display="none"
                document.getElementById("container_part3").style.display="block"
                parte3()
            })
       
            
        }else{
            counter_num = 15
            var place_word_an1 = document.querySelector('.translation_word_an1')
            var place_word_an2 = document.querySelector('.translation_word_an2')
            var place_word_an3 = document.querySelector('.translation_word_an3')
            var place_word_ar2 = document.querySelector('.word2')

            var choice1 = document.getElementById('choice1')
            var choice2 = document.getElementById('choice2')
            var choice3 = document.getElementById('choice3')

            var len_list = list_word_an.length-1
            var ran_word = Math.floor(Math.random()*(0,len_list+1))
            var ran_word2 = Math.floor(Math.random()*(0,len_list+1))
            while(ran_word == ran_word2){
                ran_word = Math.floor(Math.random()*(0,len_list+1))
            }
            place_word_ar2.innerHTML=list_word_ar[counter]
            place_word_an1.innerHTML=list_word_an[counter]
            place_word_an2.innerHTML=list_word_an[ran_word]
            place_word_an3.innerHTML=list_word_an[ran_word2]

            choice1.value = list_word_an[counter]
            choice2.value = list_word_an[ran_word]
            choice3.value = list_word_an[ran_word2]

            place_word_an1.htmlFor=list_word_an[counter]
            place_word_an2.htmlFor =list_word_an[ran_word]
            place_word_an3.htmlFor =list_word_an[ran_word2]
            counter++

            bar_percent2 +=100/list_word_an.length
            document.querySelector('.bar_total2').innerHTML=bar_percent2.toFixed(0)
            document.getElementById('bar_total2').style.width=bar_percent2+'%'
        
        }
          
            
    
    }
    

     
//counter time
         if(list_word_an.length == counter){
        }else{
            var cont = setInterval(counter_f,1000)
             function counter_f(){
                if(counter_num == 0){
                    choice()
                    setTimeout(() => {
                        show_word2()
                   }, 20);
                }
                document.querySelector('.counter_num2').innerHTML=(counter_num--)+'S'
            } 
    }     
    show_word2()
    btn.addEventListener('click',choice)
    btn.addEventListener('click',f)

   

    function f(){
        setTimeout(() => {
             show_word2()
        }, 20);
    }
    
}







function parte1(){
   
    var counter = 0
    var counter_num=15
    var list_word =[]
    var l = 0
    var bar_percent = 0
    function show_word(){
// collect list word
        if(counter!=0){
            list_word[l] =document.querySelector('.word').value
            l++
       }
        if(list_word_an.length == counter){
         
            clearInterval(cont)
//verification num percent
            var percent = 0
            document.getElementById('container_part1').style.display="none"
            document.getElementById('container_part2').style.display="block"
            parte2()
            for(let i = 0 ; i < list_word_an.length ;i++ ){  
            if(list_word[i].toUpperCase()==list_word_an[i].toUpperCase()){
                percent +=100/list_word_an.length
          
            }
            document.querySelector('.num_percent1').innerHTML=percent.toFixed(0)
            }
        }else{
            var place_word_an = document.querySelector('.translation_word_an')
            var place_word_ar = document.querySelector('.translation_word_ar')
            place_word_an.innerHTML=list_word_an[counter]
            place_word_ar.innerHTML=list_word_ar[counter]
           document.querySelector('.word').value=""
           counter++ 
           counter_num=15
           bar_percent +=100/list_word_an.length
           document.querySelector('.bar_total').innerHTML=bar_percent.toFixed(0)
           document.getElementById('bar_total').style.width=bar_percent+'%'
        }}
//counter time
         if(list_word_an.length == counter){
        }else{
            var cont = setInterval(counter_f,1000)
             function counter_f(){
                if(counter_num == 0){
                   show_word()
                   }
                document.querySelector('.counter_num').innerHTML=(counter_num--)+'S'
        } 
        
    }     
    show_word() 
    
    var btn =  document.querySelector('.enter')
    btn.addEventListener('click',show_word)

   document.querySelector('.word').addEventListener('keydown',(event)=>{
            if(event.key === 'Enter')
            show_word()
        })
}
parte1()





