import { useState } from "react";
import { Link } from "react-router";
import CartIcon from "../../assets/icon/cart.svg";
import Menu from "../../assets/icon/menu.svg";
import X from "../../assets/icon/menu.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50 shadow-md">
            <header className="bg-primary text-white w-full shadow-md">
                <div className="max-w-[1170px] mx-auto flex items-center justify-between p-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            className="w-[50px] h-[50px] object-contain"
                            src="/MyLogobg.png"
                            alt="logo"
                        />
                        <span className="text-xl font-bold tracking-wide">PATHAN RESTAURANT</span>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex gap-6 text-white/80 font-medium">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT US</Link>
                        <Link to="/menu">MENU</Link>
                        <Link to="/contact">CONTACTS</Link>
                        <Link to="/blog">BLOG</Link>
                    </nav>

                    {/* Cart & Reservation */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button className="bg-white rounded-full p-[8px]">
                            <img
                                src={CartIcon}
                                className="w-[20px] h-[20px]"
                                alt="cart icon"
                            />
                        </button>
                        <Link
                            to="/"
                            className="hero-btn text-white hover:text-[var(--sc)] "
                        >
                            RESERVATION
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white focus:outline-none"
                    >
                        {isOpen ? <img src={X} alt="close icon" /> : <img src={Menu} alt="menu icon" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden bg-primary3 text-white/80 flex flex-col gap-4 p-4">
                        <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link>
                        <Link to="/menu" onClick={() => setIsOpen(false)}>MENU</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACTS</Link>
                        <Link to="/blog" onClick={() => setIsOpen(false)}>BLOG</Link>
                        <div className="flex items-center justify-between mt-4">
                            <button className="bg-white rounded-full p-[8px]">
                                <img
                                    src={CartIcon}
                                    className="w-[26px] h-[26px]  "
                                    alt="cart icon"
                                />
                            </button>
                            <Link
                                to="/reservation"
                                className="btn-primary"
                            >
                                RESERVATION
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Navbar;
