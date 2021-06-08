import {useState, useContext} from 'react'
import {Context} from '../../context.js'

const baseClass = 'fn-LoginForm'

const DEFAULT_USERS = ['pepper', 'tony']

export function LoginForm() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const {loginUser, i18n} = useContext(Context)

  const handleSubmit = e => {
    e.preventDefault()
    // fake login
    if (DEFAULT_USERS.includes(user)) {
      loginUser(user)
    }
  }

  return (
    <div className={baseClass}>
      <form className={`${baseClass}-form`} onSubmit={handleSubmit}>
        <label className={`${baseClass}-label`}>{i18n.LOGIN.USER}</label>
        <input
          className={`${baseClass}-input`}
          value={user}
          type="text"
          onChange={e => setUser(e.target.value)}
          placeholder="pepper || tony"
        />
        <br />
        <label className={`${baseClass}-label`}>{i18n.LOGIN.PASSWORD}</label>
        <input
          className={`${baseClass}-input`}
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="fake password"
        />
        <br />
        <button className={`${baseClass}-button`} type="submit">
          {i18n.LOGIN.SIGNIN}
        </button>
      </form>
    </div>
  )
}
