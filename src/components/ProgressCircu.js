import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useState } from 'react';
import size from '../data/QuestionAndAnswer.json';

let progress1 = 0;
let progress2 = 0;
let progress3 = 0;
let progress4 = 0;
let progress5 = 0;
let progress6 = 0;

function ProgressCircu(QuestionAndAnswer) {

    let testa = localStorage.getItem("count") != null ? localStorage.getItem("count") : 0;
    let Answer = localStorage.getItem(QuestionAndAnswer.QuestionAndAnswer.Formulaire[testa].Question)
            if (QuestionAndAnswer.QuestionAndAnswer.Formulaire[testa].Question != null){
                switch (QuestionAndAnswer.QuestionAndAnswer.Formulaire[testa].Question) {
                    case "Sommeil dans les dernière 24h ?"
                        :progress1 = Math.round((Answer /  size.Formulaire.length) * 100);
                        console.log(progress1)
                        break;
                    case "Fatigue"
                        :progress2 = Math.round(((Answer) / size.Formulaire[testa].Answer.length) * 100);
                        console.log(Answer + "/ " + size.Formulaire[testa].Answer.length)
                        break;
                    case "Etat Psychologique"
                        :progress3 = Math.round((Answer / size.Formulaire[testa].Answer.length) * 100);
                        console.log(Answer + "/ " + size.Formulaire[testa].Answer.length)
                        break;
                    case "Médicament, Alcool.."
                        :progress4 = Math.round((Answer / size.Formulaire[testa].Answer.length) * 100);
                        console.log(Answer + "/ " + size.Formulaire[testa].Answer.length)
                        break;
                    case "Horaire d'activité"
                        :progress5 = Math.round((Answer / size.Formulaire[testa].Answer.length) * 100);
                        console.log(Answer + "/ " + size.Formulaire[testa].Answer.length)
                        break;
                    case "Etat"
                        :progress6 = Math.round((Answer / size.Formulaire[testa].Answer.length) * 100);
                        console.log(Answer + "/ " + size.Formulaire[testa].Answer.length)
                        break;
                    default:
                        break;
                }
           }
           console.log(testa);
    
    return (
        <body>
            <div style={{width: '80%'}}>
                <contain style={styles.contain}>
            <CircularProgressbarWithChildren value={progress1} styles={styles.progress1}>
                <img style={{ width: 40, marginTop: -5}} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>{progress1}%</strong> Sommeil
                </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={progress2} styles={styles.progress2}>
                <img style={{ width: 40, marginTop: -5}} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>{progress2}%</strong> Fatigue
                </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={progress3} styles={styles.progress3}>
                <img style={{ width: 40, marginTop: -5}} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>{progress3}%</strong> Etat psycologique
                </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={progress4} styles={styles.progress4}>
                <img style={{ width: 40, marginTop: -5}} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>{progress4}%</strong> Medicament, Alcool..
                </div>
            </CircularProgressbarWithChildren>
            <CircularProgressbarWithChildren value={progress5} styles={styles.progress5}>
                <img style={{ width: 40, marginTop: -5}} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>{progress5}%</strong> Horaire d'activité
                </div>
            </CircularProgressbarWithChildren>
             
            <CircularProgressbarWithChildren value={progress6} styles={6}>
                <img style={{ width: 40, marginTop: -5}} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong>{progress6}%</strong> ETAT
                </div>
            </CircularProgressbarWithChildren>
            </contain>
            </div>
            
        </body>
    );
  }
  export default ProgressCircu;

  const styles = {
    contain: {
        //metre tout les items en ligne
        display: 'flex',
    },
    //change color progressebar
    progress1: {
        path: {
            stroke: `#1e90ff`,
        },
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
    },
    progress2: {
        path: {
            stroke: 'red',
        },
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
    },
    progress3: {
        path: {
            stroke: 'gris',
        },
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
    },
    progress4: {
        path: {
            stroke: 'green',
        },
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
    },
    progress5: {
        path: {
            stroke: 'yellow',
        },
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
    },
    progress6: {
        path: {
            stroke: 'yellow',
        },
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
    }
}