import { Text } from '../Text';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Text size={24} color="white" >
        ToDo
        <Text size={24} weight="700" color="white">APP</Text>
      </Text>

      <Text opacity={0.5} color="white">Add, delete ou marque as tarefas executadas</Text>
    </Container>
  );
}