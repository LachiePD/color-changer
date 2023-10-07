'use client';
import {useContext, useState, useEffect} from 'react';
import {SelectedColorContext, ButtonListenerContext} from './AppContext.jsx';

const Square = ({index})=>{
	
	const {color, setSelectedColor} = useContext(SelectedColorContext);
	const {triggered, setTriggered} = useContext(ButtonListenerContext)

	const [selected, setSelected] = useState(false);
	const [bgColor, setBgColor] = useState("green");


	const handleClick = () =>{

		setSelected(!selected);
		console.log(selected);
	}
	useEffect(()=>{
		if(selected){
	setBgColor(color)
			setSelected(false);
		}
	}, [triggered])
	const Css=[
		"h-10 w-[30%] flex justify-center ", ]
	return(

	<div
		onClick={()=>{handleClick()}}
		className={Css}
		style={{backgroundColor:bgColor}}>
		
		{bgColor}
		</div>

	);




}

export default Square;
