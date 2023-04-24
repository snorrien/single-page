import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  text-align: left;
`;

export const FlexContainer = styled.div`
justify-content: space-between;
display: flex;
text-align: center;
margin-top: 120px;
  align-items: center;
`;

interface BlueButton {
  fontSize: string;
  maxWith: string;
}

export const BlueButton = styled.button<BlueButton>`
background-color: #4F46E5;
color: white;
border: 1px solid;
padding: 12px 24px;
font-weight: 500;
font-size:  ${props => props.fontSize};
border-radius: 10px;
cursor: pointer;
transition: all 0.3s ease;
width: 100%;
max-width: ${props => props.maxWith};;
`;

interface Title {
  fontWeight: string;
  fontSize: string;
}
export const Title = styled.p<Title>`
color:rgba(17, 24, 39, 1);
font-weight: ${props => props.fontWeight};
font-size: ${props => props.fontSize};
line-height: 32px;
display: flex;
`;