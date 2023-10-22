import React from "react"
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import "./styles.css"

export const StatisticsBars = (props) => {
  const {
    type = 'XYChart',  //Puede ser XYChart, PieChart
    data = [],
    category = 'data',
    categoryTitle = 'Category',
    valueTitle = 'Value',
    value = 'data',
    useImage = false,
    image = ''
  } = props
  let chart = am4core.create("chartdiv", am4charts[type])
  chart.data = data

  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
  categoryAxis.dataFields.category = category
  categoryAxis.title.text = categoryTitle;

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
  valueAxis.title.text = valueTitle

  let series = chart.series.push(new am4charts.ColumnSeries())
  series.dataFields.valueY = value
  series.dataFields.categoryX = category

  series.name = valueTitle;
  series.columns.template.tooltipText = "Character: {categoryX}\nVisualizations: {valueY}";
  series.columns.template.fill = am4core.color("#104547"); // fill

  return (
    <div id="chartdiv" />
  )
}
