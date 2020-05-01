import React, { useState } from "react";
import { FiMenu, FiBarChart2 } from "react-icons/fi";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory";

import { Container, SideContent } from "./styles";
import CircleProgressBar from "../../components/CircleProgressBar";

import SidebarMenu from "../../components/SidebarMenu";
import DetailsFloating from "../../components/DetailsFloating";

const Home: React.FC = () => {
    const [isOpened, setIsOpened] = useState(false);

    const dataGraphicSevenDays = [
        { quarter: "Dia 29", earnings: 800 },
        { quarter: "Dia 28", earnings: 750 },
        { quarter: "Dia 27", earnings: 250 },
        { quarter: "Dia 26", earnings: 310 },
        { quarter: "Dia 25", earnings: 1200 },
        { quarter: "Dia 24", earnings: 900 },
        { quarter: "Dia 23", earnings: 120 },
    ];

    const dataGraphicSevenDaysOs = [
        { quarter: "Dia 29", earnings: 2 },
        { quarter: "Dia 28", earnings: 4 },
        { quarter: "Dia 27", earnings: 2 },
        { quarter: "Dia 26", earnings: 3 },
        { quarter: "Dia 25", earnings: 7 },
        { quarter: "Dia 24", earnings: 11 },
        { quarter: "Dia 23", earnings: 1 },
    ];

    function handleHideMenu(e: any) {
        e.preventDefault();
        isOpened ? setIsOpened(false) : setIsOpened(true);
    }

    return (
        <Container>
            <SidebarMenu isVisible={isOpened} />
            <SideContent isVisible={isOpened}>
                <header>
                    <ul>
                        <li>
                            <a href="" onClick={(e) => handleHideMenu(e)}>
                                <FiMenu size={26} />
                            </a>
                        </li>
                        <li>
                            <span>Home</span>
                        </li>
                    </ul>
                    <section className="detail-day">
                        <div className="detail-day-content">
                            <div className="left-detail">
                                <h1>Olá Rodrigo, bem vindo de volta!</h1>
                            </div>
                            <div className="right-detail">
                                <section>
                                    <FiBarChart2
                                        size={20}
                                        className="received"
                                    />
                                    <h1>Entradas</h1>
                                    <span>R$ 53,00</span>
                                </section>
                                <section>
                                    <FiBarChart2 size={20} className="output" />
                                    <h1>Saídas</h1>
                                    <span>R$ 53,00</span>
                                </section>
                            </div>
                        </div>
                        <DetailsFloating />
                    </section>
                </header>
                <section className="content">
                    <div className="graphics">
                        <section className="graphic-container">
                            <h1>Entradas dos últimos 7 dias</h1>
                            <VictoryChart
                                theme={VictoryTheme.grayscale}
                                domainPadding={20}
                            >
                                <VictoryAxis
                                    tickValues={[1, 2, 3, 4, 5, 6, 7]}
                                    tickFormat={[
                                        "Dia 29",
                                        "Dia 28",
                                        "Dia 27",
                                        "Dia 26",
                                        "Dia 25",
                                        "Dia 24",
                                        "Dia 23",
                                    ]}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={(x) => `R$${x / 1000}k`}
                                />
                                <VictoryBar
                                    data={dataGraphicSevenDays}
                                    x="quarter"
                                    y="earnings"
                                />
                            </VictoryChart>
                        </section>
                        <section className="os-solved">
                            <h1>Clientes adimplentes</h1>
                            <CircleProgressBar />
                        </section>
                        <section className="graphic-container">
                            <h1>OS dos últimos 7 dias</h1>
                            <VictoryChart
                                theme={VictoryTheme.grayscale}
                                domainPadding={20}
                            >
                                <VictoryBar
                                    data={dataGraphicSevenDaysOs}
                                    x="quarter"
                                    y="earnings"
                                />
                            </VictoryChart>
                        </section>
                    </div>
                    <section className="table-os">
                        <table>
                            <tr>
                                <th>Nome</th>
                                <th>Contato</th>
                                <th>Endereço</th>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td>Berglunds snabbköp</td>
                                <td>Christina Berglund</td>
                                <td>Sweden</td>
                            </tr>
                            <tr>
                                <td>Berglunds snabbköp</td>
                                <td>Christina Berglund</td>
                                <td>Sweden</td>
                            </tr>
                            <tr>
                                <td>Berglunds snabbköp</td>
                                <td>Christina Berglund</td>
                                <td>Sweden</td>
                            </tr>
                        </table>
                    </section>
                </section>
            </SideContent>
        </Container>
    );
};

export default Home;
