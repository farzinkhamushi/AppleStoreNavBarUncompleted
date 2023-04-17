    /*Global variables*/
    var color = document.getElementById('contain1').style.backgroundColor;
    var calc = 0;

    /*Global functions*/
    function contain1_on(_size){
        document.getElementById("contain1").style.height= _size+'px';
        document.getElementById("contain1").style.boxShadow= "1px 1px 200px 250px #999999";
        document.getElementById("contain1").style.backgroundColor= '#fff';
    }
    function contain1_off(){
        document.getElementById("contain1").style.height= 44+'px';
        document.getElementById("contain1").style.boxShadow= 'none';
        document.getElementById("contain1").style.backgroundColor= color;
    }
    function leaving_calc(){
        if(calc == 1){       support_leave();                           }
        if(calc == 2){       accessories_leave();                       }
        if(calc == 3){       entertainment_leave();/* alert(calc+'');*/ }
        if(calc == 4){       tv_leave();                                }
        if(calc == 5){       airpods_leave();                           }
        if(calc == 6){       watch_leave();                             }
        if(calc == 7){       iphone_leave();                            }
        if(calc == 8){       ipad_leave();                              }
        if(calc == 9){       mac_leave();                               }
        if(calc == 10){      store_leave();                             }
        // alert(calc+'');
    }
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
/*------------------------------------------  Support  --------------------------------------*/
/*-------------------------------------------------------------------------------------------*/
    function support_over(_doc){     
        calc = 1;       
        contain1_on(454);
        support_ov();
        accessories_lv();        /*  for leave accessories  */
        entertainment_lv();        /*  for leave Entertainment  */
    }
    function support_ov(){
        document.getElementById('support-nav').style.opacity = 1;
        var support_nav_li = 'support-nav-li-';        var j=11;       var k=21;       var l=31;
        while(j<18){document.getElementById(support_nav_li+j+'').style.height = 40 +'px';j++;}
        while(k<25){document.getElementById(support_nav_li+k+'').style.height = 40 +'px';k++;}
        while(l<36){document.getElementById(support_nav_li+l+'').style.height = 40 +'px';l++;}
        var support_nav_h6 = 'support-nav-h6-';        var i=1;
        while(i<5){document.getElementById(support_nav_h6+i+'').style.height = 40 +'px';i++;}
    }
    function support_leave(){
        contain1_off();
        support_lv();
    }
    function support_lv(){
        document.getElementById('support-nav').style.opacity = 0;
        var support_nav_li = 'support-nav-li-';      var j = 11;     var k = 21;     var l = 31;
        while(j<18){document.getElementById(support_nav_li+j+'').style.height = 20 +'px';j++;}
        while(k<25){document.getElementById(support_nav_li+k+'').style.height = 20 +'px';k++;}
        while(l<36){document.getElementById(support_nav_li+l+'').style.height = 20 +'px';l++;}
        var support_nav_h6 = 'support-nav-h6-';      var i = 1;
        while(i<5){document.getElementById(support_nav_h6+i+'').style.height = 20 +'px';i++;}
    }
/*-----------------------------------------------------------------------------------------*/
/*-------------------------------------Accessories ----------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
    function accessories_over(_doc){
        calc=2;       
        contain1_on(444); 
        accessories_ov();
        support_lv();       /* leave suport*/
        entertainment_lv();     /* leave entertainment*/
    }
    function accessories_ov(){
        document.getElementById('accessories-nav').style.opacity = 1;
        var accessories_nav_li = 'accessories-nav-li-';     var j=11;     var k=21;
        while(j<18){document.getElementById(accessories_nav_li+j+'').style.height = 40 +'px';j++;}
        while(k<24){document.getElementById(accessories_nav_li+k+'').style.height = 40 +'px';k++;}
        var accessories_nav_h6 = 'accessories-nav-h6-';     var i=1;
        while(i<3){document.getElementById(accessories_nav_h6+i+'').style.height = 40 +'px';i++;}
    }
    function accessories_leave(){
        contain1_off();
        accessories_lv();
    }
    function accessories_lv(){
        document.getElementById('accessories-nav').style.opacity = 0;
        var accessories_nav_li_id = 'accessories-nav-li-';      var j = 11;        var k = 21;
        while(j<18){document.getElementById(accessories_nav_li_id+j+'').style.height = 20 +'px';j++;}
        while(k<24){document.getElementById(accessories_nav_li_id+k+'').style.height = 20 +'px';k++;}
        var accessories_nav_h6_id = 'accessories-nav-h6-';        var i = 1;
        while(i<3){document.getElementById(accessories_nav_h6_id+i+'').style.height = 20 +'px';i++;}
    }
/*-----------------------------------------------------------------------------------------*/
/*----------------------------------- Entertainment ---------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
    function entertainment_over(_doc){
        calc = 3;
        contain1_on(544);
        entertainment_ov();
        accessories_lv();       /* leave accessories*/
        tv_lv();        /* leave tv*/
    }
    function entertainment_ov(){
        document.getElementById('entertainment-nav').style.opacity = 1;
        var entertainment_nav_li = 'entertainment-nav-li-';     var j=11;
        while(j<23){document.getElementById(entertainment_nav_li+j+'').style.height = 40 +'px';j++;}
        var entertainment_nav_h6 = 'entertainment-nav-h6-';     var i=1;
        while(i<3){document.getElementById(entertainment_nav_h6+i+'').style.height = 40 +'px';i++;}
    }
    function entertainment_leave(){
        contain1_off();
        entertainment_lv();
    }
    function entertainment_lv(){
        document.getElementById('entertainment-nav').style.opacity = 0;
        var entertainment_nav_li_id = 'entertainment-nav-li-';
        var j = 11;
        var k = 21;
        while(j<21){document.getElementById(entertainment_nav_li_id+j+'').style.height = 20 +'px';j++;}
        while(k<24){document.getElementById(entertainment_nav_li_id+k+'').style.height = 20 +'px';k++;}
        var entertainment_nav_h6_id = 'entertainment-nav-h6-';
        var i = 1;
        while(i<3){document.getElementById(entertainment_nav_h6_id+i+'').style.height = 20 +'px';i++;}
    }
/*-----------------------------------------------------------------------------------------*/
/*----------------------------------- TV & Home ---------------------------------------*/
/*-----------------------------------------------------------------------------------------*/        
    function tv_over(_doc){
        calc = 4;            
        contain1_on(544);
        tv_ov();
        airpods_lv();       /*  for leave airpods  */
        entertainment_lv();     /*  for leave Entertainment  */
    }
    function tv_ov(){
        document.getElementById('tv-nav').style.opacity = 1;
        var tv_nav_li = 'tv-nav-li-';        var j=11;       var k=21;       var l=31;
        while(j<15){document.getElementById(tv_nav_li+j+'').style.height = 40 +'px';j++;}
        while(k<26){document.getElementById(tv_nav_li+k+'').style.height = 40 +'px';k++;}
        while(l<39){document.getElementById(tv_nav_li+l+'').style.height = 40 +'px';l++;}
        var tv_nav_h6 = 'tv-nav-h6-';       var i=1;
        while(i<4){document.getElementById(tv_nav_h6+i+'').style.height = 40 +'px';i++;}
    }
    function tv_leave(){
        contain1_off();
        tv_lv();
    }
    function tv_lv(){
        document.getElementById('tv-nav').style.opacity = 0;
        var tv_nav_li_id = 'tv-nav-li-';        var j = 11;        var k = 21;        var l = 31;
        while(j<15){document.getElementById(tv_nav_li_id+j+'').style.height = 20 +'px';j++;}
        while(k<26){document.getElementById(tv_nav_li_id+k+'').style.height = 20 +'px';k++;}
        while(l<39){document.getElementById(tv_nav_li_id+l+'').style.height = 20 +'px';l++;}
        var tv_nav_h6_id = 'tv-nav-h6-';        var i = 1;
        while(i<4){document.getElementById(tv_nav_h6_id+i+'').style.height = 20 +'px';i++;}
    }
/*---------------------------------------------------------------------------------------------*/
/*------------------------------------  AirPods  ----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/        
function airpods_over(_doc){
    calc = 5;            
    contain1_on(544);
    airpods_ov();
    tv_lv();/*  for leave tv  */
    watch_lv();/*  for leave Watch  */
}
function airpods_ov(){
    document.getElementById('airpods-nav').style.opacity = 1;
    var airpods_nav_li = 'airpods-nav-li-';     var j=11;     var k=21;     var l=31;
    while(j<16){document.getElementById(airpods_nav_li+j+'').style.height = 40 +'px';j++;}
    while(k<23){document.getElementById(airpods_nav_li+k+'').style.height = 40 +'px';k++;}
    while(l<33){document.getElementById(airpods_nav_li+l+'').style.height = 40 +'px';l++;}
    var airpods_nav_h6 = 'airpods-nav-h6-';     var i=1;
    while(i<5){document.getElementById(airpods_nav_h6+i+'').style.height = 40 +'px';i++;}
}
function airpods_leave(){
    contain1_off();
    airpods_lv();
}
function airpods_lv(){
    document.getElementById('airpods-nav').style.opacity = 0;
    var airpods_nav_li_id = 'airpods-nav-li-';      var j = 11;     var k = 21;     var l = 31;
    while(j<16){document.getElementById(airpods_nav_li_id+j+'').style.height = 20 +'px';j++;}
    while(k<23){document.getElementById(airpods_nav_li_id+k+'').style.height = 20 +'px';k++;}
    while(l<33){document.getElementById(airpods_nav_li_id+l+'').style.height = 20 +'px';l++;}
    var airpods_nav_h6_id = 'airpods-nav-h6-';      var i = 1;
    while(i<5){document.getElementById(airpods_nav_h6_id+i+'').style.height = 20 +'px';i++;}
}
/*---------------------------------------------------------------------------------------------*/
/*-------------------------------------  Watch  -----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/        
function watch_over(_doc){
    calc = 6;            
    contain1_on(544);
    watch_ov();
    airpods_lv();/*  for leave airpods  */
    iphone_lv();/*  for leave iphone  */
}
function watch_ov(){
    document.getElementById('watch-nav').style.opacity = 1;
    var watch_nav_li = 'watch-nav-li-';     var j=11;     var k=21;     var l=31;
    while(j<17){document.getElementById(watch_nav_li+j+'').style.height = 40 +'px';j++;}
    while(k<27){document.getElementById(watch_nav_li+k+'').style.height = 40 +'px';k++;}
    while(l<34){document.getElementById(watch_nav_li+l+'').style.height = 40 +'px';l++;}
    var watch_nav_h6 = 'watch-nav-h6-';     var i=1;
    while(i<6){document.getElementById(watch_nav_h6+i+'').style.height = 40 +'px';i++;}
}
function watch_leave(){
    contain1_off();
    watch_lv();
}
function watch_lv(){
    document.getElementById('watch-nav').style.opacity = 0;
    var watch_nav_li = 'watch-nav-li-';     var j=11;     var k=21;     var l=31;
    while(j<17){document.getElementById(watch_nav_li+j+'').style.height = 20 +'px';j++;}
    while(k<27){document.getElementById(watch_nav_li+k+'').style.height = 20 +'px';k++;}
    while(l<34){document.getElementById(watch_nav_li+l+'').style.height = 20 +'px';l++;}
    var watch_nav_h6 = 'watch-nav-h6-';     var i=1;
    while(i<6){document.getElementById(watch_nav_h6+i+'').style.height = 20 +'px';i++;}
}
/*---------------------------------------------------------------------------------------------*/
/*-------------------------------------  iPhone  -----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/        
function iphone_over(_doc){
    calc = 7;            
    contain1_on(544);
    iphone_ov();
    watch_lv();/*  for leave watch  */
    ipad_lv();/*  for leave ipad  */
}
function iphone_ov(){
    document.getElementById('iphone-nav').style.opacity = 1;
    var iphone_nav_li = 'iphone-nav-li-';     var j=11;     var k=21;     var l=31;
    while(j<17){document.getElementById(iphone_nav_li+j+'').style.height = 40 +'px';j++;}
    while(k<26){document.getElementById(iphone_nav_li+k+'').style.height = 40 +'px';k++;}
    while(l<37){document.getElementById(iphone_nav_li+l+'').style.height = 40 +'px';l++;}
    var iphone_nav_h6 = 'iphone-nav-h6-';     var i=1;
    while(i<6){document.getElementById(iphone_nav_h6+i+'').style.height = 40 +'px';i++;}
}
function iphone_leave(){
    contain1_off();
    iphone_lv();
}
function iphone_lv(){
    document.getElementById('iphone-nav').style.opacity = 0;
    var iphone_nav_li = 'iphone-nav-li-';     var j=11;     var k=21;     var l=31;
    while(j<17){document.getElementById(iphone_nav_li+j+'').style.height = 20 +'px';j++;}
    while(k<26){document.getElementById(iphone_nav_li+k+'').style.height = 20 +'px';k++;}
    while(l<37){document.getElementById(iphone_nav_li+l+'').style.height = 20 +'px';l++;}
    var iphone_nav_h6 = 'iphone-nav-h6-';     var i=1;
    while(i<6){document.getElementById(iphone_nav_h6+i+'').style.height = 20 +'px';i++;}
}
/*---------------------------------------------------------------------------------------------*/
/*-------------------------------------  iPad  -----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/        
function ipad_over(_doc){
    calc = 8;            
    contain1_on(544);
    ipad_ov();
    mac_lv();       /*  for leave mac  */
    iphone_lv();    /*  for leave iphone  */
}
function ipad_ov(){
    document.getElementById('ipad-nav').style.opacity = 1;
    var ipad_nav_li = 'ipad-nav-li-';     var j=11;     var k=21;     var l=31;
    while(j<18){document.getElementById(ipad_nav_li+j+'').style.height = 40 +'px';j++;}
    while(k<25){document.getElementById(ipad_nav_li+k+'').style.height = 40 +'px';k++;}
    while(l<35){document.getElementById(ipad_nav_li+l+'').style.height = 40 +'px';l++;}
    var ipad_nav_h6 = 'ipad-nav-h6-';     var i=1;
    while(i<6){document.getElementById(ipad_nav_h6+i+'').style.height = 40 +'px';i++;}
}
function ipad_leave(){
    contain1_off();
    ipad_lv();
}
function ipad_lv(){
    document.getElementById('ipad-nav').style.opacity = 0;
    var ipad_nav_li = 'ipad-nav-li-';     var j=11;     var k=21;     var l=31;
    while(j<18){document.getElementById(ipad_nav_li+j+'').style.height = 20 +'px';j++;}
    while(k<25){document.getElementById(ipad_nav_li+k+'').style.height = 20 +'px';k++;}
    while(l<35){document.getElementById(ipad_nav_li+l+'').style.height = 20 +'px';l++;}
    var ipad_nav_h6 = 'ipad-nav-h6-';     var i=1;
    while(i<6){document.getElementById(ipad_nav_h6+i+'').style.height = 20 +'px';i++;}
}
/*---------------------------------------------------------------------------------------------*/
/*-------------------------------------   Mac   -----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/        
function mac_over(_doc){
    calc = 9;            
    contain1_on(544);
    mac_ov();
    store_lv();       /*  for leave mac  */
    ipad_lv();    /*  for leave iphone  */
}
function mac_ov(){
    document.getElementById('mac-nav').style.opacity = 1;
    var mac_nav_li = 'mac-nav-li-';     var j=11;     var k=21;     var l=31;
    while(j<19){document.getElementById(mac_nav_li+j+'').style.height = 40 +'px';j++;}
    while(k<25){document.getElementById(mac_nav_li+k+'').style.height = 40 +'px';k++;}
    while(l<37){document.getElementById(mac_nav_li+l+'').style.height = 40 +'px';l++;}
    var mac_nav_h6 = 'mac-nav-h6-';     var i=1;
    while(i<6){document.getElementById(mac_nav_h6+i+'').style.height = 40 +'px';i++;}
}
function mac_leave(){
    contain1_off();
    mac_lv();
}
function mac_lv(){
    document.getElementById('mac-nav').style.opacity = 0;
    var mac_nav_li = 'mac-nav-li-';     var j=11;     var k=21;     var l=31;
    while(j<19){document.getElementById(mac_nav_li+j+'').style.height = 20 +'px';j++;}
    while(k<25){document.getElementById(mac_nav_li+k+'').style.height = 20 +'px';k++;}
    while(l<37){document.getElementById(mac_nav_li+l+'').style.height = 20 +'px';l++;}
    var mac_nav_h6 = 'mac-nav-h6-';     var i=1;
    while(i<6){document.getElementById(mac_nav_h6+i+'').style.height = 20 +'px';i++;}
}
/*---------------------------------------------------------------------------------------------*/
/*-------------------------------------  Store  -----------------------------------------------*/
/*---------------------------------------------------------------------------------------------*/        
function store_over(_doc){
    calc = 10;            
    contain1_on(544);
    store_ov();
    mac_lv();       /*  for leave mac  */
}
function store_ov(){
    document.getElementById('store-nav').style.opacity = 1;
    var store_nav_li = 'store-nav-li-';     var j=11;     var k=21;     var l=31;
    while(j<17){document.getElementById(store_nav_li+j+'').style.height = 40 +'px';j++;}
    while(k<25){document.getElementById(store_nav_li+k+'').style.height = 40 +'px';k++;}
    while(l<36){document.getElementById(store_nav_li+l+'').style.height = 40 +'px';l++;}
    var store_nav_h6 = 'store-nav-h6-';     var i=1;
    while(i<6){document.getElementById(store_nav_h6+i+'').style.height = 40 +'px';i++;}
}
function store_leave(){
    contain1_off();
    store_lv();
}
function store_lv(){
    document.getElementById('store-nav').style.opacity = 0;
    var store_nav_li = 'store-nav-li-';     var j=11;     var k=21;     var l=31;
    while(j<17){document.getElementById(store_nav_li+j+'').style.height = 20 +'px';j++;}
    while(k<25){document.getElementById(store_nav_li+k+'').style.height = 20 +'px';k++;}
    while(l<36){document.getElementById(store_nav_li+l+'').style.height = 20 +'px';l++;}
    var store_nav_h6 = 'store-nav-h6-';     var i=1;
    while(i<6){document.getElementById(store_nav_h6+i+'').style.height = 20 +'px';i++;}
}
