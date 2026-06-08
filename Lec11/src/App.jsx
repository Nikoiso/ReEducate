import './App.css'

import Heading from './Components/Heading'
import Input from './Components/Input'
import TextParagraph from './Components/TextParagraph'



function App() {

  const myNumber = 2026
  const myStr = "BARIOO"
  const myArr = ["VASHLi", "MWVANE VASHLI", "WITELI VASHLI"]

  return (
<div>
<Heading />
<Input /> 
<TextParagraph />

<p>{myStr}</p>
<p>{myNumber}</p>
<p>{myArr.join(', ')}</p>


</div>
  )

}

export default App
