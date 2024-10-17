"use client"
import { Layout } from "lucide-react"
import { SidebarItem } from "./SidebarItem";
const guestRoutes = [
    {
        icon:Layout,
        label:"DashBoard",
        href:"/"
    },
    {
        icon:Layout,
        label:"Browse",
        href:"/search"
    }
]
export const SidebarRoutes = () =>{
    const routes = guestRoutes;
    return(
        <div className="flex flex-col w-full">
            {routes.map((route)=>(
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}