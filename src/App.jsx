import { useState } from 'react'
import './App.css'

function App() {

	const [userDetails, setUserDetails] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		gender: "other",
	})
	const [validation, setValidation] = useState({
		firstname: false,
		lastname: false,
		email: false,
		password: false,
		gender: false,
	})

	function onFormChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		setUserDetails({
			...userDetails,
			[name]: value
		})

	}

	function handleSubmit(e) {
		e.preventDefault()

		let firstnameVal = userDetails.firstname.length > 2 ? false : true;
		let lastnameVal = userDetails.lastname.length > 2 ? false : true;
		let emailVal = userDetails.email.includes("@") && userDetails.email.includes(".") ? false : true;
		let passwordVal = userDetails.password.length > 4 ? false : true;
		let gnderVal = userDetails.gender == "other" ? true : false;

		setValidation({
			firstname: firstnameVal,
			lastname: lastnameVal,
			email: emailVal,
			password: passwordVal,
			gender: gnderVal,
		})

		if (firstnameVal == false && lastnameVal == false && emailVal == false && passwordVal == false && gnderVal == false) {

			console.log(userDetails.firstname, userDetails.lastname, userDetails.email, userDetails.password, userDetails.gender,)
			alert(`Welcome ${userDetails.firstname} ${userDetails.lastname}`)

		}
	}

	return (
		<>
			<div id="contact-form">
				<form onSubmit={handleSubmit}>

					<div id="name-wrapper">
						<div className="form-element">
							<label htmlFor="firstname" >Firstname:</label>
							<input type="text" value={userDetails.firstname} placeholder='Enter Firstname' name='firstname' onChange={(e) => onFormChange(e)} />
							{validation.firstname && <p>Enter more than 2 char.</p>}
						</div>

						<div className="form-element">
							<label htmlFor="lastname" >Lastname:</label>
							<input type="text" value={userDetails.lastname} placeholder='Enter Lastname' name='lastname' onChange={(e) => onFormChange(e)} />
							{validation.lastname && <p>Enter more than 2 char.</p>}
						</div>
					</div>

					<div className="form-element">
						<label htmlFor="email" >Email:</label>
						<input type="email" value={userDetails.email} placeholder='Enter Email' name='email' onChange={(e) => onFormChange(e)} />
						{validation.email && <p>Enter a valid E-mail</p>}
					</div>

					<div className="form-element">
						<label htmlFor="password">Password:</label>
						<input type="password" value={userDetails.password} placeholder='Enter Password' name='password' onChange={(e) => onFormChange(e)} />
						{validation.password && <p>Password must be more than 4 char.</p>}
					</div>

					<div className="form-element">
						<label htmlFor="gender">Gender:</label>
						<select name="gender" id="gender" value={userDetails.gender} onChange={(e) => onFormChange(e)}>
							<option value="other">Other</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
						{validation.gender && <p>Select a Gender</p>}
					</div>

					<button>Submit</button>
				</form>
			</div>
		</>
	)
}

export default App
