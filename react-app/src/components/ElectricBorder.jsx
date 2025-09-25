import { useRef, useEffect } from 'react';
import './ElectricBorder.css';

const ElectricBorder = ({ 
  children, 
  className = '', 
  as = 'div',
  borderWidth = 2,
  glowIntensity = 1,
  animationSpeed = 2,
  color = '#00ffff',
  style = {}
}) => {
  const elementRef = useRef(null);
  const Component = as;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    element.style.setProperty('--electric-border-width', `${borderWidth}px`);
    element.style.setProperty('--electric-glow-intensity', glowIntensity);
    element.style.setProperty('--electric-animation-speed', `${animationSpeed}s`);
    element.style.setProperty('--electric-color', color);
  }, [borderWidth, glowIntensity, animationSpeed, color]);

  return (
    <Component 
      ref={elementRef} 
      className={`electric-border ${className}`}
      style={style}
    >
      <span className="electric-border-content">
        {children}
      </span>
    </Component>
  );
};

export default ElectricBorder;
