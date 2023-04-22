import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="flex-shrink-0">
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
