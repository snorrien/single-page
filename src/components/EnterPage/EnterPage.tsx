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




const Text = styled.p`
color:rgba(17, 24, 39, 1);
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
display: flex;
padding: 50px 0px  50px 0px;
`;

const UnderImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: auto;
  max-width: 100%;

`;

const TopImage = styled.img`
 position: absolute; 
 top: 50%;
 left:35%;
 max-width: 100%;
 width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0 auto;
`;
const ImgContainer = styled.div`
justify-content: left;
  align-items: left;
 display: flex;
 position: relative;
 max-width: 80%;
 flex-direction: column;
`;
const Container = styled.div`
justify-content: center;
align-items: center;
 display: flex;
 position: relative;
 max-width: 80%;
 flex-direction: column;
`;

const EnterPage = () => {
  return (
    <EnterBlock>
      <Column color='#F5F5F5'>
        <Enter />
      </Column>
      <Column color='rgba(243, 243, 255, 1)'>
        <ImgContainer>
          <UnderImage src="/imgs/Calls.png" alt="логотип" />
          <TopImage src="/imgs/Dashboard.png" alt="логотип" />
        </ImgContainer>
        <Container>
          <Title fontWeight='700' fontSize='20px'>Вся аналитика в одном кабинете</Title>
          <Text>Теперь просматривать аналитику и создавать отчёты можно без нашей помощи</Text>
        </Container>

      </Column>
    </EnterBlock>
  )
}

export default EnterPage;