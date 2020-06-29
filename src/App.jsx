import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme.json";
import ScrollProvider from "./components/util/ScrollProvider";
import Layout from "./components/layout/Layout";

export default () => (
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <ScrollProvider>
          {/* scrollIndex is 0 by default, but is overridden by ScrollProvider */}
          <Layout scrollIndex={0} />
        </ScrollProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
