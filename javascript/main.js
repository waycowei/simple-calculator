/**
 * Created by 凯 on 2015/7/18.
 */

var isdeFor = 0;                    //0：整数 1：小数
var isdeLat = 0;
var sign = 0;                       //0：无操作 1：加 2：减 3：乘 4：除

var temp = 0;                       //记录上一轮结果
var console = "";                   //显示当前公式
var oleConsole = "";                //显示上次公式结果
//var former = 0;                     //被操作数
//var later = 1;                      //操作数
var timesLow = 0.1;                 //小数倍数
var inteFor = 0;                    //被操作数整数部分
var deciFor = 0;                    //被操作数小数部分
var inteLat = 0;                    //操作数整数部分
var deciLat = 0;                    //操作数小数部分



//TODO:点击.重置decimal

$("#5_2").click(function(){

    switch (sign){
        case 0:
            if(!isdeFor){
                inteFor = inteFor*10;
                console = inteFor.toString();
            }else{
                deciFor = deciFor*timesLow;
                timesLow = timesLow*0.1;
                console = (inteFor+deciFor).toString();
            }
        case 1:
            if(!isdeLat){
                inteLat = inteLat*10;
                console = (inteFor+deciFor).concat(" + ".concat(inteLat.toString()));
            }else{
                deciLat = deciLat*timesLow;
                timesLow = timesLow*0.1;
                console = (inteFor+deciFor).concat(" + ".concat((inteLat+inteLat).toString()));
            }
        case 2:
            if(!isdeLat){
                inteLat = inteLat*10;
                console = (inteFor+deciFor).concat(" - ".concat(inteLat.toString()));
            }else{
                deciLat = deciLat*timesLow;
                timesLow = timesLow*0.1;
                console = (inteFor+deciFor).concat(" - ".concat((inteLat+inteLat).toString()));
            }
        case 3:
            if(!isdeLat){
                inteLat = inteLat*10;
                console = (inteFor+deciFor).concat(" * ".concat(inteLat.toString()));
            }else{
                deciLat = deciLat*timesLow;
                timesLow = timesLow*0.1;
                console = (inteFor+deciFor).concat(" * ".concat((inteLat+inteLat).toString()));
            }
        case 4:
            if(!isdeLat){
                inteLat = inteLat*10;
                console = (inteFor+deciFor).concat(" / ".concat(inteLat.toString()));
            }else{
                deciLat = deciLat*timesLow;
                timesLow = timesLow*0.1;
                console = (inteFor+deciFor).concat(" / ".concat((inteLat+inteLat).toString()));
            }
        default :
            break;
    }
    alert("asdsa");
    $(".console").text("");
    $(".console").append(console);
});

$("#5_3").click(function(){

})

$("#1_4").click(function(){
    sign = 3;
    console = "*";
    $(".console").text("");
    $(".console").append(console);
})