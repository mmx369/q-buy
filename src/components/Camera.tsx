import { useState } from 'react'
import Loader from './Loader'

export default function Camera() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div>
      Camera{' '}
      <p style={{ color: 'red' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        commodi, inventore expedita ullam laudantium nihil consequatur non
        doloribus culpa sint quod rem voluptates architecto pariatur fuga
        dolorum ipsum! Dicta, officia. Scanning
      </p>
      {isLoading && <Loader />}
      <button onClick={() => setIsLoading(!isLoading)}>Open Loader</button>
    </div>
  )
}
