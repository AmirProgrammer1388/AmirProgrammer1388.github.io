$(document).ready(function(){
    let target = 0;
    let tedad_shance = 0;
    $('.btn-stat').click(function(){
        let max_nam = $('.inp-stat').val();
        let guess_list = document.querySelector(".guess-list");
        if(max_nam < 10){
            $('.text-erorr').show()
        }else{
            $('.step-1').hide()
            $('.step-2').show()
            target = Math.floor((Math.random() * max_nam) + 1)
            tedad_shance = Math.floor(Math.log2(max_nam))
            $('.tedad_shance').text(tedad_shance)
        }
    })
    $('.guess-btn').click(function(){
        let my_guss = $('.inp-guess').val();
        tedad_shance--;
        $('.tedad_shance').text(tedad_shance);
        if(my_guss < target){
            let my_span = $('<span class="text-danger px-2"></span>')
            my_span.text(my_guss)
            $('.guess-list').append(my_span)
        }else if(my_guss > target){
            let my_span = $('<span class="text-primary px-2"></span>')
            my_span.text(my_guss)
            $('.guess-list').append(my_span)
        }else if(my_guss == target){
            $('.step-2').hide();
            $('.win_msg').show();
            $('.lose_msg').hide();
        }
        if(my_guss != target && tedad_shance == 0){
            $('.step-2').hide();
            $('.lose_msg').show();
        }else if (tedad_shance==1){
            alert('شما یک فرصت دیگر دارید')
        }
    })
    $('.again').click(function(){
        location.reload();
    })
})