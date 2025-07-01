'use client'
import {useState} from 'react'
import {useTimeout} from 'usehooks-ts'

export const useDelayedTrigger = (delay: number) => {
  const [on, setOn] = useState(false)
  useTimeout(() => setOn(true), delay * 1000)
  return on
}
