// $(document).ready(function() {

// })
console.log("hello");
document.getElementById("show-dialog").addEventListener("click",function(){
    var toastBox= document.getElementsByClassName("m-dialog")
   toastBox[0].style.display="block";
   setTimeout(()=>{
    toastBox[0].style.display="none";
   },3000
   );
 })