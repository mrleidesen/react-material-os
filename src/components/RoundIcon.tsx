import React from 'react'
import { RoundIconProps } from '@/types/components'

const RoundIcon = ({ children, className, ...rest }: RoundIconProps) => {
  return (
    <div className={`round-icon ${className}`} {...rest}>
      <div className="h-10 w-10 flex items-center justify-center">{children}</div>
    </div>
  )
}

export default RoundIcon