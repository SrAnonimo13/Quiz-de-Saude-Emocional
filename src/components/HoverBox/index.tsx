import { Background, Box, Button } from "./style";

type Prop = {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
}

export function HoverBox({ children }: Prop) {
  return (
    <Background>
      <Box>
        {children}
      </Box>
    </Background>
  );
}
