import React from 'react';
import ReactDOM from "react-dom/client";
import "./fonts/metropolis/index.css";
import "./index.css";
// import "./wdyr";
import App from "./App";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);