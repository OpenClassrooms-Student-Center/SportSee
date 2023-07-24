import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../API/fetch.js"
import ActivityComponent from "../components/ActivityComponent.js";
import SessionsComponent from "../components/AverageSessionsComponent.js";
import PerformanceComponent from "../components/PerformanceComponent.js";
import ScoreComponent from "../components/ScoreComponent.js";
import Proteines from "../assets/chicken.svg";
import Calories from "../assets/energy.svg";
import Glucides from "../assets/apple.svg";
import Lipides from "../assets/cheeseburger.svg";
import AsideBar from "../components/AsideBar.js";

function Home() {

    const { id } = useParams();
    const { type } = useParams();
    const [mainData, setMainData] = useState();
    const [activity, setActivity] = useState();
    const [averageSessions, setAverageSessions] = useState();
    const [performance, setPerformance] = useState();

    useEffect(() => {
        getData(parseInt(id), type)
            .then(data => {
                setMainData(data)

                getData(parseInt(id), "activity")
                    .then(data => setActivity(data))
                    .catch(error => console.log("erreur activity", error))

                getData(parseInt(id), "average-sessions")
                    .then(data => setAverageSessions(data))
                    .catch(error => console.log("erreur sessions", error))

                getData(parseInt(id), "performance")
                    .then(data => setPerformance(data))
                    .catch(error => console.log("erreur performance", error))
            })

            .catch(error => console.log("erreur main", error))
    }, [id, type])

    return (
        <div style={{ display: "flex" }}>
            <AsideBar />
            <div className="home_container">
                <div className="graph_title">
                    <h1>Bonjour&nbsp;
                        <span style={{ color: "#FF0101" }}>{mainData && mainData.firstName}</span>
                    </h1>
                    <span style={{ fontSize: "18px" }}>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
                </div>
                <div className="graphic_zone">
                    <div className="main_block">
                        <div className="activity_block">
                            <ActivityComponent activity={activity} />
                        </div>
                        <div className="graphic">
                            <div style={{ flex: 1 }}>
                                <SessionsComponent averageSessions={averageSessions} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <PerformanceComponent performance={performance} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <ScoreComponent score={mainData && mainData.score} />
                            </div>
                        </div>
                    </div>
                    <section className="right_info">
                        <div className="calories">
                            <div className="img_container1">
                                <img src={Calories} alt="calories img" />
                            </div>
                            <div className="infos">
                                <h3>{mainData && mainData.calorie}kCal</h3>
                                <p className="nutri">Calories</p>
                            </div>
                        </div>
                        <div className="proteines">
                            <div className="img_container2">
                                <img src={Proteines} alt="" />
                            </div>
                            <div className="infos">
                                <h3>{mainData && mainData.proteine}g</h3>
                                <p className="nutri">Proteines</p>
                            </div>
                        </div>
                        <div className="glucides">
                            <div className="img_container3">
                                <img src={Glucides} alt="glucides img" />
                            </div>
                            <div className="infos">
                                <h3>{mainData && mainData.glucide}g</h3>
                                <p className="nutri">Glucides</p>
                            </div>
                        </div>
                        <div className="lipides">
                            <div className="img_container4">
                                <img src={Lipides} alt="lipides img" />
                            </div>
                            <div className="infos">
                                <h3>{mainData && mainData.lipide}g</h3>
                                <p className="nutri">Lipides</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </div>
    );
}

export default Home;