"use client"

import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

// user button

const NavbarRoutes = () =>{
    const pathname = usePathname();
    const router = useRouter();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter");
    return(
        <div className="flex gap-x-2 ml-auto">
            {isTeacherPage || isPlayerPage ?(
                <Button variant={"destructive"}>
                    <LogOut/>Exit
                </Button>
            ):(
                <Link href="/teacher/courses">
                    <Button variant={"gradient"} className="text-bold text-white text-xs">
                        Teacher mode
                    </Button>
                </Link>
            )}
            <UserButton/>
        </div>
    )
}

export default NavbarRoutes