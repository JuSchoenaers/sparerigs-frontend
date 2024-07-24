
import Link from "next/link";


const AppLink = ({ href, children }) => {

    return (
        <Link className="text-primary-400 underline hover:drop-shadow-glow shadow-primary-300" href={href}>{children}</Link>
    )

}

export default AppLink