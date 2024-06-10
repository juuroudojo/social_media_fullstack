import { Link } from "react-router-dom";

const NavbarItem = ({title, classProps, to }) => {
    return (
        <li className={`mx-4 cursor-pointer navbar-item ${classProps}`}>
            <Link to={to} className="navbar-link"> 
                {title}
            </Link>
        </li>
    );
}

const Navbar = () => {
    const navItems = [
        { title: "Home", to: "/" },
        { title: "Exchange", to: "/exchange" },
        { title: "Tutorials", to: "/tutorials" },
        { title: "Wallets", to: "/wallets" }
    ];
    return(
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial flex-grow'>
                {navItems.map((item, index) => (
                    <NavbarItem key ={item + index} title={item.title} to={item.to}/>
                ))}
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;