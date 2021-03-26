import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './assets/scss/main.scss'

import Home from './pages/Home/Home'


const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	)
}

export default App;
