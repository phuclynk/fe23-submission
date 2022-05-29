import React, { useEffect, useState } from 'react';

export function Form(props) {
	// const [name, setName] = useState()
	// const [gender, setGender] = useState()

	const nameField = 'name'
	const genderField = 'gender'
	const [payload, setPayload] = useState({
		[nameField]: '',
		[genderField]: ''
	});

	useEffect(() => {
		props.onPayloadChange(payload)
	}, [payload])

	const handleSubmit = (e) => {
		e.preventDefault();

		// console.log(nameField);
		// console.log(genderField);

		if (payload[nameField].length <= 4) {
			alert('Invalid Name');
			return
		}
		console.log(payload);
	}

	const handleChangeName = (e) => {
		setPayload({
			...payload,
			[nameField]: e.target.value
		})

	}
	const handleChangeGender = (e) => {
		setPayload({
			...payload,
			[genderField]: e.target.value
		})

	}

	return (
		<>
			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="">Name:</label>
				<input type="text" name="" id="" value={payload[nameField]} onChange={handleChangeName} /><br />
				<label htmlFor="">Gender:</label>
				<select name="" id="" value={payload[genderField]} onChange={handleChangeGender}>
					<option value="">-- Select --</option>
					<option value={'M'}>Male</option>
					<option value={"F"}>Female</option>
					<option value={"O"}>Other</option>
				</select><br />
				<input type="submit" name="" id="" />
			</form>
		</>
	);
}

export default Form;