'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { toast } from 'react-toastify'

import React from 'react'

const Login = () => {
    const router = useRouter()
    const { data: session, status: sessionStatus } = useSession()

    useEffect(() => {
        if (sessionStatus === 'authenticated') {
            router.push('/dashboard')
        }
    }, [sessionStatus, router])

    return (
        sessionStatus !== 'authenticated' && (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded shadows-md w-96">
                    <h2 className="text-2xl font-semibold">
                        Login
                    </h2>
                    <form onSubmit={""}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="">
                            <button type="submit" className="mb-5 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                                login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )

    )
}

export default Login