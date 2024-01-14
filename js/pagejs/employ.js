$(document).ready(function() {
    // thưc hiện load dữ liệu 
    //1 gọi api lấy dữ liệu 
    // loading dữ liệu
    loadData();
    var forMode="edit";
    var employForUpdate=null;
    // thực hiên gán các sự kiện
    // nhấn vào nút thêm mới nhân viên
   add_employee();
    //4 ẩn form thêm mới bằng nút X
    close_form_add();
    // ấn buttom show để xem chức năng nút bên cạnh nút sửa 
    show_options_employee();
  //  ấn vào nút xóa để ẩn chức năng
  // $(document).on("click","#hideoption",function(){
  //   $("#optionlist").hide();
  // })
  // ấn vào nút hủy của formm thêm mới nhân viên để ẩn form 
  click_cancle_for_add_employee();
    
    // 5 nhấn đúp chuột khi chọn dòng để hiển thị form 
    double_click_row();
    // 6 validate dữ liệu khi ấn lưu(cất và thêm )
    click_save_add_employee();
    // 7 các ô dữ liệu yêu cầu nhập 
     validate_required();
    // 8 khi tích vào checkbox thì dòng đó được thay đổi background
    click_input_checkbox();
    // 9 ấn vào nút xóa hiện thị form xác nhận xóa nhân viên
    showDialogConfirmDelete();
    // 10 ấn vào nút không để tắt dialog xác nhận xóa 
    HideDialogConfirmDelete();
})
//0 validate dữ liệu không cho để trống dữ liệu yêu cầu
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
// 1 loading dữ liệu
function loadData(){
  $("table#tblEmployee tbody").empty();
  $(".m-loading").show();
  // 2 thực hiện binding dữ liệu lên UI
  $.ajax({
    type: "GET",
    url:  "https://cukcuk.manhnv.net/api/v1/Employees",
    success: function (response) {
      for(const employee of response){
        let employeeCode= employee.EmployeeCode;
        let employName= employee.FullName;
        let employGender= employee.GenderName;
        let employeedob= employee.DateOfBirth;
        let employeeCMND= employee.PersonalTaxCode;
        let employeePosition= employee.PositionName;
        let employeeDepartment= employee.DepartmentName;
        // định dạng ngày tháng hiển thị ra là ngày tháng năm
        if(employeedob)
        {
          employeedob= new Date(employeedob);
          let date= employeedob.getDate();
          date =date<10 ?  `0${date}`:date;
          // lấy ngày 
          let month= employeedob.getMonth()+1;
          // lấy tháng
          month= month <10 ? `0${month}`:month;
          let year = employeedob.getFullYear();
          //lấy giá trị là ngày tháng năm
          employeedob= `${date}/${month}/${year}`;
        }
        else{
          employeedob="";
        }
        var el=$(`<tr>
        <td class="m-content-center" ><input type="checkbox" class="m-table-select"></td>
         <td class="m-content-left">${employeeCode}</td>
         <td class="m-content-left">${employName}</td>
         <td class="m-content-left">${employGender}</td>
         <td class="m-content-center">${employeedob}</td>
         <td class="m-content-left" >${employeeCMND}</td>
         <td class="m-content-left">${employeePosition}</td>
         <td>${employeeDepartment}</td>
         <td></td>
         <td></td>
         <td></td>
         <td class="m-content-center">
         <div class="m-show-options m-content-center">
                <div class="m-btn-show">
                   <div><label for="">Sửa</label></div>
                    <div><button id="m-show" class="m-show m-icon-show-options">
                   </button></div>
                </div> 
               
         </div>
        
         
         </td>
     </tr>`);
     el.data("entity",employee);
     $("table#tblEmployee tbody").append(el);
     $(".m-loading").hide();
      }
    },
    error: function(response){
      debugger;
    }
  });
}
// 2 ấn vào nút x bên phải phía trên của form thêm mới để ẩn 
function close_form_add(){
  $("#dialog-close").click(function(){
    // ẩn form thêm mới 
    $("#dialogadd").hide();
  })
}
// 3 ấn vào nút thêm mới nhân viên để hiển thị form 
function add_employee(){
  $("#btn-add").click(function(){
    forMode="add";
    // 3 hiển thị form thêm mới 
    $("#dialogadd").show();
    // focus vào ô nhập liệu đầu tiên
    $("#txtEmployeeCode").focus();
  })
}
// 4 show chức năng tùy chỉnh nhân viên 
function show_options_employee(){
  $(document).on('click', '.m-show', function() {
    var buttonPosition = $(this).offset();
    $('.m-btn-options-list').css({
      'position': 'absolute',
      'top': buttonPosition.top + 'px',
      'left': (buttonPosition.left-100) + 'px',
    });
    // console.log("Top: " + buttonPosition.top);
    // console.log("left"+buttonPosition.left);
    $("#optionlist").show();
  })
}
// 5 click button hủy trên form thêm mới để ẩn form 
function click_cancle_for_add_employee(){
  $(document).on("click","#m-btn-add-cancle",function(){
    $("#dialogadd").hide();
  })
}
// 6 double click vào dòng trong bảng để hiện thị form thêm mới với dữ liệu của dong
function double_click_row(){
  $(".m-table").on("dblclick","tr",function(){
    forMode="edit";
    // lấy dữ liệu ở dòng lên form 
      let employee= $(this).data("entity");
      employForUpdate=employee.EmployeeId;
      $("#txtEmployeeCode").val(employee.EmployeeCode);
      $("#txtEmployeeName").val(employee.FullName);
      $("#dtDateOfBrith").val(employee.DateOfBirth);
      // hiển thị form 
      $("#dialogadd").show();
  })
}
// khi ấn nút cất và thêm của form thêm mới thì validate dữ liệu 
function click_save_add_employee(){
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
    let gender= $("#txtEmployeeCode").val();
    let donVi=$("#cboDonVi").val();
    let soCMND=$("#txtsoCMND").val();
    let ngayCap=$("#ngayCap").val();
    let eployeePosition=$("#txtPosition").val();
    let noiCap=$("#txtNoiCap").val();
    let employeeAddress=$("#txtAddress").val();
    let employeePhoneNumber=$("#txtPhoneNumber").val();
    let employeePhone=$("#txtPhone").val();
    let employeeEmail=$("#txtEmail").val();
    let employeeBankAcount=$("#txtAccountBank").val();
    let employeeBankName=$("#txtBankName").val();
    let chiNhanh=$("#txtChiNhanh").val();
    // let salary= $("#txtSalary").val();
    if(employeeCode== null||employeeCode===""){
      // alert("tên sinh viên không được để trống");
    }
    if(dateOfBrith){
      dateOfBrith=new Date(dateOfBrith);
    }
    if(dateOfBrith> new Date())
    {
      alert("Ngày sinh không được lớn hơn ngày hiện tại");
    }

    // 2 build object
    let employee={
      "EmployeeCode":employeeCode,
      "FullName":employeeName,
      "DateOfBirth":dateOfBrith,
      "PersonalTaxCode":soCMND,
      "PositionName":eployeePosition,
      "DepartmentName":donVi
    }

    // 3 gọi api thực hiện thêm mới
     // hiển thị loading 
     $(".m-loading").show();
     if(forMode=="add")
     {
      $.ajax({
        type: "POST",
        url: "https://cukcuk.manhnv.net/api/v1/Employees",
        data: JSON.stringify(employee),
        dataType: "json",
        contentType:"application/json",
        success: function (response) {
           // sau khi thực hiên thêm xong thì ẩn loading , ẩn form chi tiết, loading lại dữ liệu
          $(".m-loading").hide();
          $("#dialogadd").hide();
          loadData();
        },
        error:function (response) {
            // alert(response.responseJSON.userMsg);
            $(".m-loading").hide();
          }
      });
     }
     else{
      $.ajax({
        type: "PUT",
        url: `https://cukcuk.manhnv.net/api/v1/Employees/${employForUpdate}`,
        data: JSON.stringify(employee),
        dataType: "json",
        contentType:"application/json",
        success: function (response) {
           // sau khi thực hiên thêm xong thì ẩn loading , ẩn form chi tiết, loading lại dữ liệu
          $(".m-loading").hide();
          $("#dialogadd").hide();
          loadData();
        },
        error:function (response) {
           // alert(response.responseJSON.userMsg);
            $(".m-loading").hide();
          }
      });
     }
    
    // sau khi thực hiên thêm xong thì ẩn loading , ẩn form chi tiết, loading lại dữ liệu

    //hiển thị trạng thái lỗi validate khi không nhập vào các trường bắt buộc
   
  })
}
// 7 validate dữ liêu ở những ô bắt buộc 
function validate_required(){
  $("input[required]").click(function(){
    var me=this;
    validateInputRequired(me);
   })
}
// 8 click input checkbox để đổi background dòng đó
function click_input_checkbox(){
  $(document).on('change', '.m-table-select', function() {
    // Find the closest 'tr' (table row) and toggle the 'selected-row' class
    $(this).closest('tr').toggleClass('m-table-selected', this.checked);
  });
}
// 9 click vào nút xóa hiển thị thông báo xác nhận xóa nhân viên 
function showDialogConfirmDelete(){
  // show dialog confirm-del
  $("#hideoption").click(function(){
      $("#show-dialog-confirm-del").show();
  })
}
// 10 click vào không để tắt dialog xác nhận xóa
function HideDialogConfirmDelete(){
  // hide dialog confirm-del
  $("#m-dialog-confirm-del-no").click(function(){
      $("#show-dialog-confirm-del").hide();
  })
}

