
import './App.css';
import Questions from './components/Questions/Questions';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <h1 style={{color:'red',textAlign:'center'}}>Music Fair</h1>
      <h1 style={{color:'royalBlue',textAlign:'center'}}>Choose Your Fantasy</h1>
      <Shop></Shop>
      <Questions></Questions>
    </div>
  );
}

export default App;
