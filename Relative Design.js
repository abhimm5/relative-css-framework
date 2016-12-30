/*!
   ----------------------------
    ¦¦¦ Relative Design 1 ¦¦
   ----------------------------
     Version - 1.0.0 | © 2016 Relative Design | Licensed under MIT 
      ~ getRelativeDesign.com  
	    ~ tutorial.getRelativeDesign.com 
      ~ https://github.com/Avimm5/Relative-Design/blob/master/LICENSE	  
 */
 
// this creates row 
var r = ".row >";
var z = ['.lg','.lg-in','.md','.md-in','.sm','.sm-in'];
z.forEach(function(x){
var xx = document.querySelectorAll(r + x); 
for( var i = 0;i<xx.length;i++){
var getHeight = xx[i].parentNode.parentNode.clientHeight;
  var rows = ['lg','lg-in','md','md-in','sm','sm-in'],
    x = document.getElementsByTagName('DIV'),
    i,
    height = {};

 var lgh = getHeight - (getHeight/ 1.618) ,
                 lgh_in = getHeight - lgh ,
                 mdh = lgh/ 1.618 ,
                 mdh_in = getHeight - lgh ,
                 smh = mdh/1.618 - (mdh - mdh/1.618),
                 smh_in = (mdh_in / 1.618 )/1.618 ; 
                   height[rows[0]] = lgh;
                   height[rows[1]] = lgh_in;
                   height[rows[2]] = lgh - mdh;
                   height[rows[3]] = mdh_in/1.618;
                   height[rows[4]] = smh;
                   height[rows[5]] = smh_in;
            
for (i = 0 ; i < x.length ; i++) {
    x[i].style.height = height[x[i].className.split(' ')[0]] +"px" ;
}
}
})

//this creates rows in golden ratio 
var r = "div >";
var z = ['.row-lg','.row-lg-in','.row-md','.row-md-in','.row-sm','.row-sm-in'];
 z.forEach(function(n){
 var xx = document.querySelectorAll(r + n); 
for( var i = 0;i<xx.length;i++){
var getHeight = xx[i].parentNode.clientHeight;
var rowClass = ['.row-lg','.row-lg-in','.row-md','.row-md-in','.row-sm','.row-sm-in'],
    all = " > *" , rowHeight = {};

   var lgh = getHeight - (getHeight/ 1.618) ,
                 lgh_in = getHeight - lgh ,
                 mdh = lgh/ 1.618 ,
                 mdh_in = getHeight - lgh ,
                 smh = mdh/1.618 - (mdh - mdh/1.618),
                 smh_in = (mdh_in / 1.618 )/1.618 ; 
                   rowHeight['row-lg'] = lgh;
                   rowHeight['row-lg-in'] = lgh_in;
                   rowHeight['row-md'] = lgh - mdh;
                   rowHeight['row-md-in'] = mdh_in/1.618;
                   rowHeight['row-sm'] = smh;
                   rowHeight['row-sm-in'] = smh_in;

rowClass.forEach(function(x) {
  var sel = document.querySelectorAll(x + all);
  for (var i = 0; i < sel.length; i++) {
    sel[i].style.height = rowHeight[sel[i].parentNode.className.split(" ")[0]] +"px";   
  }
})
 }
 })

// this creates rows inside any row 
   var rin = "div >" , zin = ['.row-lg','.row-lg-in','.row-md','.row-md-in','.row-sm','.row-sm-in'];

zin.forEach(function(n){
 var xx = document.querySelectorAll(rin + n); 
for( var i = 0;i<xx.length;i++){
var getHeight = xx[i].parentNode.parentNode.clientHeight;
var rowClass = ['.row-lg','.row-lg-in','.row-md','.row-md-in','.row-sm','.row-sm-in'],
    all = " > *" , rowHeight = {} , clsnm = ['row-lg','row-lg-in','row-md','row-md-in','row-sm','row-sm-in'];
   var lgh = getHeight - (getHeight/ 1.618) ,
                 lgh_in = getHeight - lgh ,
                 mdh = lgh/ 1.618 ,
                 mdh_in = getHeight - lgh ,
                 smh = mdh/1.618 - (mdh - mdh/1.618),
                 smh_in = (mdh_in / 1.618 )/1.618 ; 
                   rowHeight[clsnm[0]] = lgh;
                   rowHeight[clsnm[1]] = lgh_in;
                   rowHeight[clsnm[2]] = lgh - mdh;
                   rowHeight[clsnm[3]] = mdh_in/1.618;
                   rowHeight[clsnm[4]] = smh;
                   rowHeight[clsnm[5]] = smh_in;
rowClass.forEach(function(x) {
  var sel = document.querySelectorAll(x + all);
  for (var i = 0; i < sel.length; i++) {
    sel[i].style.height = rowHeight[sel[i].parentNode.className.split(" ")[0]] +"px";   
  }
}) 
 }
 })




