import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme.json";
import ScrollHandler from "./components/util/ScrollHandler";
import Layout from "./components/layout/Layout";
import Introduction from "./components/sections/introduction/Introduction";
import About from "./components/sections/about/About";
import Projects from "./components/sections/projects/Projects";
import Contact from "./components/sections/contact/Contact";
import FloatingScrollDown from "./components/context/FloatingScrollDown";

const SECTIONS = [
  {
    title: null,
    path: "/",
    component: Introduction,
    colors: {
      text: theme.color.secondary,
      background: theme.color.primary,
    },
    indexRange: [0, 0],
  },
  {
    title: "ABOUT",
    path: "/about",
    component: About,
    colors: {
      text: theme.color.secondary,
      background: "#FFFFFF",
    },
    indexRange: [1, 2],
  },
  {
    title: "PROJECTS",
    path: "/projects",
    component: Projects,
    colors: {
      text: theme.color.secondary,
      background: "#FFFFFF",
    },
    indexRange: [3, 4],
  },
  {
    title: "CONTACT",
    path: "/contact",
    component: Contact,
    colors: {
      text: theme.color.secondary,
      background: "#FFFFFF",
    },
    indexRange: [5, 5],
  },
];

const maxIndex = SECTIONS[SECTIONS.length - 1].indexRange[1];

const initialPath = window.location.pathname;

const initialSection =
  SECTIONS.find(({ path }) => path === initialPath) ?? SECTIONS[0];

const initialIndex = initialSection.indexRange[0];

const App = () => (
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <FloatingScrollDown.Provider>
          <ScrollHandler initialIndex={initialIndex} maxIndex={maxIndex}>
            {(scrollIndex) => (
              <Layout sections={SECTIONS} scrollIndex={scrollIndex} />
            )}
          </ScrollHandler>
        </FloatingScrollDown.Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

export default App;
