import React from "react";
import { Container, BackgroundImage } from "./styles";

const Background = ({ children }) => {
  return (
    <Container>
      <BackgroundImage
        source={require("../../assets/images/fundoBellissare.png")}
        imageStyle={{ opacity: 0.8 }}
      >
        {children}
      </BackgroundImage>
    </Container>
  );
};

export default Background;
