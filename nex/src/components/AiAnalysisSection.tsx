'use client'

import { SetStateAction, useState } from 'react'

export default function FancyBlocksRow() {
	// Массив данных для блоков
	const blocks = [
		{
			id: 1,
			title: 'Real-time Tracking',
			text: 'Monitor blockchain transactions in real-time to stay updated on any changes without delays.',
			icon: '/icons/real-time-tracking.svg',
		},
		{
			id: 2,
			title: 'AI Analysis',
			text: 'AI offers in-depth analysis of transactions and wallet activities, supporting better decision-making.',
			icon: '/icons/analysis.svg',
		},
		{
			id: 3,
			title: 'User-Friendly Interface',
			text: 'An intuitive interface for quick access to information and transaction management, customizable to your needs.',
			icon: '/icons/user-friendly-interface.svg',
		},
		{
			id: 4,
			title: 'Reputation Assessment',
			text: 'A system that assesses the trustworthiness of market participants and their transactions.',
			icon: '/icons/reputation-assessment.svg',
		},
	]

	// hoveredId — ID блока при наведении
	// activeId — ID блока, «закреплённого» кликом
	const [hoveredId, setHoveredId] = useState<number | null>(null)
	const [activeId, setActiveId] = useState<number | null>(null)

	// displayId: если есть активный, показываем его, иначе показываем hovered
	let displayId = null
	if (activeId !== null) {
		displayId = activeId
	} else {
		displayId = hoveredId
	}

	// При наведении
	function handleMouseEnter(id: SetStateAction<number | null>) {
		// Если нет закреплённого или наводимся на тот же блок
		if (activeId === null || activeId === id) {
			setHoveredId(id)
		}
	}

	// При уходе курсора
	function handleMouseLeave(id: number) {
		// Если нет закреплённого или это тот же блок
		if (activeId === null || activeId === id) {
			setHoveredId(null)
		}
	}

	// При клике
	function handleClick(id: SetStateAction<number | null>) {
		// Если клик по уже активному блоку — «открепляем»
		if (activeId === id) {
			setActiveId(null)
		} else {
			// Иначе закрепляем
			setActiveId(id)
		}
	}

	return (
		<section className='bg-black text-white px-4 py-8 md:px-8 md:py-12'>
			{/* Пример заголовка */}
			<h2 className='text-[#F0F0F0] text-[14px] mb-4 w-60'>
				Integrate AI for blockchain transaction analysis into any project
			</h2>
			<p className='text-[#757575] text-[14px] mb-20 w-120'>
				Leverage the power of AI and blockchain analytics to track transactions
				and enhance security. Reduce fraud risks and increase transparency in
				operations.
			</p>

			{/* Ряд блоков */}
			<div className='flex gap-15 '>
				{blocks.map(block => {
					// Является ли этот блок «отображаемым»
					const isDisplayed = displayId === block.id
					// Нужно ли «затемнить» и «опустить» блок
					const isDimmed = displayId !== null && displayId !== block.id

					return (
						<div
							key={block.id}
							className={
								'relative w-[250px] h-[250px] cursor-pointer transition-all duration-600 ' +
								(isDimmed ? 'opacity-50 translate-y-70' : '')
							}
							onMouseEnter={() => handleMouseEnter(block.id)}
							onMouseLeave={() => handleMouseLeave(block.id)}
							onClick={() => handleClick(block.id)}
						>
							{/* Градиентный слой (сияние) */}
							<div
								className='absolute inset-0 bg-gradient-to-r from-[#A83D05] via-[#DD4F8E] to-[#5590FF]
                           blur-sm'
							/>
							{/* Тёмный центр с иконкой */}
							<div className='relative w-full h-full bg-[#1E1E1E] rounded-lg flex items-center justify-center'>
								<img src={block.icon} alt={block.title} className='w-8 h-8' />
							</div>

							{/* Текстовый блок сбоку при hover/active */}
							{isDisplayed && (
								<div
									className='absolute top-0 left-full ml-4 w-64 bg-black p-4
                             rounded-lg shadow-lg transition-all duration-300'
								>
									<h3 className='text-lg font-semibold mb-2'>{block.title}</h3>
									<p className='text-gray-300 text-sm'>{block.text}</p>

									{/* Иконка-стрелка (по желанию) */}
									<div className='bg-[#2A2A2A] w-8 h-8 mt-3 flex items-center justify-center rounded'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-4 w-4 text-white'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M7 17l9-9m0 0h-6m6 0v6'
											/>
										</svg>
									</div>
								</div>
							)}
						</div>
					)
				})}
			</div>
		</section>
	)
}
