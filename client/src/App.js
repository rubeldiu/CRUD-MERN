import React,{useState,useEffect} from 'react';
import Nav from './Nav';
import axios from 'axios'
import M from 'materialize-css'
import {Link} from 'react-router-dom'

const App =()=>{
  const [students,setStudents]= useState([]);
  const fetchStudents=()=>{
    axios.get('http://localhost:5000/getall')
         .then(response=>{
           console.log(response);
          setStudents(response.data.students)
         })
         .catch(err=>{
          M.toast({html:'Error',classes:"#c62828 red darken-3"})
         })
    
  }
  useEffect(()=>{
    fetchStudents();
  },[]);

  const deleteConfirm=email=>{
    let answer= window.confirm('Are you sure you want to delete this ??');
    if(answer){
      deleteStudent(email);
    }
  }

  const deleteStudent=email=>{
    axios.delete(`http://localhost:5000/deletestudent/${email}`)
    .then(response=>{
      alert(response.data.message);
      fetchStudents();
    })
    .catch(error=>{
      M.toast({html:'Error',classes:"#c62828 red darken-3"})
    })
  }

  return(

    <div className='container p-5'>
      <Nav/>
      <h2>Mern CRUD</h2>
     <hr/>
    
     
        <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
          </tr>
        </thead>

        <tbody>
        { students.map((st,i)=>(
            <tr key={st._id}>
            <td> {st.name}</td>
            <td>{st.email}</td>
            <td>{st.address}</td>
            <td>
              <Link to={`/getstudent/${st.email}`} >Details</Link>
              </td>
              <td>
              <Link to={`/updatestudent/${st.email}`}  className="waves-effect waves-light btn-small">
              Update

              </Link>
              </td>
              <td>
              
              
              <button onClick={()=>deleteConfirm(st.email)} className="waves-effect waves-light btn-small">Delete</button>
              
              </td>
          </tr>
         ))} 
        </tbody>
      </table>







       
      
    </div>
);
};



export default App;
