import './App.css';
import {useState} from 'react';


function App() {
  const [text, setText] = useState("");
  const [lines, setLines] = useState([]);
  

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () =>{
    setLines([...lines , text]);

    setText("");
  };

  const keyPress = (event) => {

    console.log("hello");
    if (event.which === 13){
      onSend();
    }
  };

  return (
    <div className="App">
      <div className="App-header">


      <div className="App-chatroom2">

          GI472 Varinkarn Kumtanasan -Pheeraphat Chocokviriyapanya -Tunwarat Kaewphang

        </div>
      </div>
      <div className="App-chatroom">
        
        {
          lines.map(x => {
            return <div className="App-chatroom-text">

              {x}
              </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input"
         value = {text} onChange={onTextChange} onKeyPress = {keyPress}/>
        <div className="App-textbox-send" onClick={onSend}>Send!</div>
      </div>
    </div>
  );
}

export default App;