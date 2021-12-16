import React from 'react'

const Employee = ({item, remove}) => {
	return (
		<li key={item.id} className='employees-list'>
			<img src={item.avatar} alt={item.first_name} />
			{item.first_name} {item.last_name}
			<button onClick={() => remove(item.id)} className='button-delete'>
				<i className='fa fa-close'></i>
			</button>
		</li>
	)
}

export {Employee}
