import { HoverBox } from "..";
import { Button } from "../style";

export function StartGameBox({
  onClickStartButton,
}: {
  onClickStartButton: () => void;
}) {
  return (
    <HoverBox>
      <h1>Quiz da Saúde Emocional!</h1>
      <h2>
        Esse quiz server para você aprender mais sobre a saúde emocional, como
        tratar-se em casa e como prevenir-se de doenças relacionadas
      </h2>
      <Button onClick={onClickStartButton}>Jogar!</Button>
    </HoverBox>
  );
}
