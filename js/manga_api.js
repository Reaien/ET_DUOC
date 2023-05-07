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
                           infoProductos[i].sinopsis);
            }
            $('#titulo_producto').html(valor[1]);
            $('#desc_formato').html("<p>"+valor[2]+"</p>");
        })
    }
