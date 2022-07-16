import React, { useState } from 'react';
import List from './components/List'
import Filter from './components/Filter'
import Generator from './components/Generator'

//Default items
const INITIAL_ITEMS = [
  {'color' : 'red', 'number' : 1},
  {'color' : 'red', 'number' : 2},
  {'color' : 'red', 'number' : 3},
  {'color' : 'green', 'number' : 1},
  {'color' : 'green', 'number' : 2},
  {'color' : 'green', 'number' : 3},
  {'color' : 'blue', 'number' : 1},
  {'color' : 'blue', 'number' : 2},
  {'color' : 'blue', 'number' : 3},
  {'color' : 'orange', 'number' : 1},
  {'color' : 'orange', 'number' : 2},
  {'color' : 'orange', 'number' : 3},
]

function App() {

  //Initialize with default values
  const [selectedColor, setSelectedColor] = useState('all')
  const [selectedNumber, setSelectedNumber] = useState('all')
  const [selectedSort, setSelectedSort] = useState('default')
  const [items, setItems] = useState([...INITIAL_ITEMS])

  //Generate an array of objects with the specified values
  const generateItems = (colors, total, highest) => {
    //Reset items every time we generate new items
    setItems([])
    //Generate an array of numbers, with specified lenght and max value
    const numbers = Array.from({length: highest}, () => Math.floor(Math.random()*(highest-1+1)+1));
    //Loop that runs specified total times
    for(let i = 0; i < total; i++) {
      //generates an object with random color and random number from the specified colors and numbers then puts it inside the items array
      const randomColor = Math.floor(Math.random() * colors.length);
      const randomNumber = Math.floor(Math.random() * numbers.length);
      setItems( arr=> [...arr, {"color": colors[randomColor], "number": numbers[randomNumber]}])
    }
  }

  //Sets the filtered values every time something in the filter changes
  const onChangeFilter = (color, number, sort) => {
    setSelectedColor(color)
    setSelectedNumber(number)
    setSelectedSort(sort)
  }

  return (
    <div className="container">
      <Generator generate={generateItems}/>
      <div className="content">
        {/*Pass items to the filter as a prop, so the filter only generates with the values of the items*/}
        <Filter items={items} filter={onChangeFilter} />
        <List items={items} color={selectedColor} number={selectedNumber} sort={selectedSort} />
      </div>
    </div>
  );
}

export default App;
