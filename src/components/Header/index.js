import { Text } from '../Text';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Text size={24} color="white" >
        Bellissare
        <Text size={24} weight="700" color="white">APP</Text>
      </Text>

      <Text opacity={0.5} color="white">Marque já a sua sessão.</Text>
    </Container>
  );
}