import React, { useState } from "react";
import "./styles.css";
import GaugeChart from "react-gauge-chart";
import QuestionAndAnswer from '../../data/QuestionAndAnswer.json';
import axios from 'axios';

export default function App() {
  const [gauge, setGauge] = useState(0);
  let Answer;
  const listAnswer = [];
  let moyennbr = 0;
  let check = 0;

  const senddata = (listAnswer) => {
    const liststats = JSON.stringify(listAnswer);
    console.log(localStorage.getItem("location"))
    var data = JSON.stringify({
      "name": "ccer",
      "location": localStorage.getItem("location"),
      "stats": liststats
    });

    var config = {
      method: 'post',
      url: 'http://localhost:8080/ccer',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });    
  }

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

        if (i === 5){
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
        if (i >= 2 && i < 4){
           Answer = Answer + Answer;
        }
        else {
          if (i === 4){
            Answer = Answer / 3
          }
          listAnswer.push(Answer !== 0 ? Answer / (QuestionAndAnswer.Formulaire[i].Answer.length - 1) : 0)
        }
    }
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
    senddata(listAnswer);
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
        <text style={styles.ratingmetertext}>{gauge >= 0.7 ? "Risque acceptable" : gauge >= 0.3 ? "Risque Modéré" : "Risque non acceptable" }</text>
        <text style={{paddingBottom: '60%'}}> {gauge < 0.5 ? "Consulter le chef de quart" : false }</text>
      </div>
    </div>
  );
}

const styles = {
  ratingmetertext: {
    color: 'white',
    fontSize: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: "10%",
  },
};
