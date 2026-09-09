import React from 'react'
import { items } from '../items'

export default function AcordionItem({handleClick, randomNum, title, activeAccordionNum, desc}) {
  return (

<>
    <div>   
    <h2 onClick={() => { handleClick(randomNum) }}>
                    {title}
                </h2>
                {
                    activeAccordionNum === randomNum ? <p>{desc}</p> : null
                }
    </div>
  </>
  )
}
