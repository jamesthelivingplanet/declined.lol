import { useState, useEffect } from 'react'

function App() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Screenshots with edgy, rebellious descriptions
  const screenshots = [
    {
      id: 1,
      src: 'src/assets/home.png',
      alt: 'DECLINED.LOL - Main Interface',
      title: 'SYSTEM.EXE HAS STOPPED WORKING',
      description: 'When HR says "we\'ll keep your resume on file" - we keep track of your digital footprint.',
      mood: 'RAGE LEVEL: MAXIMUM'
    },
    {
      id: 2,
      src: 'src/assets/key-words.png',
      alt: 'DECLINED.LOL - Rejection Analytics',
      title: 'REJECTION COUNTER 9000',
      description: 'Get job keywords that trigger your existential dread.',
      mood: 'NIHILISM ACTIVATED'
    },
    {
      id: 3,
      src: 'src/assets/provider.png',
      alt: 'DECLINED.LOL - Dark Mode Features',
      title: 'CORPORATE BULLSH*T TRANSLATOR',
      description: 'Configure your AI and API key to decode the lies of the job market.',
      mood: 'TRUTH UNLEASHED'
    },
    // {
    //   id: 4,
    //   src: '/screenshots/extension-4.jpg',
    //   alt: 'DECLINED.LOL - Chaos Mode',
    //   title: 'CHAOS MODE ENGAGED',
    //   description: 'For when you\'ve given up all hope and just want to watch it burn.',
    //   mood: 'ANARCHY ACHIEVED'
    // }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [glitchActive, setGlitchActive] = useState(false)

  // Auto-rotate images every 5 seconds (slower for dramatic effect)
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % screenshots.length)
        setGlitchActive(false)
      }, 200)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, screenshots.length])

  const goToSlide = (index) => {
    setGlitchActive(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setGlitchActive(false)
    }, 200)
  }

  const goToPrevious = () => {
    setGlitchActive(true)
    setTimeout(() => {
      setCurrentIndex(prev => prev === 0 ? screenshots.length - 1 : prev - 1)
      setGlitchActive(false)
    }, 200)
  }

  const goToNext = () => {
    setGlitchActive(true)
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % screenshots.length)
      setGlitchActive(false)
    }, 200)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-gray-100 via-white to-gray-200'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-red-500 animate-ping"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-500 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-blue-500 animate-ping"></div>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-50 p-3 rounded-lg border-2 font-bold transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-800 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
            : 'bg-white border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
        }`}
        style={{fontFamily: 'Orbitron, sans-serif'}}
      >
        {isDarkMode ? '☀️ LIGHT MODE' : '🌙 DARK MODE'}
      </button>

      {/* Main container */}
      <div className="relative z-10 px-4 py-8 md:px-8">
        {/* Header - Brutal and unapologetic */}
        <header className="text-center mb-12 md:mb-16">
          <h1 
            className="text-4xl md:text-7xl lg:text-8xl font-black text-red-500 mb-4 glitch-text" 
            data-text="DECLINED.LOL"
            style={{fontFamily: 'Orbitron, sans-serif'}}
          >
            DECLINED.LOL
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-2xl text-cyan-400 mb-4 font-bold tracking-wide">
              FOR THE BROKEN, BY THE BROKEN
            </p>
              <p className={`text-sm md:text-lg font-mono ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
              {"> Chrome extension for job seekers who've lost all hope_"}
            </p>
            <p className="text-xs md:text-sm text-purple-400 mt-2 animate-pulse">
              WARNING: May cause existential crisis and uncontrollable laughter
            </p>
          </div>
        </header>

        {/* Gallery Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className={`border-2 border-red-500 rounded-lg p-6 md:p-8 shadow-2xl relative transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="border-glitch rounded-lg overflow-hidden relative">
              
              {/* Image container */}
              <div className="relative group">
                <img 
                  src={screenshots[currentIndex].src} 
                  alt={screenshots[currentIndex].alt}
                  className={`w-full h-64 md:h-96 lg:h-[500px] object-cover transition-all duration-300 ${
                    glitchActive ? 'animate-pulse' : ''
                  } group-hover:scale-105`}
                  onError={(e) => {
                    const bgColor = isDarkMode ? '1f2937' : 'f3f4f6'
                    e.target.src = `https://via.placeholder.com/1200x800/${bgColor}/ef4444?text=${encodeURIComponent(screenshots[currentIndex].title)}`
                  }}
                />
                
                {/* Navigation buttons - More aggressive styling */}
                <button 
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-700 text-white w-12 h-12 md:w-16 md:h-16 rounded-none font-black text-xl md:text-2xl transition-all duration-200 hover:scale-110 shadow-lg border-2 ${
                    isDarkMode ? 'border-white' : 'border-black'
                  }`}
                  onClick={goToPrevious}
                >
                  ◀
                </button>
                <button 
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-700 text-white w-12 h-12 md:w-16 md:h-16 rounded-none font-black text-xl md:text-2xl transition-all duration-200 hover:scale-110 shadow-lg border-2 ${
                    isDarkMode ? 'border-white' : 'border-black'
                  }`}
                  onClick={goToNext}
                >
                  ▶
                </button>
              </div>

              {/* Screenshot info - Theme-aware */}
              <div className={`p-6 md:p-8 border-t-2 border-cyan-400 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
                  : 'bg-gradient-to-b from-gray-100 to-gray-200'
              }`}>
                <div className="text-center">
                  <h3 className="text-2xl md:text-4xl font-black text-cyan-400 mb-2 tracking-wider" style={{fontFamily: 'Orbitron, sans-serif'}}>
                    {screenshots[currentIndex].title}
                  </h3>
                  <p className={`text-base md:text-xl mb-3 font-mono leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {screenshots[currentIndex].description}
                  </p>
                  <div className={`inline-block px-4 py-2 bg-purple-500 font-bold text-sm rounded border-2 animate-pulse ${
                    isDarkMode ? 'text-black border-white' : 'text-white border-black'
                  }`}>
                    {screenshots[currentIndex].mood}
                  </div>
                </div>
              </div>
            </div>

            {/* Controls - Brutal design */}
            <div className="flex flex-col items-center mt-8 space-y-6">
              {/* Dot navigation */}
              <div className="flex space-x-3">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 border-2 transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-red-500 border-white animate-pulse' 
                        : 'bg-transparent border-red-500 hover:bg-red-500 hover:border-white'
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
              
              {/* Auto-play control */}
              <button 
                className="px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold text-sm md:text-base transition-all duration-200 font-mono tracking-wide hover:animate-pulse"
                onClick={toggleAutoPlay}
              >
                [{isAutoPlaying ? 'PAUSE' : 'RESUME'}] AUTO-DESTRUCTION
              </button>
            </div>
          </div>
        </div>

        {/* About section - Raw and honest */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-purple-500 mb-8" style={{fontFamily: 'Orbitron, sans-serif'}}>
            ABOUT THIS DIGITAL WASTELAND
          </h2>
          
          <div className="space-y-6 text-left md:text-center">
            <p className={`text-lg md:text-xl leading-relaxed font-mono ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {"> SYSTEM STATUS: COMPLETELY BROKEN"}<br/>
              {"> HOPE LEVEL: 404 NOT FOUND"}<br/>
              {"> SANITY: DEPRECATED"}
            </p>
            
            <p className={`text-base md:text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              This extension was born from the ashes of a thousand rejections and the tears of the overqualified. 
              We've weaponized our pain into code. You're welcome.
            </p>
            
            <div className={`border-2 border-red-500 p-6 rounded font-mono text-sm md:text-base transition-all duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <p className="text-red-500 font-bold mb-2">ERROR_MESSAGE.TXT:</p>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                "Thank you for your interest in our company. While your qualifications are impressive, 
                we have decided to move forward with other candidates who are a better fit."
              </p>
              <p className="text-cyan-400 mt-2">
                TRANSLATION: "We don't know what we want but you're not it."
              </p>
            </div>
          </div>
          
          {/* CTA Buttons - Aggressive and sarcastic */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
            <a 
              href="#" 
              className={`px-8 py-4 bg-red-500 hover:bg-red-700 text-white font-black text-lg md:text-xl border-4 hover:border-cyan-400 transition-all duration-200 animate-pulse hover:animate-bounce tracking-wide ${
                isDarkMode ? 'border-white' : 'border-black'
              }`}
              style={{fontFamily: 'Orbitron, sans-serif'}}
            >
              INSTALL & EMBRACE THE VOID
            </a>
            <a 
              href="#" 
              className="px-8 py-4 bg-transparent border-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-black text-lg md:text-xl transition-all duration-200 tracking-wide"
              style={{fontFamily: 'Orbitron, sans-serif'}}
            >
              LEARN MORE SUFFERING
            </a>
          </div>
          
          {/* Final message */}
          <div className={`mt-12 p-6 border-2 border-purple-500 rounded transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-800 to-gray-900' 
              : 'bg-gradient-to-r from-gray-100 to-gray-200'
          }`}>
            <p className="text-purple-500 font-bold text-lg md:text-xl" style={{fontFamily: 'Orbitron, sans-serif'}}>
              REMEMBER: YOU'RE NOT UNEMPLOYED, YOU'RE STRATEGICALLY UNENCUMBERED
            </p>
            <p className={`text-sm mt-2 font-mono ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              * Side effects may include: existential dread, uncontrollable laughter, and sudden urges to start your own company
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
