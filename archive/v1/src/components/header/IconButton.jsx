import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icon from "@mdi/react";

const IconButton = props => {
  const variants = { hover: { backgroundColor: "#f2f3f5" } };
  return (
    <MainContainer
      className="disable-select"
      whileHover={variants.hover}
      onClick={props.onClick}
    >
      <Icon path={props.icon} size={0.8} color="#424963" />
    </MainContainer>
  );
};

const MainContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 100px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
`;

export default IconButton;
