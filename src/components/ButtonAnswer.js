import ListGroup from 'react-bootstrap/ListGroup';

function ButtonAnswer(QuestionAndAnswer) {
    //display all the answers of the Question as a button

    function handleSubmit(e) {
        var res;
        for(let a = 0, b = 0; a < QuestionAndAnswer.QuestionAndAnswer.Answer.length; a++, b++)
        {
            if (e === QuestionAndAnswer.QuestionAndAnswer.Answer[a]){
                localStorage.setItem(QuestionAndAnswer.QuestionAndAnswer.Question, b)
                if (QuestionAndAnswer.QuestionAndAnswer.Question === "Soucis perso"){
                    localStorage.setItem("tmp", b)
                    console.log("etape1")
                    console.log(b)
                }
                if (QuestionAndAnswer.QuestionAndAnswer.Question === "charge mental (hors contrôle)"){
                    res = Number(localStorage.getItem("tmp")) + b;
                    localStorage.setItem("tmp",res);
                    console.log("etape2")

                    console.log("tmp",res)
                }
                if (QuestionAndAnswer.QuestionAndAnswer.Question === "Pression ressentie (complexité,experience, enjeu, expertise, relation...)") {
                    res = Number(localStorage.getItem("tmp")) + b
                    localStorage.setItem(QuestionAndAnswer.QuestionAndAnswer.Question,res);
                    console.log("etape3")
                    console.log(res)
                    localStorage.setItem("tmp", 0);
                }
                if (QuestionAndAnswer.QuestionAndAnswer.Question === "Horaire d'activité") {
                    if (b >= 1){
                        localStorage.setItem(QuestionAndAnswer.QuestionAndAnswer.Question,2);
                    }
                }
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