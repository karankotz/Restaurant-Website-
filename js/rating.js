$(document).ready(function(){
//  Check Radio-box
    $(".rating input:radio").attr("checked", false);
    $('.rating input').click(function () {
        $(".rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('.rating input:radio').change(
    function(){
        var userRating = this.value;
        alert(userRating);
    }); 
});


$(document).ready(function(){
//  Check Radio-box
    $(".rating1 input:radio").attr("checked", false);
    $('.rating1 input').click(function () {
        $(".rating1 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('.rating1 input:radio').change(
    function(){
        var userRating = this.value;
        alert(userRating);
    }); 
});

$(document).ready(function(){
//  Check Radio-box
    $(".rating2 input:radio").attr("checked", false);
    $('.rating2 input').click(function () {
        $(".rating2 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('.rating2 input:radio').change(
    function(){
        var userRating = this.value;
        alert(userRating);
    }); 
});


$(document).ready(function(){
//  Check Radio-box
    $(".rating3 input:radio").attr("checked", false);
    $('.rating3 input').click(function () {
        $(".rating3 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('.rating3 input:radio').change(
    function(){
        var userRating = this.value;
        alert(userRating);
    }); 
});
