import { ADD_COMPANY } from "./action";
import {ADD_EMPLOYEE} from "./action";
const initState = {
   
   // count : localStorage.getItem("counter") || 0 , 
   company : [] , 
   employee : [] , 
}


export const reducer = (store = initState , {type , payload} )=>{
    //console.log("store" , store)
   switch(type){
      
       case ADD_COMPANY : 
           return {...store , company : [...payload ]}  /// there is no previous todos present because each and every time you r reciving all the todos so you do not need to write ...store.todos

           case ADD_EMPLOYEE : 
           return {...store , employee : [...payload ]}  /// there is no previous todos present because each and every time you r reciving all the todos so you do not need to write ...store.todos

     default : 
        return store ; 
    }
    
}