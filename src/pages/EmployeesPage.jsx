import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Employee} from '../components/Employee'

const EmployeesPage = () => {
	const [employees, setEmployees] = useState([])

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get('https://reqres.in/api/users?per_page=12')
				setEmployees(response.data.data)
			} catch (error) {
				console.log('Ошибка')
			}
		}
		fetchData()
	}, [])

	const remove = async (id) => {
		const response = await axios.delete(`https://reqres.in/api/users/${id}`)
		if (window.confirm('Вы уверены что хотите удалить сотрудника?')) {
			setEmployees((prevState) => prevState.filter((item) => item.id !== id))
		}
		console.log(response)
	}

	return (
		<div>
			<div className='employees'>
				<h4>Сотрудники</h4>
				<div className='employees-add'>Добавить сотрудника +</div>
			</div>
			{employees.length === 0 ? (
				<div className='loading'>Loading....</div>
			) : (
				employees && employees.map((item) => <Employee item={item} remove={remove} />)
			)}
		</div>
	)
}

export {EmployeesPage}
