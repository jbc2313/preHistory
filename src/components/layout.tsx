import Navbar from './navbar'
import Footer from './footer'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />

        </>
    )
}
