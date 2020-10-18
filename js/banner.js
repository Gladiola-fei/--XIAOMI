$(function () {
    var oBtns = null;
    var oImgs = null;
    var isNow = 0; //记录当前图片的下标
    var timer = null;

    // 设置定时器
    timer = setInterval(function () {
        isNow++;
        tab();
    }, 2500);

    //封装切换函数
    function tab() {
        if (!oImgs) {
            oImgs = $("#ul1 li").find("a");
        }
        if (!oBtns) {
            oBtns = $("#banner ol li");
        }
        if (isNow == 5) {
            isNow = 0;
        }

        oBtns.attr("class", "").eq(isNow).attr("class", "active");
        if (isNow == oBtns.size()) {
            oBtns.eq(0).attr("class", "active");
            //判断，若当前显示图片下标为当前按钮个数时，将oBtns中的第一个按钮的class置为active
        }
        oImgs.hide().css("opacity", "0.2").eq(isNow).show().animate({ opacity: 1 }, 500);
    }

    //点击小圆点，跳到对应的图片
    $("#banner ol a").click(function () {
        isNow = $(this).index();  //获取当前节点在兄弟节点中的下标
        tab();
        return false;  //阻止a链接的默认行为
    })

    //添加鼠标移入移出
    $("#banner").mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        timer = setInterval(function () {
            isNow++;
            tab();
        }, 2500);
    })

})