
import { useState } from 'react';
import '../style/Topbar.scss';
import NavBar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TopBar() {
    const nav = useNavigate();
    const [elapse, setElapse] = useState(false);
    const location = useLocation();

    const pageName = location.pathname.split('/').filter(Boolean).pop() || 'home';

    const handleButtonClick = () => {
        setElapse(prevElapse => !prevElapse);
    };

    return (
    <div>
        <div className='navbar-container'>
            {elapse ? 
                (
                    <div>
                        <NavBar />
                    </div>
                )
                :
                (
                    <div></div>
                )
            }
        </div>
        <div className="topbar">
            <div className="open-navbar-container">
                <button className='open-navbar-btn' onClick={handleButtonClick}>{elapse ? 'Close Navbar' : 'Open Navbar'}</button>
            </div>
            <div className="current-page-header-container">
                <div className='current-page-header-container-inner'>
                    <h3>{pageName}</h3>
                </div>
            </div>
            <div className='user-login-container'>
                <div className='user-login-container-inner'>
                    <button className='user-login-btn' onClick={() => nav('/register_or_login')}>Login</button>
                </div>
            </div>
            
        </div>
    </div>

    )
}