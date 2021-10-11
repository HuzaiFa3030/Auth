import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import BasicTextFields from '../../components/Input';
import BasicButtons from '../../components/Button'
import './css/style.css'
import { Link } from 'react-router-dom'
import { React, useState } from 'react'

function Signup() {
    const [fname, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    let allUsers = [];

    let users = localStorage.getItem('users');

    if (users !== null) {
        allUsers = JSON.parse(users)
    }

    let setData = () => {
        let user = {
            fname: fname,
            email: email,
            password: password
        }

        allUsers.push(user)
        localStorage.setItem('users', JSON.stringify(allUsers))
        alert("Good job! Registration Sucessfully")
        setName("")
        setEmail("")
        setPass("")
    }
    return (
        <div>
            <MenuAppBar title="SIGN UP" />
            ِ<Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={6} md={12}>
                        <MyCard>
                            <h1>Signup</h1>
                            <div className="mt-20">
                                <BasicTextFields label="Full Name" type="text" onChange={((f) => { setName(f.target.value) })} value={fname} />
                            </div>
                            <div className="mt-20">
                                <BasicTextFields label="Email" type="email" onChange={((g) => { setEmail(g.target.value) })} value={email} />
                            </div>
                            <div className="mt-20">
                                <BasicTextFields label="Password" type="password" onChange={((h) => { setPass(h.target.value) })} value={password} />
                            </div>
                            <div className="mt-20">
                                <BasicButtons title="REGISTER" onClick={setData} />
                            </div>
                            <div className="mt-20" style={{ textAlign: 'center' }}>
                                <Link to="/login">LOGIN NOW</Link>
                            </div>
                        </MyCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Signup;