import styled from 'styled-components';
import Enter from './Enter';
import { Title } from '../../styles';

const EnterBlock = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr; 
  height: 100vh; 
`;
const Column = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
  background-color: ${props => props.color};
  width: 100%;
  height: 100vh;
  padding:10px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 3fr 1fr;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  grid-row: 1 / 2;

`;
const BackgroundImage = styled.img`
  display: block;
  object-fit: cover;
  max-width: 100%;
  height: auto;
  margin-right: 20%;
  margin-bottom:10%;
`;
const ForegroundImage = styled.img`
  position: absolute;
  object-fit: cover; 
  max-width: 100%;
  height: auto;
  margin-left: 20%;
  margin-top: 10%;
  z-index: 0.5;
`;
const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
  padding: 5%;
  color: #fff;
  z-index: 2;
  grid-row: 2 / 3;
`;
const Text = styled.p`
  color:rgba(17, 24, 39, 1);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  display: flex;
  padding: 12px;
`;

const EnterPage = () => {
  //function handleEnterClick(): void {
  //  throw new Error('Function not implemented.');
 // }

  return (
    <EnterBlock>
      <Column color='#F5F5F5'>
        <Enter />
      </Column>
      <Column color='rgba(243, 243, 255, 1)'>
        <Container>
          <ImageWrapper>
            <BackgroundImage src="/imgs/Calls.png" alt="логотип" />
            <ForegroundImage src="/imgs/Dashboard.png" alt="логотип" />
          </ImageWrapper>
          <TextWrapper>
            <Title fontWeight='700' fontSize='20px'>Вся аналитика в одном кабинете</Title>
            <Text>Теперь просматривать аналитику и создавать отчёты можно <br />без нашей помощи</Text>
          </TextWrapper>
        </Container>
      </Column>
    </EnterBlock>
  )
}

export default EnterPage;