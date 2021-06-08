import {useContext} from 'react'
import {Context} from '../../context'
import {LoginForm} from '../../components/loginForm'

const baseClass = 'fn-LoginPage'

export function LoginPage() {
  const {i18n} = useContext(Context)

  return (
    <div className={baseClass}>
      <h1>{i18n.LOGIN.TITLE}</h1>
      <LoginForm />
    </div>
  )
}
