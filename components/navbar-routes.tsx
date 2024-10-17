"use client"

import { UserButton } from "@clerk/nextjs"

// user button

const NavbarRoutes = () =>{
    return(
        <div className="flex gap-x-2 ml-auto">
            <UserButton/>
        </div>
    )
}

export default NavbarRoutes