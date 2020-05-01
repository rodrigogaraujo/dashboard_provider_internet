import styled from "styled-components";

const Container = styled.section`
    position: absolute;
    width: 100%;
    bottom: -100px;
    ul {
        list-style: none;
        display: flex;
        li {
            align-items: center;
            justify-content: center;
            text-align: center;
            border-radius: 5px;
            background: #d5e2f2;
            width: 275px;
            height: 120px;
            margin: 30px 15px 30px 15px;
            border: 1px solid #658c76;
            display: flex;
            flex-direction: row;
            box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);

            .left-floating-detail {
                flex-basis: 33%;
                svg {
                    color: #d5e2f2;
                    border: 1px solid #658c76;
                    margin: 10px;
                    padding: 10px;
                    border-radius: 5px;
                    background: -moz-linear-gradient(left, #1e3c72, #2a5298);
                }
            }

            .right-floating-detail {
                display: flex;
                flex-direction: column;
                flex-basis: 67%;
                color: #045159;
                h1 {
                    font-weight: 400;
                }
                span {
                    font-weight: 300;
                    font-size: 1.3em;
                }
                p {
                    margin-top: 10px;
                    font-size: 1.8em;
                }
            }
        }
    }
`;

export { Container };
