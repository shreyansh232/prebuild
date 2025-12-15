import { Button } from '@/components/ui/button'
import { LandingSelector } from '@/components/landing/LandingSelector'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowUp } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const isMobile = useIsMobile()

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      const scrollHeight = textarea.scrollHeight
      const maxHeight = 200 // Max height in pixels
      const minHeight = isMobile ? 24 : 28
      textarea.style.height = `${Math.max(Math.min(scrollHeight, maxHeight), minHeight)}px`
    }
  }

  useEffect(() => {
    adjustTextareaHeight()
  }, [isMobile])
  return (
    <div className="h-screen bg-[#0A0A0A] flex flex-col items-center justify-center relative overflow-y-auto sm:overflow-hidden font-sans text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-800/10 rounded-full blur-[120px]" />
      </div>

      <main className="w-full max-w-3xl px-4 sm:px-6 flex flex-col items-center z-10">
        
        {/* Hero Text - Fixed position to prevent movement */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 mb-6 sm:mb-10">
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white pb-2">
              Turn ideas into blueprints
           </h1>
           <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed px-2">
              Describe your product vision, and we'll break it down into a structured, technical development plan ready for execution.
           </p>
        </div>

        {/* Input Container */}
        <div className="w-full relative group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          
          <div className="relative bg-[#1A1A1A] border border-[#333] rounded-[32px] sm:rounded-[40px] p-1.5 sm:p-2 pr-1.5 sm:pr-2 shadow-2xl flex items-end gap-1.5 sm:gap-2 focus-within:border-slate-600 transition-colors">
             
             {/* Text Input */}
             <textarea
                ref={textareaRef}
                placeholder={isMobile ? "Describe your product idea..." : "Describe your product idea in detail including features, and goals..."}
                className="flex-1 bg-transparent border-none outline-none text-gray-200 placeholder-gray-500 text-sm sm:text-base md:text-lg resize-none px-3 sm:px-4 md:px-5 py-1.5 overflow-y-auto leading-normal"
                rows={1}
                style={{
                  minHeight: isMobile ? '24px' : '28px',
                  maxHeight: '200px',
                  height: isMobile ? '24px' : '28px',
                }}
                onInput={adjustTextareaHeight}
             />
             
             {/* Submit Button */}
             <Button 
               className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition-all shadow-lg shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
               aria-label="Start Planning"
             >
                 <ArrowUp size={16} strokeWidth={2.5} className="sm:w-5 sm:h-5" />
             </Button>
          </div>
          
           {/* Context Pills Below Input */}
           <div className="flex flex-col items-center gap-4 mt-4 sm:mt-6 w-full">
                <LandingSelector />
           </div>
        </div>

        {/* Footer/Disclaimer */}
        <p className="text-gray-600 text-xs mt-2 sm:mt-4 animate-in fade-in duration-1000 delay-300 px-4 text-center">
            Press Enter to start planning. Generated plans are editable.
        </p>
      </main>
    </div>
  )
}
