import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

/*export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0}
`;*/
