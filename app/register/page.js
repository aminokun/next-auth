'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from "next/link"
import { toast } from 'react-toastify'



const Register = () => {
    const router = useRouter()
    const { data: session, status: sessionStatus } = useSession()

    //if authenticated push user to the dashboard
    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.push("/")
        }
    })

    return (
        <div>Register</div>
    )
}

export default Register