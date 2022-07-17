import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { ChevronsDown } from "@styled-icons/boxicons-regular";
import { useWindowHeight } from "@react-hook/window-size";
import theme from "../../config/theme.json";
import constants from "../../config/constants.json";

const MainContainer = styled(motion.div)`
  user-select: none;
  color: ${theme.color.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-bottom: 10px;
`;

const FloatingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div`
  font-weight: 800;
  font-size: 16px;
  text-transform: uppercase;
`;

const Context = React.createContext();

const FloatingScrollDown = ({ visible }) => {
  const windowHeight = useWindowHeight();
  return (
    <AnimatePresence>
      {visible && (
        <MainContainer
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2,
              delay: 0.5,
            },
          }}
          exit={{
            opacity: 0,
            y: -windowHeight,
            transition: {
              duration:
                (constants.general.sectionTransitionDuration / 1000) * 0.5,
            },
          }}
        >
          <FloatingContainer
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            <Label>Scroll down</Label>
            <ChevronsDown size="38" />
          </FloatingContainer>
        </MainContainer>
      )}
    </AnimatePresence>
  );
};

FloatingScrollDown.propTypes = {
  visible: PropTypes.bool.isRequired,
};

const Provider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const value = useMemo(
    () => ({
      element: <FloatingScrollDown visible={visible} />,
      setVisible,
    }),
    [visible, setVisible]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  Context,
  Provider,
};
