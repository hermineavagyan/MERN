import Box from './components/Box';
import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  const [boxList, setBoxList] = useState ([]);
  const [color, setColor] = useState();
  const [dimensions, setDimensions] = useState(0);//{width:0, height: 0});
  
  return (
    <div className="App">
    <Box 
      color = {color} 
      setColor = {setColor}
      boxList = {boxList}
      setBoxList = {setBoxList}
      // height = {dimensions.height}
      // width = {dimensions.width}
      // setDimensionsHeight = {setDimensions.height}
      // setDimensionsWidth = {setDimensions.width}
    />
    </div>
  );
}

export default App;
