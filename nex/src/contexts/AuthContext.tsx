'use client'

import { createContext, useContext, useState } from 'react'

interface AuthContextType {
	isAuthenticated: boolean
	login: () => void
	logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	const login = () => setIsAuthenticated(true)
	const logout = () => setIsAuthenticated(false)

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
