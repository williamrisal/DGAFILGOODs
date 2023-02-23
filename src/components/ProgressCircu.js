import { useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import size from '../data/QuestionAndAnswer.json';
import 'react-circular-progressbar/dist/styles.css';
import logo_stress from '../assets/logo_stress.png';

const xMax = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function ProgressCircu({ QuestionAndAnswer, Count , Progress}) {
    let testa = Count;
    let Answer = localStorage.getItem(QuestionAndAnswer.Formulaire[testa > 0 ? testa - 1: testa].Question);

    if (testa < 8 && QuestionAndAnswer.Formulaire[testa].Question) {
        switch (QuestionAndAnswer.Formulaire[testa].Question) {
            case "Sommeil dans les dernières 24h ?" :
                Progress[0].sp1(Math.round(((Answer) / (size.Formulaire[testa].Answer.length - 1)) * 100));
                break;
            case "Fatigue" :
                Progress[1].sp2(Math.round(((Answer) / (size.Formulaire[testa].Answer.length - 1)) * 100));
                break;
            case "Pression ressentie (complexité,experience, enjeu, expertise, relation...)" :
                Progress[2].sp3(Math.round(((Answer) / (size.Formulaire[testa].Answer.length - 1)) * 100));
                localStorage.setItem("tmp", 0)
                break;
            case "Médicament, Alcool.." :
                Progress[3].sp4(Math.round(((Answer) / (size.Formulaire[testa].Answer.length - 1)) * 100));
                break;
            case "Horaire d'activité" :
                Progress[4].sp5(Math.round(((Answer) / (size.Formulaire[testa].Answer.length - 1)) * 100));
                break;
            case "Etat" :
                Progress[5].sp6(Math.round(((Answer) / (size.Formulaire[testa].Answer.length - 1)) * 100));
                break;
            default:
                break;
        }
    }
    console.log(Progress)
    return (
        <body>
            <div style={{width: '80%'}}>
                <div style={styles.contain}>

                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren value={testa > 0 ? 100 : 0} styles={Progress[0].p1 >= 0 && Progress[0].p1 < 33 ? styles.green : Progress[0].p1 >= 33 && Progress[0].p1 < 66 ? styles.yellow : styles.red}>
                            <div style={{ fontSize: '100%', paddingBottom: 5 }}>🛌</div>
                            <div style={{ fontSize: '40%', marginTop: -5 }}>
                                <strong>{testa > 0 ? 100 : 0}%</strong>  Sommeil
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>

                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren value={testa >= 2 ? 100 : 0} styles={Progress[1].p2 >= 0 && Progress[1].p2 < 33 ? styles.green : Progress[1].p2 >= 33 && Progress[1].p2 < 66 ? styles.yellow : styles.red}>
                            <div style={{ fontSize: '100%', paddingBottom: 5 }}>😴</div>
                            <div style={{ fontSize: '40%', marginTop: -5 }}>
                                <strong>{testa >= 2 ? 100 : 0}%</strong> Fatigue
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>

                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren value={testa === 3 ? 33 : testa === 4 ? 66 : testa >= 5 ? 100 : 0} styles={Progress[2].p3 >= 0 && Progress[2].p3 < 33 ? styles.green : Progress[2].p3 >= 33 && Progress[2].p3 < 66 ? styles.yellow : styles.red}>
                            <img style={{ width: '40%', marginTop: -5}} src={logo_stress} alt="doge" />
                            <div style={{ fontSize: '40%', marginTop: -5 , marginLeft: 10}}>
                                <strong>{testa === 3 ? 33 : testa === 4 ? 66 : testa >= 5 ? 100 : 0}%</strong> Etat psycologique
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                    
                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren value={testa >= 6 ? 100 : 0} styles={Progress[3].p4 >= 0 && Progress[3].p4 < 33 ? styles.green : Progress[3].p4 >= 33 && Progress[3].p4 < 66 ? styles.yellow : styles.red}>
                            <div style={{ fontSize: '100%', paddingBottom: 5 }}>💊</div>
                            <div style={{ fontSize: '40%', marginTop: -5 , marginLeft: 10}}>
                                <strong>{testa >= 6 ? 100 : 0}%</strong> Medicament, Alcool..
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>

                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren value={testa >= 7 ? 100 : 0} styles={Progress[4].p5 >= 0 && Progress[4].p5 < 33 ? styles.green : Progress[4].p5 >= 33 && Progress[4].p5 < 66 ? styles.yellow : styles.red}>
                            <div style={{ fontSize: '100%', paddingBottom: 5 }}>🕦🧑‍💻 </div>
                            <div style={{ fontSize: '40%', marginTop: -5 , marginLeft: 10}}>
                                <strong>{testa >= 7 ? 100 : 0}%</strong> Horaire d'activité
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>

                    <div style={styles.spaceElement}>
                        <CircularProgressbarWithChildren value={testa >= 8 ? 100 : 0} styles={Progress[5].p6 >= 0 && Progress[5].p6 < 33 ? styles.green : Progress[5].p6 >= 33 && Progress[5].p6 < 66 ? styles.yellow : styles.red}>
                            <div style={{ fontSize: '100%', paddingBottom: 5 }}>🤒</div>
                            <div style={{ fontSize: '40%', marginTop: -5 }}>
                                <strong>{testa >= 8 ? 100 : 0}%</strong> ETAT
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
		trail: { stroke: '#d6d6d6', },
        text: {
            fill: '#1e90ff',
            fontSize: '16px',
        },
        background: { fill: '#3e98c7', },
		path: { stroke: 'red', }
	},
	yellow: {
		trail: { stroke: '#d6d6d6', },
        text: {
            fill: '#1e90ff',
            fontSize: '16px',
        },
        background: { fill: '#3e98c7', },
		path: { stroke: 'yellow', }
	},
	green: {
		trail: { stroke: '#d6d6d6', },
        text: {
            fill: '#1e90ff',
            fontSize: '16px',
        },
        background: { fill: '#3e98c7', },
		path: { stroke: 'green', }
	},
    contain: {
        flex: 1,
        width: '124%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    spaceElement: {
        marginLeft: xMax < 600 ? 0 : 20,
        marginRight: xMax < 600 ? 0 : 20
    },
}