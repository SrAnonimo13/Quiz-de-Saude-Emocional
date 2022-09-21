import { Button } from "./style";
import { QuestionProps } from "./types";

export function Question({
  name,
  correct = false,
  show = false,
  ...props
}: QuestionProps) {
  return (
    <Button {...props} type="submit" show={show} correct={correct}>
      {name}
    </Button>
  );
}
