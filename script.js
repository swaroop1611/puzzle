let mflag=0,sflag=0;
// document.getElementById("restartbtn").disabled=true;
let lcol="rgb(76, 120, 150)",dcol="rgb(176, 220, 250)";
function move(b)
{
    let empty=[b+1,b-1,b+4,b-4]
    for(let j=0;j<4;j++)
    {
        if(empty[j]<=16&&empty[j]>0&&sflag==1)
        {
    
            if(document.getElementById(empty[j]).innerHTML=="")
            {
            const e=empty[j];
            let a=document.getElementById(b).innerHTML;
            document.getElementById(b).innerHTML="";
            document.getElementById(b).style.backgroundColor="transparent";
            document.getElementById(e).innerHTML=a;
            document.getElementById(e).style.backgroundColor="rgb(76, 120, 150)" ; 
            break;
            }
            else
            {
                continue;
            }
        }
       
    }
    if(document.getElementById("16").innerHTML=="")
     check();
}

function check()
    {
        let flag=0;
        for(let i=1;i<=15;i++)
        {
            let txt=document.getElementById(i).innerHTML;
            if(txt==i)
            {
                flag=flag+1;
            }
        }
        if(flag==15)
        {
            alert("Congratulation!!  solved succesfully");
        }
        else{
            
        }
    }
    


function randomnum()
{
    sflag=1;
    let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    document.getElementById("restartbtn").disabled=false;
    document.getElementById("startbtn").disabled=true;
    document.getElementById("16").style.backgroundColor="transparent";
    for(let i=1;i<16;i++)
    {
        assign(i,arr.length);
    }   
     
function assign(x,y)
{
    let num=Math.floor(Math.random()*y)
    document.getElementById(x).innerHTML=arr[num];
    arr.splice(num,1);
}}




function restart()
{
    sflag=0;
    for(let i=1;i<=16;i++)
    {
        document.getElementById(i).innerHTML="";
        document.getElementById(i).style.backgroundColor="rgb(76, 120, 150)" ;

    }
    document.getElementById("startbtn").disabled=false;
    document.getElementById("restartbtn").disabled=true;

    

}


function mode()
{

    if(mflag==0)
    {
    mflag=1;
    document.getElementById("body").style.backgroundColor="black";
    document.getElementById("body").style.animation="bdmode 0.5s linear forwards";
    document.getElementById("mode").style.animation="btdmode 0.5s linear forwards";
    document.getElementById("mode").style.color="Black";
    document.getElementById("shadow").style.animation="dmode 0.5s linear forwards";
    document.getElementById("shadow").style.backgroundColor="black";
    document.getElementById("startbtn").style.animation="sbtndmode 0.5s linear forwards";
    document.getElementById("restartbtn").style.animation="sbtndmode 0.5s linear forwards";
    let a=document.getElementById("tab");
    let i = 0;
   for(i;i<=16;i++)
   {
   let b=a.getElementsByTagName("td")[i];
     b.style.animation="tddmode 0.5s linear forwards";
   }
    
}
    else if(mflag==1)
    {
        document.getElementById("body").style.backgroundColor="white";
        document.getElementById("body").style.animation="blmode 0.5s linear forwards";
        document.getElementById("mode").style.animation="btlmode 0.5s linear forwards";
        document.getElementById("mode").style.color="black";
        document.getElementById("shadow").style.animation="lmode 0.5s linear forwards";
        document.getElementById("shadow").style.backgroundColor="white";
        document.getElementById("startbtn").style.animation="sbtnlmode 0.5s linear forwards";
        document.getElementById("restartbtn").style.animation="sbtnlmode 0.5s linear forwards";

        mflag=0;
        let a=document.getElementById("tab");
    let i = 0;
   for(i;i<=16;i++)
   {
   let b=a.getElementsByTagName("td")[i];
   b.style.animation="tdlmode 0.5s linear forwards";

   }
    
    }
}