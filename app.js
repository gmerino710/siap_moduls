$(document).ready(function () {
    let opcionA = $('#opcionA');
    let opcionB = $('#opcionB');
    let opcionC = $('#opcionC');
    let opcionD = $('#opcionD')
    let opcionE = $('#opcionE')
    let opciones=$('.opciones');
    let cont_a =$('#cont_a');
    let cont_b =$('#cont_b');
    let cont_c =$('#cont_c');
    let cont_total =$('#cont_t');
    var a =0;
    var b =0;
    var c =0;
    var opcion_alertA =$('#opcion_alertA');
    var opcion_alertB =$('#opcion_alertB');
    var opcion_alertC =$('#opcion_alertC');
    var opcion_alert = $('.opcion_alert');
    var total_contos =1;
    var limit =5;
    opcion_alert.hide();

   /* opciones.select2({
        placeholder: "Seleccione ",
        allowClear: true
    });*/

    opcionA.change(function (e) { 
        e.preventDefault();
        value =$(this).val();
        change_colors($(this));
        cambios(value);
    });
    opcionB.change(function (e) { 
        e.preventDefault();
        value =$(this).val();
        change_colors($(this));
        cambios(value);
    });
    opcionC.change(function (e) { 
        e.preventDefault();
        value =$(this).val();
        change_colors($(this));
        cambios(value);
    });

    opcionD.change(function (e) { 
        e.preventDefault();
        value =$(this).val();
        change_colors($(this));
        cambios(value);
    });

    opcionE.change(function (e) { 
        e.preventDefault();
        value =$(this).val();
        change_colors($(this));
        cambios(value);
    });

    function cambios(value){
        cont_total.html(total_contos);
        if (value=='A') {
            a = 1+a;
            opcion_alertA.show();
            opcion_alertA.css('color','green');
            //console.log(a);
            if (a>limit) {
             return false;
          }else{
             cont_a.html(a);
          }
        }
        else if (value=='B'){
         b = 1+b;
         opcion_alertB.show();
         opcion_alertB.css('color','yellow');
         if (b>limit) {
          return false;
         }else{
             cont_b.html(b);
         }
      }
      else if (value=='C') {
             c = 1+c;
             opcion_alertC.show();
             opcion_alertC.css('color','red');
             if (c>limit) {
              return false;
             }else{
                 cont_c.html(c);
             }
     }
        total_contos =a+b+c;
       // console.log(options_array);
        if (total_contos>limit) {
            alert('NO puede hacer mas de 5 selecciones');
            console.log(value);
            a =0;
            b=0;
            c =0;
            cont_a.html(a);
            cont_b.html(b)
            cont_c.html(c)
            opcion_alertA.hide();
            opcion_alertB.hide();
            opcion_alertC.hide();
            total_contos=0;
            cont_total.html(total_contos);
            opciones.val(null).trigger('change');
            opciones.removeAttr('style');
        }else{
            cont_total.html(total_contos);
        }

        
     }
     function change_colors(element) { 
        console.log(element);
        console.log(element.val());
        if (element.val() == 'A') {
            element.css({'background-color':'green','color':'white'});
        }if (element.val() == 'B') {
            element.css({'background-color':'yellow','color':'white'});
        }if (element.val() == 'C') {
            element.css({'background-color':'red','color':'white'});
        }
    }

});


