import React from 'react'

function AboutUs() {
  return (
    <div><section className="py-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Our Story</h2>
        
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            It all started in 2020 with a simple obsession: <span className="text-orange-400 font-semibold">sneakers</span>. What began as a personal collection of rare Jordans and limited-edition releases quickly evolved into something much bigger than we ever imagined.
          </p>
          
          <p>
            We spent countless hours researching drops, camping outside stores for exclusive releases, and connecting with fellow sneakerheads who shared the same burning passion. Every pair told a story. Every design represented art. Every step was a statement.
          </p>
          
          <p>
            But we noticed something was missing in India's sneaker scene. <span className="text-white font-semibold">Authentic, premium sneakers were hard to find.</span> The reseller market was filled with uncertainty. Sneaker lovers deserved better.
          </p>
          
          <p className="text-orange-300 font-medium text-xl">
            That's when ABHI was born - not just as a store, but as a movement to bring authentic sneaker culture to every corner of India.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Why We Love Sneakers --> */}
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Why We're <span className="text-orange-400">Obsessed</span> with Sneakers
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* <!-- Art & Design --> */}
        <div className="bg-gray-800 rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Art & Design</h3>
          <p className="text-gray-300">Every sneaker is a masterpiece. From colorways that tell stories to silhouettes that define eras, we see art in every stitch.</p>
        </div>
        
        {/* <!-- Culture & Heritage --> */}
        <div className="bg-gray-800 rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Culture & Heritage</h3>
          <p className="text-gray-300">Sneakers carry decades of basketball history, street culture, and hip-hop heritage. They're time capsules of human expression.</p>
        </div>
        
        {/* <!-- Innovation --> */}
        <div className="bg-gray-800 rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
          <p className="text-gray-300">From Air cushioning to Boost technology, sneakers push the boundaries of performance, comfort, and style innovation.</p>
        </div>
        
        {/* <!-- Personal Expression --> */}
        <div className="bg-gray-800 rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Personal Expression</h3>
          <p className="text-gray-300">Your kicks say everything about who you are. Sneakers are the ultimate form of non-verbal communication.</p>
        </div>
        
        {/* <!-- Community --> */}
        <div className="bg-gray-800 rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Community</h3>
          <p className="text-gray-300">Sneakerheads form an incredible global community. It's about sharing passion, trading stories, and celebrating each other's collections.</p>
        </div>
        
        {/* <!-- The Hunt --> */}
        <div className="bg-gray-800 rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">The Hunt</h3>
          <p className="text-gray-300">There's nothing like the thrill of copping that grail. The anticipation, the drops, the victories - it's pure adrenaline.</p>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Our Mission --> */}
  <section className="py-16">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-gradient-to-r from-orange-900 to-orange-800 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
        <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
          To democratize sneaker culture in India by providing <span className="text-white font-bold">100% authentic</span>, 
          premium sneakers while building a community of passionate sneaker enthusiasts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Authenticity</h3>
            <p className="text-orange-100">Every single pair verified. No compromises, no questions asked.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Community</h3>
            <p className="text-orange-100">Building India's strongest sneakerhead family, one drop at a time.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Accessibility</h3>
            <p className="text-orange-100">Making grails and everyday beaters accessible to everyone.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Team Section --> */}
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        The <span className="text-orange-400">Sneakerheads</span> Behind ABHI
      </h2>
      
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">A</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Abhi - Founder & Chief Sneakerhead</h3>
          <p className="text-gray-300 text-lg mb-6">
            Started collecting at 15 with a pair of Air Jordan 1s. Now owns 200+ pairs and counting. 
            Dreams of making India a sneaker destination that rivals Tokyo and New York.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Jordan Collector</span>
            <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">Yeezy Enthusiast</span>
            <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Dunk Lover</span>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <p className="text-xl text-gray-300 mb-6">
          "Every pair of sneakers has a soul. Our job is to make sure they find their perfect match."
        </p>
        <p className="text-orange-400 font-medium">- Abhi, Founder</p>
      </div>
    </div>
  </section>

  {/* <!-- What Makes Us Different --> */}
  <section className="py-16">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        What Makes <span className="text-orange-400">ABHI</span> Different
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Curated by Collectors</h3>
              <p className="text-gray-300">Every product is personally selected by our team of sneaker collectors who know what makes a pair special.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Authentication Guarantee</h3>
              <p className="text-gray-300">Multi-point authentication process ensures every pair is 100% genuine. We stake our reputation on it.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Sneaker Education</h3>
              <p className="text-gray-300">We share the stories, history, and cultural significance behind every release. It's not just retail, it's education.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Early Access</h3>
              <p className="text-gray-300">Our community gets first dibs on limited releases, exclusive colorways, and upcoming drops.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Personalized Service</h3>
              <p className="text-gray-300">Our team knows sneakers inside out. Get personalized recommendations based on your style and collection goals.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Care & Maintenance</h3>
              <p className="text-gray-300">Free guides, tips, and support to keep your collection looking fresh and increasing in value.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Call to Action --> */}
  <section className="py-16">
    <div className="container mx-auto px-4 text-center">
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Join the <span className="text-orange-400">Family</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Whether you're buying your first pair or adding to a legendary collection, 
          we're here to make sure every step is perfect.
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <a href="products.html" className="block sm:inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition transform hover:scale-105">
            Start Your Collection
          </a>
          <a href="help.html" className="block sm:inline-block bg-transparent border-2 border-orange-600 text-orange-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 hover:text-white transition">
            Learn More
          </a>
        </div>
        
        <p className="text-gray-400 mt-8">
          Follow us on social media for daily drops, sneaker news, and collection inspiration
        </p>
        
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-gray-400 hover:text-orange-400 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default AboutUs