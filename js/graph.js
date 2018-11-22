var rowChart_1T = dc.rowChart('#chart_1T');
var rowChart_2T = dc.rowChart('#chart_2T');

d3.csv("presidente_1T.csv").then(function (candidatosData) { 
    candidatosData.forEach(function(d) {
        d.Votos_Nominais = d.Votos_Nominais;
        d.Nome_para_Urna = d.Nome_para_Urna;
    });
    
    var ndx = crossfilter(candidatosData);
    var nameDim = ndx.dimension(function (d) { return d.Nome_para_Urna });
    var nameGroup = nameDim.group().reduceSum(function (d) { return +d.Votos_Nominais; });

    rowChart_1T
        .width(500)
        .height(300)
        .margins({top: 20, left: 10, right: 10, bottom: 20})
        .group(nameGroup)
        .dimension(nameDim)
        .ordinalColors(['#6baed6', '#3182bd', '#FF0000', '#9ecae1', '#c6dbef', '#dadaeb'])
        .label(function (d) { return d.key;})
        // .renderTitleLabel(true)
        // .title(function (d) { return '1º Turno'; })
        .elasticX(true)
        .xAxis().ticks(10);
    
    rowChart_1T.render();
});

d3.csv("presidente_2T.csv").then(function (candidatosData) { 
    candidatosData.forEach(function(d) {
        d.Votos_Nominais = d.Votos_Nominais;
        d.Nome_para_Urna = d.Nome_para_Urna;
    });
    
    var ndx = crossfilter(candidatosData);
    var nameDim = ndx.dimension(function (d) { return d.Nome_para_Urna });
    var nameGroup = nameDim.group().reduceSum(function (d) { return +d.Votos_Nominais; });

    rowChart_2T
        .width(500)
        .height(300)
        .margins({top: 20, left: 10, right: 10, bottom: 20})
        .group(nameGroup)
        .dimension(nameDim)
        .ordinalColors(['#FF0000', '#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])
        .label(function (d) { return d.key;})
        // .renderTitleLabel(true)
        // .title(function (d) { return '1º Turno'; })
        .elasticX(true)
        .xAxis().ticks(10);
    
    rowChart_2T.render();
});