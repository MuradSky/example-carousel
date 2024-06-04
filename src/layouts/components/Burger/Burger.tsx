import React from 'react';
import { BurgerLines, BurgerStyles } from './BurgerStyles';

type TP = {
  isOpen?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Burger: React.FC<TP> = ({ isOpen, onClick }) => {
  return (
    <BurgerStyles onClick={onClick} isActive={isOpen}>
      <BurgerLines isActive={isOpen}>
        <span />
      </BurgerLines>
    </BurgerStyles>
  )
}
