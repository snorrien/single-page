import styled from 'styled-components';

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
`;

const Title = styled.p`
color:rgba(17, 24, 39, 1);
font-weight: 700;
font-size: 20px;
line-height: 32px;
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
  height: 100%;
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
  z-index: 1;
`;

const ImgContainer = styled.div`
 justify-content: center; 
 align-items: center;
 display: flex;
 position: relative;
 max-width: 100%;
 flex-direction: column;
`;



const Enter = () => {
    return (
        <EnterBlock>
            <Column color='#F5F5F5'>
                <img src="/imgs/smallLogo.png" alt="логотип" />
            </Column>
            <Column color='rgba(243, 243, 255, 1)'>
                <ImgContainer>
                    <UnderImage src="/imgs/Calls.png" alt="логотип" />
                    <TopImage src="/imgs/Dashboard.png" alt="логотип" />
                </ImgContainer>

                <Title>Вся аналитика в одном кабинете</Title>
                <Text>Теперь просматривать аналитику и создавать отчёты можно без нашей помощи</Text>
            </Column>
        </EnterBlock>
    )
}

export default Enter;