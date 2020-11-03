var imgChange = function(param) {
    var source_src = param.src;
    var source_alt = param.alt;
    var target = document.getElementById("gallery_main");
    target.setAttribute("src",source_src);
    target.setAttribute("alt",source_alt);
}