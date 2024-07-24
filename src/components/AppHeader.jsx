'use client'

import Link from "next/link";
import InputSearch from "./InputSearch";
import TertiaryButton from "./TertiaryButton";
import PrimaryButton from "./PrimaryButton";
import HeaderLink from "./HeaderLink";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";



const AppHeader = ({})=>{
    const path = usePathname()
    const router = useRouter()
    const handleSignIn = () => {
        router.push('/signIn')
    }
    const handleSignUp = () => {
        router.push('/signUp')
    }
    return(
        <header className="rounded-4xl mx-auto bg-tertiary-900 justify-between items-center content-center flex flex-row gap-4 h-16 w-3/5 flex flex-row p-3">
            <div className="px-4 flex flex-row gap-4 items-center content-center" >
                <Link href='/'><img src="Logo.svg"/></Link>
                <nav className="flex flex-row gap-4">
                    <HeaderLink   href='/buy'>Buy</HeaderLink>
                    <HeaderLink href={'/sell'}>Sell</HeaderLink>
                    <HeaderLink href={'/build'}>Build</HeaderLink>
                    <HeaderLink href={'/recycle'}>Recycle</HeaderLink>
                </nav>
            </div>
            <div className="flex flex-row gap-4 items-center content-center">
                {path =='/sell' &&
                    <InputSearch placeholder="Search"></InputSearch>
                }
                <TertiaryButton label="Sign in" onClick={handleSignIn}></TertiaryButton>
                <PrimaryButton label="Sign up"  onClick={handleSignUp}></PrimaryButton>
            </div>
        </header>
    )
}

export default AppHeader;