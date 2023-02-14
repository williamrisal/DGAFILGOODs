import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import size from '../data/QuestionAndAnswer.json';
import logo_stress from '../assets/logo_stress.png';
import { useEffect,useState } from 'react';
const xMax = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var progress1 = 0;
var progress2 = 0;
var progress3 = 0;
var progress4 = 0;
var progress5 = 0;
var progress6 = 0;



console.log("progress2", progress2)
function ProgressCircu(QuestionAndAnswer) {
    let testa = localStorage.getItem("count") != null ? localStorage.getItem("count") : 0;
    let Answer =  Number(localStorage.getItem(QuestionAndAnswer.QuestionAndAnswer.Formulaire[testa].Question))
    console.log("testa", testa, "Answer" , Answer)
    let ok = false;
        if (QuestionAndAnswer.QuestionAndAnswer.Formulaire[testa].Question != null){
            switch (QuestionAndAnswer.QuestionAndAnswer.Formulaire[testa].Question) {
                case "Sommeil dans les dernières 24h ?"
                    :progress1 = 100;
                    console.log("progress1", progress1)
                    console.log(Answer + "/ " + (size.Formulaire[testa].Answer.length - 1))
                    break;
                case "Fatigue"
                    :progress2 = Math.round(((Answer) / (size.Formulaire[testa].Answer.length - 1)) * 100);
                    console.log(Answer + "/ " + (size.Formulaire[testa].Answer.length - 1))
                    break;

                case "Pression ressentie (complexité,experience, enjeu, expertise, relation...)"
                    :progress3 = Math.round((Answer / 6) * 100);
                    console.log(Answer + "/ " + 6)
                    localStorage.setItem("tmp", 0)
                    break;
                case "Médicament, Alcool.."
                    :progress4 = Math.round((Answer / (size.Formulaire[testa].Answer.length - 1)) * 100);
                    console.log(Answer + "/ " + (size.Formulaire[testa].Answer.length - 1))
                    break;
                case "Horaire d'activité"
                    :progress5 = Math.round((Answer / (size.Formulaire[testa].Answer.length - 1)) * 100);
                    console.log(Answer + "/ " + (size.Formulaire[testa].Answer.length - 1))
                    break;
                case "Etat"
                    :progress6 = Math.round((Answer / (size.Formulaire[testa].Answer.length - 1)) * 100);
                    ok = true;
                    console.log(Answer + "/ " + (size.Formulaire[testa].Answer.length - 1))
                    break;
            }
           }
    
    return (
        <body>
            <div style={{width: '80%'}}>
                <div style={styles.contain}>
                    <div style={styles.spaceElement}>
                    <CircularProgressbarWithChildren value={progress1} styles={progress1 > 0 && progress1 <= 33 ? styles.red : progress1 > 33 && progress1 <= 66 ? styles.yellow : styles.green}>
                    <div style={{ fontSize: '100%', paddingBottom: 5 }}>🛌</div>
                        <div style={{ fontSize: '40%', marginTop: -5 }}>
                            <strong>{progress1}%</strong>  Sommeil
                        </div>
                    </CircularProgressbarWithChildren>
                    </div>

                    <div style={styles.spaceElement}>
                    <CircularProgressbarWithChildren value={testa >= 1 ? 100 : 0} styles={progress2 > 0 && progress2 <= 33 ? styles.green : progress2 > 33 && progress2 <= 66 ? styles.yellow : styles.red}>
                    <div style={{ fontSize: '100%', paddingBottom: 5 }}>😴</div>
                        <div style={{ fontSize: '40%', marginTop: -5 }}>
                            <strong>{testa >= 1 ? 100 : 0}%</strong> Fatigue
                        </div>
                    </CircularProgressbarWithChildren>
                    </div>

                    <div style={styles.spaceElement}>
                    <CircularProgressbarWithChildren value={testa == 2 ? 33 : testa == 3 ? 66 : testa >= 4 ? 100 : 0} styles={progress3 > 0 && progress3 <= 33 ? styles.red : progress3 > 33 && progress3 <= 66 ? styles.yellow : styles.green}>
                    <img style={{ width: '40%', marginTop: -5}} src={logo_stress} alt="doge" />
                        <div style={{ fontSize: '40%', marginTop: -5 , marginLeft: 10}}>
                            <strong>{testa == 2 ? 33 : testa == 3 ? 66 : testa >= 4 ? 100 : 0}%</strong> Etat psycologique
                        </div>
                    </CircularProgressbarWithChildren>
                    </div>
                    
                    <div style={styles.spaceElement}>
                    <CircularProgressbarWithChildren value={testa >= 5 ? 100 : 0} styles={progress4 > 0 && progress4 <= 33 ? styles.green : progress4 > 33 && progress4 <= 66 ? styles.yellow : styles.red}>
                    <div style={{ fontSize: '100%', paddingBottom: 5 }}>💊</div>
                        <div style={{ fontSize: '40%', marginTop: -5 , marginLeft: 10}}>
                            <strong>{testa >= 5 ? 100 : 0}%</strong> Medicament, Alcool..
                        </div>
                    </CircularProgressbarWithChildren>
                    </div>
                    <div style={styles.spaceElement}>

                    <CircularProgressbarWithChildren value={testa >= 6 ? 100 : 0} styles={progress5 > 0 && progress5 <= 33 ? styles.red : progress5 > 33 && progress5 <= 66 ? styles.yellow : styles.green}>
                    <div style={{ fontSize: '100%', paddingBottom: 5 }}>🕦🧑‍💻 </div>
                        <div style={{ fontSize: '40%', marginTop: -5 , marginLeft: 10}}>
                            <strong>{testa >= 6 ? 100 : 0}%</strong> Horaire d'activité
                        </div>
                    </CircularProgressbarWithChildren>
                    </div>
                    <div style={styles.spaceElement}>
                        
                    <CircularProgressbarWithChildren value={testa >= 7 ? 100 : 0} styles={progress6 > 0 && progress6 <= 33 ? styles.red : progress6 > 33 && progress6 <= 66 ? styles.yellow : styles.green}>
                    <div style={{ fontSize: '100%', paddingBottom: 5 }}>🤒</div>
                        <div style={{ fontSize: '40%', marginTop: -5 }}>
                            <strong>{testa >= 7 ? 100 : 0}%</strong> ETAT
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
            stroke: '#d6d6d6',
        },
        text: {
            fill: '#1e90ff',
            fontSize: '16px',
        },
        background: {
            fill: '#3e98c7',
        },
		path: {
			stroke: 'red',
		}
	},
	yellow: {
		trail: {
            stroke: '#d6d6d6',
        },
        text: {
            fill: '#1e90ff',
            fontSize: '16px',
        },
        background: {
            fill: '#3e98c7',
        },
		path: {
			stroke: 'yellow',
			
		}
	},
	green: {
		trail: {
            stroke: '#d6d6d6',
        },
        text: {
            fill: '#1e90ff',
            fontSize: '16px',
        },
        background: {
            fill: '#3e98c7',
        },
		path: {
			stroke: 'green',
		}
	},

    contain: {
        flex: 1,
        //tialle
        width: '124%',
       // marginLeft: xMax < 600 ? '20%' : 0,
        //metre tout les items en ligne
        display: 'flex',
        //metre un espace entre les items
        justifyContent: 'space-between',
       // flexDirection: xMax < 600 ? 'column' : 'row',
    },
    spaceElement: {
        marginLeft: xMax < 600 ? 0 : 20,
        marginRight: xMax < 600 ? 0 : 20
    },
}