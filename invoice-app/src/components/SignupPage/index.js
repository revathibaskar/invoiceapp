import { useState } from "react"

const locationList = [
  { id: 1, value: "Andaman and Nicobar Islands" },
  { id: 2, value: "Andhra Pradesh" },
  { id: 3, value: "Arunachal Pradesh" },
  { id: 4, value: "Assam" },
  { id: 5, value: "Bihar" },
  { id: 6, value: "Chandigarh" },
  { id: 7, value: "Chhattisgarh" },
  { id: 8, value: "Dadra and Nagar Haveli" },
  { id: 9, value: "Daman and Diu" },
  { id: 10, value: "Delhi" },
  { id: 11, value: "Goa" },
  { id: 12, value: "Gujarat" },
  { id: 13, value: "Haryana" },
  { id: 14, value: "Himachal Pradesh" },
  { id: 15, value: "Jammu and Kashmir" },
  { id: 16, value: "Jharkhand" },
  { id: 17, value: "Karnataka" },
  { id: 18, value: "Kerala" },
  { id: 19, value: "Lakshadweep" },
  { id: 20, value: "Madhya Pradesh" },
  { id: 21, value: "Maharashtra" },
  { id: 22, value: "Manipur" },
  { id: 23, value: "Meghalaya" },
  { id: 24, value: "Mizoram" },
  { id: 25, value: "Nagaland" },
  { id: 26, value: "Odisha" },
  { id: 27, value: "Puducherry" },
  { id: 28, value: "Punjab" },
  { id: 29, value: "Rajasthan" },
  { id: 30, value: "Sikkim" },
  { id: 31, value: "Tamil Nadu" },
  { id: 32, value: "Telangana" },
  { id: 33, value: "Tripura" },
  { id: 34, value: "Uttar Pradesh" },
  { id: 35, value: "Uttarakhand" },
  { id: 36, value: "West Bengal" },
]

const SignupPage = () => {

  const [companyName, setCompanyName] = useState("")
  const [phneNo, setPhneNo] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [state, setState] = useState(locationList[0].value)

  const onSubmitForm = (event) => {
    event.preventDefault()
  }

  return (
    <section className="h-100 row align-items-center justify-content-center p-3">
      <form className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3" onSubmit={onSubmitForm}>
        <div>
          <h4 className="text-center mb-4">Create a New Account</h4>
        </div>
        <div className="mb-3">
          <label htmlFor="company-name" className="form-label">company Name</label>
          <input type="text" className="form-control" id="company-name" aria-describedby="emailHelp" name="company-name" value={companyName} onChange={(e) => { setCompanyName(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="phn-no" className="form-label">Phone Number</label>
          <input type="number" className="form-control" id="phn-no" aria-describedby="emailHelp" name="phn-no" value={phneNo} onChange={(e) => { setPhneNo(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input type="password" className="form-control" id="Password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="select-state" className="form-label">Select State</label>
          <select className="form-field border-none form-control" id="country_state" tabindex="7"
            aria-invalid="false" name="location" value={state} onChange={(e) => setState(e.target.value)}>
            {locationList.map(location => <option value={location.value}>{location.value}</option>)}
          </select>
        </div>
        <div className="text-center mt-4 mb-2">
          <button type="submit" className="btn btn-primary px-4">Sign Up</button>
        </div>
        <div className="mb-2 text-center">
          <p className="mb-0">or</p>
          <div className="form-text mt-0">
            Already have an account?
            <span className="text-dark"> Login</span></div>
        </div>
      </form>
    </section>
  )
}

export default SignupPage