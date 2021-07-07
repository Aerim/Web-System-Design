function Appendfunc() {

    var inputtext = document.querySelector(".in_text").value;

    var newdiv = document.createElement("div");

    document.querySelector("#parentDiv").appendChild(newdiv);

    newdiv.classList.add("padclass");

    newdiv.innerHTML=inputtext;
}
document.querySelector(".text_button").addEventListener("click",Appendfunc);


function onChangeEvent(event) {    //파일 업로드
     var fr = new FileReader();
     var img = document.createElement("img");
     var parentDiv = document.querySelector("#parentDiv");

     fr.onload = function() {
         img.src = fr.result;
         img.classList.add("margin-bottom");
         parentDiv.appendChild(img);
     }
     fr.readAsDataURL(event.target.files[0]);
 }
 document.querySelector(".in_file").addEventListener("change",onChangeEvent);

function clearall(event) {

    parentDiv.innerHTML="";
}
document.querySelector(".clear").addEventListener("click",clearall);
