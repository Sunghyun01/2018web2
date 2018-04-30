function day() {
    var date = new Date();
    var day = date.getDate();
    document.write(day);
}
function month() {
    var date = new Date();
    var month = date.getMonth()+1
    if(month<=10){
        document.write("0"+month);
    }else {
        document.write(month);
    }
}

function up() {
    
}
function down() {
    var td = document.getElementById("test");
    var n = Number(td.innerHTML);
    if(n<=1){
         n=1;
    }else{
        td.innerHTML = n - 1;
    }

}
$(document).ready(function () {
    var slide=$("#slide>li");
    var i=1;
    setInterval(function(){
        slide.eq(i).css("left","1000px");
        slide.eq(i-1).animate({"left":"-1000px"},500);
        slide.eq(i).animate({"left":"0"},500)
        if(i<3)
            i++;
        else
            i=0;
    },2500);
    var smslide=$("#small_slide>li");
    var j=1;
    setInterval(function(){
        smslide.eq(j).css("left","100%");
        smslide.eq(j-1).animate({"left":"-100%"},500);
        smslide.eq(j).animate({"left":"0"},500)
        if(j<3)
            j++;
        else
            j=0;
    },2500);
    $("#pan").click(function () {
        $("#pop").fadeIn();
    })
    $("#del").click(function () {
        $("#pop").fadeOut();
    })
})
