import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Nav from './Nav';
import M from 'materialize-css'

const SingleStudent = (props) =>{
    const [student,setStudent]=useState('');
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/getstudent/${props.match.params.email}`)
        .then(response=>{
            
            setStudent(response.data)
        })
        .catch(error=>{
            M.toast({html:'Error',classes:"#c62828 red darken-3"})
        })
    },[]);
   return(
       <div className='container pb-5'>
           <Nav/>
   <h2>{student.name}</h2>
   <h3>{student.email}</h3>
   <p className='lead'>{student.address}</p>

       </div>
   )

}

export default SingleStudent;
