export default function BlockchainCapabilities() {
	// Массив иконок (заполните своими названиями/путями)
	const icons = [
		{ name: 'layerZero', src: '/icons/network/layerZero.svg' },
		{ name: 'Solana', src: '/icons/network/Solana.svg' },
		{ name: 'Ethereum', src: '/icons/network/Ethereum.svg' },
		{ name: 'Fantom', src: '/icons/network/Fantom.svg' },
		{ name: 'Core', src: '/icons/network/Core.svg' },
		{ name: 'BSC', src: '/icons/network/BSC.svg' },
		{ name: 'Base', src: '/icons/network/Base.svg' },
		{ name: 'Polygon', src: '/icons/network/Polygon.svg' },
		{ name: 'Linea', src: '/icons/network/Linea.svg' },
		{ name: 'Sui', src: '/icons/network/Sui.svg' },
		{ name: 'Aptos', src: '/icons/network/Aptos.svg' },
		{ name: 'Blast', src: '/icons/network/Blast.svg' },
		{ name: 'Celo', src: '/icons/network/Celo.svg' },
		{ name: 'Harmony', src: '/icons/network/Harmony.svg' },
		{ name: 'zkSync', src: '/icons/network/zkSync.svg' },
		{ name: 'NEAR', src: '/icons/network/NEAR.svg' },
		{ name: 'Polkadot', src: '/icons/network/Polkadot.svg' },
		{ name: 'Cosmos', src: '/icons/network/Cosmos.svg' },
		{ name: 'Algorand', src: '/icons/network/Algorand.svg' },
		{ name: 'Tezos', src: '/icons/network/Tezos.svg' },
		{ name: 'StarkNet', src: '/icons/network/StarkNet.svg' },
		{ name: 'Flow', src: '/icons/network/Flow.svg' },
		{ name: 'Kadena', src: '/icons/network/Kadena.svg' },
		{ name: 'Tron', src: '/icons/network/Tron.svg' },
	]

	return (
		<section className='pt-2 pb-12 max-w-6xl mx-auto border-t border-b border-[#1B1B1B]'>
			{/* Первая строка: кнопка справа */}
			<div className='flex justify-end'>
				<button className=' text-[15px] font-light px-4 py-2 rounded bg-[#0C0C0C]'>
					NEXN.AI
				</button>
			</div>

			{/* Вторая строка: текст слева (по умолчанию) */}
			<div className='mt-4 mb-14'>
				<h2 className='text-[13px] text-[#F0F0F0]'>
					Expand Your Blockchain Capabilities <br />
					with Saturn Integrations
				</h2>
				{/* При желании можно добавить описание или другую информацию */}
			</div>

			{/* Сетка иконок */}
			<div className='flex flex-wrap gap-4'>
				{icons.map((icon, i) => {
					// По умолчанию ширина
					let widthClass = 'w-[130px]' // ~ 112px

					// Если это один из последних трёх
					const lastIndex = icons.length - 1
					if (i === lastIndex - 2) widthClass = 'w-[104px]' // предпоследние 3
					if (i === lastIndex - 1) widthClass = 'w-[72px]' // предпоследние 2
					if (i === lastIndex) widthClass = 'w-[49px]' // самый последний

					return (
						<div
							key={icon.name}
							className={`
                relative border border-[#1B1B1B] h-[142px]
                ${widthClass}
              `}
						>
							{/* Название сети в верхнем левом углу */}
							<span className='absolute top-1 left-1 text-[12px] text-[#686868]'>
								{icon.name}
							</span>

							{/* Иконка по центру */}
							<div className='flex items-center justify-center h-full'>
								{icon.src ? (
									<img src={icon.src} alt={icon.name} className='w-8 h-8' />
								) : (
									// Если src пустая — значит, "more networks..."
									<a
										href='/all-networks'
										className='text-gray-300 hover:underline'
									>
										{icon.name}
									</a>
								)}
							</div>
						</div>
					)
				})}
				<div className='flex items-center justify-center w-[120px] h-[142px]'>
					<a className='text-[#A2A2A2] text-[12px] hover:underline' href='/'>
						more networks...
					</a>
				</div>
			</div>

			{/* Нижний текст */}
			<p className='text-[#A4A4A4] text-[13px] mt-8 w-105'>
				Seamlessly integrates with over 2,000+ platforms to enhance your
				blockchain analysis, monitoring, and reporting. Leverage powerful tools
				to optimize your transaction tracking and security management.
			</p>
		</section>
	)
}
