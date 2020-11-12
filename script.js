const imgChange = (param) => {
    const source_src = param.src;
    const source_alt = param.alt;
    const target = document.getElementById("gallery_main");
    target.setAttribute("src",source_src);
    target.setAttribute("alt",source_alt);
}