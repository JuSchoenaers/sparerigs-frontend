
import Link from "next/link";
import { usePathname } from "next/navigation";


const HeaderLink = ({ href, children }) => {
    const path = usePathname()
    var active = ""
    if (path == href)
        active = "border-b-primary-400 drop-shadow-glow shadow-primary-300"
    else
        active = "border-b-transparent"
    console.log(path,href)
    return (
        <Link className={`${active} border-b-2  hover:border-b-primary-400 py-2 px-3`} href={href}>{children}</Link>
    )

}

export default HeaderLink