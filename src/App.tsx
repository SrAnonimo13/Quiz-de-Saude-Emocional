import { ThemeProvider } from "styled-components";

import { theme } from "./styles/themes/main";
import { AppContainer, Header, TopBox } from "./styles/App.styles";

import { Question } from "./components/Question";
import { GlobalStyle } from "./styles/global";
import { AllQuestions } from "./questions";
import { useEffect, useState } from "react";
import { ResponseBox } from "./components/HoverBox/Response";
import { StartGameBox } from "./components/HoverBox/StartGame";

function getRandomQuestion() {
  return AllQuestions[Math.floor(Math.random() * AllQuestions.length)];
}

function App() {
  const [ButtonIdClicked, setButtonIdClicked] = useState<null | number>(null);
  const [CurrentQuestion, setCurrentQuestion] = useState(getRandomQuestion());
  const [ShowHoverBox, setShowHoverBox] = useState<null | AllBoxHoverName>(
    'StartGame'
  );
  const [Points, setPoints] = useState<number>(0);
  const [DisableQuestion, setDisableQuestion] = useState(false);

  console.log("update");
  const correctId = CurrentQuestion.correctAnswerId;
  const QuestionAnswers = CurrentQuestion.answers;
  
  let showCorrectAnswers = false;

  if (ButtonIdClicked) {
    showCorrectAnswers = true;
  } else {
    showCorrectAnswers = false;
  }

  function resetQuestion() {
    setButtonIdClicked(null);
    setCurrentQuestion(getRandomQuestion());
    setShowHoverBox(null);
    setDisableQuestion(false);
  }

  function showResponseBox() {
    setShowHoverBox("Response");
  }

  function handleStartClick() {
    setShowHoverBox(null);
  }

  function handleQuestionClick(id: number) {
    setButtonIdClicked(id);
    setDisableQuestion(true);

    if (id === correctId) setPoints(Points + 1);

    setTimeout(showResponseBox, 1.5 * 1000);
  }

  function getHoverBoxByName(name: AllBoxHoverName) {
    const response = CurrentQuestion.explanation;

    switch (name) {
      case "Response":
        return (
          <ResponseBox response={response} onClickNextButton={resetQuestion} />
        );

      case "StartGame":
        return (
          <StartGameBox onClickStartButton={handleStartClick} />
        )
    }
  }

  return (
    <ThemeProvider theme={theme}>
      {ShowHoverBox && getHoverBoxByName(ShowHoverBox)}
      <AppContainer>
        <Header>
          <TopBox>
            <span>Pontuação</span>
            <p>{Points}</p>
          </TopBox>
        </Header>
        <main>
          <h1>{CurrentQuestion.text}</h1>
        </main>
        <footer>
          {QuestionAnswers.map((a) => (
            <Question
              key={a.id}
              name={a.text}
              onClick={() => handleQuestionClick(a.id)}
              correct={a.id === correctId}
              show={showCorrectAnswers}
              disabled={DisableQuestion}
            />
          ))}
        </footer>
        <br />
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
