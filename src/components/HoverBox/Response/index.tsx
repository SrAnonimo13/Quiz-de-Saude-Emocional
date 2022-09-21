import { HoverBox } from "..";
import { Button } from "../style";

type Prop = {
  onClickNextButton?: React.MouseEventHandler<HTMLButtonElement>;
  response: string;
}

export function ResponseBox({ response, onClickNextButton }: Prop) {
  return (
    <HoverBox>
      <h1>Resposta</h1>
      <p>
        {response}
      </p>
      <Button onClick={onClickNextButton}>Proximo</Button>
    </HoverBox>
  );
}
