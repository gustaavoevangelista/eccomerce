import React from 'react'
import styles from "./page.modules.css"

export default function Signup() {
  return (
		<div className='container'>
			<form>
				<div className='formTitle'>
					<p>Create an account</p>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' />
				</div>
				<div>
					<label htmlFor='confirmPassword'>Confirm password</label>
					<input type='password' name='confirmPassword' />
				</div>
				<div className='submitButton'>
					<button type='submit'>Create Account</button>
				</div>
			</form>
		</div>
  );
}
