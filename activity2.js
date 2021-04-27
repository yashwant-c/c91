function Back(){
    window.location = "activity_1.html";
}

function GetScore() {
    score=localStorage.getItem("score");
     document.getElementById("update").innerHTML="<h1>Score:"+score"</h1>";
}