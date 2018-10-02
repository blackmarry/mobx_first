FusionCharts.ready(function() {
  var salesPrediction = new FusionCharts({
    type: 'dragarea',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Translation on movement",
        "subCaption": "After sensor triggered",
        "xAxisName": "Time",
        "yAxisName": "Light %",
        "showalternatehgridcolor": "0",
        "bgAlpha": "0",
        "borderAlpha": "20",
        "usePlotGradientColor": "0",
        "canvasBorderAlpha": "0",
        "legendBorderAlpha": "0",
        "legendShadow": "0",
        "showXAxisLine": "1",
        "axisLineAlpha": "25",
        "divLineAlpha": "25",
        "showBorder": "0",
        "theme": "fusion"
      },
      "categories": [{
        "category": [{
            "label": "0"
          },
          {
            "label": "20"
          },
          {
            "label": "40"
          },
          {
            "label": "60"
          },
          {
            "label": "80"
          },
          {
            "label": "100"
          }
        ]
      }],
      "dataset": [{
          "seriesname": "Light",
          "valuePosition": "ABOVE",
          "allowDrag": "1",
          "data": [{
              "value": "80",
              "allowDrag": "1",
              "tooltext": "Sensor triggered value"
            },
            {
              "value": "60",
              "allowDrag": "1",
              "dashed": "1"
            },
            {
              "value": "40",
              "allowDrag": "1",
              "dashed": "1"
            },
            {
              "value": "30",
              "allowDrag": "1"
            },
            {
              "value": "50",
              "allowDrag": "1"
            },
            {
              "value": "10",
              "allowDrag": "1",
              "tooltext": "Default value"
            }
          ]
        }
      ]
    },
    events: {
      'dataplotdragend': function(evt, arg) {
        var dsIndx = arg && arg.datasetIndex,
          dtIndx = arg && arg.dataIndex,
          val = arg && parseInt(arg.endValue, 10);

        document.getElementById(dsIndx + '-' + dtIndx).innerHTML = val;

      },

      'datarestored': function(evtObj) {
        var ds1Values = ["80", "60", "40", "30", "50", "10"],

          update = function(arr, rowNum) {
            var i = 0,
              arrLen = arr.length;

            for (i; i < arrLen; i += 1) {
              val = arr[i];

              document.getElementById(rowNum + '-' + (i + 1)).innerHTML = val;
            }
          };

        update(ds1Values, 1);
      }
    }
  }).render();
});
