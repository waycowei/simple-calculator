/**
 * Created by �� on 2015/7/18.
 */

var isdeFor = 0;                    //0������ 1��С��
var isdeLat = 0;
var sign = 0;                       //0���޲��� 1���� 2���� 3���� 4����

var temp = 0;                       //��¼��һ�ֽ��
var console = "";                   //��ʾ��ǰ��ʽ
var oleConsole = "";                //��ʾ�ϴι�ʽ���
//var former = 0;                     //��������
//var later = 1;                      //������
var timesLow = 0.1;                 //С������
var inteFor = 0;                    //����������������
var deciFor = 0;                    //��������С������
var inteLat = 0;                    //��������������
var deciLat = 0;                    //������С������



//TODO:���.����decimal

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