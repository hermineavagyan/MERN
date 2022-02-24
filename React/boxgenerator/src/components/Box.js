import React, {useState, useRef} from 'react';

const Box = (props) => {

const {color, setColor, boxList, setBoxList, dimensions, setDimensions} = props;
//const {boxList, setBoxList} = props;
//const {dimensions, setDimensions} = props;

//const targetRef = useRef();

const boxHandler = (e) =>{
    e.preventDefault(e);
    setBoxList([...boxList,
        {
        color: color,
        dimensions: dimensions + "px"
        
        
    }
    
])
//setting back to inintial values
    setColor ("");
    setDimensions(0);
}
    
    return (
    <div >
    <form onSubmit={boxHandler}>
    <p>
            <label htmlFor = "">Color</label>
            <input  onChange =  {(e)=>setColor(e.target.value)} name = "color" type = "text" value = {color}/>
            </p>
    <p>
            <label htmlFor=''>Add Dimensions</label>
            <input onChange = {(e)=>{
                console.log(e.target.value)
                setDimensions(e.target.value)}} name = "dimensions" type = "number" value={dimensions}/>

    </p>
    
    <p> 
            <input type = "submit" value = "Add" style = {{margin:"auto"}}/>
    </p>

    </form>
    <div style = {{display:"flex", alignItems: "center"}}>
                {
                boxList.map((box, index)=> (
                    <div style = {{backgroundColor: box.color, 
                    width: box.dimensions, height: box.dimensions, margin: "30px" }
                    }
                    key={index}>
                    
                    {box.color}
                    </div>))
                }
            
                </div>
        </div>
    
    )}

export default Box;