import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import React from 'react'
import { Button, Container,Stack, Navbar,Form,Collapse } from 'react-bootstrap'
import './NavbarLanding.css'


export default function NavbarLanding() {
  const [open, setOpen] = useState(false);
  return (
    <Navbar className='navba font-light py-2 w-100'>
      <Stack direction="horizontal" gap={5} className='w-100'>
      <img className='mx-5' src='https://simpleenergy.in/_next/static/media/ic-hamburger.69b48a4e.svg'
      height={'25.79px'}
      />
      <Container className='nav_container'>
      <img src="https://simpleenergy.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsimple-new-logo-2.a8d7e06b.svg&w=128&q=75" alt="" />
      <Stack direction="horizontal" gap={5} style={{marginLeft:'7vw'}} className='me-auto no-decor'>
        <div >Simple One</div>
        <div >Tech-Smart</div>
        <div >Intuitiveness</div>
        <div >Mobile App</div>
      </Stack>
      <Button 
      className='bg-transparent border-0 justify-content-center'
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}>
      <FontAwesomeIcon icon={faMagnifyingGlass}/></Button>
      </Container>
      <Button  height={'20px'}className='px-4 fs-5 fw-semibold text-nowrap mx-5'>PRE-BOOK</Button>
      </Stack>
    </Navbar>
  )
}
