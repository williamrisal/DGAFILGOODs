import { useState } from 'react';
import QuestionAndAnswer from '../data/QuestionAndAnswer.json';
import ButtonAnswer from './ButtonAnswer';
import ProgressCircu from './ProgressCircu';
import App from './rating_meter';

const xMax = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

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
  if (count < QuestionAndAnswer.Formulaire.length){
    return (
      <div className="App-header" >
        <text>{QuestionAndAnswer.Formulaire[count].Question}</text>
        <body className='App-body' style={styles.bodyQuestion}>     
          <div>
            <br></br>
            <div style={styles.divcenter} >
              <form onSubmit={handleSubmit} >
              <ButtonAnswer QuestionAndAnswer={QuestionAndAnswer.Formulaire[count]}></ButtonAnswer>
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
        <App></App>
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
    height: '100vh',/* Magic here */
    display: 'flex',
    justifyContent: 'center',
    marginBottom: xMax > 450 ? '-35%' : '-80%',
  },
   bodyQuestion: {
        shadowColor: "white",
        borderRadius: '10%',
        width: '100%',
        height: '-100%',
        padding: '10%,'
  },
  button: {
      backgroundColor: '#1e90ff',
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