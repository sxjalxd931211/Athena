$(document).ready(function(){
    $(".tagContent div").hide();
    $(".tags_row li:first").attr("class","current");
    $(".tagContent div:first").fadeIn();
    $('.tags_row a').click(function(e){
        e.preventDefault();
        $(".tagContent div").hide();
        $(".tags_row li").attr("class","");
        $(this).parent().attr("class","current");
        $('#'+$(this).attr('title')).fadeIn();
        })
})
