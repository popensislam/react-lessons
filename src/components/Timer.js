import { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0)
  const [timer2, setTimer2] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timer + 1 > 5) {
        clearInterval(timerId)
        return
      }
      setTimer(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [timer])

  const TimerCount = () => {
    const timerId = setTimeout(() => {
      if (timer2 + 1 > 5) {
        alert(`Доступ открыт ${timer2}`)
        clearTimeout(timerId)
        return
      }
      setTimer2(prev => prev + 1)
    }, 1000)
  }

  useEffect(() => {
      TimerCount()
  }, [timer2])

  return (
    <>
      <h3>setInterval: {timer}</h3>
      <h3>setTimeout: {timer2}</h3>
    </>
   );
}
 
export default Timer;