import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import './MyDropdown.css'


export default function MyDropdown() {
    const [showDropdown, setShowDropdown] = useState(false);

  const handleClose = () => setShowDropdown(false);
  const handleShow = () => setShowDropdown(true);

  return (
    <select className="dropdown">
        <option onClick={handleClose}>Owner Manual</option>
        <option onClick={handleClose}>Simple One Manual</option>
        <option onClick={handleClose}>Simple Dot One Manual</option>
    </select>
  )
}
