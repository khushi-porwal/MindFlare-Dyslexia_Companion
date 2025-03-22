import React, { useState, useEffect, useCallback } from 'react';
import { Mic, MicOff } from 'lucide-react';

function App() {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setText(transcript);
        setError("");
      };

      recognitionInstance.onend = () => setIsListening(false);
      
      recognitionInstance.onerror = (event) => {
        if (event.error !== 'aborted') {
          setError(`Speech recognition error: ${event.error}`); // Fixed Template Literal Syntax
          console.error('Speech recognition error:', event.error);
        }
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    } else {
      setError("Speech recognition is not supported in this browser.");
    }
  }, []);

  const startListening = useCallback(() => {
    if (recognition) {
      try {
        recognition.start();
        setIsListening(true);
        setError("");
      } catch (err) {
        setError("Failed to start speech recognition");
      }
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (recognition) {
      try {
        recognition.stop();
        setIsListening(false);
      } catch (err) {
        setError("Failed to stop speech recognition");
      }
    }
  }, [recognition]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white p-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Speech to <span className="text-indigo-400">Text</span> Assistant</h1>
        <p className="text-gray-400 mb-6">Transform your voice into text with professional-grade accuracy</p>

        <button
          onClick={isListening ? stopListening : startListening}
          className={`w-20 h-20 flex items-center justify-center rounded-full transition-all duration-200 shadow-lg mx-auto 
            ${isListening ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-500 hover:bg-indigo-600'}`}
        >
          {isListening ? <MicOff className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
        </button>

        {error && <p className="text-red-400 mt-4">{error}</p>}

        <div className="mt-6 bg-gray-800 rounded-xl p-4 min-h-[150px] text-left shadow-lg relative">
          {text ? <p className="text-gray-300">{text}</p> : <p className="text-gray-500 italic">{isListening ? "Listening... Start speaking" : "Click the microphone to start"}</p>}
        </div>

        {text && (
          <button
            onClick={() => setText('')}
            className="mt-4 text-gray-400 hover:text-gray-200 text-sm"
          >
            Clear Text
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
