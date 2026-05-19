import { Routes, Route } from 'react-router-dom'

function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">Landing</h1>
        </div>
    )
}

function AppPage() {
    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">Dashboard</h1>
        </div>
    )
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app" element={<AppPage />} />
        </Routes>
    )
}