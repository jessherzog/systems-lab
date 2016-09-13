// initialize the map and set its view to our chosen geographical coordinates and a zoom level:
var mymap = L.map('mapid').setView([40.728202, -73.987877], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoieGl1eGl1eHh4IiwiYSI6ImNpdDFuM3VxYjBxem4ycHFwcHAzMG5lZHIifQ.dvASaKLVsXfV_2tN2aATMg', {
    attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapid',
    accessToken: 'pk.eyJ1IjoieGl1eGl1eHh4IiwiYSI6ImNpdDFuM3VxYjBxem4ycHFwcHAzMG5lZHIifQ.dvASaKLVsXfV_2tN2aATMg'
}).addTo(mymap);