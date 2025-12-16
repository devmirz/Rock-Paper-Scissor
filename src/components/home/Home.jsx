import React, { useEffect, useState } from 'react'
import "./Home.css"


const home = () => {
  const [item1,setItem1]=useState("")
  const [item2,setItem2]=useState("")
  const [result,setResult]=useState("")

    const playerOne=()=>{
     let random =Math.random()*4
     let floor = Math.floor(random)
    
     switch(floor){
      case 0 :
        setItem1("rock");
        break;

      case 1 :
        setItem1("paper");
        break;

      case 2 :
        setItem1("scissor");
        break;

      default:
        break;
     }

  }

   const playerTwo=()=>{
     let random =Math.random()*4
     let floor = Math.floor(random)
    
     switch(floor){
      case 0 :
        setItem2("rock");
        break;

      case 1 :
        setItem2("paper");
        break;

      case 2 :
        setItem2("scissor");
        break;

      default:
        break;
     }
  }

  useEffect(() => {
    
    item1==item2?setResult("DRAW"):
    item1=="paper"&&item2=="rock"?setResult("PLAYER 1 WINS"):
    item1=="rock"&&item2=="scissor"?setResult("PLAYER 1 WINS"):
    item1=="scissor"&&item2=="paper"?setResult("PLAYER 1 WINS"):
    item1=="scissor"&&item2=="rock"?setResult("PLAYER 1 WINS"):
    item1=="paper"&&item2=="scissor"?setResult("PLAYER 2 WINS"):
    item1=="rock"&&item2=="paper"?setResult("PLAYER 2 WINS"):
    console.log()
    
    
    return () => {
      <h3 className='ger'>{result}</h3>
    };
  }, [playerOne],[playerTwo]);

  
  return (
    
    <div>
      <div className='posit'>
      <h1 className='player1-data'>{item1}</h1>
      <h1 className='player2-data'>{item2}</h1>
      </div>

    <p className='btn'>
    <button className='player1-btn ' onClick={playerOne} >PLAYER 1</button>
    <button className='player2-btn' onClick={playerTwo}>PLAYER 2</button>
    </p>

    <div>
    <h3 className='ger'>{item1!=="" &&item2!==""?result:console.log()}
    </h3>
    </div>
    </div>
  )
}

export default home