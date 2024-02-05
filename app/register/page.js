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
            router.push("/dashboard")
        }
    }, [sessionStatus, router])

    return sessionStatus !== "authenticated" && (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">
                    Register
                </h2>

                <form>
                    <div className="mb-4">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                                username
                            </label>

                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register