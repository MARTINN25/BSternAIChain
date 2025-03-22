// Если в Next.js 13+ (App Router) вы используете хуки здесь, добавьте:
// 'use client';

import React from 'react'

// Интерфейс для карточек
interface CardItem {
	title: string
	text: string
}

// Функция, разбивающая массив items на подмассивы по паттерну
function chunkByPattern(items: CardItem[], pattern: number[]): CardItem[][] {
	const result: CardItem[][] = []
	let startIndex = 0

	for (const count of pattern) {
		if (startIndex >= items.length) break
		const rowItems = items.slice(startIndex, startIndex + count)
		result.push(rowItems)
		startIndex += count
	}

	// Если осталось что-то после 7 рядов, можно раскомментировать:
	// if (startIndex < items.length) {
	//   result.push(items.slice(startIndex));
	// }

	return result
}

export default function SevenRowsLayout() {
	// Массив карточек. Нужно минимум 17, чтобы полностью заполнить 7 рядов (2+3+2+3+2+2+3=17).
	// Если у вас меньше, последние ряды будут не полными.
	const items: CardItem[] = [
		{
			title: 'Transaction Details?',
			text: 'Can you show the full transaction history for a specific wallet?',
		},
		{
			title: 'Wallet Balance?',
			text: 'What is the current balance of this wallet?',
		},
		{
			title: 'Final Destination?',
			text: 'Where was the last transaction from this wallet sent?',
		},

		{
			title: 'Transaction Details?',
			text: 'Can you show the full transaction history for a specific wallet?',
		},
		{
			title: 'Wallet Balance?',
			text: 'What is the current balance of this wallet?',
		},
		{
			title: 'Final Destination?',
			text: 'Where was the last transaction from this wallet sent?',
		},
		{
			title: 'Transaction Details?',
			text: 'Can you show the full transaction history for a specific wallet?',
		},

		{
			title: 'Wallet Balance?',
			text: 'What is the current balance of this wallet?',
		},
		{
			title: 'Final Destination?',
			text: 'Where was the last transaction from this wallet sent?',
		},
		{
			title: 'Transaction Details?',
			text: 'Can you show the full transaction history for a specific wallet?',
		},
		{
			title: 'Wallet Balance?',
			text: 'What is the current balance of this wallet?',
		},

		{
			title: 'Final Destination?',
			text: 'Where was the last transaction from this wallet sent?',
		},
		{
			title: 'Transaction Details?',
			text: 'Can you show the full transaction history for a specific wallet?',
		},
		{
			title: 'Wallet Balance?',
			text: 'What is the current balance of this wallet?',
		},
		{
			title: 'Final Destination?',
			text: 'Where was the last transaction from this wallet sent?',
		},

		{
			title: 'Transaction Details?',
			text: 'Can you show the full transaction history for a specific wallet?',
		},
		{
			title: 'Wallet Balance?',
			text: 'What is the current balance of this wallet?',
		},
		// Итого 17 штук (2+3+2+3+2+2+3=17).
	]

	// Паттерн 7 рядов: 2,3,2,3,2,2,3
	const pattern = [2, 3, 2, 3, 2, 2, 3]

	// Разбиваем items по паттерну
	const rows = chunkByPattern(items, pattern)

	const bars = [
		{ color: 'bg-gradient-to-t from-[#B46FFF] to-[#D98BFF]', height: 26 },
		{ color: 'bg-[#21E6C1]', height: 22 },
		{ color: 'bg-white', height: 35 },
		{ color: 'bg-gradient-to-t from-[#FF5F3C] to-[#FF775A]', height: 18 },
		{ color: 'bg-gradient-to-t from-[#FF3CAC] to-[#A200FF]', height: 12 },
	]

	return (
		<section
			className='
        w-[1179px] h-[600px] m-auto
        my-gradient
        text-white
        flex
        rounded-xl
				mt-8
      '
		>
			{/* Внутренний контейнер, чтобы контент не прилипал к краям */}
			<div className='w-full flex gap-8'>
				{/* Левая часть (карточки) */}
				<div className='m-auto w-[60%] p-10'>
					{rows.map((rowItems, rowIndex) => {
						// Если rowIndex === 2, добавим класс ml-8
						const extraMargin = rowIndex === 2 ? 'ml-8' : ''

						return (
							<div key={rowIndex} className={`flex gap-4 mb-3 ${extraMargin}`}>
								{rowItems.map((item, i) => (
									<div
										key={i}
										className='
                    w-[255px]
                      inline-block
                      border border-[#1F1F1F]
                      bg-[#0C0C0C]/30
                      px-6 py-2.5
                      rounded
                      text-white
                       transform transition-all duration-300
                        hover:scale-110         
    hover:shadow-lg           
    hover:bg-black/30         
    hover:border-[#131313]
                    '
									>
										<h3 className='text-[9px] font-semibold mb-1'>
											{item.title}
										</h3>
										<p className='text-[8px] text-gray-300'>"{item.text}"</p>
									</div>
								))}
							</div>
						)
					})}
				</div>

				{/* Правая часть: волна + текст */}
				<div className='relative w-[40%] p-8 flex flex-col items-center justify-center'>
					{/* Логотип в верхнем правом углу */}
					<img
						src='/icons/logo.svg'
						alt='Logo'
						className='absolute top-4 right-4 w-5 h-5 opacity-50'
					/>

					{/* Основной контент (волна + текст) */}
					<div className='flex items-center gap-4'>
						{/* Волна */}
						<div className='flex items-center gap-[3px]'>
							{/* Первая полоска: высота 18px */}
							{bars.map((bar, index) => (
								<span
									key={index}
									className={`wave-bar ${bar.color}`}
									style={{
										height: `${bar.height}px`,
										animationDelay: `${index * 0.1}s`,
									}}
								></span>
							))}
						</div>

						{/* Текст */}
						<h2 className='text-[20px] font-light'>
							Ask me and I will help you!
						</h2>
					</div>
				</div>
			</div>
		</section>
	)
}
