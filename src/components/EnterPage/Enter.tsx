import { useState } from "react";
import styled from 'styled-components';
import { BlueButton, FlexContainer } from "../../styles";
import { Title } from "../../styles";
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: left; 
  align-items: left;
  flex-direction: column;
  width: 100%;
  max-width: 408px;
  user-select: none;
`;
const InputContainer = styled.form`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 408px;
  margin-top: 30px
`;
const InputWrapper = styled.div`
  align-items: left;
  justify-content: left;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 408px;
`;
const Input = styled.input`
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(228, 228, 231, 1);
  border-radius: 10px;
  outline: none;
  display: flex;
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  max-width: 408px;
  font-size: 16px;
`;
const CheckContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%;
  max-width: 408px;
`;

const CheckWrapper = styled.div`
  justify-content: left; 
  align-items: left;
  display: flex;
`;

const Checkbox = styled.input`
border-color: rgba(228, 228, 231, 1);
  border-radius: 2px;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  `;
const EyeIcon = styled.img`
 position: absolute;
 right: 16px;
 top: 50%;
 transform: translateY(-50%);
 cursor: pointer;
`;
const Img = styled.div`
  padding-bottom: 75px;
`;

const Enter = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value.trim());
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value.trim());
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {                          
        event.preventDefault();
};

const isFormValid = email !== '' && password !== '';

return (
    <Container>
        <Container>
            <Img>
                <img src="/imgs/smallLogo.png" alt="логотип" />
            </Img>
            <Title fontWeight='500' fontSize='28px'>Вход</Title>
        </Container>
        <InputContainer onSubmit={handleSubmit}>
            <InputWrapper>
                <Input
                    type="text"
                    placeholder="Email"                                                                                                      
                    title="Email"     
                    value={email}
                    onChange={handleEmailChange} />
            </InputWrapper>
            <InputWrapper>
                <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Пароль"
                    title="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <EyeIcon
                    src="/imgs/eyeOn.png"
                    alt={showPassword ? "Скрыть пароль" : "Показать пароль"}
                    onClick={toggleShowPassword}
                />
            </InputWrapper>
            <CheckContainer>
                <CheckWrapper>
                    <Checkbox type="checkbox" />
                    <label>Запомнить меня</label>
                </CheckWrapper>
                <p>Забыли пароль?</p>
            </CheckContainer>
            <InputWrapper>
                <Link to={"/"}>
                <BlueButton fontSize="16px" maxWith="408px" type="submit" disabled={!isFormValid} >
                    Войти
                    </BlueButton>
                </Link>
            </InputWrapper>
        </InputContainer>
    </Container>
)
}

export default Enter;