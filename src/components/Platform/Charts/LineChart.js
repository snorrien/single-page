import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { ChartCard, ChartContainer, ChartTitle, Canvas, FlexContainer } from '../../../styles';
import styled from 'styled-components';


const LineChart = () => {
    const chartRefs = useRef(null);

    useEffect(() => {
        const myChartRef = chartRefs.current.getContext('2d');

        const titleTooltip = () => {
            return '';
        }

        Chart.defaults.color = "#000000";

        new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ['22.08', '23.08', '24.08', '25.08', '26.08', '27.08', '28.08'],
                datasets: [
                    {
                        label: 'Исходящие звонки',
                        data: [3600, 5000, 10500, 12000, 8700, 3824, 1650],
                        fill: false,
                        borderColor: 'rgba(234, 164, 58, 1)',
                        pointRadius: 1,
                        pointHoverRadius: 6,
                        pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointHoverBorderWidth: 2,
                        tension: 0.6,
                        backgroundColor: 'rgba(234, 164, 58, 1)',
                    },
                    {
                        label: 'Входящие звонки',
                        data: [11500, 10027, 19000, 16500, 19500, 9700, 7000],
                        fill: false,
                        borderColor: 'rgba(79, 70, 229, 1)',
                        pointRadius: 1,
                        pointHoverRadius: 6,
                        pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointHoverBorderWidth: 2,
                        tension: 0.5,
                        backgroundColor: 'rgba(79, 70, 229, 1)',
                    }
                ]
            },
            options: {
                bezierCurve: true,
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
                            max: 2000,
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
                        display: true,
                        position: 'bottom',
                        align: 'start',
                        labels: {
                            usePointStyle: true,
                            boxHeight: 4
                        }
                    },
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        bodyColor: 'rgba(17, 24, 39, 1)',
                        displayColors: false,
                        caretPadding: 7,
                        borderWidth: 1,
                        yAlign: 'bottom',
                        borderColor: 'rgba(228, 228, 231, 1)',
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
                    Звонки
                </ChartTitle>
                <img src="/imgs/More-vert.png" alt="точки" />
            </FlexContainer>
            <ChartCard>
                    <Canvas id="myChart2" ref={chartRefs} />
            </ChartCard>
        </ChartContainer>

    );
};

export default LineChart;