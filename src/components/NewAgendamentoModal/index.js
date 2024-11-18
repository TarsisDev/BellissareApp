import { Image, TouchableOpacity } from "react-native";

import { Text } from "../Text";

import CustomModal from "../CustomModal";
import TaskForm from "../TaskForm";

import { Header } from "./styles";

import close from "../../assets/images/close.png";

export default function NewAgendamentoModal({ visible, onClose, onSave }) {
  return (
    <CustomModal visible={visible}>
      <Header>
        <Text color="#010000" weight="600">
          Agendar Atendimento
        </Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>

      <TaskForm onSave={onSave} buttonLabel="Cadastrar" />
    </CustomModal>
  );
}
