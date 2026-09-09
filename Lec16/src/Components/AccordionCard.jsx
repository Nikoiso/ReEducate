import React, { useState } from 'react'
import styles from "./AccordionCard.module.css"
import AccordionItem from './AccordionItem'
import { items } from '../items'
import FAQ from '../assets/FAQ.png'

export default function AccordionCard() {
  const [activeAccordionNum, setActiveAccordionNum] = useState(null)
  function handleClick(accordionNum){
    if(activeAccordionNum === accordionNum){
      setActiveAccordionNum(null)
    }else{
      setActiveAccordionNum(accordionNum)
    }
  }

  return (
    <main className={styles.AccordionCard}>
<img src={FAQ} alt="FAQ Illustration"/>
{
  items.map((el) => (
    <AccordionItem
    key={el.randomNum}
    handleClick={handleClick}
    title={el.title}
    desc={el.desc}
    activeAccordionNum={activeAccordionNum}
    randomNum={el.randomNum}/>
  ))
}

</main>


  )
}
