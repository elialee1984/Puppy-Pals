import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // const handleClick = () => {
  //   // some logic here
  // };

  console.log("puppyList: ", puppyList);

  const featuredPup = puppies.find(pup => pup.id === featPupId)

  console.log(featuredPup);

  return (
    <div className="App">
      {featPupId && (
        <div id="details">
          <h2>{featuredPup.name}</h2>
          <ul id="detailedList">
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      <hr></hr>
      <p>
        [Click name for more details:]
        {
          puppies.map(puppy => {
            return <p className="listOfPuppies" onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id}>{puppy.name}</p>
          })
        }
      </p>
    </div>
  )
}

export default App