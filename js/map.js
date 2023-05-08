function initMap(){
    var coord = {lat: -33.44013158082917,lng:-70.74758217301418};
    var map = new google.maps.Map(document.getElementById("mapa"),{
        zoom: 13,
        center: coord,
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}