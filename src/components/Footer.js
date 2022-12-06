import React from 'react'

export const Footer = () => {
  return (
    <div className='Footer'>
        <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="/about" className="nav-link px-2 text-muted">About</a></li>
      <li className="nav-item"><a href="/washer" className="nav-link px-2 text-muted">Washer Login</a></li>
      <li className="nav-item"><a href="/adminlogin" className="nav-link px-2 text-muted">Admin Login</a></li>
    </ul>
    <p className="text-center text-muted">© 2022 CarWash.com</p>
  </footer>
</div>
    </div>
  )
}
