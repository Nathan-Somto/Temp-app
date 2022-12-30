import { useState } from "react";
function Convert ({setResult, setUnit})
{ const To :string[] = ['Fahrenheit','Celsius','Kelvin'];
  const [fromIndex, setFromIndex] = useState<number>(0);
  const [ToConversion, setToConversion] = useState<string>(To[(fromIndex%2)+1]);
  const [input, setInput] = useState<string>('');
  const From:string[] = ['Fahrenheit', 'Celsius' ,'Kelvin']; 
  
function handleFromChange(e:any):void{
  setFromIndex(From.indexOf(e.target.value));
  setToConversion(To[(From.indexOf(e.target.value)%2)+1]);
}
  function handleToChange(e:any):void{
    
    setToConversion(e.target.value);
  }
  
  function calculate()
  {
  
    if(From[fromIndex] === 'Celsius')
    {
      switch(ToConversion){
        case  'Fahrenheit':
          setResult((1.8* parseInt(input)+ 32));
          setUnit('°F');
          break;
        case 'Kelvin':
          setResult( parseInt(input) +273.15);
          setUnit('K');
          break;
      }
      
    }
    if(From[fromIndex] === 'Fahrenheit')
    {
                     switch(ToConversion)
                     {
                       case 'Celsius':
                         setResult((parseInt(input) - 32)*0.556);
                         setUnit('°C');
                         break;
                       case 'Kelvin':
                         setResult((0.556*parseInt(input)+32)+273.15);
                         setUnit('K');
                         break;
                     }
    }
    if(From[fromIndex] ==='Kelvin')
    {
      switch(ToConversion){
        case 'Celsius':
          setResult(parseInt(input)- 273.15 );
          setUnit('°C');
          break;
        case 'Fahrenheit':
          setResult((parseInt(input) - 273.15)* 1.8 + 32);
          setUnit('°F');
          break;
      }
    }
    
    
  }
  function handleSubmit(e:any):void{
    e.preventDefault();
    calculate();
  }
  function handleInput(e:any):void
  {
    if(isNaN(parseInt(e.target.value)))
    {
      setInput('');
      return;
    }
    
    setInput(e.target.value);
    
    
  }
    return(
      <form onSubmit={handleSubmit}>
        <label>
          <input className = 'input--box' type ='text' placeholder="Enter a number" value={input} onChange={handleInput}/>
        </label>
        <div className ='select--container'>

        <label>
          From:
        <select className ='select--box'onChange ={handleFromChange} value ={From[fromIndex]}>
            {
             From.map( (option, index) =>
        
                         
                       
          <option key ={`${index}-${option}`}>
                           {option}
                         </option>
                 
                 )
           }
        </select>
        </label>
        <label>
          To:
         <select className ='select--box' onChange ={handleToChange} value ={ToConversion}>
           {
             To.map( (option, index) =>
        
                         
                        fromIndex !== index && 
          <option key ={`${index}-${option}`}>
                           {option}
                         </option>
                 
                 )
           }
           
         </select> 
        </label>
        </div>
        <input type ="submit" value='convert'/>
      </form>
        
    );
}
export default Convert;