//Length converter part
Cm.addEventListener('click',function(){
    var metre=document.getElementById("length").value;
    document.getElementById("result1").value= (metre*100)+" "+"Centimetres";
})
Inches.addEventListener('click',function(){
    var metre=document.getElementById("length").value;
    document.getElementById("result1").value= (metre*39.37)+" "+"Inches";
})
Feet.addEventListener('click',function(){
    var metre=document.getElementById("length").value;
    document.getElementById("result1").value= (metre*3.284)+" "+"feet";
})
Mm.addEventListener('click',function(){
    var metre=document.getElementById("length").value;
    document.getElementById("result1").value= (metre*1000)+" "+"Millimetres";
})
gm.addEventListener('click',function(){
    var kilo=document.getElementById("Weight").value;
    document.getElementById("result2").value=(kilo*1000)+" "+"grams";
})
pounds.addEventListener('click',function(){
    var kilo=document.getElementById("Weight").value;
    document.getElementById("result2").value=(kilo*2.205)+" "+"pounds";
})
mg.addEventListener('click',function(){
    var kilo=document.getElementById("Weight").value;
    document.getElementById("result2").value=(kilo*1000000)+" "+"milligrams";
})
Tonnes.addEventListener('click',function(){
    var kilo=document.getElementById("Weight").value;
    document.getElementById("result2").value=(kilo*0.001)+" "+"Tonnes";
})
F.addEventListener('click',function(){
    var celsius=document.getElementById("temp").value;
    document.getElementById("result3").value=((celsius*1.8)+32)+" "+"degrees"+" "+"Fahrenheit";
})
K.addEventListener('click',function(){
    var celsius=document.getElementById("temp").value;
    document.getElementById("result3").value=((celsius*1.0)+273.15)+" "+"Kelvin";
})
sin.addEventListener('click',function(){
    var deg=document.getElementById("tri").value; 
    document.getElementById("result4").value= Math.sin((deg*Math.PI)/180);
})
cos.addEventListener('click',function(){
    var deg=document.getElementById("tri").value; 
    document.getElementById("result4").value= Math.cos((deg*Math.PI)/180);
})
Tan.addEventListener('click',function(){
    var deg=document.getElementById("tri").value; 
    document.getElementById("result4").value= Math.tan((deg*Math.PI)/180);
})
