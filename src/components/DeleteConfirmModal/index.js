import { Text } from "../Text";

import CustomModal from "../CustomModal";

import { Button } from "../Button";

import { Actions } from "./styles";

export default function DeleteConfirmModal({ visible, onClose, onConfirm }) {
  return (
    <CustomModal visible={visible}>
      <Text size={18} weight="600">
        Cancelar agora pode gerar cobranças. Confirmar cancelamento?
      </Text>

      <Text opacity={0.5} style={{ marginTop: 4 }}>
        Essa ação não pode ser desfeita
      </Text>

      <Actions>
        <Button primary={false} onPress={onClose}>
          Cancelar
        </Button>

        <Button onPress={onConfirm}>Confirmar</Button>
      </Actions>
    </CustomModal>
  );
}
