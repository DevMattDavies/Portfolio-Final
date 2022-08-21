import styled from "styled-components";

export const TitleStyle = styled.h1`
  color: black;
  font-size: 2rem;
  font-family: var(--font-primary);
  font-weight: 300;
  background-color: white;
  border-radius: 2px;
  width: max-content;
  backdrop-filter: blur(30px);
`;

export const SubtitleStyle = styled.h2`
  color: black;
  font-size: 1.2rem;
  font-family: var(--font-primary);
  font-weight: 300;
  background-color: white;
  /* backdrop-filter: blur(30px); */
  border-radius: 2px;
  width: max-content;
`;

export const MenuTextStyle = styled.h2`
  color: black;
  font-size: 1.3rem;
  font-family: var(--font-primary);
  font-weight: 300;
  width: max-content;
  border: 1px solid transparent;
  display: inline-block;
  position: relative;
  /* background-color: white; */
 

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const TextStyle = styled.p`
  color: black;
  font-size: 1.2rem;
  font-family: var(--font-primary);
  font-weight: 300;
  border-radius: 15px;
  text-align: right;
  backdrop-filter: blur(3px);
  width: 400px;

  animation: fadeInAnimation 2s ease-in;
  -webkit-animation: fadeInAnimation 2s ease-in;
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
  transform: rotate(-45deg);
  margin-bottom: 1rem;
  backdrop-filter: blur(5px);
  width: max-content;
`;

export const ProjectTitleStyle = styled.h2`
  color: black;
  font-size: 1.5rem;
  font-family: var(--font-primary);
  font-weight: 300;
  background-color: white;
  border-radius: 15px;
  width: max-content;
  font-weight: 300;
`;

export const ProjectLinkStyle = styled.a`
  color: black;
  font-size: 1rem;
  font-family: var(--font-primary);
  font-weight: 300;
  width: max-content;
  border: 1px solid transparent;
  display: inline-block;
  position: relative;
  /* font-weight: 400; */

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
