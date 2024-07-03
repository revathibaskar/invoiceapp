import { useState } from "react"

const LoginPage = () => {

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const onSubmitForm = (event) => {
      event.preventDefault()
   }
   return (
      <section className="h-100 row align-items-center justify-content-center p-3">
         <form className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3" onSubmit={onSubmitForm}>
            <div className="text-center">
               <h3 className="mb-5">Login to your account</h3>
            </div>
            <div className="mb-3">
               <label htmlFor="email" className="form-label">Email address</label>
               <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="mb-3">
               <label htmlFor="Password" className="form-label">Password</label>
               <input type="password" className="form-control" id="Password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className="text-center mt-5 mb-2 ">
               <button type="submit" className="btn btn-primary px-5">Login</button>
            </div>
            <div className="mb-2 text-end">
               <div className="form-text">
                  <p className="text-primary">forget password?</p>
               </div>
            </div>
         </form>
      </section>
   )
}

export default LoginPage