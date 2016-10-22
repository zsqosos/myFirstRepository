/*
 * Created by MEMEME on 2016/10/20.
 */
var aBtn=document.getElementsByTagName("a");
window.onload= function () {
    aBtn[2].onclick=function(){
        changeText();
        changeColor();
        //gradient();
    };
    for (var i=0; i<aBtn.length; i++ ){
        aBtn[i].onmouseover=colorDodge;
        aBtn[i].onmouseout=originalColor;
    }
}

function changeText () {
    var aSpan=document.getElementsByTagName("span");
    var num=parseInt(Math.random()*6);
    switch (num) {
        case 0:
            aSpan[0].innerHTML = "人生就像一盒巧克力，你永远不知道下一块会是什么味道。";
            aSpan[1].innerHTML = "——《阿甘正传》";
            break;
        case 1:
            aSpan[0].innerHTML = "生命可以归结为一种简单的选择：要么忙于生存，要么赶着去死。";
            aSpan[1].innerHTML = "——《肖申克的救赎》";
            break;
        case 2:
            aSpan[0].innerHTML = "我们在这里不是因为我们自由,我们在这里是因为我们不自由。";
            aSpan[1].innerHTML = "——《黑客帝国》";
            break;
        case 3:
            aSpan[0].innerHTML = "总有一天，我的生命将抵达终点，而你，将加冕为王！ ";
            aSpan[1].innerHTML = "——《魔兽世界》";
            break;
        case 4:
            aSpan[0].innerHTML = "人生本就是苦还是只有童年苦？”“生命就是如此。”";
            aSpan[1].innerHTML = "——《这个杀手不太冷》";
            break;
        case 5:
            aSpan[0].innerHTML = "这张面具之下不止是肉体，这张面具之下是一种思想，而思想是不怕子弹的。";
            aSpan[1].innerHTML = "—— 《V字仇杀队》";
            break;
    }
}

function changeColor(){
    var aBody=document.getElementsByTagName('body');
    var color=randomColor();
    aBody[0].style.color=color;
    //console.log(aBody[0]);
    aBody[0].style.background=color;
    for(var i=0; i<aBtn.length; i++){
        aBtn[i].style.background=color;
    }
}

function randomColor(){
    var num=parseInt(Math.random()*6);
    var color='';
    switch (num){
        case 0:
            color="#999";
            break;
        case 1:
            color="#c75";
            break;
        case 2:
            color="#57c";
            break;
        case 3:
            color="#505";
            break;
        case 4:
            color="#099";
            break;
        case 5:
            color='#7c5';
            break;
    }
    return color;
}

function colorDodge(){
    this.style.opacity=0.8;
}

function originalColor(){
    this.style.opacity=1;
}

/*function gradient(){
 var oPassages=document.getElementById('passages');
 var a=100;
 var b=50;
 timer=setInterval(function(){
 var speed=(a-50)/50;
 speed=speed>0?Math.ceil(speed):Math.floor(speed);
 if(a==50){
 clearInterval(timer);
 }
 else {
 a -= speed;
 oPassages.style.opacity = a/100;
 }
 },30);
 timer2=setInterval(function(){
 var speed2=(100-b)/50;
 speed2=speed2>0?Math.ceil(speed2):Math.floor(speed2);
 if(b==100){
 clearInterval(timer2);
 }
 else {
 b += speed2;
 oPassages.style.opacity = b/100;
 }
 },30)
 }*/

function transform(color1,color2){
    var r=0;
    var g=0;
    var b=0;
    var timer=setInterval(function () {
        var speed=(color1-color2)/30;
        if(color1==color2){
            clearInterval(timer);
        }
        else{
            color1+=speed;
        }
    })

}