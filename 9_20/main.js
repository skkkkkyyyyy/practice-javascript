function changeColor(){
    document.getElementById("text").style.color = "red";
}
//document.scrollingElementById("text").style.color = "red";
//これはドキュメントの中の「text」というIDをもつ
//タグのスタイルの色を赤にしてください

//[.]は～のという意味


let count = 0;

function increaseCount(){

count++;
document.getElementById("counter").innerText = count;

}

function herasuCount(){
count--;
document.getElementById("counter").innerText = count;

}