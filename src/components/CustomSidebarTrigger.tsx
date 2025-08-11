import { useSidebar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export function CustomSidebarTrigger() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({ x: x - 0.5, y: y - 0.5 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <button
      onClick={toggleSidebar}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-6 z-50 group"
      style={{ 
        left: collapsed ? '80px' : '340px',
        transition: 'left 0.7s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
    >
      {/* Main container */}
      <div className="relative">
        {/* Glow effect */}
        <div className={`
          absolute inset-0 rounded-full transition-all duration-1000
          ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}
        `}>
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl" />
        </div>

        {/* Button base */}
        <div className={`
          relative w-10 h-10 rounded-full overflow-hidden
          bg-black/80 backdrop-blur-sm
          border transition-all duration-700
          ${isHovered ? 'border-white/20' : 'border-white/5'}
        `}>
          {/* Gradient mesh background */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at ${50 + mousePos.x * 20}% ${50 + mousePos.y * 20}%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)`,
              transition: 'background 0.3s ease-out'
            }}
          />

          {/* Menu icon - animated */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-4 h-3">
              {/* Top line */}
              <span className={`
                absolute top-0 left-0 w-full h-px bg-white/60
                transition-all duration-700 origin-left
                ${collapsed ? 'translate-y-0 rotate-0 opacity-100' : 'translate-y-[5px] rotate-45 w-[120%]'}
              `} />
              
              {/* Middle line */}
              <span className={`
                absolute top-1/2 left-0 w-full h-px bg-white/60 -translate-y-1/2
                transition-all duration-700
                ${collapsed ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
              `} />
              
              {/* Bottom line */}
              <span className={`
                absolute bottom-0 left-0 w-full h-px bg-white/60
                transition-all duration-700 origin-left
                ${collapsed ? 'translate-y-0 rotate-0 opacity-100' : '-translate-y-[5px] -rotate-45 w-[120%]'}
              `} />
            </div>
          </div>

          {/* Hover indicator */}
          <div className={`
            absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent
            transition-all duration-700
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `} />
        </div>

        {/* Tooltip */}
        <div className={`
          absolute left-full ml-3 top-1/2 -translate-y-1/2
          px-3 py-1.5 rounded
          bg-black/90 backdrop-blur-sm border border-white/10
          pointer-events-none whitespace-nowrap
          transition-all duration-500
          ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
        `}>
          <p className="text-xs font-light text-white/60">
            {collapsed ? 'Ouvrir le menu' : 'Fermer le menu'}
          </p>
        </div>
      </div>

      {/* Keyboard shortcut hint */}
      {isHovered && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-60">
          <kbd className="px-1.5 py-0.5 text-[10px] font-light text-white/40 bg-white/5 rounded border border-white/10">⌘</kbd>
          <kbd className="px-1.5 py-0.5 text-[10px] font-light text-white/40 bg-white/5 rounded border border-white/10">B</kbd>
        </div>
      )}
    </button>
  );
}

// Export par défaut aussi au cas où
export default CustomSidebarTrigger;