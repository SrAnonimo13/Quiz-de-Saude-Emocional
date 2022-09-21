import styled from "styled-components";

export const Button = styled.button<{show: boolean, correct: boolean}>`
  border-radius: 5px;
  /* box-shadow: 2px 3px 0px ${e => e.theme["blue-500"]}; */
  background: ${e => {
    if(!e.show)
      return e.theme["blue-300"];

    if(e.correct) {
      return 'green';
    } else {
      return 'red';
    }
  }};

  word-wrap: break-word;
  width: ${e => {
    if(!e.show)
      return '80%';

    if(e.correct) {
      return '85%'
    } else {
      return '75%'
    }
  }};
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: bold;
  margin: .3rem;
  
  transition: transform .1s, box-shadow .1s, width .3s, color .2s;
  color: ${e => {
    if(e.show) {
      return e.theme["white-100"];
    } else {
      return e.theme["blue-600"];
    }
  }};
  cursor: pointer;
`
