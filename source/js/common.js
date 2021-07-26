$(function () {





    

// 여기부터


    $("button.search").on("click", function () {
        $("article.layer-popup").addClass("on");
        $("article.layer-popup div.pop-outline>div").removeClass("on");
        $("article.layer-popup div.search").addClass("on");
    });

    $("article.layer-popup button.cancle").on("click", function () {
        $("article.layer-popup").addClass("on");
        $("article.layer-popup div.pop-outline>div").removeClass("on");
        $("article.layer-popup div.message-alert").addClass("on");
    });

    $("button.submit").on("click", function () {
        $("article.layer-popup").addClass("on");
        $("article.layer-popup div.pop-outline>div").removeClass("on");
        $("article.layer-popup div.message-alert").addClass("on");
    });

    $("article.layer-popup button.cancle").on("click", function () {
        $("article.layer-popup").addClass("on");
        $("article.layer-popup div.pop-outline>div").removeClass("on");
        $("article.layer-popup div.message-alert").addClass("on");
    });

    $("article.layer-popup button.ok").on("click", function () {
        $("article.layer-popup").addClass("on");
        $("article.layer-popup div.pop-outline>div").removeClass("on");
        $("article.layer-popup div.message-result").addClass("on");
    });


// 여기까지 팝업 테스트용 코드














    $('ul.file li span').each(function () {
        $(this).css(
            "background",
            "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover"
        );
    });
    


});
