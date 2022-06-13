import { Button, ButtonGroup } from '@chakra-ui/react'
import {Link} from "react-router-dom"
export const Home = ()=>{
    return (
        <div style = {{borderRadius : "20px",  margin : "auto", marginTop : "100px",width : "700px" , height : "500px" , border : "2px solid black"}}>
           <Link to = "/company"><Button style = {{width : "300px" , padding : "30px" , marginTop : "160px"}} colorScheme='teal' variant='outline'>
           COMPANIES
  </Button></Link> <br/>
  <Link to = "/employee"><Button style = {{width : "300px" , padding : "30px" , marginTop : "30px"}} colorScheme='teal' variant='outline'>
  EMPLOYEES
  </Button></Link>
        </div>
    )
}