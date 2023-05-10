import styled from "styled-components";

export const PageContainer = styled.div`
padding: 0px 8%  0px 8%;
`;

export const Container = styled.div`
  position: relative;
  text-align: left;
`;

export const FlexContainer = styled.div`
justify-content: space-between;
display: flex;
text-align: center;
align-items: center;
`;

interface BlueButton {
  fontSize: string;
  maxWith: string;
}

export const BlueButton = styled.button<BlueButton>`
background-color: ${(props) => (props.disabled ? 'gray' : '#4F46E5')};
color: white;
border: 1px solid;
padding: 12px 24px;
font-weight: 500;
font-size:  ${props => props.fontSize};
border-radius: 10px;
cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
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
display: flex;
`;

interface ArticleTitle {
  color: string,
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
}
export const ArticleTitle = styled.p<ArticleTitle>`
 text-align: left;
 color:  ${props => props.color};
 font-weight: ${props => props.fontWeight};
 font-size: ${props => props.fontSize};
 line-height: ${props => props.lineHeight};
 display: flex;
`;

export const ArticleText = styled.p`
 text-align: left;
 font-weight: 400;
 font-size: 16px;
 line-height: 22px;
 display: flex;
`;
