import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme, { colour } from "./config/theme.json";
import ScrollProvider from "./components/util/ScrollProvider";
import Layout from "./components/layout/Layout";
import Introduction from "./components/sections/introduction/Introduction";
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Contact from "./components/sections/contact/Contact";

const SECTIONS = [
  {
    title: null,
    path: "/",
    content: Introduction,
    colours: {
      text: "#FFFFFF",
      background: colour.primary,
    },
    indexRange: [0, 0],
  },
  {
    title: "ABOUT",
    path: "/about",
    content: About,
    colours: {
      text: colour.secondary,
      background: "#FFFFFF",
    },
    indexRange: [1, 2],
  },
  {
    title: "PROJECTS",
    path: "/projects",
    content: Projects,
    colours: {
      text: colour.secondary,
      background: "#FFFFFF",
    },
    indexRange: [3, 4],
  },
  {
    title: "CONTACT",
    path: "/contact",
    content: Contact,
    colours: {
      text: colour.secondary,
      background: "#FFFFFF",
    },
    indexRange: [5, 5],
  },
];

export default () => (
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <ScrollProvider sections={SECTIONS} provideTo={Layout} />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
