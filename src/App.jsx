import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import QuizForm from "./Pages/QuizForm";
import Header from "./components/Header";
import SecondContact from "./Pages/SecondContact";
import Hero from "./components/Hero";
import BlogCard from "./components/BlogCard";
import Caroussal from "./components/Caroussal";
import Timeline from "./components/Timeline";
import Challenges from "./components/Challenges";
import Support from "./components/Support";
import Footer from "./components/Footer";
import SolutionsPage from "./Pages/SolutionsPage";
import Result from "./components/Result";
import MemorySequence from "./Pages/MemorySequence"
import RhymingFrog from "./Pages/RhymingFrog";
import Contact from "./Pages/Contact";
import Scramble from "./Pages/Scramble";
import Anagram from "./Pages/Anagram";
import TexttoSpeech from "./Pages/TexttoSpeech";
import SpeechtoText from "./Pages/SpeechtoText";
function App() {
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);

    const handleQuizComplete = (finalScore, totalQuestions) => {
        console.log("Quiz Completed! Score:", finalScore, "Total:", totalQuestions);
        setScore(finalScore);
        setTotal(totalQuestions);
        setShowResults(true);
    };

    const handleRetry = () => {
        setShowResults(false);
        setScore(0);
        setTotal(0);
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <Header />
                    <Hero />
                    <BlogCard />
                    <About />
                    <Caroussal />
                    <Timeline />
                    <Challenges />
                    <Support />
                    <Footer />
                </>
            )
        },
        {
            path: '/quiz',
            element: <QuizForm onComplete={handleQuizComplete} />
        },
        {
            path: '/solution',
            element: <SolutionsPage />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/secondcontact',
            element: <SecondContact />
        },
        {
            path: '/Result',
            element: <Result score={score} total={total} onRetry={handleRetry} />
        },
        {
            path: '/solution/rhymingfrog',
            element: <RhymingFrog />
        },
        {
            path:'/solution/memorysequence',
            element:<MemorySequence/>
        },
        {
            path: '/solution/scramble',
            element: <Scramble />
        },
        {
            path: '/solution/anagram',
            element: <Anagram />
        },
        {
            path: '/solution/texttospeech',
            element: <TexttoSpeech />
        },
        {
            path: '/solution/speechtotext',
            element: <SpeechtoText />
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
