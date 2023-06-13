import React, { useState } from 'react'
import { StateContext } from '.'

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(null);

  return (
    <StateContext.Provider value={[state, setState]}>
      {children}
    </StateContext.Provider>
  )
}