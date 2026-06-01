import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import TechStack from './TechStack'
import Experience from './Experiance'
import Projects from './Projects'
import OpenSource from './Saas'
import Connect from './Connect'
import Footer from './Footer'

export default function Folio() {
  const cursorRef = useRef(null)
  const cursorRingRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 5 + 'px'
        cursorRef.current.style.top = e.clientY - 5 + 'px'
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = e.clientX - 18 + 'px'
        cursorRingRef.current.style.top = e.clientY - 18 + 'px'
      }
    }

    const expandCursor = () => {
      if (cursorRingRef.current) {
        cursorRingRef.current.style.width = '60px'
        cursorRingRef.current.style.height = '60px'
        cursorRingRef.current.style.left = parseInt(cursorRingRef.current.style.left) - 12 + 'px'
        cursorRingRef.current.style.top = parseInt(cursorRingRef.current.style.top) - 12 + 'px'
      }
    }

    const shrinkCursor = () => {
      if (cursorRingRef.current) {
        cursorRingRef.current.style.width = '36px'
        cursorRingRef.current.style.height = '36px'
      }
    }

    window.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', expandCursor)
      el.addEventListener('mouseleave', shrinkCursor)
    })

    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div className="grain relative">
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={cursorRingRef} className="cursor-ring hidden md:block" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <OpenSource />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}