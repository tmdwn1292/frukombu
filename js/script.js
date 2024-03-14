$('.product li').mouseenter(function(){
    $(this).children('.fruit_icon').stop().css({
        'transform':'translateY(50px)',
        'transition':'all 1s'
    })
});
$('.product li').mouseleave(function(){
    $(this).children('.fruit_icon').stop().css({
        'transform':'translateY(0px)',
        'transition':'all 1s'
    })
});
$('cover').mouseover(function(){
    $(this).show();
});
$('#modal_01').hide();
$(".popup_open_01").click(function(){
    $("#modal_01").fadeIn(0)
});
$(".popup_close").click(function(){
    $("#modal_01").fadeOut(0)
});
$('#modal_02').hide();
$(".popup_open_02").click(function(){
    $("#modal_02").fadeIn(0)
});
$(".popup_close").click(function(){
    $("#modal_02").fadeOut(0)
});
$('#modal_03').hide();
$(".popup_open_03").click(function(){
    $("#modal_03").fadeIn(0)
});
$(".popup_close").click(function(){
    $("#modal_03").fadeOut(0)
});
$('#modal_04').hide();
$(".popup_open_04").click(function(){
    $("#modal_04").fadeIn(0)
});
$(".popup_close").click(function(){
    $("#modal_04").fadeOut(0)
});