var likecount = 3;
var likeSpan1 = document.querySelector("#post-1");

function like() {
    likecount++;
    likeSpan1.innerText = likecount + " like(s)";
}