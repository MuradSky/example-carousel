import {useLocation} from "react-router-dom";
import {useLayoutEffect} from "react";
import {elementPosition} from "../utils";

export const useLayoutAnchor = () => {
    const { pathname, hash, key } = useLocation()
    useLayoutEffect(()=> {
        hash === '' ?  window.scrollTo(0, 0) :
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                window.scroll({
	                top: elementPosition(element),
	                behavior: "smooth"
                })
            }, 0);
    }, [pathname, hash, key])

    return {
        pathname,
        hash,
        key
    }
}
