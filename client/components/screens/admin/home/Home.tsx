"use client"
import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import AdminHeader from './components/AdminHeader'
import AdminContent from './components/AdminContent'


const Home = () => {
    const [activeTab, setActiveTab] = useState("Home")
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-1 overflow-auto">
                <AdminHeader />
                <AdminContent activeTab={activeTab} />
            </main>
        </div>
    )
}

export default Home
