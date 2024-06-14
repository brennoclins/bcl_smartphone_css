import { useState } from 'react'

export function ShowTime() {
  const [currentTime, setCurrentTime] = useState(new Date())

  setInterval(() => {
    setCurrentTime(new Date())
  }, 1000)

  return currentTime
}
