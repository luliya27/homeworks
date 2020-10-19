// function initMap() {
//     const myLatLng = { lat: -25.363, lng: 131.044 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: myLatLng,
//     });
//     new google.maps.Marker({
//         position: myLatLng,
//         map,
//         title: "Hello World!",
//     });
// }

$(document).ready( function () {
    $('#myTable').DataTable();
} );

function initMap() {
    // 座標位置
    var myLatLng = {
            lat: 25.0415956,
            lng: 121.5341098
        },
        map = new google.maps.Map(document.getElementById("map"), {
            center: myLatLng, //顯示座標位置 
            zoom: 8
        });

    map.data.loadGeoJson("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json", null,
        function (features) {

        });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '標記'
    });

    var icon_m = 'img';
    var icons = {
        my_point: {
            icon: icon_m + '/icons8-errow.png'
        },
        h_mask: {
            icon: icon_m + '/icons8-mask.png'
        },
        m_mask: {
            icon: icon_m + '/icons8-errow.png'
        }
    }
    marker.setMap(map); //添加座標
}
