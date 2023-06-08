import {swiperight,swipeleft,swipeup,swipedown} from './swipe.js';
import {sumright,sumleft,sumup,sumdown} from './sum.js';
import {colorsetter} from './color.js';

let  button = document.getElementsByClassName("box"); //button is storing all the div array
let h1 = document.getElementById("score"); //current score;
let hs = document.getElementById("hscore");// high score

let newgame = document.getElementById("newgame");  //new game button
let overlay = document.getElementById("overlay");

newgame.addEventListener("click",function(){ //if the newgame is pressed the i relod the game
        location.reload();
});

let grid=[
    [0,0,0,0],   //2d array 
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]

];
  let num = {score:0}; //current score

  var score2 =0;

function gamestart(board)  //to start the game with 2 random num 2 or 4
 {
     let r = Math.floor(Math.random() * 4);  //generated a random row
     let c =Math.floor(Math.random() * 4);   //generated a random column
     if(board[r][c])   //if there is value this will turn into truthy 
     {
         gamestart(board);  //there is a recursive call
     }
     else
     {
     board[r][c] =(Math.random()>0.5)? 2 :4;   //2 or 4 value is written on board
     //to update score
     }
}

gamestart(grid);
gamestart(grid);
fill(grid,button); //to reflects changes in html
localstore();  //to display high score

window.addEventListener("keydown",listening); //listening to key events

function listening(e) //it receives a object
{
    if(e.keyCode>=37 && e.keyCode<=40) //if it is a valid move
    { 
        let oldstate =[
        [...grid[0]],       //spread operator to create a copy of grid by value
        [...grid[1]],
        [...grid[2]],
        [...grid[3]]
    ];
       if(e.keyCode==37) //left  
       {
            swipeleft(grid);
            sumleft(grid,num);
       }
       else if(e.keyCode==38) //up
       {
            swipeup(grid);
            sumup(grid,num);
       }
       else if(e.keyCode==39) //right
       {
            swiperight(grid);
            sumright(grid,num);
       }
       else if(e.keyCode==40)  //down
        {
            swipedown(grid);
            sumdown(grid,num);
        }

                if(toputnewvalueornot(oldstate,grid)) //if the state changes true
                {
                    find(grid); //add a number 2 or 4 at a random place
                    fill(grid,button); //to reflect changes on board
                    localstore(); // to check new high score is achieved
                }
                 if(!(checkgameover_row(grid)||checkgameover_col(grid)||checkgameover_num(grid)))
                {   
                   
                    
                    overlay.style.display="block";
                    overlay.addEventListener("click",function(){
                        overlay.style.display="none";
                        location.reload();
                    });
                }
                

    }
}

function fill(arr,but)   //it reflects changes to html board
{   
   h1.innerHTML=num.score;
    let g=0;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i][j])  //if the value is not zero;
            {
            but[g].innerHTML =arr[i][j];
            }
            else
            {
            but[g].innerHTML ="";
            but[g].style.backgroundColor="#F4F0F0";
            }
            colorsetter(g,arr[i][j],button);

            g++;
        }
    }
}




function find(arr) //looks for blank spaces to put random number 2 or 4
{   
    var newarr = Array();  
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i][j]==0)
            {
                newarr.push({row : i,col : j});
            }
        }
    }
    if(newarr.length>0)
    {
        var temp =(Math.random()>0.5) ? 2 : 4;
        var t = newarr[ Math.floor(Math.random() * newarr.length)];
        arr[t.row][t.col] =temp;
       
        
    }
}

function toputnewvalueornot(oldarr,newarr) 
{
    for(let i=0;i<oldarr.length;i++)
    {
        for(let j=0;j<oldarr.length;j++)
        {
            if(oldarr[i][j]!=newarr[i][j])
            return true 
        }
    }
    return false;   //if there is no change in old arr so no value will be iserted;
} 

function checkgameover_row(arr) //row checker  //this function is called when there is no space
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length-1;j++)
        {
            if(arr[i][j]==arr[i][j+1])
            return true;               //if there is a move present for left or right 
        }
    }   
    return false; //if there is no move present for left or right
}

function checkgameover_col(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i][j]==arr[i+1][j])
            return true;             //there is valid move present
        }
    }   
        return false;        //there is no valid move present
}

function checkgameover_num(arr)
{   
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i][j]==0)
            return true; 
        }
    }
    return false;
}


function localstore()
{
    if(!localStorage.getItem('highscore'))
    {
        localStorage.setItem('highscore',0);
        hs.innerHTML =num.score;
    }
    else
    {
        if(num.score>localStorage.getItem('highscore'))
        {
            localStorage.setItem('highscore',num.score);
            hs.innerHTML =num.score;

        }
        hs.innerHTML =localStorage.getItem('highscore');
    }
}
//if new game button is pressed