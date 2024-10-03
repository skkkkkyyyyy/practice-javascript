//クリックされたら動作する
function errorInput(){
    console.log(document.getElementById("month").value)
    console.log( document.getElementById("day").value)
   
    const month = document.getElementById("month").value;
    const month = document.getElementById("day").value;

    console.log("month:",month,"day:",day)

}

//javascriptのプログラムとHTMLはどこで対応しているか
//タグについているIDで紐づく
//タグの中にある負荷情報のことを属性という