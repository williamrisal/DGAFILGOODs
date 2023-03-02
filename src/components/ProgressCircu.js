import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import size from "../data/QuestionAndAnswer.json";
import logo_stress from "../assets/logo_stress.png";
import { useEffect } from "react";
const xMax =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

let progress_Sommeil = 0;
let progress_Fatigue = 0;
let progress_Pression = 0;
let progress_Médicament_Alcool = 0;
let progress_Horaire = 0;
let progress_Etat = 0;
let Etape_etat_psyco = 1;
let progress_Soucis_perso = 0;
let progress_charge_mental_hors_contrôle = 0;
let progress_Pression_ressentie = 0;

function sumLocalStorageItems() {
    const item1 = localStorage.getItem("progress_Soucis_perso");
    const item2 = localStorage.getItem("progress_charge_mental_hors_contrôle");
    const item3 = localStorage.getItem("progress_Pression_ressentie");

    console.log(item1, item2, item3, "item1, item2, item3");
    const sum = Number(item1) + Number(item2) + Number(item3);

    return sum / 3;
}


function ProgressCircu({ QuestionAndAnswer, Count }) {
    // console.log(count);

    // testa = count ? count : 0;
    let testa = Count;
    // console.log("testa", testa);
    console.log("testa", testa);

    let Answer = localStorage.getItem(QuestionAndAnswer.Formulaire[testa > 0 ? testa - 1 : testa].Question);

    if (testa < 8 && QuestionAndAnswer.Formulaire[testa].Question) {
        switch (QuestionAndAnswer.Formulaire[testa > 0 ? testa - 1 : testa].Question) {
            case "Sommeil dans les dernières 24h ?":
                progress_Sommeil = Math.round((Answer / (size.Formulaire[testa].Answer.length - 1)) * 100);
                progress_Sommeil = progress_Sommeil == 0 ? 1 : progress_Sommeil;
                console.log("progress_Sommeil", Math.round((Answer / (size.Formulaire[testa].Answer.length - 1)) * 100));
                console.log(Answer + "/ " + (size.Formulaire[testa].Answer.length - 1));
                console.log("progress_Sommeil", progress_Sommeil);
                break;
            case "Fatigue":
                progress_Fatigue = Math.round((Answer / 2) * 100);
                progress_Fatigue = progress_Fatigue == 0 ? 1 : progress_Fatigue;
                console.log(Answer + "/ " + size.Formulaire[testa].Answer.length);
                break;
            case "Soucis perso":
                progress_Soucis_perso = Math.round((Answer / 2) * 100);
                progress_Soucis_perso = progress_Soucis_perso == 0 ? 1 : progress_Soucis_perso;
                Etape_etat_psyco = localStorage.getItem("tmp_etat_psyco") == 1 ? 1 : Etape_etat_psyco;
                localStorage.setItem("tmp_etat_psyco", Etape_etat_psyco);
                localStorage.setItem("progress_Soucis_perso", progress_Soucis_perso);
                console.log(progress_Soucis_perso, "progress_Soucis_perso");
                break;
            case "charge mental (hors contrôle)":
                progress_charge_mental_hors_contrôle = Math.round((Answer / 2) * 100);
                progress_charge_mental_hors_contrôle = progress_charge_mental_hors_contrôle == 0 ? 1 : progress_charge_mental_hors_contrôle;
                Etape_etat_psyco = localStorage.getItem("tmp_etat_psyco") == 1 ? 2 : Etape_etat_psyco;
                localStorage.setItem("progress_charge_mental_hors_contrôle", progress_charge_mental_hors_contrôle);
                localStorage.setItem("tmp_etat_psyco", Etape_etat_psyco);
                break;
            case "Pression ressentie (complexité,experience, enjeu, expertise, relation...)":
                progress_Pression_ressentie = Math.round((Answer / size.Formulaire[testa].Answer.length) * 100);
                progress_Pression_ressentie = progress_Pression_ressentie == 0 ? 1 : progress_Pression_ressentie;
                localStorage.setItem("progress_Pression_ressentie", progress_Pression_ressentie);
                progress_Pression = sumLocalStorageItems()
                console.log(progress_Pression, "progress_Pression");
                Etape_etat_psyco = localStorage.getItem("tmp_etat_psyco") == 2 ? 3 : Etape_etat_psyco;
                localStorage.setItem("tmp_etat_psyco", Etape_etat_psyco);

                break;
            case "Médicament, Alcool..":
                progress_Médicament_Alcool = Math.round((Answer / (size.Formulaire[testa].Answer.length - 1)) * 100);
                progress_Médicament_Alcool = progress_Médicament_Alcool == 0 ? 1 : progress_Médicament_Alcool;
                console.log(Answer + "/ " + (size.Formulaire[testa].Answer.length - 1));
                break;
            case "Horaire d'activité":
                progress_Horaire = Math.round((Answer / size.Formulaire[testa].Answer.length) * 100);
                progress_Horaire = progress_Horaire == 0 ? 1 : progress_Horaire;
                console.log(Answer + "/ " + size.Formulaire[testa].Answer.length, "progress_Horaire");
                break;
            case "Etat":
                progress_Etat = Math.round((Answer / (size.Formulaire[testa].Answer.length - 1)) * 100);
                progress_Etat = progress_Etat == 0 ? 1 : progress_Etat;
                console.log(progress_Etat, "progress_Etat");
                break;
            default:
                break;
        }
    } else if (testa == 8) {
        progress_Etat = Math.round((Answer / (size.Formulaire[testa - 1].Answer.length - 1)) * 100);
        progress_Etat = progress_Etat == 0 ? 1 : progress_Etat;
        console.log(progress_Etat, "progress_Etat");
    }

    return (
        <body>
            <div style={{ width: "80%" }}>
                <div style={styles.contain}>
                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren
                            value={progress_Sommeil != 1 ? 100 : 0}
                            styles={progress_Sommeil >= 0 && progress_Sommeil < 33 ? styles.green : progress_Sommeil == 33 ? styles.yellow : progress_Sommeil == 67 ? styles.orange : styles.red}
                        >
                            <div style={{ fontSize: "100%", paddingBottom: 5 }}>🛌</div>
                            <div style={{ fontSize: "40%", marginTop: -5 }}>
                                <strong>{progress_Sommeil != 1 ? 100 : 0}%</strong> Sommeil
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren
                            value={progress_Fatigue != 0 ? 100 : 0}
                            styles={progress_Fatigue >= 0 && progress_Fatigue < 33 ? styles.green : progress_Fatigue == 33 ? styles.yellow : progress_Fatigue == 67 ? styles.orange : styles.red}
                        >
                            <div style={{ fontSize: "100%", paddingBottom: 5 }}>😴</div>
                            <div style={{ fontSize: "40%", marginTop: -5 }}>
                                <strong>{progress_Fatigue != 0 ? 100 : 0}%</strong> Fatigue
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>

                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren
                            value={localStorage.getItem("tmp_etat_psyco") === "1" ? 33 : localStorage.getItem("tmp_etat_psyco") === "2" ? 66 : localStorage.getItem("tmp_etat_psyco") == "3" ? 100 : 0}
                            styles={localStorage.getItem("tmp_etat_psyco") != "3" ? styles.blue : progress_Pression >= 0 && progress_Pression < 25 ? styles.green : progress_Pression >= 25 && progress_Pression < 50 ? styles.yellow : progress_Pression >= 50 && progress_Pression < 75 ? styles.orange : styles.red}
                        >
                            <img
                                style={{ width: "40%", marginTop: -5 }}
                                src={logo_stress}
                                alt="doge"
                            />
                            <div style={{ fontSize: "40%", marginTop: -5, marginLeft: 10 }}>
                                <strong>
                                    {localStorage.getItem("tmp_etat_psyco") === "1" ? 33 : localStorage.getItem("tmp_etat_psyco") === "2" ? 66 : localStorage.getItem("tmp_etat_psyco") == "3" ? 100 : 0}%
                                </strong>{" "}
                                Etat psycologique
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>

                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren
                            value={progress_Médicament_Alcool != 0 ? 100 : 0}
                            styles={
                                progress_Médicament_Alcool >= 0 && progress_Médicament_Alcool < 50 ? styles.green : styles.red
                            }
                        >
                            <div style={{ fontSize: "100%", paddingBottom: 5 }}>💊</div>
                            <div style={{ fontSize: "40%", marginTop: -5, marginLeft: 10 }}>
                                <strong>{progress_Médicament_Alcool != 0 ? 100 : 0}%</strong> Medicament,
                                Alcool..
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren
                            value={progress_Horaire != 0 ? 100 : 0}
                            styles={progress_Horaire >= 0 && progress_Horaire < 33 ? styles.green : progress_Horaire == 33 ? styles.yellow : progress_Horaire == 67 ? styles.orange : styles.red}
                        >
                            <div style={{ fontSize: "100%", paddingBottom: 5 }}>🕦🧑‍💻 </div>
                            <div style={{ fontSize: "40%", marginTop: -5, marginLeft: 10 }}>
                                <strong>{progress_Horaire != 0 ? 100 : 0}%</strong> Horaire d'activité
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren
                            value={progress_Etat != 0 ? 100 : 0}
                            styles={progress_Etat >= 0 && progress_Etat < 33 ? styles.green : progress_Etat == 50 ? styles.orange : styles.red}
                        >
                            <div style={{ fontSize: "100%", paddingBottom: 5 }}>🤒</div>
                            <div style={{ fontSize: "40%", marginTop: -5 }}>
                                <strong>{progress_Etat != 0 ? 100 : 0}%</strong> ETAT
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                </div>
            </div>
        </body>
    );
}
export default ProgressCircu;

const styles = {
    red: {
        trail: {
            stroke: "#d6d6d6",
        },
        text: {
            fill: "#1e90ff",
            fontSize: "16px",
        },
        background: {
            fill: "#3e98c7",
        },
        path: {
            stroke: "red",
        },
    },
    yellow: {
        trail: {
            stroke: "#d6d6d6",
        },
        text: {
            fill: "#1e90ff",
            fontSize: "16px",
        },
        background: {
            fill: "#3e98c7",
        },
        path: {
            stroke: "yellow",
        },
    },
    blue: {
        trail: {
            stroke: "#d6d6d6",
        },
        text: {
            fill: "#1e90ff",
            fontSize: "16px",
        },
        background: {
            fill: "#3e98c7",
        },
        path: {
            stroke: "blue",
        },
    },
    orange: {
        trail: {
            stroke: "#d6d6d6",
        },
        text: {
            fill: "#1e90ff",
            fontSize: "16px",
        },
        path: {
            stroke: "orange",
        },
    },
    green: {
        trail: {
            stroke: "#d6d6d6",
        },
        text: {
            fill: "#1e90ff",
            fontSize: "16px",
        },
        background: {
            fill: "#3e98c7",
        },
        path: {
            stroke: "green",
        },
    },

    contain: {
        flex: 1,
        //tialle
        width: "124%",
        // marginLeft: xMax < 600 ? '20%' : 0,
        //metre tout les items en ligne
        display: "flex",
        //metre un espace entre les items
        justifyContent: "space-between",
        // flexDirection: xMax < 600 ? 'column' : 'row',
    },
    spaceElement: {
        marginLeft: xMax < 600 ? 0 : 20,
        marginRight: xMax < 600 ? 0 : 20,
    },
};
