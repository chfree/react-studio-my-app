import Clock from './Clock'
import SelectTest from './SelectTest'
function Test01() {
  const name = 'chenghuan';
  const element = <h1>Hello, {name}</h1>;
  const element1 = (
    <div>
      <Clock />
      <SelectTest />
    </div>
  );

  return(
    <div>
      {element}
      {element1}
    </div>
  )
}

export default Test01