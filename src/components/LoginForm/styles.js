import styled from "styled-components/native";

export const Form = styled.View`
  margin-top: 32px;
  gap: 24px;
`;

export const Input = styled.TextInput`
  background-color: #f5f5f4;
  border: 1px solid rgba(204, 204, 204, 0.9);
  padding: 16px;
  border-radius: 8px;
  color: #010000; /* Cor do texto */
`;

export const PasswordInput = styled(Input)`
  margin-bottom: 16px;
`;
