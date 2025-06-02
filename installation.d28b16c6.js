var $3281941fb8c2cfc5$exports = {};
$(document).ready(function() {
    $(".fab").click(function() {
        $(this).find("i").toggleClass("fa-times fa-comment");
        $(".floatingMenu").toggleClass("open");
        $(".floatingMenu li").each(function(i, li) {
            var $list = $(".floatingMenu");
            $list.queue(function() {
                $(li).toggleClass("visible");
                $list.dequeue();
            }).delay(50);
        });
    });
});


//# sourceMappingURL=installation.d28b16c6.js.map
