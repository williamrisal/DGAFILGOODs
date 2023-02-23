import QuestionAndAnswer from '../data/QuestionAndAnswer.json';
import ProgressCircu from '../components/ProgressCircu';
import RatingMeter from '../components/RatingMeter/rating_meter';


function Question() {
  //increment the count to display the next question

    return(
      <div className="App-header" >
      <div style={styles.ratingmeter}>
        <RatingMeter></RatingMeter>
        </div>
        <body className='App-body' style={styles.bodyQuestion}> 
          {/* <ProgressCircu QuestionAndAnswer={QuestionAndAnswer}></ProgressCircu>       */}
        </body>
      </div>
   )
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

}