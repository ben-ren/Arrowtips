export default function Navbar(){
    return(
        <nav className="nav">
            <ul>
                <CustomLink link="/" content="Home"></CustomLink>
                <CustomLink link="/about" content="About"></CustomLink>
                <CustomLink link="/posts" content="Posts"></CustomLink>
                <CustomLink link="/games" content="Games"></CustomLink>
                <CustomLink link="/projects" content="Projects"></CustomLink>
            </ul>
        </nav>
    )
}

type CustomLinkProps = {
    link: string;
    content: string;
}

function CustomLink({link, content, ...props}: CustomLinkProps){
    const path = window.location.pathname
    return (
        <li className={path === link ? "active" : ""}>
            <a href={link} {...props} className="navbar">{content}</a>
        </li>
    )
}