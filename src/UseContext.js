import React, { createContext,useEffect} from "react";
import ComB from "./ComB";
const FirstName = createContext();
const LastName = createContext();

const UseContext=()=> {
  useEffect(
    () => {
      document.body.style.background = 'white'
    }
    
  )
  return (
    <>  
<FirstName.Provider value={"Zeel K"}>
<LastName.Provider value={"Divawala"}>
  <ComB/>
</LastName.Provider>
</FirstName.Provider>
</>
  )
}
export default UseContext
export { FirstName, LastName };