import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className = "text-red-500">This is a protected page</p>
      <UserButton/>
    </div>
  )
}
