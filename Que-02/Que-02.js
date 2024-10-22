let array =["lightpink","deeppink","red","green","blue","yellow"];
setInterval(()=>{
    let last_color = array.pop();
    array.unshift(last_color);

    document.getElementById("one").style.backgroundColor = array[0];
    document.getElementById("two").style.backgroundColor = array[1];
    document.getElementById("three").style.backgroundColor = array[2];
    document.getElementById("four").style.backgroundColor = array[3];
    document.getElementById("five").style.backgroundColor = array[4];
    document.getElementById("six").style.backgroundColor = array[5];
},1000);