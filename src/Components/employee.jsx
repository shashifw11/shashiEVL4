import {Table,Thead,Tbody,Tfoot, Tr,Th,Td,TableCaption,TableContainer,} from '@chakra-ui/react'
import { useEffect } from 'react';
import axios from "axios" ; 
import { useDispatch, useSelector } from "react-redux";
import {addEmployee } from "../Redux/action";
import { Button, ButtonGroup } from '@chakra-ui/react'

export const Employee = ()=>{

    const  employee = useSelector(store => store. employee) // useSelector decide which components goes to rerender // if we return store only then entire store goes to re-render 
        
       console.log(employee) ; 
    const dispatch = useDispatch() 


    useEffect(()=>{
        getemployees() ; 
     },[])

     const getemployees = ()=>{
        axios.get("http://localhost:8080/employee").then(({data})=>{
            dispatch(addEmployee(data))
        })
    }
    return (
        <div style = {{width : "1000px" , margin : "auto" , marginTop : "50px"}}>
 <TableContainer>
  <Table style = {{border : "1px solid black"}} variant='striped' colorScheme='teal'>
    {/* <TableCaption >Imperial to metric conversion factors</TableCaption> */}
    <Thead >
      <Tr>
        <Th>ID</Th>
        <Th>EMPLOYEE NAME</Th>
        <Th>COMPANY NAME</Th>
        <Th>CTC</Th>
        <Th>VIEW DETAILS</Th>
        <Th isNumeric>DELETE</Th>
        <Th>EDIT</Th>
      
      </Tr>
    </Thead>
    <Tbody > 
        {employee.map((data,i)=>{
            return  <Tr >
            <Td>{data.id}</Td>
            <Td>{data.Name}</Td>
            <Td isNumeric>{data.Company}</Td>
            <Td>{data.CTC}</Td>
            <Td> <Button colorScheme='whatsapp' variant='solid'>
    View
  </Button></Td>
  <Td> <Button colorScheme='yellow'>
    Delete
  </Button></Td>
  <Td> <Button colorScheme='orange' variant='solid'>
    Edit
  </Button></Td>
           
           </Tr>
        })}
      {/* <Tr >
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr> */}
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
</TableContainer>
        </div>
    )
}