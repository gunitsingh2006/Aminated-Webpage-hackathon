import { useState, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
// import Page1 from './components/Page1'
import HorizontalScroll from './components/HorizontalScroll'


function App() {



  const [loaded, setLoaded] = useState(false)
  const [navVis, setNavVis] = useState(false)

  useEffect(() => {
    if (loaded) {
      // Refresh ScrollTrigger after content is loaded
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    }
  }, [loaded])

  return (
    <>
      <Cursor />      
      {!loaded && (
        <Loader
          onDone={() => {
            setLoaded(true)
            setNavVis(true)
          }}
        />
      )}
      <Nav visible={navVis} />
      <main>
        <Page1 />
        <HorizontalScroll />
        <Page2 />
        
      </main>
    </>
  )  
}

export default App
