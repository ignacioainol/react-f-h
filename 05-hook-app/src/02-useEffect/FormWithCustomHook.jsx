import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'ignacio@google.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    // console.log('useEffect called');
  }, [])

  useEffect(() => {
    // console.log('formState changed');
  }, [formState])

  useEffect(() => {
    // console.log('email changed');
  }, [email])

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])


  return (
    <>
      <h1>Formulario Basic</h1>
      <hr />

      <input
        className="form-control"
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="ignaxios.js@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        username === 'strider2' && (
          <Message />
        )
      }
    </>
  )
}
