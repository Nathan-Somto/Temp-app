import { Children, useState } from "react";
import Convert from './Convert';
import Result from './Result';
function Card ():JSX.Element{
  const [result, setResult] = useState<number>(0);
  const [unit, setUnit] = useState<string>('');
  return(
  <div className ='card'>
    <Convert setResult={setResult} setUnit ={setUnit}/>
    <Result solution={result} unit ={unit}/>
  </div>
  
  );
}
export default Card;
