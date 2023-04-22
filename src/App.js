import { BrowserRouter } from 'react-router-dom'
import Routes from './utils/routes'

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes />
            </BrowserRouter>
        </div>
    )
}

export default App
