//form padrão dos modais de NewTaskModal, EditTaskModal e DeleteTaskModal
import { useState } from "react";

import { Form, Input } from "./styles";

import { Button } from "../Button";

export default function TaskForm({ onSave, task, buttonLabel }) {
  const [title, setTitle] = useState(task?.title ?? "");
  const [description, setDescription] = useState(task?.description ?? "");

  return (
    <Form>
      <Input
        placeholder="Título"
        placeholderTextColor="#fff"
        value={title}
        onChangeText={setTitle}
      />

      <Input
        placeholder="Descrição"
        placeholderTextColor="#fff"
        value={description}
        onChangeText={setDescription}
      />

      <Button
        onPress={() => onSave({ title, description })}
        disabled={title.length === 0 || description.length === 0}
      >
        {buttonLabel}
      </Button>
    </Form>
  );
}
