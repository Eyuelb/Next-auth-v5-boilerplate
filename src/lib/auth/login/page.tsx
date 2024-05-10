'use client';

import { useFormState } from 'react-dom';
import { loginAction } from './actions';

const loginInitialState = {
	message: '',
	errors: {
		email: '',
		password: '',
		credentials: '',
		unknown: '',
	},
};

const LoginPage = () => {
	const [formState, formAction] = useFormState(loginAction, loginInitialState);
    console.log(formState)
	return (
		<form action={formAction} className='space-y-4 w-full max-w-sm'>
			<input required name='email' placeholder='email' />
			<input
				required
				name='password'
				type='password'
				placeholder='password'
			/>
			<button className='w-full' type='submit'>
				submit
			</button>
		</form>
	);
};

export default LoginPage;
