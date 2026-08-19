import React, { useContext, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { firebaseConfig } from './firebaseConfig'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const AuthContext = React.createContext()
export function useAuth(){ return useContext(AuthContext) }

export function AuthProvider({children}){
  const [user, setUser] = useState(null)
  const [initializing, setInitializing] = useState(true)

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, u => { setUser(u); setInitializing(false) })
    return () => unsub()
  },[])

  const login = (email,password)=> signInWithEmailAndPassword(auth,email,password)
  const signup = (email,password)=> createUserWithEmailAndPassword(auth,email,password)
  const logout = ()=> signOut(auth)

  return (
    <AuthContext.Provider value={{user, initializing, login, signup, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export { auth }
