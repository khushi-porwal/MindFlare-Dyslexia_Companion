import React, { useState, useEffect, useCallback } from 'react';
import { Mic, MicOff, Loader2, Wand2, Copy, Check, RotateCcw } from 'lucide-react';

const App = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event) => {
        const current = event.resultIndex;
        const transcriptText = event.results[current][0].transcript;
        setTranscript((prev) => prev + ' ' + transcriptText);
      };

      recognitionInstance.onerror = (event) => {
        setError(event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    } else {
      setError('Speech recognition is not supported in this browser.');
    }
  }, []);

  useEffect(() => {
    const words = transcript.trim().split(/\s+/);
    setWordCount(words.length === 1 && words[0] === '' ? 0 : words.length);
  }, [transcript]);

  const toggleListening = useCallback(() => {
    if (!recognition) return;
    isListening ? recognition.stop() : recognition.start();
    setIsListening(!isListening);
  }, [isListening, recognition]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(transcript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearTranscript = () => {
    setTranscript('');
    setWordCount(0);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,50,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,150,255,0.15),transparent_50%)]" />
      
      <div className="relative max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Speech to
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                {' '}Text{' '}
              </span>
              Assistant
            </h1>
            <p className="text-gray-400">Transform your voice into text with professional-grade accuracy</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <button
                onClick={toggleListening}
                disabled={!recognition}
                className={`p-8 rounded-full transition-all transform hover:scale-105 ${
                  isListening 
                    ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400 animate-pulse' 
                    : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400'
                } ${!recognition && 'opacity-50 cursor-not-allowed'}`}
              >
                {isListening ? <MicOff className="w-12 h-12" /> : <Mic className="w-12 h-12" />}
              </button>
              {isListening && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            <div className="w-full space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Wand2 className="w-4 h-4" />
                  <span>{wordCount} words</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={clearTranscript} className="p-2 text-gray-400 hover:text-white transition-colors" title="Clear transcript">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button onClick={copyToClipboard} className="p-2 text-gray-400 hover:text-white transition-colors" title="Copy to clipboard">
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="relative bg-white/5 rounded-xl p-6 min-h-[300px]">
                {isListening && <div className="absolute top-4 right-4"><Loader2 className="w-5 h-5 text-purple-500 animate-spin" /></div>}
                <p className="text-gray-300 whitespace-pre-wrap">
                  {transcript || 'Start speaking by clicking the microphone button above...'}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            Press the microphone button to {isListening ? 'stop' : 'start'} recording
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;