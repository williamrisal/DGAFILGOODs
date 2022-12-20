import './App.css';
import Question from './components/Question';

function App() {
  return (
    <body className="App-header">
    <div style={styles.bodyQuestion}>
      <Question></Question>
    </div>
    <div style={styles.process}>
    </div>
    </body>
  );
}

export default App;

const styles = {
  bodyQuestion: {
      color: 'white',
      padding: '1%',
      borderRadius: '10%',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      margin: '10px',
      marginTop: '-20%'
  },
  process: {
    //// move the item up
    marginTop: '-10%',
        
  }
}