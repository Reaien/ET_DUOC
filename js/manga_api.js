var urlRest = 'https://g543b81950d5fa1-gyh5bnelew8bad4e.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/mangas/mangas';

$(document).ready(function(){
    cargarDatos();
});


function cargarDatos() {
    $.get(urlRest,function(response){
            var infoProductos = response.items;
            var valor = [];
            for (i = 0; i < infoProductos.length; i++){
                valor.push(infoProductos[i].id,
                           infoProductos[i].nombre,
                           infoProductos[i].formato,
                           infoProductos[i].autor,
                           infoProductos[i].editorial,
                           infoProductos[i].idioma,
                           infoProductos[i].paginas,
                           infoProductos[i].categoria,
                           infoProductos[i].sinopsis,
                           infoProductos[i].precio,
                           infoProductos[i].descripcion);
            }
            $('#titulo_producto').html(valor[1]);
            $('#desc_formato').html("<p>"+valor[2]+"</p>");
            $('#desc_autor').html("<p>"+ valor[3] +"</p>");
            $('#desc_editorial').html("<p>"+ valor[4] +"</p>");
            $('#desc_idioma').html("<p>"+ valor[5] +"</p>");
            $('#desc_paginas').html("<p>"+ valor[6] +"</p>");
            $('#desc_categoria').html("<p>"+ valor[7] +"</p>");
            $('#desc_sinopsis').html("<p>"+ valor[8] +"</p>");
            $('#desc_precio').html(valor[9]);
            $('#desc_descripcion').html(valor[10]);
        })
    }
