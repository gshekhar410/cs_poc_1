"use client"
import toast from "react-hot-toast"
import { Button } from "../ui/button"


const PlaceOrderBtn = () => {
    return <Button onClick={() => toast.success('Order placed successfully')}>Place order</Button>
}

export default PlaceOrderBtn