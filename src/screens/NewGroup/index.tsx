import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { groupCreate } from "@storage/group/groupCreate";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState("");

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo grupo", "informe o nome da turma");
      }

      await groupCreate(group);

      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subTitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
