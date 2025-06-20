import { useState, useEffect } from 'react'

function App() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Screenshots with edgy, rebellious descriptions
  const screenshots = [
    {
      id: 1,
      src: 'https://cdn.discordapp.com/attachments/618217463435493388/1385323622142443604/home.png?ex=6855a6a9&is=68545529&hm=047122488dba7939685102298bfcec17751ca2d11801a2be16aa11fc7cc74d13&',
      alt: 'DECLINED.LOL - Main Interface',
      title: 'APPLICATION HISTORY TRACKER',
      description: 'They keep your resume "on file" - we keep track of your rejections.',
      mood: 'RAGE LEVEL: MAXIMUM'
    },
    {
      id: 2,
      src: 'https://cdn.discordapp.com/attachments/618217463435493388/1385323622411014348/key-words.png?ex=6855a6a9&is=68545529&hm=8de92f45721c0681bab9424e7aa35f6228d84c3e374aae3bc63c799939ed2aa8&',
      alt: 'DECLINED.LOL - Rejection Analytics',
      title: 'CORPORATE BULLSH*T TRANSLATOR',
      description: 'Get job keywords that trigger your existential dread.',
      mood: 'NIHILISM ACTIVATED'
    },
    {
      id: 3,
      src: 'https://cdn.discordapp.com/attachments/618217463435493388/1385323622788239400/provider.png?ex=6855a6a9&is=68545529&hm=da9f400e262730e602db396f1966354cdeaf8ba42495faaf92be89a7b38c9a66&',
      alt: 'DECLINED.LOL - Dark Mode Features',
      title: 'ARTIFICIAL INTELLIGENCE, INJECTOR',
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
                <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img 
                    src={screenshots[currentIndex].src} 
                    alt={screenshots[currentIndex].alt}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      glitchActive ? 'animate-pulse' : ''
                    } group-hover:scale-105`}
                    onError={(e) => {
                      const bgColor = isDarkMode ? '1f2937' : 'f3f4f6'
                      e.target.src = `https://via.placeholder.com/1200x800/${bgColor}/ef4444?text=${encodeURIComponent(screenshots[currentIndex].title)}`
                    }}
                  />
                </div>
                
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
                  {/* <div className={`inline-block px-4 py-2 bg-purple-500 font-bold text-sm rounded border-2 animate-pulse ${
                    isDarkMode ? 'text-black border-white' : 'text-white border-black'
                  }`}>
                    {screenshots[currentIndex].mood}
                  </div> */}
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
                [{isAutoPlaying ? 'PAUSE' : 'RESUME'}]
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
              INSTALL & CONTROL YOUR FATE
            </a>
            {/* <a 
              href="#" 
              className="px-8 py-4 bg-transparent border-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-black text-lg md:text-xl transition-all duration-200 tracking-wide"
              style={{fontFamily: 'Orbitron, sans-serif'}}
            >
              LEARN MORE SUFFERING
            </a> */}
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
          </div>
        </div>

        {/* Footer Section - Product Info with Edgy Theme */}
        <footer className={`mt-16 border-t-4 border-red-500 pt-12 transition-all duration-300 ${
          isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-red-500 mb-8 glitch-text" 
                data-text="DECLINED"
                style={{fontFamily: 'Orbitron, sans-serif'}}>
              DECLINED
            </h2>
            
            <div className={`border-2 border-cyan-400 rounded-lg p-8 mb-8 transition-all duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6" style={{fontFamily: 'Orbitron, sans-serif'}}>
                WEAPONIZE YOUR JOB HUNT
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className={`p-4 border border-red-500 rounded ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <h4 className="text-red-500 font-bold mb-2 font-mono">CORE FEATURES:</h4>
                  <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Track your digital rejection history</li>
                    <li>• AI-powered resume optimization</li>
                    <li>• Corporate BS keyword analysis</li>
                    <li>• Job posting decryption tools</li>
                  </ul>
                </div>
                
                <div className={`p-4 border border-purple-500 rounded ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <h4 className="text-purple-500 font-bold mb-2 font-mono">SURVIVAL STATS:</h4>
                  <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>• Version 1.0.0 - Born from pain</li>
                    <li>• Made with 💀 for digital warriors</li>
                    <li>• Powered by existential dread</li>
                    <li>• Endorsed by rejected applicants worldwide</li>
                  </ul>
                </div>
              </div>
              
              <p className={`mt-6 text-lg font-mono ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                This extension uses AI to analyze job postings and help you optimize your resume for each application.
                <br />
                <span className="text-red-500 font-bold">Translation: We turn your desperation into data.</span>
              </p>
            </div>
            
            {/* Support Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <a 
                href="https://buymeacoffee.com/curielrommg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-700 text-white font-bold text-lg border-2 border-white transition-all duration-200 hover:animate-pulse"
                style={{fontFamily: 'Orbitron, sans-serif'}}
              >
                ☕ FUEL THE CHAOS
              </a>
              
              <div className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p className="font-mono text-sm">
                  Support questions? Submit to the void:
                </p>
                <a 
                  href="mailto:jobtrackerassistant.stark394@passinbox.com"
                  className="text-cyan-400 hover:text-cyan-300 underline font-mono text-sm"
                >
                  jobtrackerassistant.stark394@passinbox.com
                </a>
              </div>
            </div>
            
            {/* Final Footer Message */}
            <div className={`border-t-2 border-red-500 pt-6 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <p className="font-mono text-sm">
                © {new Date().getFullYear()} DECLINED.LOL - Where hope goes to die and resumes go to multiply
              </p>
              <p className="font-mono text-xs mt-2 text-red-500">
                [ WARNING: Side effects may include increased cynicism and decreased faith in humanity ]
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
