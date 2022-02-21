import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type Props = {
  name: string
}

type SubmitValue = {
  firstName: string
}

export const Form = (props: Props) => {
  const [displayForm, setDisplayForm] = useState(true)
  // console.log(JSON.stringify(props))

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { firstName: props.name },
  })

  const onSubmit = (data: SubmitValue) => {
    alert(JSON.stringify(data))
  }

  // setValue
  const setValueFunc = () => setValue('firstName', 'Hiroaki Imai')

  useEffect(() => {
    // reset({ firstName: props.name })
    setValue('firstName', props.name)
  }, [props.name, setValue])

  return (
    <div>
      <button onClick={() => setDisplayForm(!displayForm)}>hide first name</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>

        {displayForm && <input name={'firstName'} type="text" ref={register} />}

        <div>
          <button type="button" onClick={setValueFunc}>
            Set Full Name
          </button>
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}
