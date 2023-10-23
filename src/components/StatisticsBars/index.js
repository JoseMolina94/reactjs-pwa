import React, { useLayoutEffect, useState, useRef } from "react"
import * as am5 from "@amcharts/amcharts5"
import * as am5xy from "@amcharts/amcharts5/xy"
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"

export const StatisticsBars = (props) => {
  const {
    data = [],
    category = 'data',
    value = 'data',
    currentSelect = null
  } = props
  const series1Ref = useRef(null)
  const xAxisRef = useRef(null)

  useLayoutEffect(() => {
    /* Chart code */
    // Create root element
    let root = am5.Root.new("chartdiv");


    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create chart
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));


    // Create axes
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30
    })
    xRenderer.labels.template.setAll({
      visible: false
    });

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: category,
      renderer: xRenderer,
      bullet: function(root, axis, dataItem) {
        return am5xy.AxisBullet.new(root, {
          location: 0.5,
          sprite: am5.Picture.new(root, {
            width: 24,
            height: 24,
            centerX: am5.p50,
            src: dataItem.dataContext.imageSettings.src
          })
        });
      }
    }));

    xRenderer.grid.template.setAll({
      location: 1
    })

    xRenderer.labels.template.setAll({
      paddingTop: 20
    });

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));

    // Add series
    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: value,
      categoryXField: category
    }));

    series.columns.template.setAll({
      tooltipText: "{categoryX}: {valueY}",
      tooltipY: 0,
      strokeOpacity: 0
    });

    series.data.setAll(data);


    // Make stuff animate on load
    series.appear();
    chart.appear(1000, 100);

    xAxisRef.current = xAxis
    series1Ref.current = series

    return () => {
      root.dispose()
    }
  }, [])

  useLayoutEffect(() => {
    xAxisRef.current.data.setAll(data);
    series1Ref.current.data.setAll(data);
  }, [data]);

  return (
    <div id="chartdiv" style={{ width: '100%', height: '250px', overflow: 'auto' }} />
  )
}
