import React from "react";

import GlobalStyle from "./styles/global";

import Home from "./pages/home";

const App: React.FC = () => {
    return (
        <>
            <Home />
            <GlobalStyle />
        </>
    );
};

export default App;
