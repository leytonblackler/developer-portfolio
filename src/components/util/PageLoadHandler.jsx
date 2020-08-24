// import React, { useState, useEffect } from "react";

// let loadableElements = 0;
// let loadedElements = 0;

// const onLoad = () => {
//   loadedElements += 1;
// };

// export const usePageLoad = ({ window }) => {
//   const [current, setCurrent] = useState({
//     complete: false,
//     progress: 0,
//   });

//   useEffect(() => {
//     console.log("window.myTestVar", window.myTestVar);
//   }, [window]);

//   // useEffect(() => {
//   //   console.log("totalLoadableElements", loadableElements);
//   // }, []);

//   return current;
// };

// export const LoadableElement = ({ children, ...props }) => {
//   useEffect(() => {
//     loadableElements += 1;
//     return () => {
//       loadableElements -= 1;
//     };
//   }, []);
//   return React.cloneElement(onLoad, props, ...children);
// };

// export const Image = () => {
//   //
// };
