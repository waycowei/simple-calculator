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
var inteFor = 0;                    //被操作数整数部分
var deciFor = 0;                    //被操作数小数部分
var inteLat = 0;                    //操作数整数部分
var deciLat = 0;                    //操作数小数部分
var isimple = 1;                    //简单面板高级面板切换

/**
 *mian function
 */
function main(){
    //simpleCard
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
    $("#4_4").click(function(){getResult()});   //result
    $("#3_4").click(function(){psmd(" +",1)});  //plus
    $("#2_4").click(function(){psmd(" -",2)});  //subt
    $("#1_4").click(function(){psmd(" *",3)});  //muti
    $("#1_3").click(function(){psmd(" /",4)});  //divi
    $("#1_1").click(function(){
        show(".console_old","");
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
        if(temp!=0){
            return;
        }
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
                    }else{
                        console = console+".";
                    }
                    var x = console.substring(console.length-2,console.length-1);
                    var y = console.substring(console.length-3,console.length-2);
                    if(x=="0"&&y=="0"){
                        console = console.substring(0,console.length-3)+"0.";
                    }
                    isdeLat = 1;
                    break;
                default :
                    break;
            }
            show(".console",console);
        }
    });           //point
    $("#1_2").click(function(){
        if(temp!=0){
            show(".console_old",temp);
            show(".console","");
            temp = 0;
            return;
        }else if(sign==0&&stringLast(console)=="."){     //88.
            isdeFor=0;
        }else if(sign!=0&&stringLast(console)=="."){     //88.88+88.
            isdeLat=0;
        }else if(sign==0&&isdeFor==0){                   //8(0)
            if(inteFor==0){
                return;
            }else{
                inteFor=Math.floor(inteFor/10);
            }
        }else if(sign==0&&isdeFor!=0){                   //88.8(88.0)
            timesLow -= 1;
            deciFor = cut(deciFor,1);
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
                deciLat = cut(deciLat,1);
            }
        }
        if(console.length){
            console = console.substring(0, console.length-1);
        }
        show(".console",console);
    });           //back
    $(".button_tran").click(function(){
        if(isimple == 1){
            var  v = '<div class="button" id="4_4">Deg</div><div class="button" id="5_4">Pi</div>';
            show("#1_1","( )");
            show("#1_2","1/X");
            show("#1_3","X²");
            show("#1_4","X³");
            show("#2_1","√y");
            show("#2_2","(√y)^x");
            show("#2_3","y");
            show("#2_4","ln");
            show("#3_1","sin");
            show("#3_2","cos");
            show("#3_3","tan");
            show("#3_4","log");
            show("#4_1","sinh");
            show("#4_2","cosh");
            show("#4_3","tanh");
            show("#5_2","e");
            show("#5_3","e^x");
            show("#4_4",v);
            $("#4_4").attr("style","font-size: 1em;");
            $("#5_4").attr("style","font-size: 1.6em;");
            $("#4_4").css("background","#c0c0c0");

            isimple = 0;
        }else{
            var  v = '<div class="button_big" id="4_4">=</div>';
            show("#1_1","C");
            show("#1_2","B");
            show("#1_3","/");
            show("#1_4","*");
            show("#2_1","7");
            show("#2_2","8");
            show("#2_3","9");
            show("#2_4","-");
            show("#3_1","4");
            show("#3_2","5");
            show("#3_3","6");
            show("#3_4","+");
            show("#4_1","1");
            show("#4_2","2");
            show("#4_3","3");
            show("#5_2","0");
            show("#5_3",".");
            show("#4_4",v);
            $("#4_4").attr("style","font-size: 1em;");
            $("#4_4").css("background","#fc7f44");
            isimple = 1;
        }
    })    //tran

    //complexCard

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
                console = (inteFor+deciFor).toFixed(timesLow);
                timesLow += 1;
            }else{
                if(temp!=0&&sign==0){
                    show(".console_old",temp);
                    temp = 0;
                }
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
    ifTempNonzero();
    if(stringLast(console)=="."){
        return;
    }
    if(sign!=0&&(deciLat+inteLat)!=0){
        getResult();
        show(".console_old",temp);
        ifTempNonzero();
        temp = 0;
    }
    //88.88+0时按+-*/
    if(sign!=0&&deciLat==0&&inteLat==0){
        console = console.substring(0,console.length-2);
    }
    //换符号
    if(stringLast(console)=="+"||stringLast(console)=="-"||stringLast(console)=="*"||stringLast(console)=="/"){
        sign = n;
        console = console.substring(0,console.length-2);
        console = console+s;
        show(".console",console);
    }else{
        //加减乘除主程序
        sign = n;
        console = console+s;
        show(".console",console);
    }
}

/**
 * = 号
 */
function getResult(){
    if(stringLast(console)=="."){
        return;
    }
    if(sign!=0){
        switch (sign){
            case 1:
                console = (inteFor + inteLat + deciFor + deciLat).toFixed(Math.max(timesHig, timesLow) - 1);
                break;
            case 2:
                console = ((inteFor + deciFor) - (inteLat + deciLat)).toFixed(Math.max(timesHig, timesLow) - 1);
                break;
            case 3:
                console = ((inteFor + deciFor) * (inteLat + deciLat)).toString();
                if(console.split(".")[1]!=undefined){
                    if(console.split(".")[1].length>6){
                        console = parseFloat(console).toFixed(6);
                        exactDeci();
                    }else{
                        exactDeci();
                    }
                }
                break;
            case 4:
                console = ((inteFor + deciFor) / (inteLat + deciLat)).toString();
                if(console.split(".")[1]!=undefined){
                    if(console.split(".")[1].length>6){
                        console = parseFloat(console).toFixed(6);
                        exactDeci();
                    }else{
                        exactDeci();
                    }
                }
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
}

/**
 *从后向前截取数字m n位（不算小数点）
 * @param m 数字
 * @param n 位数
 * @returns 截取后的数字
 */
function cut(m,n){
    var x = m.toString();
    var y = x.length;
    var deci = -1;
    if(x.split(".")[1]!=undefined){
        deci = x.split(".")[1].length;
    }
    if(y>n){
        if(deci == -1){
            x = parseInt(m);
        }else{
            if(deci>n){
                //小数
                x = parseFloat(x.substring(0,y-n));
            }else if(deci == n){
                //整数
                x = parseInt(m);
            }else{
                x = parseInt(x.substring(0,y-n-1));
            }
        }
    }else{
        x = 0;
    }
    return x;
}

//判断temp是不是0
function ifTempNonzero(){
    if(parseFloat(temp)!=0){
        if(temp.toString().split(".")[1]!=undefined){           //判断是不是小数
            var m = temp.toString().split(".")[1].length;       //求小数点位数
            timesLow = m+1;
            deciFor = parseFloat((parseFloat(temp)-parseInt(temp)).toFixed(m));
        }
        inteFor=parseInt(temp);
    }
    temp = 0;
    return 1;
}

//舍去结果最后的一大串0
function exactDeci(){
    if(stringLast(console)=="0"){
        console = cut(console,1).toString();
    }
    if(stringLast(console)=="0"){
        exactDeci();
    }
}