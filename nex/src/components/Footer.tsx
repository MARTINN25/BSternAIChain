export default function Footer() {
	return (
		<footer className='mt-20 pt-16 pb-12 max-w-6xl mx-auto border-t border-[#1B1B1B]'>
			<div className='max-w-6xl pr-6 mx-auto flex flex-col md:flex-row gap-8'>
				{/* Левая колонка */}
				<div className='md:flex-1'>
					<div className='flex items-center mb-4'>
						<h2 className='text-white text-[18px] font-light'>NEX.AI</h2>
						<img
							src='/icons/logo.svg'
							alt='logo'
							className='w-5 h-5 ml-4 opacity-50'
						/>
					</div>
					<p className='w-[420px] text-[11px] text-[#808080] mb-10'>
						IS AN INNOVATIVE SERVICE that combines BLOCKCHAIN
						TECHNOLOGY and ARTIFICIAL INTELLIGENCE to provide accurate and
						comprehensive information about BLOCKCHAIN TRANSACTIONS. We help you
						easily track your CRYPTOCURRENCY OPERATIONS and evaluate the
						reputation of other participants. Our goal is to make the blockchain
						world more TRANSPARENT and SECURE.
					</p>
					<div className='flex items-center gap-4'>
						{/* Пример иконок */}
						{/* GitHub */}
						<a
							href='https://github.com/your-profile'
							target='_blank'
							rel='noopener noreferrer'
							className='group'
						>
							<img
								src='/icons/github.svg'
								alt='GitHub'
								className='w-5 h-5 transition-transform duration-200 group-hover:scale-110'
							/>
						</a>

						{/* LinkedIn */}
						<a
							href='https://www.linkedin.com/in/your-profile/'
							target='_blank'
							rel='noopener noreferrer'
							className='group'
						>
							<img
								src='/icons/linkedin.svg'
								alt='LinkedIn'
								className='w-5 h-5 transition-transform duration-200 group-hover:scale-110'
							/>
						</a>

						{/* X (бывший Twitter) */}
						<a
							href='https://x.com/your-profile'
							target='_blank'
							rel='noopener noreferrer'
							className='group'
						>
							<img
								src='/icons/twitter.svg'
								alt='X (Twitter)'
								className='w-5 h-5 transition-transform duration-200 group-hover:scale-110'
							/>
						</a>

						{/* Telegram */}
						<a
							href='https://t.me/your-profile'
							target='_blank'
							rel='noopener noreferrer'
							className='group'
						>
							<img
								src='/icons/telegram.svg'
								alt='Telegram'
								className='w-5 h-5 transition-transform duration-200 group-hover:scale-110'
							/>
						</a>

						{/* Discord */}
						<a
							href='https://discord.gg/your-invite'
							target='_blank'
							rel='noopener noreferrer'
							className='group'
						>
							<img
								src='/icons/discord.svg'
								alt='Discord'
								className='w-5 h-5 transition-transform duration-200 group-hover:scale-110'
							/>
						</a>
						{/* Добавьте нужные вам соц. иконки */}
					</div>
				</div>

				{/* Правая часть: три колонки */}
				<div className='flex flex-col md:flex-row gap-16'>
					{/* Колонка 1: Features */}
					<div>
						<h3 className='text-[#8D8D8D] text-[16px] font-normal mb-6'>
							Features
						</h3>
						<ul className='space-y-2 text-[12px]'>
							<li>
								<a href='#' className='hover:text-white'>
									Home
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white'>
									Nex.AI
								</a>
							</li>
						</ul>
					</div>

					{/* Колонка 2: Solutions */}
					<div>
						<h3 className='text-[#8D8D8D] text-[16px] font-normal mb-6'>
							Solutions
						</h3>
						<ul className='space-y-2 text-[12px]'>
							<li>
								<a href='#' className='hover:text-white'>
									Wallet
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white'>
									Community
								</a>
							</li>
						</ul>
					</div>

					{/* Колонка 3: Developers */}
					<div>
						<h3 className='text-[#8D8D8D] text-[16px] font-normal mb-6'>
							Developers
						</h3>
						<ul className='space-y-2 text-[12px]'>
							<li>
								<a href='#' className='hover:text-white'>
									Docs
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white'>
									GitHub
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white'>
									FAQ
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Нижняя строка */}
			<div className='mt-8 pt-4'>
				<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-[10px] text-white'>
					<p>© 2023 Nex Laboratories, Inc.</p>
				</div>
			</div>
		</footer>
	)
}
