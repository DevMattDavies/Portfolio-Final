import styled from "styled-components";

export const TitleStyle = styled.h1`
  color: black;
  font-size: 2rem;
  font-family: var(--font-primary);
  font-weight: 300;
  background-color: white;
  border-radius: 15px;
  width: max-content;
`;

export const SubtitleStyle = styled.h1`
  color: black;
  font-size: 1.2rem;
  font-family: var(--font-primary);
  font-weight: 300;
  background-color: white;
  border-radius: 15px;
  width: max-content;
`;

export const MenuTextStyle = styled.h1`
  color: black;
  font-size: 1.3rem;
  font-family: var(--font-primary);
  font-weight: 300;
  border-radius: 15px;
  width: max-content;
`;

export const TextStyle = styled.p`
  color: black;
  font-size: 1.2rem;
  font-family: var(--font-primary);
  font-weight: 300;
  /* background-color: white; */
  border-radius: 15px;
  text-align: right;
  backdrop-filter: blur(3px);
  width: 400px;

  animation: fadeInAnimation 2s ease-in;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const TechIconLabel = styled.p`
  color: black;
  font-size: 1rem;
  font-family: var(--font-primary);
  font-weight: 300;
  /* background-color: white; */
  /* border-radius: 15px; */
  transform: rotate(-45deg);
  margin-bottom: 1rem;
  backdrop-filter: blur(5px);
  width: max-content;
`;
