'use client' // Используем клиентские возможности React

import { useState } from 'react'
import Link from 'next/link' // Используем Link для навигации в Next.js

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false) // Состояние для открытия/закрытия меню

	return (
		<div
			className={`fixed top-0 left-0 h-screen bg-black text-white transition-all duration-300 ${
				isOpen ? 'w-[150px]' : 'w-[74px]'
			}`}
		>
			{/* Логотип и название проекта */}
			<Link href='/'>
				<div className='flex items-center p-4'>
					<img src='/icons/logo.svg' alt='Logo' className='h-[30px] w-[30px]' />
					{isOpen && (
						<span className='ml-3 font-light text-[16px] transition-opacity duration-300 delay-300 opacity-0 animate-fade-in'>
							NEX.AI
						</span>
					)}
				</div>
			</Link>

			{/* Кнопка для открытия/закрытия меню */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`absolute bottom-4 p-2 bg-[#101010] rounded border border-[#414141] hover:bg-[#414141] transition-transform duration-300 ${
					isOpen ? 'translate-x-[calc(133px-100%)]' : 'translate-x-1/2'
				}`}
			>
				{isOpen ? (
					<img src='/icons/chevron-left.svg' alt='Close' className='h-4 w-4' />
				) : (
					<img src='/icons/chevron-right.svg' alt='Open' className='h-4 w-4' />
				)}
			</button>

			{/* Содержимое меню */}
			<div className='flex items-center mt-8 p-4'>
				<nav>
					<ul className='space-y-2'>
						<li>
							<Link
								href='/home'
								className='flex items-center p-2 hover:text-[#414141]'
							>
								<img
									src='/icons/home.svg'
									alt='Home'
									className='h-[16px] w-[16px]'
								/>
								{isOpen && (
									<span className='ml-6 text-[14px] transition-opacity duration-300 delay-300 opacity-0 animate-fade-in'>
										Home
									</span>
								)}
							</Link>
						</li>
						<li>
							<Link
								href='/docs'
								className='flex items-center p-2 hover:text-[#414141]'
							>
								<img
									src='/icons/docs.svg'
									alt='Docs'
									className='h-[14px] w-[14px]'
								/>
								{isOpen && (
									<span className='ml-6 text-[14px] transition-opacity duration-300 delay-300 opacity-0 animate-fade-in'>
										Docs
									</span>
								)}
							</Link>
						</li>
						<li>
							<Link
								href='/faqs'
								className='flex items-center p-2 hover:text-[#414141]'
							>
								<img
									src='/icons/faqs.svg'
									alt='FAQs'
									className='h-[16px] w-[16px]'
								/>
								{isOpen && (
									<span className='ml-6 text-[14px] transition-opacity duration-300 delay-300 opacity-0 animate-fade-in'>
										FAQs
									</span>
								)}
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
