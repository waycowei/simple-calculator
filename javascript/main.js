/**
 * Created by 凯 on 2015/7/18.
 */

var isdeFor = 0;                    //0：整数 1：小数
var isdeLat = 0;
var sign = 0;                       //0：无操作 1：加 2：减 3：乘 4：除
var timesLow = 1;                   //被操作数小数倍数
var timesHig = 1;                   //操作数小数倍数

var temp = 0;                       //记录上一轮结果
var console = "0";                   //显示当前公式
var oleConsole = "";                //显示上次公式结果
var inteFor = 0;                    //被操作数整数部分
var deciFor = 0;                    //被操作数小数部分
var inteLat = 0;                    //操作数整数部分
var deciLat = 0;                    //操作数小数部分

//TODO:写BACK
//TODO:写加减乘除

//显示结果
function show(s){
    $(s).text("");
    $(s).append(console);
}

function add(s){
    if(isdeLat){
        //操作数的小数部分
        deciLat = deciLat+n*(Math.pow(0.1,timesHig).toFixed(timesHig));
        timesHig += 1;
        console = (inteFor+deciFor).toString()+s+(inteLat+deciLat).toString();
    }else{
        //操作数的整数部分
        inteLat = inteLat*10+n;
        console = (inteFor+deciFor).toString()+s+inteLat.toString();
    }
}

/**
 *
 * @param n
 */
function numKey(n){
    switch (sign){
        case 0:
            if(isdeFor){
                //被操作数的小数部分
                deciFor = deciFor+n*(Math.pow(0.1,timesLow).toFixed(timesLow));
                console = (inteFor+deciFor).toFixed(timesLow).toString();
                timesLow += 1;
            }else{
                //被操作数的整数部分
                inteFor = inteFor*10+n;
                console = inteFor.toString();
            }
            break;
        case 1:
            add("+");
            break;
        case 2:
            add("-");
            break;
        case 3:
            add("*");
            break;
        case 4:
            add("/");
            break;
        default :
            break;
    }
    show(".console");
}



//clear
$("#1_1").click(function(){
    console="";
    $(".console").text("");
    $(".console").append(console);
    inteFor = 0;
    deciFor = 0;
    inteLat = 0;
    deciLat = 0;
});

//back
$("#1_2").click(function(){
    if(console.length){
        console = console.substring(0, console.length-1);
    }
    $(".console").text("");
    $(".console").append(console);
})

//point
$("#5_3").click(function(){
    console.substring(0,console.length);
    switch (sign){
        case 0:
            console = console+".";
            isdeFor = 1;
            break;
        case 1,2,3,4:
            console = console+".";
            isdeLat = 1;
            break;
        default :
            break;
    }
    show(".console");
})

$("#5_2").click(function(){numKey(0);});    //0
$("#4_1").click(function(){numKey(1);});    //1
$("#4_2").click(function(){numKey(2);});    //2
$("#4_3").click(function(){numKey(3);});    //3
$("#3_1").click(function(){numKey(4);});    //4
$("#3_2").click(function(){numKey(5);});    //5
$("#3_3").click(function(){numKey(6);});    //6
$("#2_1").click(function(){numKey(7);});    //7
$("#2_2").click(function(){numKey(8);});    //8
$("#2_3").click(function(){numKey(9);});    //9

//muti
$("#1_4").click(function(){
    sign = 3;
    console = console+"*"
    $(".console").text("");
    $(".console").append(console);
})

