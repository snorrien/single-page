import styled from 'styled-components';
import { Container, FlexContainer } from '../../styles';
import Chart1 from './Charts/Chart1';
import BarChart from './Charts/BarChart';
import { PageContainer } from '../../styles';


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
font-weight: 400;
font-size: 20px;
line-height: 140%;
padding: 90px 0px  70px 0px;
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
            <BarChart />

        </PageContainer>
    )
}

export default Platform;