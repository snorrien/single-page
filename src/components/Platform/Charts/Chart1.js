import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const ChartWrapper = styled.div`
width: 645px;
height: 398px;
margin:10px;
`;

const Chart1 = () => {
  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
    scales: {
      y: {
        ticks: {
          stepSize: 4000,
          min: 0,
          max: 20000
        }
      },
    },

    plugins: {
      legend: {
        labels: {
          color: 'black'
        }
      }
    },

  };

  const data = {
    labels: ['22.08', '23.08', '24.08', '25.08', '26.08', '27.08', '28.08'],
    datasets: [
      {
        label: 'Исходящие звонки',
        data: [3600, 5000, 10500, 12000, 8700, 3824, 1650],
        fill: false,
        borderColor: 'rgba(79, 70, 229, 1)',
        tension: 0.1
      },
      {
        label: 'Входящие звонки',
        data: [11500, 10027, 19000, 16500, 21000, 9700, 7000],
        fill: false,

        borderColor: 'rgba(234, 164, 58, 1)',
        tension: 0.1
      }
    ]
  };



  return (
    <ChartWrapper>
      <Line data={data} options={options} />
    </ChartWrapper>
  );
};
export default Chart1;