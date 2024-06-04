import { Link } from "react-router-dom";
import { NavStyles, NavList, NavItem } from './NavStyles';
import { useLayoutAnchor } from "helpers/hooks/useLayoutAnchor";
import data from './data.json';
// @ts-ignore
import file1 from "assets/files/Pravila-Akcii-Chiken-Tamagochi.pdf"

interface NavProps {
	isActive: boolean
    setIsNavOpen: (type: boolean) => void
}

const addNavElement = (navItem: TNav) => {
    const { type, title, pathName } = navItem
    return ["anchor", "page"].includes(type) ? (
        <Link to={pathName}>{title}</Link> )
	    : type === "doc" ? (
        <a href={file1} target="_blank" rel="noreferrer">{title}</a>
    ) : null
}

export const Nav= ({isActive, setIsNavOpen }: NavProps) => {
    useLayoutAnchor()
    return (
        <NavStyles isActive={!!isActive}>
            <NavList>
                {data?.map((navItem: any) => (
                    <NavItem key={navItem.id} onClick={()=> setIsNavOpen(false)}>
                        {addNavElement(navItem)}
                    </NavItem>
                ))}
            </NavList>
        </NavStyles>
    )
}
