import Header from "./components/Header.jsx";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Index from "./pages";
import FindLove from "./pages/findlove";
import Matches from "./pages/matches";
import Profile from "./pages/profile";
import Account from "./pages/account";
import Logout from "./pages/logout";
import Login from "./pages/login";
import FooterComponent from "./components/FooterComponent.jsx";


export default function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/findlove" element={<FindLove />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/account" element={<Account />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/login" element={<Login />}/>
            </Routes>
            <FooterComponent />
        </Router>
    );

}


