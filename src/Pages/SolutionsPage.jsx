"use client"

import { useState } from "react"
import { ArrowLeft, BookOpen, Pencil, Brain, Gamepad2, Shuffle, RefreshCw } from "lucide-react"
import { Link } from "react-router-dom"

export default function SolutionsPage() {
  const [activeCard, setActiveCard] = useState(null)

  const solutions = [
    {
      id: 1,
      title: "Reading Assistant",
      link: '/solution/TexttoSpeech',
      icon: <BookOpen size={48} className="text-blue-500" />,
      description:
        "Reading involves decoding symbols (letters and words) to derive meaning. It requires skills like phonemic awareness, fluency, vocabulary, and comprehension.",
      content:
        "Our Reading Assistant helps improve reading skills through interactive exercises, guided reading sessions, and personalized feedback to enhance comprehension and fluency.",
    },
    {
      id: 2,
      title: "Writting Assistant",
      icon: <Pencil size={48} className="text-yellow-500" />,
      link:'/solution/SpeechtoText',
      description:
        "Writing involves encoding thoughts into symbols that others can understand. It requires organization, grammar, vocabulary, and clarity of expression.",
      content:
        "The Writing Assistant provides tools for grammar checking, vocabulary enhancement, sentence structure improvement, and creative writing prompts to develop better writing skills.",
    },
    {
      id: 3,
      title: "Memory Sequence Assistant",
      icon: <Brain size={48} className="text-blue-400" />,
      link:'/solution/MemorySequence',
      description:
        "Memory sequencing involves remembering the order of items, events, or information, which is crucial for learning and cognitive development.",
      content:
        "Our Memory Sequence Assistant offers exercises to improve sequential memory through pattern recognition, ordered recall activities, and adaptive challenges that grow with your abilities.",
    },
    {
      id: 4,
      title: "Rhyming Frog Game",
      icon: <Gamepad2 size={48} className="text-green-500" />,
      link: "/solution/RhymingFrog",
      description:
        "Rhyming helps develop phonological awareness by recognizing similar sound patterns in words, which is fundamental for reading and language skills.",
      content:
        "The Rhyming Frog Game makes learning rhymes fun! Players help frogs jump to matching rhyming lily pads, reinforcing phonemic awareness through playful interaction.",
    },
    {
      id: 5,
      title: "Anagram Game",
      icon: <Shuffle size={48} className="text-purple-500" />,
      link: "/solution/Anagram",
      description:
        "Anagrams challenge vocabulary and spelling skills by rearranging letters to form new words, enhancing word recognition and mental flexibility.",
      content:
        "Our Anagram Game presents players with scrambled letters to form words, with multiple difficulty levels and hints to help build vocabulary and spelling skills.",
    },
    {
      id: 6,
      title: "Scramble Game",
      icon: <RefreshCw size={48} className="text-blue-500" />,
      link: "/solution/Scramble",
      description:
        "Word scrambles improve vocabulary, spelling, and problem-solving by challenging players to unscramble letters to form meaningful words.",
      content:
        "The Scramble Game offers timed challenges to unscramble words and phrases, with categories ranging from basic vocabulary to specialized topics for all skill levels.",
    },
  ]

  const handleCardHover = (id) => {
    setActiveCard(id)
  }

  const handleCardLeave = () => {
    setActiveCard(null)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-16">
          <button className="mr-4 hover:bg-gray-800 p-2 rounded-full transition-colors">
            <Link to='/'>
                <ArrowLeft size={32} />
            </Link>
          </button>
          <h1 className="text-5xl font-bold text-center flex-1">Innovative Solutions</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="relative h-[380px]"
              onMouseEnter={() => handleCardHover(solution.id)}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardHover(activeCard === solution.id ? null : solution.id)}
            >
              <div
                className={`
                  absolute inset-0 bg-gray-200 rounded-xl p-6 flex flex-col items-center justify-start
                  transition-all duration-300 ease-in-out
                  ${activeCard === solution.id ? "translate-y-[-30px] shadow-2xl" : "shadow-lg"}
                `}
              >
                <div className="flex justify-center items-center h-24 mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-black text-center">{solution.title}</h3>
                <p className="text-sm text-gray-700 text-center line-clamp-4">{solution.description}</p>

                {/* Content that appears when card is active */}
                <div
                  className={`
                    absolute inset-0 bg-white rounded-xl p-6 flex flex-col items-center
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${activeCard === solution.id ? "opacity-100 translate-y-[120px] z-10" : "opacity-0 translate-y-[50px] pointer-events-none"}
                  `}
                >
                  <h3 className="text-xl font-bold mb-4 text-black">{solution.title}</h3>
                  <p className="text-gray-700">{solution.content}</p>
                  <Link to={solution.link}>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Play Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

