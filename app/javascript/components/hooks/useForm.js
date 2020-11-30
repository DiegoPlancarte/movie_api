import { useState } from 'react';

const useForm = ( submitFunc, data ) => {
  
  const [ state, setState ] = useState({});

  const handleInputChange = (event) => {
    event.persist();
    setState(state => ({...state, [event.target.name]: event.target.value}));
  }
  
  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    `${submitFunc}`
  }

  return [
    state,
    handleInputChange,
    handleSubmit
  ]
}

export default useForm;

// import { useState } from 'react'

// const useForm = (defaultValues, submitCallback) => {
//   const [values, setValues] = useState(defaultValues)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     submitCallback() 
//   }
  
//   const handleChange = (e) => {
//     e.persist()
//     setValues(values => ({ ...values, [e.target.name]: e.target.value }))
//   }
//   return [values, handleChange, handleSubmit]
// }

// export default useForm