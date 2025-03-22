'use client' // Если используются хуки или состояние

import Link from 'next/link'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='min-h-screen bg-gray-100 flex flex-col'>
			{/* Шапка */}
			<header className='bg-blue-600 text-white p-4'>
				<div className='container mx-auto'>
					<Link href='/' className='text-2xl font-bold'>
						AI Chat
					</Link>
				</div>
			</header>

			{/* Основное содержимое */}
			<main className='flex-grow flex items-center justify-center'>
				{children}
			</main>

			{/* Подвал */}
			<footer className='bg-gray-800 text-white p-4 text-center'>
				<p>&copy; 2023 AI Chat. Все права защищены.</p>
			</footer>
		</div>
	)
}
