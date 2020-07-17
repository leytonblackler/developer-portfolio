// https://codepen.io/designcouch/pen/hyFAD/

import React, { useState } from "react";
import styled from "styled-components";
import { breakpoints, mobile, desktop } from "../../config/constants.json";

const ToggleContainer = styled(({ size, ...rest }) => <div {...rest} />)`
  position: relative;
  cursor: pointer;
  background-color: cyan;
  
  // transform: scale(${mobile.menuToggleSize / 100});
  width: ${mobile.logoSize}px;
  height: ${mobile.logoSize}px;
  @media (min-width: ${breakpoints.columnView}px) {
    // transform: scale(${desktop.menuToggleSize / 100});
    width: ${desktop.logoSize}px;
    height: ${desktop.logoSize}px;
  }
`;

// const Hamburger = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 100%;
// `;

// const Cross = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   transform: rotate(45deg);
// `;

// const Line = styled.span`
//   display: block;
//   background: #566973;
//   transition: 0.25s ease-in-out;
// `;

// const HamburgerLine = styled(({ open, ...rest }) => <Line {...rest} />)`
//   width: ${({ open }) => (open ? "0%" : "100%")};

//   height: 4px;

//   position: relative;
//   top: calc(100% - ((18% * 3) / 2));
//   margin: 18% 0;
//   &:nth-child(1) {
//     transition-delay: ${({ open }) => (open ? "0s" : "0.5s")};
//   }
//   &:nth-child(2) {
//     transition-delay: ${({ open }) => (open ? "0.125s" : "0.625s")};
//   }
//   &:nth-child(3) {
//     transition-delay: ${({ open }) => (open ? "0.25s" : "0.75s")};
//   }
// `;

// const CrossLine = styled(({ open, ...rest }) => <Line {...rest} />)`
//   &:nth-child(1) {
//     height: ${({ open }) => (open ? "100%" : "0%")};
//     left: calc((100% / 2) - 2px);
//     width: 4px;
//     position: absolute;
//     transition-delay: ${({ open }) => (open ? "0.625s" : "0s")};
//   }
//   &:nth-child(2) {
//     width: ${({ open }) => (open ? "100%" : "0%")};
//     top: calc((100% / 2) - 2px);
//     height: 4px;
//     position: absolute;
//     transition-delay: ${({ open }) => (open ? "0.375s" : "0.25s")};
//   }
// `;

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <ToggleContainer onClick={() => setOpen(!open)}>
      {/* <Hamburger>
        <HamburgerLine open={open} />
        <HamburgerLine open={open} />
        <HamburgerLine open={open} />
      </Hamburger>
      <Cross>
        <CrossLine open={open} />
        <CrossLine open={open} />
      </Cross> */}
    </ToggleContainer>
  );
};
