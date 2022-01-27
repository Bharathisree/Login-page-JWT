 const initialstate={
    res:[]
}

const reducerData = (state =initialstate ,action)=>{  
    switch(action.type)  
   {
       case 'GET_REGISTER':   
       console.log("reducer",action.payload)       
       return {          
           ...state,              
          res: action.payload  
       } 
       case 'GET_LOGIN':   
       console.log("reducer",action.payload)       
       return {          
           ...state,              
          res: action.payload        
       }            
   default :
       return state;
    }
}


export default reducerData;