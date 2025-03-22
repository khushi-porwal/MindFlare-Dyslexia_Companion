"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Utility function to conditionally join classNames
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

const products = [
  {
    title: "Dyslexia is a gift, not a disability",
    description: "Recognizing the unique strengths that come with dyslexia",
    image: "https://about-dyslexia.co.uk/wp-content/uploads/2014/10/483722387-895x1024.jpg",
  },
  {
    title: "Inclusion needs for dyslexic students",
    description: "Creating supportive learning environments",
    image: "https://www.dyslexiaindia.org.in/img/service/www.jpg",
  },
  {
    title: "Understanding dyslexic thinking",
    description: "Exploring the unique cognitive patterns",
    image: "https://brain.com.sg/wp-content/uploads/2023/11/dyslexia-scaled.jpg",
  },
  {
    title: "Support strategies",
    description: "Effective approaches for dyslexic learners",
    image: "https://www.dyslexiaindia.org.in/img/service/99.jpg",
  },
  {
    title: "Early intervention",
    description: "The importance of timely support",
    image: "https://trainingtale.org/wp-content/uploads/2021/12/Dyslexia.jpg",
  },
  {
    title: "Dyslexia in education",
    description: "Creating inclusive learning environments",
    image: "https://studenthub.city.ac.uk/__data/assets/image/0018/702504/dyslexia-1.jpg",
  },
]

export default function DyslexiaCarousel() {
  const carouselRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    updateVisibleCards()
    window.addEventListener("resize", updateVisibleCards)
    return () => window.removeEventListener("resize", updateVisibleCards)
  }, [])

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, autoplay])

  // Calculate total pages
  const totalPages = Math.ceil(products.length / visibleCards)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
    scrollToIndex((currentIndex - 1 + totalPages) % totalPages)
    setAutoplay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
    scrollToIndex((currentIndex + 1) % totalPages)
  }

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / visibleCards
      carouselRef.current.scrollTo({
        left: index * cardWidth * visibleCards,
        behavior: "smooth",
      })
    }
  }

  const goToPage = (index) => {
    setCurrentIndex(index)
    scrollToIndex(index)
    setAutoplay(false)
  }

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0))
    setScrollLeft(carouselRef.current?.scrollLeft || 0)
    setAutoplay(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Snap to nearest card after dragging
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / visibleCards
      const scrollPosition = carouselRef.current.scrollLeft
      const newIndex = Math.round(scrollPosition / (cardWidth * visibleCards))
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex)
    }
  }

  return (
    <div className="flex flex-col h-[60vh]items-center justify-center min-h-screen bg-black p-4 md:p-8">
      <div className="w-full ">
        <div className="text-center mb-8 -mt-20">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Understanding Dyslexia</h1>
          <p className="text-white max-w-2xl mt-6 mx-auto">
            Explore resources and insights about dyslexia, a different way of processing information that brings unique
            strengths and challenges.
          </p>
        </div>

        <div className="relative w-full">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Carousel Container */}
          <div className="relative mt-20 overflow-hidden rounded-xl shadow-xl" onMouseLeave={() => setIsDragging(false)}>
            <div
              ref={carouselRef}
              className={cn(
                "flex transition-all duration-500 ease-out",
                isDragging ? "cursor-grabbing" : "cursor-grab",
              )}
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
                overflowX: "hidden",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <AnimatePresence>
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "flex-shrink-0 snap-center p-3",
                      visibleCards === 1 ? "w-full" : visibleCards === 2 ? "w-1/2" : "w-1/3",
                    )}
                  >
                    <div className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <Info className="w-5 h-5 mb-1" />
                            <p className="text-sm">{product.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {product.title}
                        </h2>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-sm text-gray-500">Tap to learn more</span>
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 transform transition-transform duration-300 group-hover:rotate-45">
                            <ChevronRight className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                currentIndex === index ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

