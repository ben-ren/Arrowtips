export default function Navbar(){
    return(
        <nav className="nav">
            <ul>
                <li className="active"><a href="/" className="navbar">Home</a></li>
                <li><a href="/about" className="navbar">About</a></li>
                <li><a href="/posts" className="navbar">Posts</a></li>
                <li><a href="/games" className="navbar">Games</a></li>
                <li><a href="/projects" className="navbar">Projects</a></li>
            </ul>
        </nav>
    )
}