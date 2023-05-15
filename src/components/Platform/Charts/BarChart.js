import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { ChartCard, ChartContainer, ChartTitle, ChartBtn, Canvas, FlexContainer, ChartBox } from '../../../styles';
import styled from 'styled-components';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    const titleTooltip = () => {
      return '';
    }

    Chart.defaults.color = "#000000";

    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: ['22.08', '23.08', '24.08', '25.08', '26.08', '27.08', '28.08'],
        datasets: [{
          data: [8950, 6443, 12000, 11103, 15674, 9000, 5900],
          fill: false,
          backgroundColor: 'rgba(247, 183, 205, 1)',
          borderRadius: 5,
        }]
      },
      options: {
        locale: 'ru-RU',
        responsive: true,
        scales: {
          y: {
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
        }
      }
    });
  }, []);

  return (

    <ChartContainer>
      <FlexContainer>
        <ChartTitle>
          Исходящие звонки
        </ChartTitle>
        <img src="/imgs/More-vert.png" alt="точки" />
      </FlexContainer>
      <ChartBtn>Отказ от подключения</ChartBtn>
      <ChartBtn>Ростов-на-Дону</ChartBtn>
      <ChartCard>
        
          <Canvas id="myChart1" ref={chartRef} />
        
      </ChartCard>
    </ChartContainer>

  );
};

export default BarChart;