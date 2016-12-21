// $(function() {

//     var $el, leftPos, newWidth,
//         $mainNav = $(".submenu__list");
    
//     $mainNav.append("<li id='magic-line'></li>");
//     var $magicLine = $("#magic-line");
    
//     $magicLine
//         .width($(".submenu__item").width())
//         .css("left", $(".submenu__item--current a").position().left)
//         .data("origLeft", $magicLine.position().left)
//         .data("origWidth", $magicLine.width());
        
//     $(".submenu__list .submenu__item a").hover(function() {
//         $el = $(this);
//         leftPos = $el.position().left;
//         newWidth = $el.parent().width();
//         $magicLine.stop().animate({
//             left: leftPos,
//             width: newWidth
//         });
//     }, function() {
//         $magicLine.stop().animate({
//             left: $magicLine.data("origLeft"),
//             width: $magicLine.data("origWidth")
//         });    
//     });
// });

// $(function() {

//     var $el, leftPos, newWidth,
//         $mainNav = $(".submenu__list");
    
//     $mainNav.append("<span id='magic-line'></span>");
//     var $magicLine = $("#magic-line");
    
//     $magicLine
//         .width($(".submenu__item").width())
//         .css("left", $(".submenu__item--current a").position().left)
//         .data("origLeft", $magicLine.position().left)
//         .data("origWidth", $magicLine.width());
        
//     $(".submenu__list .submenu__item a").hover(function() {
//         $el = $(this);
//         leftPos = $el.position().left;
//         newWidth = $el.parent().width();
//         $magicLine.stop().animate({
//             left: leftPos,
//             width: newWidth
//         });
//     }, function() {
//         $magicLine.stop().animate({
//             left: $magicLine.data("origLeft"),
//             width: $magicLine.data("origWidth")
//         });    
//     });
// });