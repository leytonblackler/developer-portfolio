import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const RoundedButton = props => {
  const variants = { hover: { backgroundColor: "#3035c7" } };
  return (
    <MainContainer className="disable-select" whileHover={variants.hover}>
      <Text>{props.children}</Text>
    </MainContainer>
  );
};

const MainContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 100px;
  box-shadow: 0px 8px 30px rgba(78, 103, 235, 0.3);
  cursor: pointer;
  font-weight: 600;
  background-color: #4e67eb;
`;

const Text = styled.span`
  color: white;
  font-size: 12pt;
`;

export default RoundedButton;
