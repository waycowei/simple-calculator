/**
 * Created by �� on 2015/7/18.
 */

var isdeFor = 0;                    //0������ 1��С��
var isdeLat = 0;
var sign = 0;                       //0���޲��� 1���� 2���� 3���� 4����
var timesLow = 1;                   //��������С������
var timesHig = 1;                   //������С������

var temp = 0;                       //��¼��һ�ֽ��
var console = "0";                  //��ʾ��ǰ��ʽ
var oleConsole = "";                //��ʾ�ϴι�ʽ���
var inteFor = 0;                    //����������������
var deciFor = 0;                    //��������С������
var inteLat = 0;                    //��������������
var deciLat = 0;                    //������С������

//��ʾ���
function show(s){
    $(s).text("");
    $(s).append(console);
}

function stringLast(s){
    return s.substring(s.length-1,s.length);
}

function add(s){
    if(isdeLat){
        //��������С������
        deciLat = deciLat+n*(Math.pow(0.1,timesHig).toFixed(timesHig));
        timesHig += 1;
        console = (inteFor+deciFor).toString()+s+(inteLat+deciLat).toString();
    }else{
        //����������������
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
                //����������С������
                deciFor = deciFor+n*(Math.pow(0.1,timesLow).toFixed(timesLow));
                console = (inteFor+deciFor).toFixed(timesLow).toString();
                timesLow += 1;
            }else{
                //������������������
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

/**
 * �Ӽ��˳�
 * @param s
 * @param n
 */
function psmd(s,n){
    if(stringLast(console)=="+"||stringLast(console)=="-"||stringLast(console)=="*"||stringLast(console)=="/"){
        sign = n;
        console = console.substring(0,console.length-1);
        console = console+s;
        show(console);
    }else{
        sign = n;
        console = console+s;
        show(console);
    }
}

//clear
$("#1_1").click(function(){
    if(temp){
        oleConsole = temp;
        $(".console_old").text("");
        $(".console_old").append(oleConsole);
    }
    console="";
    $(".console").text("");
    $(".console").append(console);
    inteFor = 0;
    deciFor = 0;
    inteLat = 0;
    deciLat = 0;
    isdeFor = 0;
    isdeLat = 0;
    sign = 0;
    timesLow = 1;
    timesHig = 1;
    temp = 0;
});

//back
$("#1_2").click(function(){
    //TODO:дBACK
    if(sign==0&&stringLast(console)=="."){           //88.
        isdeFor=0;
    }else if(sign!=0&&stringLast(console)=="."){     //88.88+88.
        isdeLat=0;
    }else if(true){     //8(0)

    }else if(true){     //88.8(88.0)

    }else if(true){     //88.88+8(0)��88.88+

    }else if(true){     //88.88+88.8(88.0)

    }
    if(console.length){
        console = console.substring(0, console.length-1);
    }
    $(".console").text("");
    $(".console").append(console);

})

//point
$("#5_3").click(function(){
    //TODO:(sign!=0&&isdeLat==0)������
    if(isdeFor+sign==0||sign!=0&&isdeLat==0){
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
    }
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
$("#3_4").click(function(){psmd("+",1)});   //plus
$("#2_4").click(function(){psmd("-",2)});   //subt
$("#1_4").click(function(){psmd("*",3)});   //muti
$("#1_3").click(function(){psmd("/",4)});   //divi

