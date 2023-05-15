import styled from 'styled-components';
import { Container, FlexContainer, BlueButton, PageContainer, ArticleTitle, ArticleText } from '../../styles';

const TopImage = styled.img`
  position: absolute; 
  top: 40px; 
  left: 40px;
  object-fit: cover; 
  max-width: 100%;
  height: auto;
`;
const ChildrenContainer = styled.div`
  padding: 50px 0px  50px 0px;
`;
const Children = styled.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 1);
  border:1px solid rgba(228, 228, 231, 1);
  padding:25px;
  margin: 15px;
`;
const Text = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  display: flex;
  padding: 50px 0px  50px 0px;
`;
const BackgroundImage = styled.img`
  display: block;
  object-fit: cover;
  max-width: 100%;
  height: auto;
`;
const ImageWrapper = styled.div`
  position: relative;
  text-align: left;
  margin: 40px;
`;

const AboutUs = () => {
    return (
        <PageContainer>
            <FlexContainer>
                <Container>
                    <ArticleTitle fontWeight='700' color='rgba(0, 0, 0, 1)' fontSize='64px' lineHeight='120%'>
                        Голосовые ассистенты
                    </ArticleTitle>
                    <ArticleTitle color='rgba(79, 70, 229, 1)' fontWeight='700' fontSize='64px' lineHeight='120%'>
                        SmartDialogs
                    </ArticleTitle>
                    <Text>
                        В звонках бот ведёт осмысленный диалог <br /> и совершенно неотличим от живого оператора. <br />
                        Автоматизируйте телефонные звонки с помощью ИИ.
                    </Text>
                    <BlueButton fontSize="20px" maxWith="291px">
                        Оставить заявку
                    </BlueButton>
                </Container>
                <ImageWrapper>
                    <BackgroundImage src="/imgs/Rectangle.png" alt="голубой квадрат" />
                    <TopImage src="/imgs/Photo.png" alt="фото девушки" />
                </ImageWrapper>
            </FlexContainer>
            <ChildrenContainer>
                <FlexContainer>
                    <Children>
                        <ArticleTitle
                            fontWeight='600'
                            color='rgba(0, 0, 0, 1)'
                            lineHeight='27px'
                            fontSize='20px'>3 года на рынке</ArticleTitle>
                        <ArticleText>Более 1000 разработанных ботов в РФ и зарубежом</ArticleText>
                    </Children>
                    <Children>
                        <ArticleTitle
                            fontWeight='600'
                            color='rgba(0, 0, 0, 1)'
                            lineHeight='27px'
                            fontSize='20px'>Честная цена</ArticleTitle>
                        <ArticleText>Оплата только за использованные минуты</ArticleText>
                    </Children>
                    <Children>
                        <ArticleTitle
                            fontWeight='600'
                            color='rgba(0, 0, 0, 1)'
                            lineHeight='27px'
                            fontSize='20px'>Скорость</ArticleTitle>
                        <ArticleText>Запускаем проекты за 3 недели, не теряя в качестве</ArticleText>
                    </Children>
                    <Children>
                        <ArticleTitle
                            fontWeight='600'
                            color='rgba(0, 0, 0, 1)'
                            lineHeight='27px'
                            fontSize='20px'>Личный кабинет</ArticleTitle>
                        <ArticleText>Отслеживание результатов звонков в личном кабинете</ArticleText>
                    </Children>
                </FlexContainer>
            </ChildrenContainer>
        </PageContainer>
    )
}

export default AboutUs;
