import { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const VerticalScrollContainer: ComponentType<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = styled.div`
  width: 20px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  
  // Track and Thumb
  div {
    left: 15px;
    right: 0;
    transform: scaleX(1);
    transform-origin: right center;
    background-color: rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-out, background-color 0.5s ease-out;
  }
  
  // Thumb
  div:last-child {
    cursor: pointer;
  }
  
  &:hover {
    div:first-child {
      transform: scaleX(3);
      background-color: rgba(0, 0, 0, 0.5);
    }
    
    div:last-child {
      transform: scaleX(5);
      background-color: rgba(0, 0, 0, 1);
    }
  }
`;