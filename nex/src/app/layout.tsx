import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'NEX.AI',
	description: 'NEX.AI - Home',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={inter.className}>
			<body className='bg-black text-white'>
				<AuthProvider>
					{/* Сайдбар слева */}
					<Sidebar />

					{/* Основной контент справа */}
					<main>{children}</main>
				</AuthProvider>
			</body>
		</html>
	)
}
