import React, { useState, useEffect } from "react";

import { Container } from "./styles";

interface ContainerProps {
    isVisible: boolean;
}

const DetailsFloating: React.FC<ContainerProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    useEffect(() => {
        setIsOpened(props.isVisible);
    }, [setIsOpened]);
    return (
        <Container isVisible={isOpened}>
            <ul>
                <li>
                    <div className="floating-detail">
                        <span>RB's cadastradas</span>
                        <p>5</p>
                    </div>
                </li>
                <li>
                    <div className="floating-detail">
                        <span>OS Abertas</span>
                        <p>7</p>
                    </div>
                </li>
                <li>
                    <div className="floating-detail">
                        <span>Recebidos hoje</span>
                        <p>8</p>
                    </div>
                </li>
                <li>
                    <div className="floating-detail">
                        <span>Contas a pagar</span>
                        <p>2</p>
                    </div>
                </li>
            </ul>
        </Container>
    );
};

export default DetailsFloating;
