$(document).ready(function(){
   showAndHideDialogEmpty();
    showAndHideDialogExitsCode();
    showAndHideDialogConfirmDelete();
})
//1 show and hide dialog empty
function showAndHideDialogEmpty(){
     // show dialog empty
     $("#btn-show-dialog-empty").click(function(){
        $("#show-dialog-empty").show();
    })
    // hide dialog-empty
    $("#m-btn-hide-dialog-empty").click(function(){
        $("#show-dialog-empty").hide();
    })
}
//2 show and hide dialog exits code
function showAndHideDialogExitsCode(){
       // show dialog exits-code
       $("#btn-show-dialog-exits-code").click(function(){
        $("#show-dialog-exits-code").show();
    })
    // hide dialog exits-code
    $("#m-btn-hide-dialog-exits-code").click(function(){
        $("#show-dialog-exits-code").hide();
    })
}
//3 show and hide dialog confirm delete
function showAndHideDialogConfirmDelete(){
    // show dialog confirm-del
    $("#btn-show-dialog-confirm-del").click(function(){
        $("#show-dialog-confirm-del").show();
    })
    // hide dialog confirm-del
    $("#m-dialog-confirm-del-yes").click(function(){
        $("#show-dialog-confirm-del").hide();
    })
}