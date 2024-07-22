import React from 'react'
import MyContextProvider from './MyContextProvider'
import ComponentA from './ComponentA'
const WrappedComponent = () => {
  return (
    <MyContextProvider>
        <ComponentA></ComponentA>
    </MyContextProvider>
  )
}

export default WrappedComponent