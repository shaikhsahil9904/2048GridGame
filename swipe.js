export function swiperight(grid)
{
    for(let i=0;i<grid.length;i++)
    {
        for(let j=1;j<grid[i].length;j++)
        {
            if(grid[i][j]==0)
            {
                for(let k=j;k>0;k--)
                {
                    grid[i][k]=grid[i][k-1];
                    grid[i][k-1]=0;
                }
            }
        }
    }
   
} 




export function swipeleft(grid)
{
    for(let i=0;i<grid.length;i++)
    {
        for(let j=grid.length-2;j>=0;j--)
        {
            if(grid[i][j]==0)
            {
                for(let k=j;k<grid.length-1;k++)
                {
                    grid[i][k] = grid[i][k+1];
                    grid[i][k+1] =0;
                }
            }
        }
    }
  
}

export function swipedown(arr)
{
    for(let i=0;i<arr.length;i++)   //starting from 1 
    {
        for(let j=1;j<arr.length;j++)
        {
            if(arr[j][i]==0)
            {
                for(let k=j;k>0;k--)
                {
                arr[k][i] =arr[k-1][i];
                arr[k-1][i] = 0;
                }
            }
        }   
    }

}



export function swipeup(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=arr.length-2;j>=0;j--)
        {
            if(arr[j][i]==0)
            {
               for(let k=j;k<arr.length-1;k++)
               {
                    arr[k][i] =arr[k+1][i];
                    arr[k+1][i]=0;
               } 
            }
        }
    }
    
}



