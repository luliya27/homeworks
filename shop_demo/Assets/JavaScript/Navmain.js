
(function ($) {
    // 判斷顯示
    var isNav = false;
    if (!isNav) {
        //當滑鼠觸發時
        $("#main_nav a.dropdown-toggle").mouseenter(function () {
            if (!$(this).next('.dropdown-menu').hasClass("show")) {
                $(this).parent('.dropdown').addClass('show');
                $(this).next('.dropdown-menu').addClass("show");
            }
        });
        //當滑鼠移開時
        $("#main_nav .dropdown").mouseleave(function () {
            $(this).removeClass("show").find(".dropdown-menu").removeClass("show");
        });
    } 
    else {
        $("#main_nav .dropdown a.dropdown-toggle").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (!$(this).next('.dropdown-menu').hasClass("show")) {
                $(this).parents('#navbarToggler').find('.show').removeClass('show');
                $(this).parent('.dropdown').addClass('show');
                $(this).next('.dropdown-menu').addClass("show");
            } 
            else {
                $(this).parent('.dropdown').removeClass('show');
                $(this).next('.dropdown-menu').removeClass("show");
            }
        });
    }

    $(".btn_close").on("click", function () {
        $(this).parents(".footer_note").addClass("closed");
    });
    $("header.sticky-top").after("<div class='sticky-top-fix'></div>");


    //導航欄延遲收復效果
    $(window).bind("load resize scroll", function () {
        var w = $(window).width();
        var scroll_top = $(document).scrollTop();
        if (81 < scroll_top) {
            $("body").addClass("sticky_top");
        } else {
            $("body").removeClass("sticky_top");
        }
    });
})(jQuery);