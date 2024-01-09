$(document).ready(function() {
    // thưc hiện load dữ liệu 
    // gọi api lấy dữ liệu 
    // thực hiên gán các sự kiện
    // nhấn thêm mới 
    // console.log("them moi");
    $("#btn-add").click(function(){
      // hiển thị form thêm mới 
      $("#dialogadd").show();
      // focus vào ô nhập liệu đầu tiên
      $("#txtEmployeeCode").focus();
    })
    // ẩn form 
    $("#dialog-close").click(function(){
      // hiển thị form thêm mới 
      $("#dialogadd").hide();
    })
    // nhấn đúp chuột khi chọn dòng để hiển thị form 
    $(".m-table tr").dblclick(function(){
      $("#dialogadd").show();
    })
    //validate dữ liệu khi ấn lưu
    $("#btnSave").click(function(){
      //validate dữ liệu
      //1 họ tên không được để trống
      // mã nhân viên không được để trống
      // ngay sinh không được lớn hơn ngày hiện tại
      // email phải đúng định dạng
      // tiền lương phải là số
      let employeeCode= $("#txtEmployeeCode").val();
      let employeeName= $("#txtEmployeeName").val();
      let dateOfBrith= $("#dtDateOfBrith").val();
      let salary= $("#txtSalary").val();
      if(employeeCode== null||employeeCode===""){
        // alert("tên sinh viên không được để trống");
      }
      if(dateOfBrith){
        dateOfBrith=new Date(dateOfBrith);
      }
      if(dateOfBrith> new Date())
      {
        // alert("Ngày sinh không được lớn hơn ngày hiện tại");
      }
      //hiển thị trạng thái lỗi validate khi không nhập vào các trường bắt buộc
     
    })
    $("input[required]").blur(function(){
     var me=this;
     validateInputRequired(me);
    })
})
function validateInputRequired(input){
  var me=this;
  let value= $(input).val();
      if(value== null||value===""){
        
        $(input).addClass("m-input-error");
        $(input).attr("title","Thông tin này không được để trống");
      }
      else{
        $(input).removeClass("m-input-error");
      
      }
    

}
// console.log("hello");
// document.getElementById("show-dialog").addEventListener("click",function(){
//     var toastBox= document.getElementsByClassName("m-dialog")
//    toastBox[0].style.display="block";
//    setTimeout(()=>{
//     toastBox[0].style.display="none";
//    },3000
//    );
//  })