import React from 'react'
import { RoundIconProps } from '@/types/components'

const RoundIcon = ({ children, className, ...rest }: RoundIconProps) => {
  return (
    <div className={`round-icon ${className}`} {...rest}>
      {children}
    </div>
  )
}

export default RoundIcon