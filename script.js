const galleryMainImageChange = (source_src,source_alt) => {
    /*
      この関数の呼び出し元のHTMLタグのsrc属性値とalt属性値を引数で受け取り、
      <img id="gallery_main">のsrc属性値とalt属性値を置き換えることで
      画像の切り替わりを実現する
      
      width属性値とheight属性値は置き換えていないため、単純に写真ファイルだけを
      差し替える場合、「width対height」の比率が「640対360」と等倍のものを使わないと、
      縦または横方向に拡大・縮小されて表示されてしまうので注意が必要
    */

    const target = document.getElementById("gallery_main");
    target.setAttribute("src",source_src);
    target.setAttribute("alt",source_alt);
}