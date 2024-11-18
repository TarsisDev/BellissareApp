import { useState } from "react";
import { Alert } from "react-native";
import { Form, Input, PasswordInput } from "./styles";
import { Button } from "../Button";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginPress = async () => {
    setLoading(true);
    try {
      await onLogin({ email, password });
    } catch (error) {
      Alert.alert("Erro", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form>
      <Input
        placeholder="Email"
        placeholderTextColor="#010000"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <PasswordInput
        placeholder="Senha"
        placeholderTextColor="#010000"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button
        onPress={handleLoginPress}
        disabled={loading || !email || !password}
      >
        {loading ? "Carregando..." : "Entrar"}
      </Button>
    </Form>
  );
}
