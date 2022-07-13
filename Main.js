var lim = 0;
var mil;
function change1(val1,val2){
    lim = 0;
    val1 = document.getElementById('val1').value;
    val2 = document.getElementById('val2').value;
    val1 = Number(val1);
    val2 = Number(val2);
    val1 = val1 || 0;
    val2 = val2 || 0;
    console.log("got it");
    lim = val1*60;
    lim = lim + val2;
    console.log(lim);
    const sec = document.querySelector(".timeSecond1");
    const min = document.querySelector(".timeMinute1");
    var secVal = (lim)%60;
    var minVal = Math.floor((lim)/60);
    if(Math.floor(secVal/10) > 0)
        sec.innerHTML = secVal;
    else
        sec.innerHTML = '0'+String(secVal);
    if(Math.floor(minVal/10) > 0)
        min.innerHTML = minVal;
    else{
        var temp = String('0'+String(minVal));
        console.log(temp);
        min.innerHTML = temp;
    }        
    console.log(lim,"thats how")
}

function change2(val3,val4){
    val3 = document.getElementById('val3').value;
    val4 = document.getElementById('val4').value;
    val3 = Number(val3);
    val4 = Number(val4);
    val3 = val3 || 0;
    val4 = val4 || 0;
    console.log("got it");
    mil = val3*60;
    mil = mil + val4;
    console.log(lim);
    const sec = document.querySelector(".timeSecond2");
    const min = document.querySelector(".timeMinute2");
    var secVal = (mil)%60;
    var minVal = Math.floor((mil)/60);
    if(Math.floor(secVal/10) > 0)
        sec.innerHTML = secVal;
    else
        sec.innerHTML = '0'+String(secVal);
    if(Math.floor(minVal/10) > 0)
        min.innerHTML = minVal;
    else{
        var temp = String('0'+String(minVal));
        console.log(temp);
        min.innerHTML = temp;
    }        

}

function countdown1(){
    clearInterval(cancel);
    const sec = document.querySelector(".timeSecond1");
    const min = document.querySelector(".timeMinute1");
    var value = 0;
    function incrementSeconds() {
        value += 1;
        if(value > lim){
            clearInterval(cancel);
            value = lim;
        }    
        if(pause%2 == 0 && pause != 0){
            clearInterval(cancel);
            lim = lim-value+1;
            return;
        }
        var secVal = (lim-value)%60;
        var minVal = Math.floor((lim-value)/60);
        
        if(Math.floor(secVal/10) > 0)
            sec.innerHTML = secVal;
        else
            sec.innerHTML = '0'+String(secVal);
        if(Math.floor(minVal/10) > 0)
            min.innerHTML = minVal;
        else{
            var temp = String('0'+String(minVal));
            console.log(temp);
            min.innerHTML = temp;
        }             
    }
    var cancel = setInterval(incrementSeconds, 1000);
}

function countdown2(){
    clearInterval(cancel);
    const sec = document.querySelector(".timeSecond2");
    const min = document.querySelector(".timeMinute2");
    var value = 0;
    function incrementSeconds() {
        value += 1;
        if(value > mil){
            clearInterval(cancel);
            value = mil;
        }    
        if(pause%2 == 1 && pause != 0){
            clearInterval(cancel);
            mil = mil-value+1;
            return;
        }
        var secVal = (mil-value)%60;
        var minVal = Math.floor((mil-value)/60);
        
        if(Math.floor(secVal/10) > 0)
            sec.innerHTML = secVal;
        else
            sec.innerHTML = '0'+String(secVal);
        if(Math.floor(minVal/10) > 0)
            min.innerHTML = minVal;
        else{
            var temp = String('0'+String(minVal));
            console.log(temp);
            min.innerHTML = temp;
        }             
    }
    var cancel = setInterval(incrementSeconds, 1000);
}


var pause = 0;


function stop(){
    lim = 0;
    mil = 0;
    pause = 0;
    countdown1();
    countdown2();
}



function aud(){
    
    pause += 1;
    console.log(lim,"how")
    if(pause%2 == 1)
        countdown1();
    else
        countdown2();
    
}


document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if(code != 13 || code!= 32)
        aud();
    // Alert the key name and key code on keydown
    //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);

  function turn(){
    var check = document.querySelector(".turn")
    if(check.value == 1){
        if(pause % 2 != 0)
         pause++;
    }
    else if(check.value == 2){
        if(pause % 2 != 1)
         pause++;
    }
  }