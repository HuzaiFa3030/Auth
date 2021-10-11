import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home, Login, Signup,Profile } from '../pages'

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </Router>
    )
}

export default AppRouter;