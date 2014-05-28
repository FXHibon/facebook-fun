'use strict';

FbFriends.StatsView = Backbone.View.extend({
    events: {
    },
    initialize: function(options) {
        _.extend(this, options);
        this.friends.on('reset', this.render, this);
    },
    render: function(event) {
        this.showSexRepartition();
//    this.showTopVille();
        this.showRelationRepartition();
    },
    showSexRepartition: function() {
        var repartition = this.friends.getRepartitionSexe();
        this.$el.find(".pie-sexes").highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'Sexes',
                align: 'center',
                verticalAlign: 'middle',
                y: 50
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white',
                            textShadow: '0px 1px 2px black'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%']
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Sexes',
                    innerSize: '50%',
                    data: [
                        ['Homme', repartition["male"] || 0.0],
                        ['Femme', repartition["female"] || 0.0],
                        ['Non défini', repartition[""] || 0.0]
                    ]
                }]
        });
    },
    showRelationRepartition: function() {
        var repartition = this.friends.getRelationShipPercent();
        this.$el.find(".pie-relation").highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Relations'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                    type: 'pie',
                    data: _.pairs(repartition)
                }]
        });
    },
    
    // not yet implemented
    showTopVille: function() {
//        var data = this.friends.getTopVillesData();
//
//        this.$el.find('.pie-top-villes').highcharts({
//            chart: {
//                type: 'column'
//            },
//            title: {
//                text: 'Top 10 des villes'
//            },
//            xAxis: {
//                categories: []
//            },
//            yAxis: {
//                min: 0
//            },
//            tooltip: {
//                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//                footerFormat: '</table>',
//                shared: true,
//                useHTML: true
//            },
//            plotOptions: {
//                column: {
//                    pointPadding: 0.2,
//                    borderWidth: 0
//                }
//            },
//            series: [{
//                    name: 'Tokyo',
//                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
//
//                }, {
//                    name: 'New York',
//                    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
//
//                }, {
//                    name: 'London',
//                    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
//
//                }, {
//                    name: 'Berlin',
//                    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
//
//                }]
//        });
    }
});
