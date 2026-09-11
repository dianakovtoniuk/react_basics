import React from 'react'


interface IProps {
  children: string;
  onClick?: () => void;
}

export default function Button ({children} : IProps) {
  return (
    
    <button>{children}</ button>
  )
}
