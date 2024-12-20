import styled from "styled-components/native";

export const Form = styled.View`
  margin-top: 32px;
  gap: 24px;
`;

export const Input = styled.TextInput`
  border: 1px solid black;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
`;

export const PasswordInput = styled(Input)`
  margin-bottom: 16px;
`;
