"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
import { HOME_ROUTE } from "@/constants"
import { ChevronLeftCircle } from "lucide-react"

const BackToHomeButton = () => {
    const pathname = usePathname()
    return (
        <>
            {pathname !== HOME_ROUTE ?
                <Link href="/home" passHref>
                    <Button className="w-[164px] hover:bg-orange-900 my-[10px] self-start">
                        <ChevronLeftCircle className="mr-2 h-4 w-4" />
                        Return to home
                    </Button>
                </Link> : null
            }
        </>
    )
}

export default BackToHomeButton