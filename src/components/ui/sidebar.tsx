import React, { createContext, useContext, useState } from "react"

interface SidebarContextType {
  state: "expanded" | "collapsed"
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType>({
  state: "expanded",
  toggleSidebar: () => {}
})

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<"expanded" | "collapsed">("expanded")
  
  const toggleSidebar = () => {
    setState(prev => prev === "expanded" ? "collapsed" : "expanded")
  }
  
  return (
    <SidebarContext.Provider value={{ state, toggleSidebar }}>
      <div className="flex min-h-screen">
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

export const Sidebar = ({ children, className, collapsible, style }: any) => {
  const { state } = useSidebar()
  return (
    <aside 
      className={`${className} transition-all duration-300`} 
      style={{
        ...style,
        width: state === "collapsed" ? "60px" : "320px"
      }}
    >
      {children}
    </aside>
  )
}

export const SidebarContent = ({ children, className }: any) => {
  return <div className={`h-full ${className}`}>{children}</div>
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider")
  }
  return context
}
