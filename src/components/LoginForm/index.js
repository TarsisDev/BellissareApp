import { useState } from "react";
import { Form, Input, PasswordInput } from "./styles";
import { Button } from "../Button";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form>
      <Input
        placeholder="Email"
        placeholderTextColor="#8c8c8c" /* Placeholder em um cinza suave */
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <PasswordInput
        placeholder="Senha"
        placeholderTextColor="#8c8c8c"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button
        onPress={() => onLogin({ email, password })}
        disabled={email.length === 0 || password.length === 0}
      >
        Entrar
      </Button>
    </Form>
  );
}
