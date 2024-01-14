$(document).ready(function(){
    $("#show-toast").click(function(){
        $(".m-toast-box").show();
        setTimeout(function(){
            $(".m-toast-box").hide();
        }, 3000);
    })
   showAndHideDialogEmpty();
    showAndHideDialogExitsCode();
    showAndHideDialogConfirmDelete();
    $('.m-table-selected').change(function() {
        // Find the closest 'tr' (table row) and toggle the 'selected-row' class
        $(this).closest('tr').toggleClass('m-table-selected', this.checked);
      });
    // $("input[checked]").click(function(){
    //     var me=this;
    //     validateInputRequired(me);
    //    })
    })


// validate dữ liệu
// function validateInputRequired(input){
//  var me=this;
//  let value= $(input).val();
//      if(value== checked||value==="checked"){
       
//        $(tr).addClass("m-table-selected");
      
//      }
//      else{
//        $(input).removeClass("m-table-selected");
     
//      }
// }
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