import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
				employees &&
				employees
					.map((item) => (
						<li key={item.id} className='employees-list'>
							<img src={item.avatar} alt={item.first_name} />
							{item.first_name} {item.last_name}
							<button onClick={() => remove(item.id)} className='button-delete'>
								<i className='fa fa-close'></i>
							</button>
						</li>
					))
					.reverse()
			)}
		</div>
	)
}

export {EmployeesPage}
