$(document).ready(function(){$(".fab").click(function(){$(this).find("i").toggleClass("fa-times fa-comment"),$(".floatingMenu").toggleClass("open"),$(".floatingMenu li").each(function(e,n){var i=$(".floatingMenu");i.queue(function(){$(n).toggleClass("visible"),i.dequeue()}).delay(50)})})});
//# sourceMappingURL=newinstallation.5a37d023.js.map
