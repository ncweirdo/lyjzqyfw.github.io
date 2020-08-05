//去掉空格
function Trim(str, is_global) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global.toLowerCase() == "g")
        result = result.replace(/\s/g, "");
    return result;
}
//导航下拉
$(function() {
    $('.g_nav01 table tr td').mouseover(function() {
        $(this).find('.nav_tan').stop(true, true).slideDown();
        $(this).children("a").addClass("cur");
    });
    $('.g_nav01 table tr td').mouseleave(function() {
        $(this).find('.nav_tan').stop(true, true).slideUp('fast');
        $(this).children("a").removeClass("cur");
    });
});