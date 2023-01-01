import ListGroup from 'react-bootstrap/ListGroup';

function ButtonAnswer(QuestionAndAnswer) {
    //display all the answers of the Question as a button

    function handleSubmit(e) {
        for(let a = 0, b = 0; a <QuestionAndAnswer.QuestionAndAnswer.Answer.length; a++, b++)
        {
            if (e === QuestionAndAnswer.QuestionAndAnswer.Answer[a]){
                localStorage.setItem(QuestionAndAnswer.QuestionAndAnswer.Question, b)
            }
        }
    }
    return (
        
        <div>
            {QuestionAndAnswer.QuestionAndAnswer.Answer.map((reponse) => (
                <ListGroup.Item style={styles.button}  action variant="primary" >
                    <div onClick={() => handleSubmit(reponse)}>
                    {reponse}
                    </div>
                </ListGroup.Item>
            ))}
        </div>
    );
  }


  
  const styles = {
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

export default ButtonAnswer;