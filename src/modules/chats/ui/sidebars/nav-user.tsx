import { UserButton } from "@/components/user-button"
import { UserControl } from "@/components/user-control"
import { SignedIn } from "@clerk/nextjs"

export const NavUser = () => {
    return (
        <div>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}