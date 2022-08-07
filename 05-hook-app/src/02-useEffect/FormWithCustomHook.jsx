import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

  const { formState, onResetForm, onInputChange, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Form With Custom Hook</h1>
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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="******"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>

    </>
  )
}
