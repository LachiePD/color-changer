import Square from './Square.jsx';
import ColorButton from './ColorButton.jsx';
import ColorInput from './ColorInput.jsx';
import {AppContext} from './AppContext';

const squareReturner = (numberOfSquares) =>{

  
  const arrOfSquares = [];

  for(let i =0; i < numberOfSquares;i++){
    arrOfSquares.push(<Square index={i}/>);
  }
  return arrOfSquares;
}




export default function Home() {


  return (
    <AppContext>
    <div className="main w-[90%] p-5 flex flex-wrap h-[100%]">
    <ColorButton/>
    <ColorInput/>
    <div className="w-full flex flex-wrap gap-3 justify-center">
    {
      squareReturner(10)
    }
    </div>
    </div>
    </AppContext>
  )
}
