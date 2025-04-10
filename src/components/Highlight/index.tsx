import { Container, Title, SubTitle } from "./styles";

type props = {
  title: string;
  subTitle: string;
};

export function Highlight({ title, subTitle }: props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
