function up() {
    var td = document.getElementById("test");
    var n = Number(td.innerHTML);
    if(n>=30){
        n=30;
    }else{
        td.innerHTML = n + 1;
    }
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
})

