$(".lastyearglimpse").mouseover(function(){
    $(this).animate({height:"42%",
                     width:"27%"
                    },150);
    
});
$(".lastyearglimpse").mouseout(function(){
    $(this).animate({height:"20%",
                     width:"25%"
                    },150)
});