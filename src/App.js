import { useState } from 'react'
import axios from 'axios'
import BeerSection from './components/Cards'

const url = 'https://api.punkapi.com/v2/beers'

function App() {

  const [item, setItem] = useState([])

  axios.get(url)
  .then(res => setItem(res.data))
  

  return(
    <>
      <BeerSection
      item={item}
      /> 
    </>
  )

}

export default App