import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedLogos from './components/FeaturedLogos'
import HighlightSection from './components/HighlightSection'
import FeatureCards from './components/FeatureCards'
import BeforeAfterStrip from './components/BeforeAfterStrip'
import AudioEffects from './components/AudioEffects'
import MusicCatalog from './components/MusicCatalog'
import FormatSupport from './components/FormatSupport'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturedLogos />
      <HighlightSection />
      <FeatureCards />
      <BeforeAfterStrip />
      <AudioEffects />
      <MusicCatalog />
      <FormatSupport />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App