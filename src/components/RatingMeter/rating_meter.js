import React, { useState } from "react";
import "./styles.css";
import GaugeChart from "react-gauge-chart";
import QuestionAndAnswer from '../../data/QuestionAndAnswer.json';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import smileyrouge from "../../../src/assets/smileyJaune.png"
import smileyvert from "../../../src/assets/smileyVert.png"
import smileyjaune from "../../../src/assets/smileyJaune.png"

export default function App() {
  const [gauge, setGauge] = useState(0);
  const navigate = useNavigate();
  let Answer = 0;
  const listAnswer = [];
  let moyennbr = 0;
  let check = 0;

  localStorage.setItem("rating", true);
  const returnhome = () => {
    //nettoyer tout le cach
    //retourner a la page d'accueil
    window.location.href='http://localhost:3000'
  }

  const senddata = (listAnswer) => {
    const liststats = JSON.stringify(listAnswer);

    var data = JSON.stringify({
      "name": "ccer",
      "location": localStorage.getItem('city'),
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
        // if (i === 1){
        //     switch (Answer) {
        //     case "0":
        //         Answer = 3;
        //             break;
        //     case "1":
        //         Answer = 2;
        //         break;
        //     case "2":
        //         Answer = 1;
        //         break;
        //     case "3":
        //         Answer = 0;
        //         break;
        //     default:
        //         Answer = 3;
        //         break;
        //     }
        // }

        // if (i === 5){
        //     switch (Answer) {
        //     case "0":
        //         Answer = 3;
        //             break;
        //     case "1":
        //         Answer = 2;
        //         break;
        //     case "2":
        //         Answer = 1;
        //         break;
        //     case "3":
        //         Answer = 0;
        //         break;
        //     default:
        //         Answer = 3;
        //         break;
        //     }
        // }
        console.log(Answer, "Answer")
        listAnswer.push(Answer !== 0 ? Answer / (QuestionAndAnswer.Formulaire[i].Answer.length -  1) : 0)

    }

    var champsSelectionnes = listAnswer.slice(2, 5);
    var sommepsyco = champsSelectionnes.reduce(function(a, b) { return a + b; });
    var moyenquestionpsyco = sommepsyco / champsSelectionnes.length;

    const firstPart = listAnswer.slice(0, 2);
    const lastPart = listAnswer.slice(4);
    const newArray = firstPart.concat(lastPart);

    newArray[2] = moyenquestionpsyco;
    newArray.forEach(nombre => {
        if (nombre === 0){
            check++;
        }
      });
    
      // On calcule la somme des éléments du tableau
      let somme = 0;
      newArray.forEach(nombre => {
        somme += nombre;
      });

    moyennbr = somme / newArray.length;
    senddata(newArray);
    setGauge(0.999999 - moyennbr);
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

        <button style={styles.buttonconfirm} onClick={returnhome}>Retour à l'accueil</button>
        {gauge > 0.7 ? <img src={smileyvert} alt="smileyvert" style={{width: '20%', height: '70%' , margin: "1%"}}/> : gauge > 0.3 ? <img src={smileyjaune} alt="smileyjaune" style={{width: '20%', height: '70%' , margin: "1%"}}/> : <img src={smileyrouge} alt="smileyrouge" style={{width: '20%', height: '70%' , margin: "1%"}}/>}
        {gauge < 0.5  ? <text>Consulter le chef de quart</text>: false}

        <text style={styles.ratingmetertext}>{gauge >= 0.7 ? "Risque acceptable" : gauge >= 0.3 ? "Risque Modéré" : "Risque non acceptable" }</text>
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
    paddingBottom: "70%",
  },
  buttonconfirm: {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '10px'
},
};
