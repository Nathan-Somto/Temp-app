function Result({solution, unit}:{solution :number, unit:string}){
  return (
    <div className='result'>
      <p>
        <span>Result</span>
        {`${solution.toFixed(2)}${unit}`}</p>
    </div>
  )
}
export default Result;