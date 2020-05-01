import React from "react";

import { Container } from "./styles";

const DetailsFloating: React.FC = () => {
    return (
        <Container>
            <ul>
                <li>
                    <div className="right-floating-detail">
                        <span>RB's cadastradas</span>
                        <p>5</p>
                    </div>
                </li>
                <li>
                    <div className="right-floating-detail">
                        <span>OS Abertas</span>
                        <p>7</p>
                    </div>
                </li>
                <li>
                    <div className="right-floating-detail">
                        <span>Recebidos hoje</span>
                        <p>8</p>
                    </div>
                </li>
                <li>
                    <div className="right-floating-detail">
                        <span>Contas a pagar</span>
                        <p>2</p>
                    </div>
                </li>
            </ul>
        </Container>
    );
};

export default DetailsFloating;
