import {Link, useMatch, useResolvedPath} from "react-router-dom"   //Link component replaces anchor tag <a></a>

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
    const resolvedPath = useResolvedPath(link)      //converts the relative paths to absolute paths.
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })    //end:true means that to return true the ENTIRE path must match, instead of partial matching.
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={link} {...props} className="navbar">{content}</Link>      {/** <a href=""></a> => <Link to=""></Link> */}
        </li>
    )
}

/** Redundant code, page doesn't refresh so css never gets updated. Instead we use react-router-dom to handle style refresh.
 * const path = window.location.pathname
    return (
        <li className={path === link ? "active" : ""}>
            
        </li>
    )
 */