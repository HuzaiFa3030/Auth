import ButtonAppBar from '../../components/AppBar/'
import './css/style.css'
import { Link } from 'react-router-dom'


function Profile() {
    let allUsers = [];
    let storageData = localStorage.getItem("users")

    if (storageData !== null) {
        allUsers = JSON.parse(storageData)
    }

    return (
        <div>
            <ButtonAppBar title="PROFILE" />
            <div className="main">
                <h1 className="heading1">Name : {allUsers[0].fname}</h1><br />
                <h1>Gmail : {allUsers[0].email}</h1>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/">HOME</Link>
                </div>
            </div>
        </div>
    )
}

export default Profile;