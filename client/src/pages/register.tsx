import Head from 'next/head'
import Link from 'next/link'

import Page from '../components/Page'
import {CenteredColumn} from '../components/Layouts'

export default function Register() {
    return (
        <Page>

            <CenteredColumn>
                <div className="space-y-12 md:space-y-16">

                    <Head>
                        <title>Register</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <div className="flex flex-col justify-center pl-24 space-y-8">
                        <div className="w-3/5">
                            <p className="text-sm text-primary">
                                Sign up
                    </p>
                            <h1 className="mb-4 font-welcome-xl">Lorem ipsum blah blah blah.</h1>
                            <p className="mb-10 text-sm text-primary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                            <h1 className="mb-8 text-lg space-y-8 font-welcome-lg">Join readme</h1>
                            <form className="space-y-8">
                                <div>
                                    <p className="mb-1 text-sm text-primary">
                                        Email
                            </p>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-4 border border-button bg-primary"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <p className="mb-1 text-sm text-primary">
                                        Username
                            </p>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-4 border border-button bg-primary"
                                        placeholder="What would you like to be known as?"
                                    />
                                </div>
                                <div>
                                    <p className="mb-1 text-sm text-primary">
                                        Password
                            </p>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-4 mb-8 border border-button bg-primary"
                                        placeholder="Enter your Password"
                                    />
                                </div>
                                <button className="px-8 py-4 mb-4 text-lg font-bold bg-white border text-on-accent">
                                    Register for readme
                        </button>
                            </form>
                            <small>
                                Already on readme?
            <Link href="/login">
                                    <a className="ml-1 text-accent">Log In</a>
                                </Link>
                            </small>
                        </div>
                    </div>
                </div>
            </CenteredColumn>
        </Page>
    )
}

