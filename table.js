$(document).ready(function () {

   var btn_hidratacion = $('#new_options_hidratacion');
   var tb_hidratacion =$('#tb_hidratacion');

    btn_hidratacion.click(function (e) { 
        e.preventDefault();
        data =[0,1,2,3,4,5];
       insert_nuvas_opc_col(tb_hidratacion,data)
       //tb_hidratacion.addClass('CSSTableGenerator');
    });


    function insert_nuvas_opc_col(table,data) {
        console.log(table);
        console.log(data);
        table.addClass('CSSTableGenerator');
        $("#tb_hidratacion>tbody>tr>td" ).css( "border", "3px double red" );
      }
})