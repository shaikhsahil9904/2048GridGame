import {swiperight,swipeleft,swipeup,swipedown} from './swipe.js';


export function sumright(arr,num)
{
     for(let i=arr.length-1;i>0;i--)
     {
         for(let j=0;j<arr.length;j++)
         {
            if(arr[j][i])  //if the value is not zero
            {
                if(arr[j][i]==arr[j][i-1]) //if the values are equal 
                {
                    arr[j][i]+=arr[j][i-1]; //adding the values
                    arr[j][i-1]=0  //after adding values giving the value 0 
                    num.score+=arr[j][i];
                   
                }
            }
         }
         
     }
     swiperight(arr); //call shift right to shift values to the right after changes due to addition 
}



export function sumleft(arr,num)
{

    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=0;j<arr.length;j++)
        {   if(arr[j][i]) //it the value is not zero
            {
                if(arr[j][i]==arr[j][i+1])    
                {
                    arr[j][i] +=arr[j][i+1];
                    arr[j][i+1] =0;
                    num.score +=arr[j][i];
                  
                    

                }
            }
            
        }
       
    }
    swipeleft(arr); //function here to shift values to left because after adding the value is set to zero 
}



export function sumdown(arr,num)
{
    for(let i=arr.length-1;i>0;i--)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i][j])
            {
                if(arr[i][j]==arr[i-1][j])
                {
                    arr[i][j] += arr[i-1][j]
                    arr[i-1][j]=0;
                    num.score +=arr[i][j];
                    

                }
            }
        }
        //call sumdown function here      
    }
    swipedown(arr);
}



export function sumup(arr,num)
{
    for(let i=0;i<arr.length-1;i++)  //-1 because last row is not checked
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i][j])
            {
                if(arr[i][j]==arr[i+1][j])
                {
                    arr[i][j]+=arr[i+1][j];
                    arr[i+1][j] =0;
                    num.score +=arr[i][j];
                   

                }
            }
        }
        //call shiftup function here 
    }
    swipeup(arr);
}


