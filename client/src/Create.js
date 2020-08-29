import React,{useState} from 'react'
import axios from 'axios';
import M from 'materialize-css'
import Nav from './Nav';




const Create =()=>{

   const [name,setName]=useState('')
   const [address,setAddress]=useState('')
   const [email,setEmail]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/createstudent',{name,address,email})
        .then(response=>{
            console.log(response)
            M.toast({html: 'Saved Successfully!!',classes:"#43a047 green darken-1"})
            
        })
        .catch(error=>{
            M.toast({html:'Error',classes:"#c62828 red darken-3"})
        })
    }

    return(

        <div className='container p-5'>
            <Nav/>
        <h1>CREATE POST</h1>
        <br/>
        <form onSubmit={handleSubmit}>
            <div  className='form-group'>
                <label className='text-muted'>Name</label>
                <input type='text' 
                className='form-control' 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='Name' required/>
                

            </div>
            <div  className='form-group'>
                <label className='text-muted'>Address</label>
                <input type='text' 
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                className='form-control' 
                placeholder='Address' />
               

            </div>
            <div  className='form-group'>
                <label className='text-muted'>Email</label>
                <input type='email' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className='form-control' 
                placeholder='Email' />
                

            </div>
            <div>
                <button className='btn btn-primary'>Create</button>
            </div>
            
        </form>

    </div>


    )
    
}

export default Create;