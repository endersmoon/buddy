'use client';

import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Send } from 'lucide-react';

function AudioVisualizer({ isRecording }) {
  const [bars, setBars] = useState(Array(30).fill(2));
  const animationRef = useRef();

  useEffect(() => {
    if (isRecording) {
      const animate = () => {
        setBars(prev => prev.map(() => Math.random() * 40 + 2));
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setBars(Array(30).fill(2));
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRecording]);

  return (
    <div className="flex items-center justify-center h-24 gap-1">
      {bars.map((height, index) => (
        <div
          key={index}
          className="w-1.5 bg-blue-500 rounded-full transition-all duration-150"
          style={{
            height: `${height}px`,
            transform: `scaleY(${isRecording ? 1 : 0.5})`,
            opacity: isRecording ? 0.8 : 0.5
          }}
        />
      ))}
    </div>
  );
}

export default function MeetingNotesPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [notes, setNotes] = useState('');
  const [recordingTime, setRecordingTime] = useState(0);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      setRecordingTime(0);
    }
    return () => clearInterval(timerRef.current);
  }, [isRecording]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startRecording = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        setNotes(prev => prev + ' ' + transcript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        if (event.error === 'no-speech' || event.error === 'audio-capture') {
          alert('Please ensure your microphone is enabled and you have granted permission to use it.');
        }
      };

      recognition.onend = () => {
        if (isRecording) {
          // Restart recognition if it ended unexpectedly
          recognition.start();
        }
      };

      try {
        recognition.start();
        setIsRecording(true);
        recognitionRef.current = recognition;
      } catch (error) {
        console.error('Failed to start recognition:', error);
        alert('Failed to start speech recognition. Please try again.');
      }
    } else {
      alert('Speech recognition is not supported in this browser. Please use a supported browser like Chrome or Safari.');
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
        setIsRecording(false);
      } catch (error) {
        console.error('Failed to stop recognition:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <div className="p-8">
            <div className="space-y-6">
              <AudioVisualizer isRecording={isRecording} />
              
              <div className="flex flex-col items-center gap-4">
                <div className="text-xl font-medium text-gray-600">
                  {formatTime(recordingTime)}
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                      isRecording ? 'bg-red-500' : 'bg-blue-500'
                    }`}
                  >
                    {isRecording ? (
                      <div className="w-4 h-4 bg-white rounded" />
                    ) : (
                      <Mic className="w-6 h-6 text-white" />
                    )}
                  </button>
                </div>
              </div>

              <div className="relative mt-8">
                <textarea
                  className="w-full h-64 p-6 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                  placeholder="Your voice notes will appear here..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-all duration-300">
                <Send className="w-5 h-5" />
                <span>Summarize Notes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 