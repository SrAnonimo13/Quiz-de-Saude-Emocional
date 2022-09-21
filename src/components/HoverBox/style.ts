import styled from "styled-components";
import { ShowOpacityAnimationName } from "../../styles/animations";

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(25, 25, 25, 0.63);
  backdrop-filter: blur(5px);
  animation: ${ShowOpacityAnimationName} 1s ease-in-out;
`;

export const Box = styled.div`
  background: ${e => e.theme['light-brown-300']};
  color: ${e => e.theme['blue-600']};
  width: 50%;
  height: 80%;
  padding: 2rem;
  border-radius: 10px;

  display: grid;
  text-align: center;
  grid-template-rows: auto 1fr .5fr;

  h1 {
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
`;
export const Button = styled.button`
  box-sizing: content-box;
  width: 50%;
  height: 50%;
  margin: auto auto;
  background-color: ${e => e.theme["blue-500"]};
  border-radius: 5px;
  color: ${e => e.theme["white-100"]};
  font-size: 1.5rem;
  cursor: pointer;
  transition: padding .1s, font-size .05s;

  &:hover{
    font-size: 1.7rem;
    padding: .5rem;
  }
`;