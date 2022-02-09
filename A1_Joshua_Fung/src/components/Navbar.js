import '../css/Navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <div id="logo">
                Logo
            </div>
            <ul className='navbarUL'>
                <li>Navbar Item 1</li>
                <li>Navbar Item 2</li>
                <li>Navbar Item 3</li>
            </ul>
        </div>
       
    );
}


export default Navbar