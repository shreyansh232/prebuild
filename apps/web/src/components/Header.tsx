import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 px-6 flex items-center justify-between z-50 backdrop-blur-md">
      <Link to="/" className="flex items-center gap-2 group">
        <span className="text-2xl font-normal tracking-tighter texh-white group-hover:text-slate-200 transition-colors">Prebuild</span>
      </Link>
      
      {/* Future Nav Items could go here */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
        {/* Placeholder links for visual balance */}
        {/* <Link to="/" className="hover:text-white transition-colors">Docs</Link> */}
        {/* <Link to="/" className="hover:text-white transition-colors">Pricing</Link> */}
      </nav>
    </header>
  )
}
