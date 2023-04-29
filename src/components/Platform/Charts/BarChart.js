import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    const canvasColor = {
      id: 'canvasColor',
      beforeDraw: (chart, args, options) => {
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
      { day: 25.08, count: 11103},
      { day: 26.08, count: 15674 },
      { day: 27.08, count: 9000 },
      { day: 28.08, count: 5900 },
    ];

    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: data.map(x => x.day),
        datasets: [{
          label: '# of Votes',
          data: data.map(x => x.count)
        }]
      },
      plugins: [canvasColor],
      options: {
        scales: {
          border: false,
          y: {
            border: {
              dash: [4, 4]
            },
            beginAtZero: true,
            max: 20000,
            ticks: {
              stepSize: 4000,
              min: 0,
              max: 20000
            },
            grid: {
              drawTicks: false,
          },
          },
          x: {
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
            enabled: true
          },
          canvasColor: {
            color: 'white'
          }
        }
      }
    });
  }, []);



  return (
    <div>
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;