import styled from 'styled-components';
import { Container, FlexContainer } from '../styles';

const Title = styled.p`
text-align: left;
color:  ${props => props.color};
font-weight: 700;
font-size: 64px;
line-height: 120%;
`;
const Text = styled.p`
text-align: left;
font-weight: 400;
font-size: 24px;
line-height: 140%;
display: flex;
padding: 50px 0px  50px 0px;
`;

const TopImage = styled.img`
position: absolute; 
top: 40px; 
left: 40px;
`;

const Block = styled.div`
justify-content: space-between;
display: flex;
`;
const Children = styled.div`
text-align: center;
background-color: rgba(255, 255, 255, 1);
border:1px solid rgba(228, 228, 231, 1);
padding:25px;
margin: 15px;
`;

const ArticleTitle = styled.p`
text-align: left;
font-weight: 600;
font-size: 20px;
line-height: 27px;
display: flex;
`;
const ArticleText = styled.p`
text-align: left;
font-weight: 400;
font-size: 16px;
line-height: 22px;
display: flex;
`;

const BlueButton = styled.button`
background-color: #4F46E5;
color: white;
border: 1px solid;
padding: 12px 24px;
font-weight: 500;
font-size: 16px;
border-radius: 10px;
cursor: pointer;
transition: all 0.3s ease;
`;

const AboutUs = () => {
    return (
        <div>
            <FlexContainer>
                <Container>
                    <Title color='rgba(0, 0, 0, 1)'>
                        Голосовые ассистенты
                    </Title>
                    <Title color='rgba(79, 70, 229, 1)'>
                        SmartDialogs
                    </Title>
                    <Text>
                        В звонках бот ведёт осмысленный диалог <br /> и совершенно неотличим от живог оператора. <br />
                        Автоматизируйте телефонные звонки с помощью ИИ.
                    </Text>
                    <BlueButton>Оставить заявку</BlueButton>
                </Container>
                <Container>
                    <img src="/imgs/Rectangle.png" alt="голубой квадрат" />
                    <TopImage src="/imgs/Photo.png" alt="фото девушки" />
                </Container>
            </FlexContainer>

            <FlexContainer>
                <Children>
                    <ArticleTitle>3 года на рынке</ArticleTitle>
                    <ArticleText>Более 1000 разработанных ботов в РФ и зарубежом</ArticleText>
                </Children>
                <Children>
                    <ArticleTitle>Честная цена</ArticleTitle>
                    <ArticleText>Оплата только за использованные минуты</ArticleText>
                </Children>
                <Children>
                    <ArticleTitle>Скорость</ArticleTitle>
                    <ArticleText>Запускаем проекты за 3 недели, не теряя в качестве</ArticleText>
                </Children>
                <Children>
                    <ArticleTitle>Личный кабинет</ArticleTitle>
                    <ArticleText>Отслеживание результатов звонков в личном кабинете</ArticleText>
                </Children>
            </FlexContainer>
        </div>
    )
}

export default AboutUs;
