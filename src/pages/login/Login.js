import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import BasicTextFields from '../../components/Input';
import BasicButtons from '../../components/Button'
import './css/style.css'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

function Login() {
   const [email, getEmail] = useState("")
   const [pass, getPass] = useState("")
   const history = useHistory()

   let allUsers = [];
   let storageData = localStorage.getItem("users")

   if (storageData !== null) {
      allUsers = JSON.parse(storageData)
   }

   let log = () => {
      let filterUser = allUsers.filter(data => data.email === email && data.password === pass);

      if (filterUser.length) {
         alert("Good job! Logged IN Sucessfully")
         history.push("/profile")
      } else {
         alert("Warning! Incorrect User Name Or Password")
         getEmail("")
         getPass("")
      }

   }

   return (
      <div>
         <MenuAppBar title="LOGIN" />
         ِ<Container>
            <Grid container justifyContent="center">
               <Grid item xs={12} lg={6} md={12}>
                  <MyCard>
                     <h1>Login</h1>
                     <div className="mt-20">
                        <BasicTextFields label="Email" type="email" onChange={(e) => { getEmail(e.target.value) }} value={email} />
                     </div>
                     <div className="mt-20">
                        <BasicTextFields label="Password" type="password" onChange={(f) => { getPass(f.target.value) }} value={pass} />
                     </div>
                     <div className="mt-20">
                        <BasicButtons title="LOGIN" onClick={log} />
                     </div>
                     <div className="mt-20" style={{ textAlign: 'center' }}>
                        <Link to="/signup">SIGN UP</Link>
                     </div>
                  </MyCard>
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default Login;