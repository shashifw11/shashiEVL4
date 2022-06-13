import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useEffect } from 'react';
import axios from "axios" ; 

import {useState} from "react" ; 
import { useDispatch, useSelector } from "react-redux";
import { addCompany } from "../Redux/action";

export const Company = ()=>{

const  company = useSelector(store => store. company) // useSelector decide which components goes to rerender // if we return store only then entire store goes to re-render 

const dispatch = useDispatch() 

    console.log(company)

const [text , setText] = useState("") ; 
     
useEffect(()=>{
   getCompanys() ; 
},[])
  
const getCompanys = ()=>{
    axios.get("http://localhost:8080/dropdown").then(({data})=>{
        dispatch(addCompany(data))
    })
}

   const addCompanys = () => {
       axios.post("http://localhost:8080/dropdown", {
           title : text , 
           status : false , 
   
       }).then(()=>{getCompanys()})
    }
        

    return (
        <div style = {{borderRadius : "20px",  margin : "auto", marginTop : "100px",width : "700px" , height : "500px" , border : "2px solid black"}}>
<Select  placeholder='Please select Company'> 

   {company.map((data,i)=>{
    return  <option key = {i} value='option1'>{data.title}</option>
   })}
</Select> 
<div style = {{marginTop : "300px"}}>

  <Input style = {{width : "300px" , padding : "25px"}} 
       type = "text" onChange = {(e)=>setText(e.target.value)}
     placeholder='ADD A NEW COMPANY' 
     />
  <Button  onClick = {()=>{
            addCompanys() ; 
  }}
  style = {{ marginLeft : "20px" , width : "150px" , padding : "25px"}} colorScheme='teal' variant='outline'>
    ADD 
  </Button>
  </div>

</div> 
    )
}