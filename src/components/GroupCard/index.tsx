import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
