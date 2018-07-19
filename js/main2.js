/**
 * Created by sansung on 2017/5/30.
 */
window.onload = function(){
    city_select();//城市选择
    categorySelect();//列表选择
};
//城市选择
function city_select(){
    var city_more = document.getElementById("city_more");
    var city      = document.getElementById("city_send");
    var city_sel = document.getElementsByClassName("dorpdown-layer")[0];
    var city_item = city_more.getElementsByClassName("city_sel");
    var s_city = document.getElementsByClassName("city_xz")[0];
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
    };
    //隐藏选择框
    city_more.onmouseout = function(){
        city_sel.style.display = "none";
    }
}
//顶部下拉菜单
function topNavShow(obj){
    var dorpdown = obj.getElementsByClassName("dorpdown-layer2")[0];
    dorpdown.style.display = "block";
}
function topNavHidden(obj){
    var dorpdown = obj.getElementsByClassName("dorpdown-layer2")[0];
    dorpdown.style.display = "none";
}
//项目列表选择
function categorySelect() {
    var category = document.getElementsByClassName("category")[0];
    var category_dd = document.getElementsByClassName("goods_category_dd")[0];
    var cateMenu = document.getElementsByClassName("cate-menu-item");
    var dorpdown_layer = document.getElementsByClassName("dorpdown-layer6");
    category.onmouseover = function(){
        category_dd.style.display = "block";
        for (var i = 0; i < cateMenu.length; i++) {
            cateMenu[i].index = i;
            cateMenu[i].onmouseover = function () {
                for (var j = 0; j < dorpdown_layer.length; j++) {
                    dorpdown_layer[j].style.display = "none";
                }
                dorpdown_layer[this.index].style.display = "block";
            };
        }
    };
    category.onmouseout = function(){
        category_dd.style.display = "none";
        for (var j = 0; j < dorpdown_layer.length; j++) {
            dorpdown_layer[j].style.display = "none";
        }
    };

}