import { useState } from 'react';
import { useNavigate } from 'react-router';

import QuestionAndAnswer from '../data/QuestionAndAnswer.json';
import ButtonAnswer from './ButtonAnswer';
import ProgressCircu from './ProgressCircu';
import ProgressBar from './progress-bar/progress-bar';

function Question() {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState([{res: 0}, {res: 0}, {res: 0}, {res: 0}, {res: 0}, {res: 0}]); 
  const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (count < QuestionAndAnswer.Formulaire.length) {
            setCount(count + 1);
            localStorage.setItem("count",count == null ? 0 : count);
        }
    }

    function handleBack(e) {
        e.preventDefault();
        if (count > 0){
            QuestionAndAnswer.Formulaire[count].Question = null
            setCount(count - 1);
            localStorage.setItem("count", count);
        }
    }

    if (count < QuestionAndAnswer.Formulaire.length) {
        return (
            <div className="App-header" >
                <text>{QuestionAndAnswer.Formulaire[count].Question}</text>
                <ProgressBar key={1}  completed={(count / QuestionAndAnswer.Formulaire.length) * 100} />
                <body className='App-body' style={styles.bodyQuestion}>    
                    <div>
                        <br></br>
                        <div style={styles.divcenter} >
                            <form onSubmit={handleSubmit} >
                                <ButtonAnswer QuestionAndAnswer={QuestionAndAnswer.Formulaire[count]} />
                                {count === 5 ? <button style={styles.button} >Je ne souhaite pas répondre </button> : false}
                                <button style={styles.button} onClick={handleBack} >Retour</button>
                            </form>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <ProgressCircu QuestionAndAnswer={QuestionAndAnswer} Count={count} Progress={progress} />
                </body>
            </div>
        );
    } else {
        return (
            <div className="App-header" >
                <div style={styles.ratingmeter}>
                    <button style={styles.buttonconfirm} onClick={() => navigate('/FILGOODS/result')} >Voir resultat</button>
                    <button style={styles.button} onClick={(handleBack)} >Retour</button>
                </div>
                <body className='App-body' style={styles.bodyQuestion} > 
                    <ProgressCircu QuestionAndAnswer={QuestionAndAnswer} Count={count} Progress={progress} />   
                </body>
            </div>
        );
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
    buttonconfirm: {
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