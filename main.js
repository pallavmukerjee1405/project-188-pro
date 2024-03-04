let latitude='26.783504033672404', longitude='80.99630910507764';

mapboxgl.accessToken='pk.eyJ1Ijoic2FuaWFkYW5pc2htYWRvbyIsImEiOiJjbGhqajcxanAwM21oM2VvZG41ZjdwZHJ2In0.09yFNwxloomdktribzYOTg';

var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:1
});

map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
);

var img1=document.querySelector("#amber");

var marker1=new mapboxgl.Marker({
    element:img1
}).setLngLat([75.78726016699184,26.912663181910883]).addTo(map);

var img2=document.querySelector("#gateway");

var marker2=new mapboxgl.Marker({
    element:img2
}).setLngLat([72.83461138023326,18.92222765952163]).addTo(map);

var img3=document.querySelector("#gate");

var marker3=new mapboxgl.Marker({
    element:img3
}).setLngLat([77.22950969589165,28.613100347058584]).addTo(map);

var img4=document.querySelector("#lotus");

var marker4=new mapboxgl.Marker({
    element:img4
}).setLngLat([77.25886931123281,28.553689877441894]).addTo(map);

var img5=document.querySelector("#victoria");

var marker5=new mapboxgl.Marker({
    element:img5
}).setLngLat([88.34260071102362,22.54505590273728]).addTo(map);

var img6=document.querySelector("#taj");

var marker6=new mapboxgl.Marker({
    element:img6
}).setLngLat([78.04216365350905,27.175326122391848]).addTo(map);

var img7=document.querySelector("#sliberty");

var marker7=new mapboxgl.Marker({
    element:img7
}).setLngLat([-74.04415708080785,40.689412075427086]).addTo(map);

var img8=document.querySelector("#etower");

var marker8=new mapboxgl.Marker({
    element:img8
}).setLngLat([2.294449110401512,48.858518304726736]).addTo(map);

var img9=document.querySelector("#pisa");

var marker9=new mapboxgl.Marker({
    element:img9
}).setLngLat([10.396586267773644,43.72320784020755]).addTo(map);

var img10=document.querySelector("#christ");

var marker10=new mapboxgl.Marker({
    element:img10
}).setLngLat([-43.21047647547114,-22.951708510402163]).addTo(map);

var img11=document.querySelector("#machu");

var marker11=new mapboxgl.Marker({
    element:img11
}).setLngLat([-72.54532647756687,-13.16291671963622]).addTo(map);

var img12=document.querySelector("#petra");

var marker12=new mapboxgl.Marker({
    element:img12
}).setLngLat([35.47980744737909,30.322477474733837]).addTo(map);

var img13=document.querySelector("#gwchina");

var marker13=new mapboxgl.Marker({
    element:img13
}).setLngLat([116.5703427099239,40.432144500849155]).addTo(map);

var img14=document.querySelector("#wpalace");

var marker14=new mapboxgl.Marker({
    element:img14
}).setLngLat([30.313806926471088,59.9404763860303]).addTo(map);

var img15=document.querySelector("#bben");

var marker15=new mapboxgl.Marker({
    element:img15
}).setLngLat([-0.12462540292710678,51.50084938916214]).addTo(map);

var img16=document.querySelector("#colosseum");

var marker16=new mapboxgl.Marker({
    element:img16
}).setLngLat([12.492209438837326,41.8904817225617]).addTo(map);

var img17=document.querySelector("#citza");

var marker17=new mapboxgl.Marker({
    element:img17
}).setLngLat([-88.56830910437525,20.679424833571005]).addTo(map);

var img18=document.querySelector("#giza");

var marker18=new mapboxgl.Marker({
    element:img18
}).setLngLat([31.13417240943804,29.979347049285398]).addTo(map);

