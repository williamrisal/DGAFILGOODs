import { useState } from 'react';
import QuestionAndAnswer from '../data/QuestionAndAnswer.json';
import ButtonAnswer from './ButtonAnswer';
import ProgressCircu from './ProgressCircu';
import RatingMeter from './RatingMeter/rating_meter';
import ProgressBar from './progress-bar/progress-bar';


function Question() {
  //increment the count to display the next question
  const [count, setCount] = useState(0);    

  function handleSubmit(e) {
    e.preventDefault();

    if (count < QuestionAndAnswer.Formulaire.length){
      localStorage.setItem("count",count == null ? 0 : count)
      setCount(count + 1);
      console.log("count",count)
    }
    
  }

  function handleBack(e){
    e.preventDefault();
    if (count > 0){
      localStorage.setItem("count",count == 0 ? 0 : count)
      localStorage.setItem(QuestionAndAnswer.Formulaire[count].Question, 0)
      setCount(count - 1);
      console.log("count",count)
    }
  }
  if (count < QuestionAndAnswer.Formulaire.length){
    return (
      <div className="App-header" >
        <text>{QuestionAndAnswer.Formulaire[count].Question}</text>
        <ProgressBar key={1}  completed={(count / QuestionAndAnswer.Formulaire.length) * 100} />
        <body className='App-body' style={styles.bodyQuestion}>     
          <div>
            <br></br>
            <div style={styles.divcenter} >
              <form onSubmit={handleSubmit} >
              <ButtonAnswer QuestionAndAnswer={QuestionAndAnswer.Formulaire[count]}></ButtonAnswer>
              {count === 5 ? <button style={styles.button} >Je ne souhaite pas répondre </button> : false}
              <button style={styles.button} onClick={handleBack} >Retour</button>

              </form>
          </div>
          
          </div>
          
          <br/>
          <br/>
          <br/>
          <ProgressCircu QuestionAndAnswer={QuestionAndAnswer}></ProgressCircu>      
        </body>
      </div>
    );
  }
  else
  {
    return(
      <div className="App-header" >
      <div style={styles.ratingmeter}>
        <RatingMeter></RatingMeter>
        </div>
        <body className='App-body' style={styles.bodyQuestion}> 
          <ProgressCircu QuestionAndAnswer={QuestionAndAnswer}></ProgressCircu>      
        </body>
      </div>
   )
  }
}

export default Question;
const styles = {
  
  ratingmeter: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
   bodyQuestion: {
        shadowColor: "white",
        borderRadius: '10%',
        width: '100%',
        height: '-100%',
        padding: '10%,'
  },
  button: {
      backgroundColor: 'orange',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      margin: '10px'
  },
  divcenter: {
    display: 'flex',  justifyContent:'center', alignItems:'center'
  }

}