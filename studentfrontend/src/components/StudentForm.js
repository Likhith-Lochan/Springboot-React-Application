import { method } from 'lodash';
import React ,{useEffect, useState}from 'react'
import { Container,Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from "axios"

const fetchUsers=async()=>{
  const {data}=await axios.get("/getAll")
  console.log(data)
  return data;
}
function StudentForm() {
    const[name,setName]=useState();
    const[address,setAddress]=useState();
    const[students,setStudents]=useState([]);
    const handleClick=async(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
       const s= await axios.post("/add")
       console.log(s);
    
}

useEffect(()=>{
const result=fetchUsers();
setStudents(result);
},[students])
  return (
    <Container className='mt-5 ' style={{"display":"box","width":"50%"}}>
        <h2 style={{"color":"blue"}}>Add Student</h2><br />
       <Form.Control type="text" placeholder="student name" value={name} onChange={(e)=>setName(e.target.value)}/>
       <br />
       <Form.Control type="text" placeholder="student addresss " value={address} onChange={(e)=>setAddress(e.target.value)}/>
       <Button className='mt-3 ' variant="primary" onClick={handleClick}>Submit</Button>{' '}
      <div>
        <h2>Students</h2>
        {students.map(student=>{
          <Card style={{ width: '18rem' }} key={student.id}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Id:{student.id}
              Name:{student.name}
              Address:{student.address}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        })}
      </div>
    </Container>
  )
}

export default StudentForm
