import React, { useState, useEffect } from "react";

import logo from "../../assets/logo.png";
import { Wrapper, Image } from "./loading.styles";

export const LoadingPage = () => {
  const [scale, setscale] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      if (scale === 1) {
        setscale(0);
      } else {
        setscale(1);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [scale]);

  return (
    <Wrapper>
      <Image src={logo} scale={scale}></Image>
    </Wrapper>
  );
};
