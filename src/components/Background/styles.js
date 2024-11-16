import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { Platform, StatusBar } from "react-native";

// Detecta se é Android para ajustar a margem superior
const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #010000;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  resize-mode: cover;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
`;
