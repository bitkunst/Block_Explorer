import Header from './components/Header';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Blocks from './components/blocks/Blocks';
import Tx from './components/transactions/Tx';
import Home from './components/Home';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blocks" element={<Blocks />} />
                    <Route path="/transactions" element={<Tx />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
