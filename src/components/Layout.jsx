import React from 'react'
import {NavLink} from 'react-router-dom'
import {Outlet} from 'react-router-dom'

const Layout = () => {
	const setActive = ({isActive}) => (isActive ? 'active' : '')

	return (
		<>
			<header>
				<NavLink className={setActive} to={'/'}>
					Главная
				</NavLink>
				<NavLink className={setActive} to={'/employees'}>
					Сотрудники
				</NavLink>
			</header>
			<Outlet />
		</>
	)
}

export {Layout}
