import styled from 'styled-components';
import { Container, FlexContainer } from '../../styles';
import BarChart from './Charts/BarChart';
import LineChart from './Charts/LineChart';
import { PageContainer } from '../../styles';

const FlexDiv = styled.div`
justify-content: space-between;
display: flex; 
align-items: center
`;

const Title = styled.p`
text-align: left;
color: rgba(0, 0, 0, 1);
font-weight: 700;
font-size: 48px;
line-height: 120%;
`;

const Text = styled.p`
text-align: left;
display: flex;
font-weight: 440px;
font-size: 20px;
line-height: 140%;
padding: 90px 0px  70px 0px;
`;

const ChartContainer = styled.div`
  width: 100%;
  max-width: 645px;
  max-height: 400px;
  background: #FFFFFF;
  border: 1px solid #E4E4E7;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  user-select: none;
`;

const ChartTitle = styled.p`
text-align: left;
display: flex;
font-weight: 400;
font-size: 18px;
margin-bottom: 18px;
`;

const ChartBtn = styled.button`
  display: inline-block;
  background-color:rgba(232, 231, 255, 1);
  color:rgba(79, 70, 229, 1);
  font-size: 10px;
  padding: 4px 8px;
  margin: 0 8px 29px 0;
  border: none;
  border-radius: 33px;
  cursor: pointer;
`;

const Platform = () => {
    return (
        <PageContainer>
            <FlexContainer>
                <Container>
                    <Title>
                        Вся аналитика в одном кабинете
                    </Title>
                </Container>
                <Container>
                    <Text>
                        Отслеживайте работу голосового ассистента в личном кабинете
                    </Text>
                </Container>
            </FlexContainer>
            <Text >
                Уникальные виджеты позволяют настроить <br />дашборд под задачи различных подразделений <br />вашей компании
            </Text>
          <FlexDiv>
               
                <ChartContainer>
                    <FlexContainer>
                        <ChartTitle>
                            Звонки
                        </ChartTitle>
                        <img src="/imgs/More-vert.png" alt="точки" />
                    </FlexContainer>
                    <LineChart />
                </ChartContainer>
                <ChartContainer>
                    <FlexContainer>
                        <ChartTitle>
                            Исходящие звонки
                        </ChartTitle>
                        <img src="/imgs/More-vert.png" alt="точки" />
                    </FlexContainer>
                    <ChartBtn>Отказ от подключения</ChartBtn>
                    <ChartBtn>Ростов-на-Дону</ChartBtn>
                    <BarChart />
                </ChartContainer>
                </FlexDiv>
        </PageContainer>

    )
}

export default Platform;