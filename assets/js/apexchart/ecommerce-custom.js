/*=======/Total Sell Bar Spark line/=======*/
const totalSellBarChart = {
  series: [
    {
      data: [40, 25, 60, 15, 40, 55, 35],
    },
    {
      data: [60, 50, 15, 35, 55, 25, 40],
    },
  ],
  chart: {
    type: 'bar',
    width: '100%',
    height: 75,
    sparkline: {
      enabled: true,
    },
    stacked: true,
  },

  grid: {
    padding: {
      top: -15,
      right: 0,
      bottom: 0,
      left: -5,
    },
  },


  plotOptions: {
    bar: {
      columnWidth: '40%',
      borderRadius: 5,
    },
  },

  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  colors: ['rgba(var(--primary),1)', '#F5F6F9'],
  fill: {
    type: 'solid',
    opacity: 1,
  },
  tooltip: toolTipMini,
  responsive: [{
    breakpoint: 1700,
    options: {
      chart: {
        height: 86,
      },
    },
  },
  {
    breakpoint: 1400,
    options: {
      plotOptions: {
        bar: {
          columnWidth: '40%',
          borderRadius: 5,
        },
      },
    },
  },
  {
    breakpoint: 376,
    options: {
      chart: {
        height: 50,
      },
      plotOptions: {
        bar: {
          columnWidth: '60%',
          borderRadius: 5,
        },
      },
    },
  },
  ],
};

const totalSellBarChartEl = new ApexCharts(document.querySelector('#totalSellBarChart'), totalSellBarChart);
totalSellBarChartEl.render();

// /*=======/Total Customer Line Chart/=======*/

var totalCustomerLineChart = {
  series: [{
    data: [34, 44, 54, 21, 12, 43]
  }],
  chart: {
    type: 'line',
    width: '100%',
    height: 120,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: 'stepline',
  },
  dataLabels: {
    enabled: false
  },

  colors: ['rgba(var(--secondary),1)'],

  grid: {
    margin: {
      top: -10,
      right: 10,
      bottom: -10,
      left: 0,
    },
  },

  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    lines: {
      show: false,
    },
  },
  yaxis: {
    lines: {
      show: false,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },

  markers: {
    hover: {
      sizeOffset: 4
    }
  }
};

var totalCustomerLineChartEl = new ApexCharts(document.querySelector("#totalCustomerLineChart"), totalCustomerLineChart);
totalCustomerLineChartEl.render();

/*=======/Radial Chart/=======*/
const totalExpensesLineChart = {
  series: [60],

  chart: {
    type: 'radialBar',
    height: 100,
    offsetY: 0,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
      offsetY: 0,
      hollow: {
        size: '40%',
      },
      track: {
        background: 'var(--content)',
        strokeWidth: '90%',
        startAngle: 0,
        endAngle: 360,
      },

      dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        name: {
          show: false,
        },
        value: {
          fontSize: '16px',
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 600,
          offsetY: 5,
          color: ['var(--content)']
        },
      },
    },
  },
  colors: ['var(--title)'],
  grid: {
    padding: {
      top: -15,
      bottom: -15,
      left: 0,
      right: 0,
    },
  },
  stroke: {
    lineCap: 'round',
  },
  responsive: [{
    breakpoint: 1700,
    options: {
      chart: {
        height: 115,
      },

      plotOptions: {
        radialBar: {
          hollow: {
            size: '48%',
          },

          dataLabels: {
            value: {
              fontSize: '14px',
            },
          },
        },
      },
    },
  },
  {
    breakpoint: 1600,
    options: {
      chart: {
        height: 110,
      },
    },
  },
  {
    breakpoint: 1460,
    options: {
      chart: {
        height: 100,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '42%',
          },
          dataLabels: {
            value: {
              fontSize: '13px',
            },
          },
        },
      },
    },
  },
  {
    breakpoint: 1400,
    options: {
      chart: {
        height: 120,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
          dataLabels: {
            value: {
              fontSize: '18px',
            },
          },
        },
      },
    },
  },
  {
    breakpoint: 876,
    options: {
      chart: {
        height: 110,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%',
          },
          dataLabels: {
            value: {
              fontSize: '18px',
            },
          },
        },
      },
    },
  },
  {
    breakpoint: 376,
    options: {
      chart: {
        height: 90,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '40%',
          },

          dataLabels: {
            value: {
              fontSize: '14px',
            },
          },
        },
      },
    },
  },
  ],
};

const totalExpensesLineChartEl = new ApexCharts(document.querySelector('#totalExpensesLineChart'), totalExpensesLineChart);
totalExpensesLineChartEl.render();

/*=======/Radial Chart/=======*/
const customerRadialchart = {
  chart: {
    height: 330,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: 90,
      endAngle: -360,
      dataLabels: {
        show: true,
        name: {
          ...fontCommon,
          color: undefined,
        },
        value: {
          ...fontCommon,
          color: 'var(--content)',
        },
        total: {
          show: true,
          label: 'Total',
          color: 'var(--title)',
          formatter: function (w) {
            return 249;
          },
        },
      },
      track: {
        background: 'var(--content)',
        strokeWidth: '90%',
        startAngle: -100,
        endAngle: 100,
        opacity: 0.2,
      },
    },
  },
  stroke: {
    lineCap: 'round',
  },
  series: [70, 55, 40],
  colors: ['rgba(var(--primary),1)', 'rgba(var(--secondary), 1)', 'var(--title)',],
  responsive: [{
    breakpoint: 675,
    options: {
      chart: {
        height: 280,
      },
    },
  },
  {
    breakpoint: 425,
    options: {
      chart: {
        height: 260,
      },
      plotOptions: {
        radar: {
          size: 50,
        },
      },
    },
  },
  {
    breakpoint: 375,
    options: {
      chart: {
        height: 220,
      },
    },
  },
  ],
};


/*=======/Sales Summary ( Jun 2023)/=======*/

var salesSummaryChart = { 
  series: [{
    name: 'Orders',
    data: [6000, 6500, 6800, 6500, 6800, 6500, 6650, 6500, 5900, 6000]
  }, {
    name: 'Sales',
    data: [5000, 5500, 5800, 5500, 6500, 5600, 6350, 6000, 5500, 5800]
  }], 
  colors: ['rgba(var(--secondary))', 'rgba(var(--primary))'], 
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      tools: {
        zoom: false,
        zoomin: false,
        zoomout: false,
        reset: false,
        pan: false,
        download: false, 
      },
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  }, 
  fill:{
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      opacityFrom: 1,
      opacityTo: 0
    } 
  },
  yaxis: {
    // type: 'Sales',
    // categories: ["$0" , "$2,000" ,"$4,000" , "$6,000" ,"$8,000", '$10,000']

    // min: 0,
    // max: 10000,  
    // steps: 2000,

    labels: {
      // formatter: (value) => {
      //   let gaurav = value % 2 == 0 ? gaurav : value
      //   console.log("value", value % 2 == 0 ? value : '11'); 
      //   return `${value}$`;
      // }, 
      // tickAmount: Math.ceil(Math.max(...data)/2),
      formatter: function(val) { if (val % 2 !== 0) { return ''} else { return val } }                                                                                                                      
    },
  },
  legend: {
    show: false,
    // horizontalAlign: 'right',
    // position: 'top',
    // margin:{
    //   top: -30,
    // }
  },
  xaxis: { 
    type: 'datetime', 
    categories: ["Jan 01", "Jan 02", "Jan 03", "Jan 04", "Jan 05", "Jan 06", "Jan 07", "Jan 08", "Jan 09", "Jan 10"]
  },
  tooltip: {
    custom: function({
      series,
      seriesIndex,
      dataPointIndex,
    }) {
      return '<div class="apex-tooltip px-4 py-1 relative "> '+'<style>.after-before{position: absolute; overflow:hidden; background-color:#eff2f7; width: 30px; height: 16px;left: 50%;transform: translateX(-50%);top: 100%;} .after-before:before{ content:""; width:27px; height: 50px; background-color:white; border-radius: 50%; position: absolute; top: 0; left: -12px; }.after-before:after{ content:""; width:27px; height: 50px; background-color:white; border-radius: 50%; position: absolute; top: 0; right: -12px; } </style> <div class="after-before" >   </div>' + '<span class="font-bold">' + '$' + series[seriesIndex][dataPointIndex] + '</span>'  + '<br>' + '<span class="align-middle text-content">' + 'Orders' + '</span>' + '</div>';
    },  
  }, 
};

var salesSummaryChartEl = new ApexCharts(document.querySelector("#salesSummaryChart"), salesSummaryChart);
salesSummaryChartEl.render(); 

/*=======/Orders Status (May 10)/=======*/
const OrdersStatus = {
    series: [
      {
        data: [40, 25, 60, 15, 40, 55, 35],
      },
      {
        data: [60, 50, 15, 35, 55, 25, 40],
      },
    ],
    chart: {
      type: 'bar',
      // width: '100%',
      // height: 75,
      sparkline: {
        enabled: true,
      },
      stacked: true,
    },
  
    grid: {
      padding: {
        top: -15,
        right: 0,
        bottom: 0,
        left: -5,
      },
    },
  
  
    plotOptions: {
      bar: {
        columnWidth: '25%',
        borderRadius: 5,
      },
    },
  
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    colors: ['rgba(var(--primary),1)', '#F5F6F9','rgba(var(--secondary),1) ','#F5F6F9', 'rgba(var(--dark),1)','#F5F6F9' ],
    fill: {
      type: 'solid', 
      opacity: 1,
    },
    tooltip: toolTipMini,
    responsive: [{
      breakpoint: 1700,
      options: {
        chart: {
          height: 86,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '25%',
            borderRadius: 5,
          },
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 50,
        },
        plotOptions: {
          bar: {
            columnWidth: '60%',
            borderRadius: 5,
          },
        },
      },
    },
    ],
  };
  
  const OrdersStatusEl = new ApexCharts(document.querySelector('#OrdersStatus'), OrdersStatus);
  OrdersStatusEl.render();  
  
