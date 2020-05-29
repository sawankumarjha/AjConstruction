
let [i,j]=[0,0];
let str1="Create with the heart build with the mind";
let str2="Many services provide by AjConstruction";


function dateTime(){
    let date =new Date();
    document.getElementById('time').innerHTML=date;
}

setInterval(dateTime,1000)
setInterval(typing,100)
function typing(){
        if(i<str1.length){
            document.getElementById('heading').innerHTML+=str1[i];
            i++;
       }
       else if(j<str2.length)
       {
        document.getElementById('heading2').innerHTML+=str2[j];
        j++;
       }
       else{
        document.getElementById('heading').innerHTML="";
        document.getElementById('heading2').innerHTML="";
        j++;
           i=0;
           j=0;
       }
    
    
}
// typing();