import styled, { css } from "styled-components";

interface ContainerProps {
    isVisible: boolean;
}

const Container = styled.div`
    display: flex;
`;

const SideContent = styled.div<ContainerProps>`
    max-width: calc(100% - 250px);
    ${(props) =>
        props.isVisible &&
        css`
            max-width: 100%;
        `}
    width: 100%;

    header {
        display: flex;
        flex-direction: column;

        > ul {
            height: 69px;
            list-style: none;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-bottom: 0.8px solid #025940;

            li {
                a {
                    text-decoration: none;
                    color: #d5e2f2;
                    margin-left: 20px;
                    transition: color 2s;

                    &:hover {
                        color: #9fbf2c;
                    }

                    svg {
                        padding-top: 5px;
                    }
                }

                span {
                    font-size: 1.3em;
                    margin-left: 16px;
                }
            }
        }

        > .detail-day {
            border-bottom: 0.8px solid #025940;
            width: 100%;
            height: 160px;
            display: flex;
            flex-direction: row;
            position: relative;

            .detail-day-content {
                display: flex;
                width: 100%;
                flex-direction: row;
                align-items: center;

                .left-detail {
                    width: 50%;
                    display: flex;

                    h1 {
                        padding: 10px 30px 50px 30px;
                        font-weight: 400;
                        font-size: 1.2em;
                    }
                }
                .right-detail {
                    width: 50%;
                    display: flex;
                    justify-content: flex-end;
                    padding: 10px 20px 50px 30px;
                    text-align: center;

                    section {
                        padding: 30px;
                        font-weight: 400;

                        h1 {
                            color: #658c76;
                            font-weight: 400;
                            font-size: 1.1em;
                            padding-bottom: 5px;
                        }

                        span {
                            color: #d5e2f2;
                            font-weight: 500;
                            font-size: 1.3em;
                        }

                        .output {
                            color: red;
                        }

                        .received {
                            color: #9fbf2c;
                        }
                    }
                }
            }
        }

        background: -webkit-gradient(
                linear,
                left top,
                right top,
                from(#025940),
                to(#01402e)
            )
            no-repeat;
        background: -moz-linear-gradient(left, #025940, #01402e);
        filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=1, 
                StartColorStr='#025940', EndColorStr='#01402E');
    }

    .content {
        display: flex;
        flex-direction: column;
        .graphics {
            display: flex;
            .graphic-container {
                margin: 100px 20px 20px 20px;
                padding: 20px;
                max-width: 385px;
                background: #d5e2f2;
                transition: 0.3s;
                color: #01402e;
                border-radius: 5px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

                ${(props) =>
                    props.isVisible &&
                    css`
                        max-width: 500px;
                    `}
            }
            .os-solved {
                max-width: 230px;
                text-align: center;
                color: #01402e;
                background: #d5e2f2;
                border-radius: 5px;
                margin: 120px 20px 20px 20px;
                padding: 20px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                height: 250px;
            }

            @media screen and (max-width: 1260px) {
                .graphic-container {
                    h1 {
                        font-size: 1em;
                    }
                }
                .os-solved {
                    h1 {
                        font-size: 1em;
                    }
                }
            }

            @media screen and (max-width: 1150px) {
                margin: 0 auto;
                flex-direction: row;

                .os-solved {
                    display: none;
                }
            }

            @media screen and (max-width: 900px) {
                .os-solved {
                    display: block;
                }
            }

            @media screen and (max-width: 840px) {
                .os-solved {
                    display: none;
                }
                .os-solved + .graphic-container {
                }
            }

            @media screen and (max-width: 620px) {
                flex-direction: column;
                .graphic-container {
                    width: 100%;
                }
                .os-solved + .graphic-container {
                    width: 100%;
                    margin-top: 10px;
                }
            }
        }

        .table-os {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            background: #d5e2f2;
            color: #01402e;
            margin: 20px;
            border-radius: 5px;
            padding: 30px;

            table {
                border-collapse: collapse;
                width: 100%;

                td,
                th {
                    border: 0.8px solid #025940;
                    padding: 8px;
                }

                tr:nth-child(even) {
                    background-color: #658c76;
                    color: #d5e2f2;
                }

                tr:hover {
                    background-color: #025940;
                    color: #d5e2f2;
                }

                th {
                    color: #d5e2f2;
                    background: #01402e;
                }
            }
        }
    }

    @media screen and (max-width: 900px) {
        max-width: 100%;
    }
`;

export { Container, SideContent };
