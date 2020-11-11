import './App.css';
import card from './components/card';
import {person} from './utils/person';
 

function App() {
  return (
    <>
      {Person.map((item) =>{
        return(
          <Card
            name={item.name}
            institution={item.institution}
            address={item.address}
            phone={item.phone}
          />
        );
      })}
    </>
  );
}

export default App;
