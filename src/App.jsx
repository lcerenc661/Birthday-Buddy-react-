import data from './data'
import { useState } from 'react';
import Person from './Person';
import PeopleList from './List';


const App = () => {
  
  const [people, setPeople] = useState(data)

  const handleReset = () => {
    setPeople([])
  }
  return (
    <main>
    <section className='container'>
    <h3>{people.length} Birthdays today</h3>
    <PeopleList people={people} />
    <button onClick={handleReset} className='btn btn-block'>Reset</button>
    </section>
    </main>
  );
};
export default App;
