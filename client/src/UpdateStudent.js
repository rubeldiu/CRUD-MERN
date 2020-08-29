import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Nav from './Nav';
import M from 'materialize-css'

const UpdateStudent = (props) =>{
   const [state,setState]=useState({
       name:'',
       address:'',
       email:''
   })

   const {name,address,email}=state;
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/getstudent/${props.match.params.email}`)
        .then(response=>{
            const {name,address,email}=response.data;
            setState({...state,name,address,email})
        })
        .catch(error=>{
            M.toast({html:'Error',classes:"#c62828 red darken-3"})
        })
    },[]);
   const handleChange= name=>(e)=>{
        setState({...state,[name]:e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/updatestudent/${email}`,{name,address})
        .then(response=>{
            console.log(response)
            setState({...state,name,address,email});
            M.toast({html: 'Update Successfully!!',classes:"#43a047 green darken-1"})
            
        })
        .catch(error=>{
            //console.log(error.message);
            M.toast({html:'Error',classes:"#c62828 red darken-3"})
        })
    }
    const showUpdateForm=()=>(
        <form onSubmit={handleSubmit}>
        <div  className='form-group'>
            <label className='text-muted'>Name</label>
            <input type='text' 
            className='form-control' 
            value={name}
            onChange={handleChange('name')}
            placeholder='Name' required/>
            

        </div>
        <div  className='form-group'>
            <label className='text-muted'>Address</label>
            <input type='text' 
            value={address}
            onChange={handleChange('address')}
            className='form-control' 
            placeholder='Address' />
            

        </div>
        
        <div>
            <button className='btn btn-primary'>Update</button>
        </div>
        
    </form>


    );

    
   return(
       <div className='container pb-5'>
           <Nav/>
         <br/>
         <h1>UPDATE POST</h1>
         {showUpdateForm()}
       </div>
   )

}

export default UpdateStudent;
