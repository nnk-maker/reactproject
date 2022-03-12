import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav className="py-5 bg-purple-200 text-white">
            <ul className="flex justify-between px-10">
                <span className="flex">
                    <li className="mr-5">
                        <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                </span>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
            </ul>
        </nav>

    </div>
  )
}
