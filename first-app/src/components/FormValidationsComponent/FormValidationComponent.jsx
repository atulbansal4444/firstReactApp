import React, { useState } from 'react';
import axios from 'axios';

const FormValidationComponent = () => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [customerType, setCustomerType] = useState('');

	const validateFullName = () => {
		const reg = new RegExp(/^[a-zA-z]+([\s][a-zA-Z]+)*$/);
		if (!reg.test(fullName) || fullName === '') {
			alert('Invalid Name');
			return false;
		}
		return true;
	};

	const validateEmailFormat = () => {
		const emailRegEx = new RegExp(
			/^[a-zA-Z0-9]+.+[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
		);
		if (!emailRegEx.test(email)) {
			alert('Not a valid email:' + email);
			return false;
		}
		return true;
	};

	const validatePhone = () => {
		if (phone.length === 10) {
			const reg = new RegExp(/^[0-9]*$/);
			if (!reg.test(phone)) {
				alert('invalid phone number');
			}
		} else {
			alert('Plese enter the phone number of size 10');
		}
	};

	const validateCustomerType = () => {
		if (customerType === '') {
			alert('Customer Type needs to be selected');
		}
	};

	const clearForm = () => {
		setFullName('');
		setEmail('');
		setPhone('');
		setCustomerType('');
	};

	const apiCall = () => {
		let isValid = validateFullName();

		if (isValid) {
			isValid = validateEmailFormat();
        }
        
		if (isValid) {
			isValid = validatePhone();
        }
        
		if (isValid) {
			isValid = validateCustomerType();
        }
        
		if (isValid) {
			alert('Success');
			clearForm();
        }
        
		const response = axios({
			method: 'post',
			url: 'addUrl',
			headers: {},
			data: {
				fullName: fullName,
				phone: phone,
				email: email,
				customerTye: customerType,
			},
		})
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
		console.log(JSON.parse(response));
	};

	return (
		<div>
			<label>Full Name</label>
			<input
				id='1'
				type='text'
				value={fullName}
				onChange={e => setFullName(e.target.value)} />
			<br />
			<label>Email</label>
			<input
				id='2'
				type='text'
				name={email}
				onChange={e => setEmail(e.target.value)} />
			<br />
			<label>Phone</label>
			<input
				id='3'
				type='text'
				value={phone}
				onChange={e => setPhone(e.target.value)} />
			<br />
			<label>Customer Type</label>
			<select
				value={customerType}
				onChange={e => setCustomerType(e.target.value)}>
				<option value=''>Select Customer Type</option>
				<option value='indivisual'>indivisual</option>
				<option value='buisness'>buisness</option>
			</select>
			<br />
			<button type='submit' onClick={apiCall}>
				Submit
			</button>
		</div>
	);
};

export default FormValidationComponent;
