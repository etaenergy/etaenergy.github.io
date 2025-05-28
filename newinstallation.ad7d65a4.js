var $d1fab0557ff1ae73$exports = {};
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


