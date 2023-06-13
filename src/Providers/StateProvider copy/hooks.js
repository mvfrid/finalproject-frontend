import { useContext } from 'react'
import { StateContext } from '.'

export const useGlobalState = () => {
  const [state, setState] = useContext(StateContext)
  return [state, setState]
}