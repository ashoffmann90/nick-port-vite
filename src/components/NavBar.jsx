import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

var styles = {
    bmBurgerButton: {
        zIndex: '25',
        position: 'fixed',
        width: '25px',
        height: '20px',
        right: '20px',
        top: '20px',
    },
    bmBurgerBars: {
        background: 'white',
    },
    bmBurgerBarsHover: {
        // background: '#a90000',
    },
    bmMenuWrap: {
        zIndex: '25',
        position: 'fixed',
        width: '30%',
        height: '50%',
    },
    bmMenu: {
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '2em',
        fontSize: '1em',
    },
    bmItem: {
        display: 'inline-block',
        outline: 'none',
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.0)',
    },
}

function NavBar() {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [menuOpen, setMenuOpen] = useState(false)
    window.addEventListener('resize', () => setWindowSize(window.innerWidth))

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const stateChangeHandler = (newState) => {
        setMenuOpen(newState.isOpen)
    }

    return (
        <div className="nav-div">
            <header>
                {windowSize >= 480 ? (
                    <>
                        <div className="name-title-wrapper">
                            <NavLink to="/">
                                <img
                                    src="https://nick-portfolio.s3-us-west-2.amazonaws.com/Name_Title.jpg"
                                    alt="Logo for Nick Almanza Filmmaker/Steadycam Operator"
                                />
                            </NavLink>
                        </div>
                        <nav>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/videos">Videos</NavLink>
                            <NavLink to="/bts">BTS</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                    </>
                ) : (
                    <>
                        <div className="name-title-wrapper">
                            <NavLink to="/">
                                <img
                                    src="https://nick-portfolio.s3-us-west-2.amazonaws.com/Name_Title.jpg"
                                    alt="Logo for Nick Almanza Filmmaker/Steadycam Operator"
                                />
                            </NavLink>
                        </div>
                        <Menu
                            right
                            isOpen={menuOpen}
                            onStateChange={(state) => stateChangeHandler(state)}
                            styles={styles}
                        >
                            <NavLink to="/" onClick={toggleMenu}>
                                Home
                            </NavLink>
                            <NavLink to="/videos" onClick={toggleMenu}>
                                Videos
                            </NavLink>
                            <NavLink to="/bts" onClick={toggleMenu}>
                                BTS
                            </NavLink>
                            <NavLink to="/contact" onClick={toggleMenu}>
                                Contact
                            </NavLink>
                        </Menu>
                    </>
                )}
            </header>
        </div>
    )
}

export default NavBar
