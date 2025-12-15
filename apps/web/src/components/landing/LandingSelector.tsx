import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Code, Clock } from 'lucide-react'

const techStackOptions = [
  "Suggest me",
  'Next.js',
  'React',
  'Express',
  'Node.js',
  'TypeScript',
  'Vue',
  'Angular',
  'Svelte',
  'Python',
  'Django',
  'FastAPI',
  'Flask',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Tailwind CSS',
  'Prisma',
  'tRPC',
  'GraphQL',
]

export function LandingSelector() {
  const [showTechStack, setShowTechStack] = useState(false)
  const [showTime, setShowTime] = useState(false)
  const [selectedTech, setSelectedTech] = useState<string[]>(["Suggest me"])
  const [timeValue, setTimeValue] = useState('')
  const [timeUnit, setTimeUnit] = useState('months')

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) => {
      if (tech === 'Suggest me') {
        // If clicking "Suggest me", clear everything else and select it
        return ['Suggest me']
      }

      // If clicking something else
      let newSelection = prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]

      // Remove "Suggest me" if it's there (since we picked something else)
      newSelection = newSelection.filter((t) => t !== 'Suggest me')

      // If selection becomes empty, revert to "Suggest me"
      if (newSelection.length === 0) {
        return ['Suggest me']
      }

      return newSelection
    })
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full relative">
      <div className="flex justify-center gap-2 sm:gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setShowTime(!showTime)
            setShowTechStack(false)
          }}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors border ${
            showTime
              ? 'bg-[#333] text-gray-100 border-gray-500'
              : 'bg-[#1A1A1A] hover:bg-[#252525] text-gray-400 hover:text-gray-200 border-[#333]'
          }`}
        >
          <Clock size={14} className="sm:w-4 sm:h-4" />
          <span>Time</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setShowTechStack(!showTechStack)
            setShowTime(false)
          }}
          className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors border ${
            showTechStack
              ? 'bg-[#333] text-gray-100 border-gray-500'
              : 'bg-[#1A1A1A] hover:bg-[#252525] text-gray-400 hover:text-gray-200 border-[#333]'
          }`}
        >
          <Code size={14} className="sm:w-4 sm:h-4" />
          <span>Tech Stack</span>
        </Button>
      </div>

      {/* Time Input */}
      {showTime && (
        <div className="flex justify-center items-center mt-2 w-full px-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center w-full max-w-[160px] bg-[#1A1A1A] border border-[#333] rounded-full overflow-hidden focus-within:border-slate-600 transition-colors">
            <Input
              type="number"
              value={timeValue}
              onChange={(e) => setTimeValue(e.target.value)}
              placeholder="1"
              className="flex-1 bg-transparent border-none text-gray-200 placeholder-gray-500 text-sm focus:border-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 h-9 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min={1}
            />
            <div className="w-px h-6 bg-[#333]" />
            <Select value={timeUnit} onValueChange={setTimeUnit}>
              <SelectTrigger className="w-[100px] bg-transparent border-none text-gray-200 focus:ring-0 focus:ring-offset-0 h-9 rounded-none shadow-none cursor-pointer hover:bg-[#252525] transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border border-[#333] text-gray-200">
                <SelectItem value="days" className="cursor-pointer focus:bg-[#252525] focus:text-gray-200">Days</SelectItem>
                <SelectItem value="weeks" className="cursor-pointer focus:bg-[#252525] focus:text-gray-200">Weeks</SelectItem>
                <SelectItem value="months" className="cursor-pointer focus:bg-[#252525] focus:text-gray-200">Months</SelectItem>
                <SelectItem value="years" className="cursor-pointer focus:bg-[#252525] focus:text-gray-200">Years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Tech Stack Options - Absolute positioned to prevent layout shift */}
      {showTechStack && (
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-2xl mt-2 w-full px-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {techStackOptions.map((tech) => (
            <button
              key={tech}
              onClick={() => toggleTech(tech)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors border hover:cursor-pointer ${
                selectedTech.includes(tech)
                  ? 'bg-white text-black border-white'
                  : 'bg-[#1A1A1A] hover:bg-[#252525] text-gray-400 hover:text-gray-200 border-[#333]'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

