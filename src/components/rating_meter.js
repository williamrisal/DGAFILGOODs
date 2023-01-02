import React, { useState } from "react";
import "./styles.css";
import GaugeChart from "react-gauge-chart";
import QuestionAndAnswer from '../data/QuestionAndAnswer.json';


export default function App() {
  const [gauge, setGauge] = useState(0);
  let Answer;
  const listAnswer = [];
  let moyennbr = 0;
  let check = 0;
  const handleGaugeIncrease = () => {
    moyennbr = 0;
    for(let i = 0; i < QuestionAndAnswer.Formulaire.length; i++){
        Answer = localStorage.getItem(QuestionAndAnswer.Formulaire[i].Question)
        if (i === 1){
            switch (Answer) {
            case "0":
                Answer = 3;
                    break;
            case "1":
                Answer = 2;
                break;
            case "2":
                Answer = 1;
                break;
            case "3":
                Answer = 0;
                break;
            default:
                Answer = 3;
                break;
            }
        }
        if (i === 3){
            switch (Answer) {
            case "0":
                Answer = 3;
                    break;
            case "1":
                Answer = 2;
                break;
            case "2":
                Answer = 1;
                break;
            case "3":
                Answer = 0;
                break;
            default:
                Answer = 3;
                break;
            }
        }
        // if (i === 4){
        //     console.log("Answer", Answer)
        //     switch (Answer) {
        //     case "0":
        //         Answer = 2;
        //             break;
        //     case "1":
        //         Answer = 1;
        //         break;
        //     case "2":
        //         Answer = 0;
        //         break;
        //     default:
        //         Answer = 3;
        //         break;
        //     }
        // }
        listAnswer.push(Answer !== 0 ? Answer / (QuestionAndAnswer.Formulaire[i].Answer.length - 1) : 0)
    }
    console.log("listAnswer", listAnswer)
    listAnswer.forEach(nombre => {
        if (nombre === 0){
            check++;
        }
      });
    if (check === listAnswer.length){
            return 0;
    }
    if (listAnswer.length === 0) {
        return 0;
      }
    
      // On calcule la somme des éléments du tableau
      let somme = 0;
      listAnswer.forEach(nombre => {
        somme += nombre;
      });
    moyennbr = somme / listAnswer.length;
    //e.preventDefault();
    setGauge(moyennbr);
  };

  const chartStyle = {
    height: 350
  };

  const gaugeContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",

    marginTop: 20,
    height: 200,
    paddingTop: 50
  };

  if (gauge === 0){
  handleGaugeIncrease();
  }
  return (
    <div className="app">
      <div style={gaugeContainerStyle}>
        <GaugeChart
          style={chartStyle}
          textColor="#FFFAFA"
          percent={gauge}
          needleColor="#FFFAFA"
          colors={["#FF0000", "#00FF00"]}
          animateDuration={4000}
        />
      </div>
    </div>
  );
}
