'use client'

import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const email = e.target[0].value
        const password = e.target[1].value

        if (!email || !password) {
            toast.error("please fill in all fields")
        }

        const res = await signIn('credentials', {
            redirect: false,
            email, password
        })

        if (res?.error) {
            if (res?.url) {
                router.replace('/dashboard')
            }
            toast.error("Invalid credentials")
        } else {
            toast.success("Succesfully logged in")
        }
    }

    return (
        sessionStatus !== 'authenticated' && (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded shadows-md w-96">
                    <h2 className="text-2xl font-semibold">
                        Login
                    </h2>
                    <form onSubmit={handleSubmit}>
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
                        <div>
                            <button
                                type="submit"
                                className="mb-5 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                            >
                                login
                            </button>
                        </div>
                        <span>don't have an account?</span> {' '}
                        <Link href='/register' className="text-center text-blue-500 hover:underline mt-2"> register here </Link>
                    </form>
                </div>
            </div>
        )

    )
}

export default Login