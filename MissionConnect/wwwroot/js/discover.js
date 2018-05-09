$(document).ready(function () {

    $.getJSON('/js/missionconnect-data.json', function (data) {
        console.log(data);
        var fhu = new google.maps.LatLng(39.0072516,-94.5316662);
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: fhu
        });

        for( var i=0; i < data.CurrentMissionaries.length; i++) {
            var m = data.CurrentMissionaries[i];
            var latLng = new google.maps.LatLng( m.Lat, m.Long);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map
            });
        }
      });

});