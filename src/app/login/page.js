import React from 'react'

export default function Login() {
  return (
		<form>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' />
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input type='password' name='password' />
			</div>
		
            <div>
                <button type='submit'>Login</button>
            </div>
		</form>
  );
}
