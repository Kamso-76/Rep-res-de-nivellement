var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mailles_1 = new ol.format.GeoJSON();
var features_Mailles_1 = format_Mailles_1.readFeatures(json_Mailles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mailles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mailles_1.addFeatures(features_Mailles_1);
var lyr_Mailles_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mailles_1, 
                style: style_Mailles_1,
                popuplayertitle: 'Mailles',
                interactive: false,
                title: '<img src="styles/legend/Mailles_1.png" /> Mailles'
            });
var format_Represdenivellement_2 = new ol.format.GeoJSON();
var features_Represdenivellement_2 = format_Represdenivellement_2.readFeatures(json_Represdenivellement_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Represdenivellement_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Represdenivellement_2.addFeatures(features_Represdenivellement_2);
cluster_Represdenivellement_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Represdenivellement_2
});
var lyr_Represdenivellement_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Represdenivellement_2, 
                style: style_Represdenivellement_2,
                popuplayertitle: 'Repères de nivellement',
                interactive: true,
                title: '<img src="styles/legend/Represdenivellement_2.png" /> Repères de nivellement'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Mailles_1.setVisible(true);lyr_Represdenivellement_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Mailles_1,lyr_Represdenivellement_2];
lyr_Mailles_1.set('fieldAliases', {'id': 'id', 'Numero': 'Numero', });
lyr_Represdenivellement_2.set('fieldAliases', {'Nom': 'Nom', 'X': 'X', 'Y': 'Y', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Date': 'Date', 'Emplacemen': 'Emplacemen', });
lyr_Mailles_1.set('fieldImages', {'id': 'TextEdit', 'Numero': 'TextEdit', });
lyr_Represdenivellement_2.set('fieldImages', {'Nom': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Date': 'TextEdit', 'Emplacemen': 'TextEdit', });
lyr_Mailles_1.set('fieldLabels', {'id': 'no label', 'Numero': 'no label', });
lyr_Represdenivellement_2.set('fieldLabels', {'Nom': 'no label', 'X': 'no label', 'Y': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Date': 'no label', 'Emplacemen': 'no label', });
lyr_Represdenivellement_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});