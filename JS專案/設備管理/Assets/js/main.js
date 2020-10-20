

// SVGgauge 圖表
var gauge4 = Gauge(
    document.getElementById("gauge1"), {
    max: 100,
    dialStartAngle: 180,
    dialEndAngle: -90,
    viewBox: "0 0 60 60",
    value: 50
}
);
var gauge4_2 = Gauge(
    document.getElementById("gauge2"), {
    max: 100,
    dialStartAngle: 180,
    dialEndAngle: -90,
    viewBox: "0 0 60 60",
    value: 50
}
);
var gauge4_3 = Gauge(
    document.getElementById("gauge3"), {
    max: 100,
    dialStartAngle: 180,
    dialEndAngle: -90,
    viewBox: "0 0 60 60",
    value: 50
}
);
// var gauge1 = Gauge(
//     document.getElementById("gauge1"), {
//     min: -100,
//     max: 100,
//     dialStartAngle: 180,
//     dialEndAngle: 0,
//     value: 50,
//     viewBox: "0 0 100 57",
//     color: function (value) {
//         if (value < 20) {
//             return "#5ee432";
//         } else if (value < 40) {
//             return "#fffa50";
//         } else if (value < 60) {
//             return "#f7aa38";
//         } else {
//             return "#ef4655";
//         }
//     }
// }
// );


//循環亂數值
(function loop() {
    // var value1 = Math.random() * 100;
    // gauge1.setValueAnimated(50 - value1, 3);

    var value4 = Math.random() * 100;
    gauge4.setValueAnimated(value4, 2);
    gauge4_2.setValueAnimated(value4, 2);
    gauge4_3.setValueAnimated(value4, 2);


})();


// chart 圖表
var ctx = document.getElementById('Chart1');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
            label: '電量',
            backgroundColor: 'rgb(94, 228, 50)',
            borderColor: 'rgb(94, 228, 50)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    options: {}
});

var ctx2 = document.getElementById('Chart2');
var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',

    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
            label: '電量',
            backgroundColor: 'rgb(94, 228, 50)',
            borderColor: 'rgb(94, 228, 50)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    options: {}
});

var ctx3 = document.getElementById('Chart3');
var chart3 = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'line',

    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
            label: '電量',
            backgroundColor: 'rgb(94, 228, 50)',
            borderColor: 'rgb(94, 228, 50)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    options: {}
});

$(document).ready(function () {
    $('#myTable').DataTable();
});


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
