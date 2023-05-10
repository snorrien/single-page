import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';

const Canvas = styled.canvas`
  height: 40vh;
`;

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    const canvasColor = {
      id: 'canvasColor',
      beforeDraw: (chart, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || 'white';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };

    const data = [
      { day: 22.08, count: 8950 },
      { day: 23.08, count: 6443 },
      { day: 24.08, count: 12000 },
      { day: 25.08, count: 11103 },
      { day: 26.08, count: 15674 },
      { day: 27.08, count: 9000 },
      { day: 28.08, count: 5900 },
    ];

    const titleTooltip = () => {
      return '';
    }

    Chart.defaults.color = "#000000";
    
    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: data.map(x => x.day),
        datasets: [{
          data: data.map(x => x.count),
          backgroundColor: 'rgba(247, 183, 205, 1)',
          borderRadius: 5,
        }]
      },
      plugins: [canvasColor],
      options: {
        locale: 'ru-RU',
        responsive: true,
        scales: {
          y: {
            maxHeight:200,
            border: {
              dash: [4, 4],
              display: false,
              
            },
            beginAtZero: true,
            max: 20000,
            ticks: {
              stepSize: 4000,
              min: 0,
              max: 20000,
             
            },
            grid: {
              drawTicks: false,
              tickColor: '#000000'
            },
          },
          x: {
            border: {
              display: false,
            },
            grid: {
              display: false,
              zeroLineColor: 'rgba(0, 255, 0, 1)',
            },
           
          },
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            bodyColor: 'rgba(17, 24, 39, 1)',
            displayColors: false,
            borderWidth: 1,
            yAlign: 'bottom',
            borderColor: 'rgba(228, 228, 231, 1)',
            caretPadding: 7,
            callbacks: {
              title: titleTooltip,
            }
          },
          canvasColor: {
            color: 'white'
          }
        }
      }
    });
  }, []);

 
  return (
      <Canvas id="myChart" ref={chartRef}></Canvas>
  );
};

export default BarChart;