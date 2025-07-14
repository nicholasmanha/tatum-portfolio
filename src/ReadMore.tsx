import React, { useState } from 'react'

interface ReadMoreProps {
  children: React.ReactNode
  linkText?: string
  showLessText?: string
}

function ReadMore({ 
  children, 
  linkText = "Read more", 
  showLessText = linkText 
}: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <div>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-black hover:text-black underline focus:outline-none"
      >
        {isExpanded ? showLessText : linkText}
      </button>
      
      {isExpanded && (
        <div className="mt-2">
          {children}
        </div>
      )}
    </div>
  )
}

export default ReadMore