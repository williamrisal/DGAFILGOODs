import ListGroup from 'react-bootstrap/ListGroup';

function ButtonAnswer(QuestionAndAnswer) {
    //display all the answers of the Question as a button

    function handleSubmit(e) {
        console.log(e, "<-- e")

        for (let a = 0, b = 0; a < QuestionAndAnswer.QuestionAndAnswer.Answer.length; a++, b++) {

            if (e === QuestionAndAnswer.QuestionAndAnswer.Answer[a]) {
                if (QuestionAndAnswer.QuestionAndAnswer.Question === "Horaire d'activité") {
                    if (b >= 1) {
                        localStorage.setItem(QuestionAndAnswer.QuestionAndAnswer.Question, 2);
                    }
                    else {
                        localStorage.setItem(QuestionAndAnswer.QuestionAndAnswer.Question, 0)
                    }
                }
                else {
                    localStorage.setItem(QuestionAndAnswer.QuestionAndAnswer.Question, b)
                }
                console.log("Question Button", QuestionAndAnswer.QuestionAndAnswer.Question, "reponse", b)

            }

        }
    }
    return (

        <div>
            {QuestionAndAnswer.QuestionAndAnswer.Answer.map((reponse, index) => {
                let itemColor;
                if (index === 0) {
                    itemColor = 'green';
                } else if (index === QuestionAndAnswer.QuestionAndAnswer.Answer.length - 1) {
                    itemColor = 'red';
                } else {
                    itemColor = 'orange';
                }
                return (
                    <ListGroup.Item style={{ ...styles.button, backgroundColor: itemColor }} action onClick={() => handleSubmit(reponse)} variant="primary">
                        {reponse}
                    </ListGroup.Item>
                );
            })}
        </div>
    );
}



const styles = {
    button: {
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
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    }
}

export default ButtonAnswer;