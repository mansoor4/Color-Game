var h1=document.querySelector("#rgb_change")
var r;
var g;
var b;
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var main=document.querySelector("#main");
var click_easy=0;
var click_hard=0;
var header=document.querySelector("#header");
var li1=document.querySelector("#nav li:nth-child(1)");
var li2=document.querySelector("#nav li:nth-child(2)");
var chance_easy;
var chance_hard;
var win_easy=false;
var win_hard=false;
var congrats=new Audio();
var try_again=new Audio();
congrats.src="congratulation.MP3";
try_again.src="try_again.MP3"
function rgb()
{
     r=Math.floor(Math.random()*254);
     g=Math.floor(Math.random()*254);
     b=Math.floor(Math.random()*254);
    h1.innerHTML=`RGB(${r},${g},${b})`;
}
easy.addEventListener("click",easy_function);
function easy_function()
{
    click_easy+=1;
    if(click_easy==1)
    {
    win_easy=false;
    chance_easy=1;
    li2.innerHTML="";
    li1.innerHTML="PLAYING CHANCE:<span>1</span>"
    header.style="none";
    click_hard=0;
     rgb();
    hard.style="none";
    easy.style="background-color:rgb(4, 74, 165); color:white";
    main.innerHTML=`<div id="row1">
                   <div></div>
                   <div></div>
                   <div></div>
                  </div>`
     let div=document.querySelectorAll("#row1 div");
     for(let i=0;i<div.length;i++)
     {
       let r1=Math.floor(Math.random()*254);
       let g1=Math.floor(Math.random()*254);
       let b1=Math.floor(Math.random()*254);
       div[i].style.backgroundColor=`rgb(${r1},${g1},${b1})`
     }  
     let random=Math.floor(Math.random()*3);
     if(random==3)
     {
         random--;
     }
     div[random].style.backgroundColor=`rgb(${r},${g},${b})`
     div[random].id="win";
     for(let i=0;i<div.length;i++)
     {
         div[i].addEventListener("click",function()
         {
             let THIS=this;
             if(chance_easy!==0)
             {
             if(this===div[random])         
             {
                $("#row1 div").not(this).animate({opacity:"0"},"2500");
                header.style.backgroundColor=`rgb(${r},${g},${b})`;
                li1.innerHTML="CONGRATS!";
                congrats.play();
                li2.innerHTML="TRY AGAIN"
                win_easy=true;
                li2.addEventListener("click", function()
                {
                    rgb();
                    li2.innerHTML="";
                    click_easy=0;
                    win_easy=false;
                    easy_function();
                });
             }
             else
             {
                 $(this).animate({opacity:"0"},"slow");
             }
             if(!win_easy)
             {
             chance_easy--;
             li1.querySelector("span").innerHTML=chance_easy;
             if(chance_easy==0)
             {
                 li1.innerHTML="OOPS.. FAIL!";
                 li2.innerHTML="TRY AGAIN"
                 try_again.play();
                 $("#row1 div").not('div[id="win"]').animate({opacity:"0"},"2500");
                header.style.backgroundColor=`rgb(${r},${g},${b})`;
                li2.addEventListener("click", function()
                {
                    rgb();
                    click_easy=0;
                    li2.innerHTML="";
                    easy_function();
                });
             }
            }
        }
         })
     }     
    }
}
hard.addEventListener("click",hard_function)
function hard_function()
{
    click_hard+=1;
    if(click_hard===1)
    {
     win_hard=false;
    chance_hard=2;
    li2.innerHTML="";
    click_easy=0;
    li1.innerHTML="PLAYING CHANCE:<span>2</span>"
    header.style="none";
    rgb();
    easy.style="none";
    hard.style="background-color:rgb(4, 74, 165); color:white"
    main.innerHTML=`
                   <div id="row1">
                   <div></div>
                   <div></div>
                   <div></div>
                  </div>
                  <div id="row2">
                  <div></div>
                  <div></div>
                  <div></div>
                 </div>`
     let div=document.querySelectorAll("#row1 div,#row2 div");
     for(let i=0;i<div.length;i++)
     {
       let r1=Math.floor(Math.random()*254);
       let g1=Math.floor(Math.random()*254);
       let b1=Math.floor(Math.random()*254);
       div[i].style.backgroundColor=`rgb(${r1},${g1},${b1})`
     }   
     let random=Math.floor(Math.random()*6);
     if(random==6)
     {
         random--;
     }
     div[random].style.backgroundColor=`rgb(${r},${g},${b})`;
     div[random].id="win";
     for(let i=0;i<div.length;i++)
     {
         div[i].addEventListener("click",function()
         {
             let THIS=this;
             if(chance_hard!==0)
             {
             if(this===div[random])
             {
                 $("#row1 div,#row2 div").not(this).animate({opacity:"0"},"2500");
                header.style.backgroundColor=`rgb(${r},${g},${b})`;
                li1.innerHTML="CONGRATS!";
                congrats.play();
                li2.innerHTML="TRY AGAIN"
                win_hard=true;
                li2.addEventListener("click",function()
                {
                    rgb();
                    win_hard=false;
                    click_hard=0;
                    this.innerHTML="";
                    hard_function();
                })
             }
             else
             {
                $(this).animate({opacity:"0"},"slow");
             }
             if(!win_hard)
             {
             chance_hard--;
             li1.querySelector("span").innerHTML=chance_hard;
             if(chance_hard==0)
             {
                li1.innerHTML="OOPS.. FAIL!";
                 li2.innerHTML="TRY AGAIN"
                 try_again.play();
                $("#row1 div,#row2 div").not('div[id="win"]').animate({opacity:"0"},"2500");
                header.style.backgroundColor=`rgb(${r},${g},${b})`;
                li2.addEventListener("click", function()
                {
                    rgb();
                    li2.innerHTML="";
                    click_hard=0;
                    hard_function();
                });
             }

            }
        }
         })
     }     
    }
}