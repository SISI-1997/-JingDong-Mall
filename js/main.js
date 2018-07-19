/**
 * Created by sansung on 2017/3/23.
 */
window.onload = function(){
    close();//关闭窗口
    city_select();//选择城市
    cateSel();//频道选择
    topNavShow();//顶部导航栏显示
    news();//促销与公告
    rank();//排行榜
    movePic();//图片移动函数
    //cutDown();//倒计时
};
function clean(){
    var key = document.getElementById("key");
    key.value = "";
}
function show(){
    var key = document.getElementById("key");
    key.value = "净化器";
}
//如何做到让窗口关闭有一个过渡的效果
function close(){
    var closeb = document.getElementById("topad_close");
    var topad = document.getElementById("topad");
    closeb.onclick = function (){
        topad.style.display = "none";
    }
}
//选择城市
function city_select(){
    var city_more = document.getElementById("city_more");
    var city      = document.getElementById("city");
    var city_sel = document.getElementsByClassName("dorpdown-layer")[0];
    var city_item = city_more.getElementsByClassName("city_sel");
    var s_city = document.getElementsByClassName("s_city")[0];
    //选择城市
    for(var c = 0; c<city_item.length;c++){
        city_item[c].className = "city_sel";
        city_item[c].onclick = function () {
            this.className = "selected";
            city.innerHTML = this.innerHTML;
        }
    }
    //显示城市选择框
    city_more.onmouseover = function(){
        city_sel.style.display = "block";
        s_city.style.background = "#ffffff";
        s_city.style.border = "1px solid #cccccc";
    };
    //隐藏城市选择框
    city_more.onmouseout = function(){
        city_sel.style.display = "none";
        s_city.style.background = "#e3e4e5";
        s_city.style.border = "1px solid #e3e4e5";
    }
}
//轮播
    var picIndex   = 0;
    var picSrc = ["img/slider-main1.jpg","img/slider-main2.jpg","img/slider-main3.jpg","img/slider-main4.jpg","img/slider-main5.jpg","img/slider-main6.jpg","img/slider-main7.jpg","img/slider-main8.jpg"];
    //图片初始移动函数
    function initMove(){
        var sliderImg = document.getElementsByClassName("slider-item-img")[0];
        var slider_btn = document.getElementsByClassName("slider-xz-btn");
        for( var i = 0;i<picSrc.length;i++){
            slider_btn[i].style.backgroundColor = "#fff";
        }
        sliderImg.src = picSrc[picIndex];
        slider_btn[picIndex ].style.backgroundColor = "#db192a";
    }

    //图片定时播放
    function autoPlay(){
        picIndex++;
        if(picIndex >= picSrc.length){
            picIndex = 0;
        }
        initMove();
    }
    var timer = setInterval(autoPlay,2000);
    //鼠标划过窗口停止计时器
    function slidero(){
        var slider_z   = document.getElementsByClassName("slider-list-ctz")[0];
        var slider_y   = document.getElementsByClassName("slider-list-cty")[0];
        clearInterval(timer);
        slider_z.style.display = "block";
        slider_y.style.display = "block";
    }
    //鼠标移出窗口开始计时器
    function sliderp(){
        var slider_z   = document.getElementsByClassName("slider-list-ctz")[0];
        var slider_y   = document.getElementsByClassName("slider-list-cty")[0];
        timer = setInterval(autoPlay,2000);
        slider_z.style.display = "none";
        slider_y.style.display = "none";
    }

    //图片上翻函数
    function sliderz(){
        clearInterval(timer);
        picIndex--;
        // if语句一定要放在自减后面
        if(picIndex < 0){
            picIndex = picSrc.length-1;
        }
        initMove();
    }
    //图片下翻函数
    function slidery(){
        clearInterval(timer);
        picIndex++;
        // if语句一定要放在自增后面
        if(picIndex == picSrc.length){
            picIndex = 0;
        }
        initMove();
    }
    //圆点选择
    function xz(cur){
        clearInterval(timer);
        picIndex = cur;
        initMove();
    }


//频道选择
function cateSel(){
    var cate_items = document.getElementsByClassName("cate-menu-item");
    var catePop = document.getElementsByClassName("cate-part");
    var catepart = document.getElementsByClassName("cate-pop")[0];
    var cate_menu = document.getElementById("cate_more");
        cate_menu.onmouseover = function(){
            catepart.style.display = "block";
            for(var c= 0; c<cate_items.length;c++){
                cate_items[c].index = c;
                cate_items[c].onmouseover = function(){
                    for(var d = 0;d<catePop.length;d++){
                        catePop[d].style.display = "none";
                    }
                    catePop[this.index].style.display = "block";
                };
            }
        };
        cate_menu.onmouseout = function(){
            catepart.style.display = "none";
        }
}
//顶部菜单的下拉框显示
function topNavShow(){
    var dorpdown = document.getElementsByClassName("dorpdown2");
    //获取下拉框
    var dorpdown_layer = document.getElementsByClassName("dorpdown-layer2");
    //获取改变文字
    var dorpdown_word = document.getElementsByClassName("dorpdown_change");

    for(var d = 0;d<dorpdown.length;d++){
        dorpdown[d].index = d;

        dorpdown[d].onmouseover = function(){
            for( var o = 0 ;o<dorpdown_layer.length;o++){
                dorpdown_layer[o].style.display = "none";
            }
            dorpdown_layer[this.index].style.display = "block";
            dorpdown_word[this.index].style.background = "#ffffff";
            dorpdown_word[this.index].style.border = "1px solid #cccccc";
        };

        dorpdown[d].onmouseout = function(){
            for( var o = 0 ;o<dorpdown_layer.length;o++){
                dorpdown_layer[o].style.display = "none";
            }
            dorpdown_word[this.index].style.background = "#e3e4e5";
            dorpdown_word[this.index].style.border = "1px solid #e3e4e5";
        }
    }
}
var pd = true;
//促销与公告
function news(){
    var news = document.getElementsByClassName("news-list");
    var news_tit = document.getElementsByClassName("news-tit");
    var news_tab = document.getElementsByClassName("news_tab_active")[0];
    for(var n =0; n < news_tit.length;n++){
        news_tit[n].index = n;
        news_tit[n].onmouseover = function(){
            for(var e = 0;e<news.length;e++){
                news[e].style.display = "none";
            }
            news[this.index].style.display = "block";
            if(pd){
                news_tab.style.transform = "translateX(52px)";
                return pd = false;
            }
            else{
                news_tab.style.transform = "translateX(0)";
                return pd = true;
            }
        }
    }
}
//排行榜
function rank(){
    var top_item = document.getElementsByClassName("top-tab-head-item");
    var top_content = document.getElementsByClassName("top-tab-content-item");
    //var news_tab = document.getElementsByClassName("news_tab_active")[0];
    for(var r =0; r < top_item.length;r++){
        top_item[r].index = r;
        top_item[r].onmouseover = function(){
            for(var a = 0;a<top_content.length;a++){
                top_content[a].style.display = "none";
            }
            top_content[this.index].style.display = "block";
        }
    }
}
//图片移动函数
function movePic()
{
    var oUp   = document.getElementsByClassName("list-controlp")[0]; //获取pre控制按钮
    var oDown = document.getElementsByClassName("list-controln")[0];//获取next控制按钮
    var oOtherGoods =document.getElementsByClassName("skcontent-list-item");
    var list_control = document.getElementsByClassName("list-control")[0];
    var skcontent_list = document.getElementsByClassName("skcontent-list")[0];
    var n = oOtherGoods.length;
    var count = 0;//图片位置计数

    skcontent_list.onmouseover = function(){
        list_control.style.display = "block";
    };

    skcontent_list.onmouseout = function(){
        list_control.style.display = "none";
    };
    oUp.onclick = function (){
        if(count+5 < n)
        {
            count+=5;
            for(var i=0;i<n;i++)
            {
                oOtherGoods[i].style.display = 'none';
            }//end for
            var m = count + 5;
            for(var j=count;j<m;j++)
            {
                oOtherGoods[j].style.display = 'block';
            }
        }//end if
    };//end oUp.onclick
    oDown.onclick = function (){
        if(count > 0)
        {
            count-=5;
            for(var i=0;i<n;i++)
            {
                oOtherGoods[i].style.display = 'none';
            }//end for
            var m = count + 5;
            for(var j=count;j<m;j++)
            {
                oOtherGoods[j].style.display = 'block';
            }
        }//end if
    };//end oDown.onclick
}
// 直播轮播
    var liveArr = ["img/live1.jpg","img/live2.jpg","img/live3.jpg","img/live4.jpg","img/live5.jpg"];
    var liveIndex = 0;
    //初始轮播
    function initLive(){
        var live_img = document.getElementById("live_img");
        var live_icon = document.getElementsByClassName("live_array_item");
        for(var l = 0;l<liveArr.length;l++){
            live_icon[l].style.background = "#fff";
        }
        live_img.src= liveArr[liveIndex];
        live_icon[liveIndex].style.background = "#db192a";
    }
    //自动播放
    function autoLive(){
        liveIndex++;
        if(liveIndex >= liveArr.length){
            liveIndex = 0;
        }
        initLive();
    }
    var time2  = setInterval(autoLive,2000);
    //鼠标划过窗口
    function liveo(){
        clearInterval(time2);
    }
    //鼠标离开窗口
    function livep(){
        time2  = setInterval(autoLive,2000);
    }
    //上翻按钮
    function livez(){
        clearInterval(time2);
        liveIndex--;
        if(liveIndex < 0){
            liveIndex = liveArr.length-1;
        }
        initLive();
    }
    //下翻按钮
    function livey(){
        clearInterval(time2);
        liveIndex++;
        if(liveIndex >= liveArr.length){
            liveIndex = 0;
        }
        initLive();
    }
    //圆点选择
    function xz2(cur2){
        clearInterval(time2);
        liveIndex = cur2;
        initLive()
    }
//倒计时
    var hour = 2;
    var second = 0;
    var minute = 0;
    function djs(){
            second--;
            if(second<0){
                second = 59;
                minute--;
            }
            if(minute<0){
                minute = 59;
                hour--;
            }
            if(hour<0){
                clearInterval(timer3);
                hour = 0;
                second = 0;
                minute = 0;
            }
       document.getElementsByClassName("qg-item")[0].innerHTML =  jy(hour);
        document.getElementsByClassName("qg-item")[1].innerHTML =  jy(minute);
        document.getElementsByClassName("qg-item")[2].innerHTML =  jy(second);

    }
function jy(a){
    return a<10?"0"+a:a;
}
var timer3 = setInterval(djs,1000);

