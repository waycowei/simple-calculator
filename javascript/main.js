/**
 * Created by 凯 on 2015/7/18.
 */

var isdeFor = 0;                    //0：整数 1：小数
var isdeLat = 0;
var sign = 0;                       //0：无操作 1：加 2：减 3：乘 4：除
var timesLow = 1;                   //被操作数小数倍数
var timesHig = 1;                   //操作数小数倍数

var temp = 0;                       //记录上一轮结果
var console = "0";                  //显示当前公式
//var oleConsole = "";                //显示上次公式结果
var inteFor = 0;                    //被操作数整数部分
var deciFor = 0;                    //被操作数小数部分
var inteLat = 0;                    //操作数整数部分
var deciLat = 0;                    //操作数小数部分

//TODO:完成功能：整数加减乘除
//TODO:console得不到被操作数的小数部分

function main(){


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
    $("#3_4").click(function(){psmd(" +",1)});  //plus
    $("#2_4").click(function(){psmd(" -",2)});  //subt
    $("#1_4").click(function(){psmd(" *",3)});  //muti
    $("#1_3").click(function(){psmd(" /",4)});  //divi
    $("#1_1").click(function(){
        if(parseFloat(temp)!=0){
            show(".console_old",temp);
        }
        show(".console","");
        //清除变量
        sign = 0;
        temp = 0;
        inteFor = 0;
        deciFor = 0;
        inteLat = 0;
        deciLat = 0;
        isdeFor = 0;
        isdeLat = 0;
        timesLow = 1;
        timesHig = 1;
        console = "0";
    });           //clear

    $("#5_3").click(function(){
        //TODO:(sign!=0&&isdeLat==0)待检验
        if(isdeFor+sign==0||(sign!=0&&isdeLat==0)){
            switch (sign){
                case 0:
                    console = console+".";
                    isdeFor = 1;
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                    if(inteLat==0){
                        console = console+"0.";
                    }
                    console = console+".";
                    isdeLat = 1;
                    break;
                default :
                    break;
            }
            show(".console",console);
        }
    });           //point

    //back
    $("#1_2").click(function(){
        if(sign==0&&stringLast(console)=="."){           //88.
            alert("dsad")
            isdeFor=0;
        }else if(sign!=0&&stringLast(console)=="."){     //88.88+88.
            isdeLat=0;
        }else if(sign==0&&isdeFor==0){                   //8(0)
            if(inteFor==0){
                return;
            }else{
                inteFor=Math.floor(inteFor/10);
            }
        }else if(sign==0&&isdeFor!=0){                   //88.8(88.0)   TODO ERROR
            timesLow -= 2;
            deciFor = parseFloat(deciFor.toFixed(timesLow));
            timesLow += 1;
            alert(deciFor)
        }else if(sign!=0&&isdeLat==0){                   //88.88+8(0)、88.88+
            if(isdeLat==0){
                inteLat = Math.floor(inteLat/10);
            }
            if(stringLast(console)=="+"||stringLast(console)=="-"||stringLast(console)=="*"||stringLast(console)=="/"){
                sign=0;
            }
        }else if(sign!=0&&isdeLat==1){                   //88.88+88.8(88.0)
            if(stringLast(console)=="."){
                isdeLat=0;
            }else{
                timesHig -= 1;
                deciLat = parseFloat(deciLat.toFixed(timesHig));
            }
        }
        if(console.length){
            console = console.substring(0, console.length-1);
        }
        show(".console",console);
    });

    //result
    $("#4_4").click(function(){
        if(stringLast(console)!="."&&sign!=0) {
            switch (sign) {
                case 1:
                    console = (inteFor + inteLat + deciFor + deciLat).toFixed(Math.max(timesHig, timesLow) - 1);
                    break;
                case 2:
                    console = (inteFor + deciFor).toFixed(timesLow - 1) - (inteLat + deciLat).toFixed(timesHig - 1);
                    break;
                case 3:
                    console = (inteFor + deciFor).toFixed(timesLow - 1) * (inteLat + deciLat).toFixed(timesHig - 1);
                    break;
                case 4:
                    if (parseFloat((inteLat + deciLat).toFixed(timesHig - 1)) == 0) {
                        break;
                    }
                    console = (inteFor + deciFor).toFixed(timesLow - 1) / (inteLat + deciLat).toFixed(timesHig - 1);
                    break;
                default :
                    break;
            }

        }
        temp = console;
        show(".console",console);

        //清除变量
        sign = 0;
        inteFor = 0;
        deciFor = 0;
        inteLat = 0;
        deciLat = 0;
        isdeFor = 0;
        isdeLat = 0;
        timesLow = 1;
        timesHig = 1;

    });
}

//显示结果
function show(s,m){
    $(s).text("");
    $(s).append(m);
}

//get the last char
function stringLast(s){
    return s.substring(s.length-1,s.length);
}

//add num
function add(s,n){
    if(isdeLat){
        //操作数的小数部分
        deciLat = deciLat+n*(parseFloat(Math.pow(0.1,timesHig).toFixed(timesHig)));
        console = (inteFor+deciFor).toFixed(timesLow-1)+s+(inteLat+deciLat).toFixed(timesHig);
        timesHig += 1;
    }else{
        //操作数的整数部分
        inteLat = inteLat*10+n;
        console = (inteFor+deciFor).toString()+s+inteLat.toString();
    }
}

/**
 *  数字按键
 * @param n
 */
function numKey(n){
    switch (sign){
        case 0:
            if(isdeFor){
                //被操作数的小数部分
                deciFor = parseFloat((deciFor+n*Math.pow(0.1,timesLow)).toFixed(timesLow));
                console = (inteFor+deciFor).toString();
                timesLow += 1;
            }else{
                //被操作数的整数部分
                inteFor = inteFor*10+n;
                console = inteFor.toString();
            }
            break;
        case 1:add("+",n);
            break;
        case 2:add("-",n);
            break;
        case 3:add("*",n);
            break;
        case 4:add("/",n);
            break;
        default :
            break;
    }
    show(".console",console);
}

/**
 * 加减乘除
 * @param s
 * @param n
 */
function psmd(s,n){
    if(parseFloat(temp)!=0){
        var n = temp.toString().split(".")[1].length;
        inteFor=parseInt(temp);
        deciFor=parseFloat((parseFloat(temp)-parseInt(temp)).toFixed(n));
    }
    if(sign!=0&&(stringLast(console)!=".")){
        return;
    }
    if(stringLast(console)=="+"||stringLast(console)=="-"||stringLast(console)=="*"||stringLast(console)=="/"){
        sign = n;
        console = console.substring(0,console.length-1);
        console = console+s;
        show(".console",console);
    }else{
        if(sign!=0&&deciLat==0&&inteLat==0){                    //88.88+0时按+-*/
            console = console.substring(0,console.length-2);
        }
        sign = n;
        console = console+s;
        show(".console",console);
    }
}