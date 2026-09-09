import React, { useEffect } from 'react'

export default function LiveTracker() {
  
  useEffect(() =>{
console.log("მონიტორინგი დაიწყო")

const IntervalId = setInterval(() => {
    console.log("ამინდის მონაცემები სინქრონიზებულია ბაზასთან")
}, 2000)

return() => {
    clearInterval(IntervalId)
    console.log("მონიტორინგი შეწყდა, ტაიმერი გაითიშა")
}
    
  },[])

    return (
    <div>Live სინქრონიზაცია ჩართულია</div>
  )
}
