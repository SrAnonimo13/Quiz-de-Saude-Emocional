import styled from 'styled-components';

export const TopBox = styled.div`
  background-color: ${e => e.theme['blue-300']};
  color: ${e => e.theme['blue-500']};
  width: 100%;
  padding: .3rem 0;
  border-radius: .4rem;
  
  font-family: monospace;
  text-align: center;
  font-size: 1.5rem;
`;

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto .8fr auto;
  
  width: 30rem;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem 0;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${e => e.theme["blue-600"]};
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Header = styled.header`
  progress {
    width: 100%;
  }
`;
