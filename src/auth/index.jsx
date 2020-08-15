import React, { createContext, useState, useContext } from 'react'

const authContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {}
})

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const defaultValue = { isLoggedIn, setIsLoggedIn }

  return (
    <authContext.Provider value={defaultValue}>
      { children }
    </authContext.Provider>
  )
}

const useAuth = () => {
  return useContext(authContext)
}

export {
  authContext,
  AuthProvider,
  useAuth
}
