//クリックされたら動作する
function errorInput(){
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;

    if(month<1 || month>12){
        alert("適切な値ではありません") //alertは入力ができなくなる
        return
    }

    console.log("month:",month,"day:",day)

}
