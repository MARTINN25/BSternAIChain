'use client'

import { useAuth } from '@/hooks/useAuth'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
	const { login } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		login() // Вызываем функцию login из useAuth
		router.push('/chat') // Перенаправляем пользователя на страницу чата
	}

	return (
		<div className='bg-white p-8 rounded-lg shadow-md w-96'>
			<h1 className='text-2xl font-bold mb-6 text-center'>Вход</h1>
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label className='block text-sm font-medium mb-2' htmlFor='email'>
						Email
					</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className='w-full px-3 py-2 border rounded-lg'
						placeholder='Введите ваш email'
						required
					/>
				</div>
				<div className='mb-6'>
					<label className='block text-sm font-medium mb-2' htmlFor='password'>
						Пароль
					</label>
					<input
						type='password'
						id='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						className='w-full px-3 py-2 border rounded-lg'
						placeholder='Введите ваш пароль'
						required
					/>
				</div>
				<button
					type='submit'
					className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'
				>
					Войти
				</button>
			</form>
			<p className='mt-4 text-center'>
				Нет аккаунта?{' '}
				<Link href='/register' className='text-blue-600 hover:underline'>
					Зарегистрируйтесь
				</Link>
			</p>
		</div>
	)
}
