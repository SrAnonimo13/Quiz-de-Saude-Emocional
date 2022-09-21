export interface QuestionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  correct?: boolean;
  show?: boolean;
}