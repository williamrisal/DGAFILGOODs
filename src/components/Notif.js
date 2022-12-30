import { useState, useEffect } from 'react'
import './Notif.css' // import CSS stylesheet

const Notif = () => {
  const [notification, setNotification] = useState('Questionnaire à renseigner avant 1ère prise de poste et chaque fois que nécessaire')

  useEffect(() => {
    if (notification) {
      const timeoutId = setTimeout(() => {
        setNotification('')
      }, 5000)

      return () => clearTimeout(timeoutId)
    }
  }, [notification])

  return (
    <div>
      {/* ... */}
      {notification ? (
        <div className="notification">{notification}</div>
      ) : null}
    </div>
  )
}

export default Notif
