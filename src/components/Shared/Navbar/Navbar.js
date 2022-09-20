import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {

    const [authUser] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                authUser && <><li><Link to='/inventory'>Inventory</Link></li>
                                    <li><Link to='/my-items'>My Items</Link></li></>
                            }
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <Link to='/'><img className='w-36 h-12 rounded-md' src='https://i.ibb.co/MstQS6D/manageware-logo.png' alt='logo' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            authUser && <><li><Link to='/inventory'>Inventory</Link></li>
                                <li><Link to='/my-items'>My Items</Link></li></>
                        }
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border-2 border-indigo-500">
                                <img src={authUser?.photoURL || `https://i.ibb.co/VS4D9NB/blank-profile-picture-973460-340.webp`} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                authUser ?
                                    <div>
                                        <li>
                                            <a className="justify-between">
                                                {authUser.email}
                                            </a>
                                        </li>
                                        <li onClick={handleSignout}><a>Logout</a></li>
                                    </div>
                                    :
                                    <div>
                                        <li><Link to='/login'>Login</Link></li>
                                    </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;