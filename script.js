const galleryMainImageChange = (source_src,source_alt) => {
    /**
     * Galleryのメイン画像切り替えのための関数
     * @param  {String} source_src メイン画像のsrc属性に設定する値
     * @param  {String} source_alt メイン画像のalt属性に設定する値
     * 
     * 説明
     * この関数では、メイン画像（id="gallery_main"が指定された<img>タグの画像）の
     * src属性値とalt属性値を引数で受け取った値で置き換えることで、メイン画像の
     * 切り替えを行っています。
     * width属性値とheight属性値は置き換えず、画像の領域を変更せずに、中身の画像と
     * 代替テキストだけ置き換えることで切り替わったように見せる単純な処理にしています。
     * そのため、画像を差し替える場合、width属性値とheight属性値の比率がメイン画像と
     * 同じでない（つまり、「横幅640px 対 高さ360px」と等倍でない ）場合、
     * 縦方向もしくは横方向に拡大や縮小された表示がされます。
     * そのような画像を使いたい場合は、画像ファイル自体をトリミングなどして縦横の
     * 比率をメイン画像と揃えるか、この関数の中身を修正するか検討する必要があります
     */

    const target = document.getElementById("gallery_main"); // 「id="gallery_main"」のHTML要素を変数targetに代入する
    target.setAttribute("src",source_src); // target変数のHTML要素（「id="gallery_main」と定義されたHTML要素）のsrc属性の値をsource_srcの値で置き換える
    target.setAttribute("alt",source_alt); // target変数のHTML要素（「id="gallery_main」と定義されたHTML要素）のalt属性の値をsource_altの値で置き換える
}