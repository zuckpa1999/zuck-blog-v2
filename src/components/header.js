import React from 'react'
import { Link } from "gatsby"
export default function Header() {
    return (
        
        <div className="mb-4 text-center">
            <Link to={`/`}>
            <h1 className="text-5xl font-semibold">zuck_pa;</h1>
            <p className="text-base">The untold stories</p>
            </Link>
        </div>
    )
}


