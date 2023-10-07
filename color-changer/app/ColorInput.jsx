"use client";
import Autocomplete from "react-autocomplete";
import {useState, useContext} from 'react';
import ColorList from './ColorList';
import {SelectedColorContext} from './AppContext.jsx';

const ColorInput = () => {

  const {color, setSelectedColor} = useContext(SelectedColorContext);
  const [colorValue, setColorValue] = useState("change color");

  const onColorSelect =(color)=>{

    setColorValue(color);
    setSelectedColor(color);

  }
  return (
      <Autocomplete
        getItemValue={(item) => item.label}
        items={
          ColorList.map((color)=>{
            return({label: color})
          }
          )
        }
        renderItem={(item, isHighlighted) => (
          <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
            {item.label}
          </div>
        )}
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
        onSelect={(val) => onColorSelect((val))}
      />
  );
};

export default ColorInput;

{/**/}
