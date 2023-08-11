import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <>
        <footer className="bg-secondary text-center text-white pt-6">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} TraceCheck. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer