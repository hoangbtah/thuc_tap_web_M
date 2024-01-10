$(document).ready(function() {
    // thưc hiện load dữ liệu 
    //1 gọi api lấy dữ liệu 
    // 2 thực hiện binding dữ liệu lên UI
    $.ajax({
      type: "GET",
      url:  "https://cukcuk.manhnv.net/api/v1/Employees",
      success: function (response) {
        debugger;
        for (let index=0;index <40;index++)
        {
          var el=`<tr>
          <td><input type="checkbox"></td>
           <td class="m-content-left">01</td>
           <td class="m-content-left">Bùi Việt Hoàng</td>
           <td class="m-content-left">NAM</td>
           <td class="m-content-center">18/08/2002</td>
           <td class="m-content-right" >56789</td>
           <td>Nhân viên</td>
           <td>Vận hành tại hà nội</td>
           <td></td>
           <td></td>
           <td></td>
           <td>Sửa
              <select name="" id="">
                  <option value="">
                      
                  </option>
                  <option value="">
                      Nhân bản
                  </option>
                  <option value="">
                      Xóa
                  </option>
                  <option value="">
                      Ngừng sử dụng
                  </option>
              </select>
           </td>
       </tr>`;
       $("table#tblEmployee tbody").append(el);
        }
       
      },
      error: function(response){
        debugger;
      }
    });

    // thực hiên gán các sự kiện
    // nhấn thêm mới nv.ne/api/v1/Employeest
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