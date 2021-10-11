import './css/style.css'
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="main-div">
            {/* <ButtonAppBar title="HOME" /> */}
            <Container>
                <h1 className="heading">Hello! I'm HuzaiFa.</h1>
                <h1 className="heading">WellCome To My Website.</h1>
                <br />
                <h2 className="heading3">Press Login Button To Continue</h2>
                <div className="mt-20 heading3" style={{ textAlign: 'center' }}>
                    <Link to="/login">LOGIN NOW</Link>
                </div>
            </Container>

        </div >

    )
}

export default Home;