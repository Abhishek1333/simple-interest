import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //js 
   const [principle,setPrinciple]=useState(0)
   const [rate,setRate]=useState(0)
   const [year,setyear]=useState(0)
   const [interest,setInterest]=useState(0)
   const[isprinciple,setisprinciple]=useState(true)
   const[isRate,setisRate]=useState(true)
   const[isYear,setisYear]=useState(true)

  const validateData=(e)=>{
    const{name,value}=e.target
   /*  console.log(name,value); */
    /* console.log(!!value.match(/^[0-9]+$/)); /* !! is  /*used to convert into boolean */
    if(!!value.match(/^[0-9]+$/)){
      if(name==='principle'){setPrinciple(value)
      setisprinciple(true)}

      else if(name==='rate'){
        setRate(value)
        setisRate(true)
      }
      else if (name==='year') {
        setyear(value)
        setisYear(true)
      }

    }
   
    else{ 
      if(name==='principle'){
        setPrinciple(value)
        setisprinciple(false)
    }

      else if(name==='rate')
      {
        setRate(value)
        setisRate(false)
      }
      else if(name==='year')
      {
        setyear(value)
        setisYear(false)
      }
  
    }


  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if( !principle || !rate || !year){
      toast.error("Please fill the form correctly", {
        theme: "dark"
      })
    }
    else{
      setInterest(principle*rate*year/100)
    } 
  }

  const handleReset=(e)=>{
    setPrinciple(0)
    setRate(0)
    setyear(0)
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
        <p>calculate your simple interest easily</p>
        <div className='bg-danger mt-5 d-flex justify-content-center align-items-center w-100 flex-column shadow'>
          <h1>₹{' '}{interest}</h1>
          <p>Total simple Interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
         <div className='mb-3'>
         <TextField name='principle' value={principle || ""} onChange={(e)=>validateData(e)} className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
         </div>
         { !isprinciple&&
         <div><p className='text-danger fw-bolder'>invalid input</p></div> 
         }
         <div className='mb-3'>
         <TextField name='rate' value={rate || ""} onChange={(e)=>validateData(e)}className='w-100' id="outlined-basic" label="Rate of Interest" variant="outlined" />
         </div>
         { !isRate&&
         <div><p className='text-danger fw-bolder'>invalid input</p></div> 
         }
         <div className='mb-3'>
         <TextField name='year' value={year || ""} onChange={(e)=>validateData(e)} className='w-100' id="outlined-basic" label="Year(Yr)" variant="outlined" />
         </div>
         { !isYear&&
         <div><p className='text-danger fw-bolder'>invalid input</p></div> 
         }
        </form>
        <div className='mt-4'>
          <Stack direction="row" spacing={2}>
          <Button onClick={handleCalculate} disable={isprinciple && isRate && isYear?false:true} className='bg-dark' variant="contained" style={{height:'60px' ,width:'200px'}} type='submit'>Calculate</Button>
          <Button onClick={handleReset} variant="outlined" style={{height:'60px' ,width:'200px'}}>Reset</Button>
          </Stack>
        </div>
        </div>       
        <ToastContainer position='top-center' theme='colored' autoClose={2000} />
      </div>
  );
}

export default App;
