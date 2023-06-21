import { useState,useContext, createContext, useEffect } from "react";

//create contex
const AuthContext = createContext();


// context state
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  
  useEffect(()=>{
        const data=localStorage.getItem('auth')
        if(data){
            const parseData=JSON.parse(data)

            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token
            })
        }
  },[])


  
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };