// function rotele(){
//     document.getElementById("dream").style.transform="rotateY(360deg)";
    
// }
// while(1){

//CREATIVE PRODUCT CARD UI CSS
//PARALLAX EFFECT
///WAVY TEXT ANIMATIONSRESPONSIVE CARD GUIs


setInterval(function rotele(){
    document.getElementById("dream").style.transform="rotateY(360deg)";
    
},2000);
// }
setInterval(function rotele(){
    document.getElementById("dream").style.transform="none";
    
},5000);



function signuppage(){
    document.getElementById("sign").click();
}

function randomColor(){
    var randomColor=new Array();
    randomColor[0]="45deg,#0063FF,#8734"
    randomColor[0]="45deg,#0067FF,#8734"



    var num=Math.floor(Math.random()*randomColor.length);
    document.getElementById("sectionimage").style.background="randomColor[num]";
    
    document.getElementById("maindiv").style.background="randomColor[num]";
    
    document.getElementById("maindream").style.background="randomColor[num]";
}
setInterval(function randomColor(){
    var randomColor=new Array();
    randomColor[0]="linear-gradient(45deg,#fff,#874834)"
    randomColor[1]="linear-gradient(45deg,#006792FF,#fff)"
    randomColor[2]="linear-gradient(45deg,#9AFEFf,#fff)"
    randomColor[3]="linear-gradient(45deg,#648382,#E3E4EF)"



    var num=Math.floor(Math.random()*randomColor.length);
    document.getElementById("sectionimage").style.background=randomColor[num];
    
    document.getElementById("maindiv").style.background=randomColor[num];
    
    document.getElementById("maindream").style.background=randomColor[num];
},2000)