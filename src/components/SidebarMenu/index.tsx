import React, { useState } from "react";
import {
    FiSettings,
    FiMail,
    FiUser,
    FiLogOut,
    FiChevronDown,
    FiX,
} from "react-icons/fi";

import { Container, UserDescription, MenuItensSide } from "./styles";

import logoImg from "../../assets/logowhite.png";
import userImg from "../../assets/user.png";

interface ContainerProps {
    isVisible: boolean;
}

const SidebarMenu: React.FC<ContainerProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const [isOpenedButton, setIsOpenedButton] = useState(false);

    function handleHideMenu(e: any) {
        e.preventDefault();

        props.isVisible ? setIsOpened(false) : setIsOpened(true);
        setIsOpenedButton(!!props.isVisible);

        console.log(isOpenedButton, isOpened);
    }
    return (
        <Container {...props} isVisibleButton={isOpenedButton}>
            <img src={logoImg} alt="G3 infotech" />
            <UserDescription
                isVisible={isOpened}
                isVisibleButton={isOpenedButton}
            >
                <a href="" onClick={(e) => handleHideMenu(e)}>
                    <FiX size={26} />
                </a>
                <img src={userImg} alt="Rodrigo Gomes" />
                <h1>Rodrigo Gomes</h1>
                <p>Administrador</p>
                <section className="userSettings">
                    <a href="">
                        <FiSettings size={20} />
                    </a>
                    <a href="">
                        <FiMail size={20} />
                    </a>
                    <a href="">
                        <FiUser size={20} />
                    </a>
                    <a href="">
                        <FiLogOut size={20} />
                    </a>
                </section>
            </UserDescription>
            <MenuItensSide>
                <nav>
                    <a href="">
                        <FiSettings size={17} />
                        <span>Home</span>
                    </a>
                    <a href="">
                        <FiMail size={17} />
                        <span>Usuários</span>
                        <FiChevronDown size={17} />
                    </a>
                    <a href="" className="active">
                        <FiUser size={17} />
                        <span>Estoque</span>
                        <FiChevronDown size={17} />
                    </a>
                    <a href="">
                        <FiLogOut size={17} />
                        <span>Finanças</span>
                        <FiChevronDown size={17} />
                    </a>
                    <a href="">
                        <FiSettings size={17} />
                        Configurações
                    </a>
                </nav>
            </MenuItensSide>
        </Container>
    );
};

export default SidebarMenu;
