"use client"
import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import AdminHeader from './components/AdminHeader'
import AdminContent from './components/AdminContent'

const Home = () => {
    const [activeTab, setActiveTab] = useState("Home")

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="sticky top-0 z-10 bg-white shadow">
                    <AdminHeader />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <AdminContent activeTab={activeTab} />
                </div>
            </div>
        </div>
    )
}

export default Home
