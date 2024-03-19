import React from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const options = {
    colors: ["#ccc", "#3c4ccf", "#02a499"],
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 0.1,
    },
    grid: {
      borderColor: "#f8f8fa",
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["CSE", "IT", "AIDS", "AIML", "ECE", "EEE", "MECH"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 400,
      tickAmount: 8,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: "AEC",
      data: [0, 50, 100, 250, 300, 255, 300],
    },
    {
      name: "ACET",
      data: [50, 45, 150, 300, 60, 200, 150],
    },
    {
      name: "ACOE",
      data: [100, 50, 90, 200, 300, 150, 100],
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height="290"
    />
  );
};

export default AreaChart;
