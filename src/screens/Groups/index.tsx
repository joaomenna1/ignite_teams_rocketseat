import { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subTitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button onPress={handleNewGroup} title="Criar uma nova turma" />
    </Container>
  );
}
