import React from 'react'
import styles from './alert.module.css';


interface IProps {
  children: string;
  onClose?: () => void;
}

export default function Alert ({children, onClose} : IProps) {
  return (
    
    <div className={styles['alert-container']}>
        <div>{children}</div>
        
        <button onClick={onClose}>X</button>
    </ div>
  )
}

