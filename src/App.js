import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { EmployeesPage } from './pages/EmployeesPage.jsx'


function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='employees' element={<EmployeesPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
