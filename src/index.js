import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import CreateArticle from "./Components/CreateArticle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateArticle />
  </React.StrictMode>
);
