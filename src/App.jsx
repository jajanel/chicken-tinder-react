import Header from "./components/Header.jsx";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Index from "./pages";
import FindLove from "./pages/findlove.jsx";
import Matches from "./pages/matches.jsx";
import Profile from "./pages/profile.jsx";
import Account from "./pages/account.jsx";
import Logout from "./pages/logout.jsx";
import Login from "./pages/login.jsx";


export default function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route path="/findlove" element={<FindLove />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/account" element={<Account />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/login" element={<Login />}/>
            </Routes>
        </Router>
    );

}


