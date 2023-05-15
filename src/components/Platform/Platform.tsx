import styled from 'styled-components';
import { Container } from '../../styles';
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
  padding: 30px 0px  30px 0px;
`;
const Text = styled.p`
  text-align: left;
  display: flex;
  font-weight: 440px;
  font-size: 20px;
  line-height: 140%;
  padding: 30px 0px  30px 0px;
`;
const Check = styled.div`
  display: left;
  margin: 10px;
  padding-right: 20px;
  `;
const FirstBlock = styled.div`
  margin-top: 40px;
  `;
const Column = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: left; 
  align-items: left;
  padding:10px;
`;
const DivBlock = styled.div`
  display: flex;
  justify-content: left; 
  align-items: center;
`;

const Platform = () => {
    return (
        <PageContainer>
            <FirstBlock>
                <FlexDiv>
                    <Container>
                        <Title>
                            Вся аналитика в одном кабинете
                        </Title>
                        <DivBlock>
                            <Check>
                                <img src="/imgs/check.png" alt="check" />
                            </Check>
                            <Text>
                                Отслеживайте работу голосового ассистента в личном кабинете
                            </Text>
                        </DivBlock>
                    </Container>
                    <BarChart />
                </FlexDiv>
            </FirstBlock>
            <FlexDiv>
                <LineChart />
                <Column>
                    <DivBlock>
                        <Check>
                            <img src="/imgs/check.png" alt="check" />
                        </Check>
                        <Text >
                            Уникальные виджеты позволяют настроить дашборд под задачи различных подразделений вашей компании
                        </Text>
                    </DivBlock>
                    <DivBlock>
                        <Check>
                            <img src="/imgs/check.png" alt="check" />
                        </Check>
                        <Text >
                            Повышение эффективности и скорости обработки информации
                        </Text>

                    </DivBlock>
                </Column>
            </FlexDiv>
        </PageContainer>
    )
}

export default Platform;