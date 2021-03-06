import styled, { css } from "styled-components";

interface ContainerPropsSideMenu {
    isVisible: boolean;
}

const Container = styled.aside<ContainerPropsSideMenu>`
    display: flex;
    max-width: 250px;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: #01402e;
    transition: all 0.3s ease;

    ${(props) =>
        props.isVisible &&
        css`
            display: none;
        `}

    flex-direction: column;

    > img {
        align-self: center;
        width: 130px;
        padding: 10px 0;
        height: 68px;
    }

    @media screen and (max-width: 900px) {
        display: none;
        ${(props) =>
            props.isVisible &&
            css`
                display: flex;
                max-width: 230px;
                transition: all 0.3s ease;
            `}
    }
    transition: all 0.3s ease;
`;

const UserDescription = styled.section<ContainerPropsSideMenu>`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-top: 0.8px solid #025940;
    border-bottom: 0.8px solid #025940;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    position: relative;

    > a {
        visibility: hidden;
        position: absolute;
        top: 0;
        right: 5px;
        text-decoration: none;
        color: #d5e2f2;
        margin-left: 20px;
        transition: color 2s;

        &:hover {
            color: #9fbf2c;
        }

        svg {
            padding-top: 5px;

            @media screen and (max-width: 900px) {
                visibility: visible;
            }
        }
    }

    img {
        width: 70px;
        border-radius: 50%;
        align-self: center;
        margin-bottom: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    }

    h1 {
        font-size: 0.9em;
        margin-bottom: 3px;
        font-weight: 500;
    }
    p {
        font-size: 0.8em;
        font-weight: 300;
    }

    > .userSettings {
        margin-top: 20px;
        padding-bottom: 30px;
        a {
            margin: 0 4px;
            text-decoration: none;
            font-size: 1.3em;
            color: #d5e2f2;
            padding: 8px 8px 4px 9px;
            border: 1px solid #025940;
            border-radius: 50%;
            transition: all 1s;

            &:hover {
                border-color: #d5e2f2;
                background: #d5e2f2;
                color: #01402e;
            }
        }
    }
`;

const MenuItensSide = styled.section`
    nav {
        display: flex;
        flex-basis: 250px;
        flex-direction: column;
        a {
            width: 100%;
            display: flex;
            padding: 15px 10px 15px 16px;
            font-size: 1.1em;
            font-weight: 400;
            color: #d5e2f2;
            text-decoration: none;
            border-bottom: 1px solid #025940;

            align-items: center;
            transition: all 2s;

            span {
                flex: 1;
            }

            > svg {
                margin-right: 16px;
                transition: all 2s;
            }

            span + svg {
                color: #025940;
                margin: 0;
            }

            &:hover {
                background: #025940;
                color: #9fbf2c;
                svg {
                    color: #9fbf2c;
                }

                background: -webkit-gradient(
                        linear,
                        left top,
                        right top,
                        from(#01402e),
                        to(#025940)
                    )
                    no-repeat;
                background: -moz-linear-gradient(left, #01402e, #025940);
                filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=1, 
                StartColorStr='#01402E', EndColorStr='#025940');
            }
        }

        .active {
            background: #025940;
            color: #9fbf2c;
            svg {
                color: #9fbf2c;
            }

            background: -webkit-gradient(
                    linear,
                    left top,
                    right top,
                    from(#01402e),
                    to(#025940)
                )
                no-repeat;
            background: -moz-linear-gradient(left, #01402e, #025940);
            filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=1, 
                StartColorStr='#01402E', EndColorStr='#025940');
        }
    }
`;

export { Container, UserDescription, MenuItensSide };
