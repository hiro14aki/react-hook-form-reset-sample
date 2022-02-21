import { useState } from 'react'
import { Form } from './Form'

export const FormContainer = () => {
  const [name, setName] = useState('Hiroaki')

  return (
    <div>
      <button onClick={() => setName('Imai')}>Parent props change</button>
      <Form name={name} />
    </div>
  )
}
