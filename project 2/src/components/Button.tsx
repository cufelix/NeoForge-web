import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary, 
  secondary, 
  fullWidth,
  href, 
  onClick,
  type = 'button' 
}) => {
  const baseClasses = `
    inline-flex items-center justify-center 
    px-6 py-3 
    text-sm font-medium 
    rounded-lg 
    transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
  `;
  
  const styleClasses = primary
    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl focus:ring-blue-500'
    : secondary
    ? 'bg-dark-800 text-white border border-gray-700 hover:bg-dark-700 focus:ring-gray-500'
    : 'bg-dark-700 text-white hover:bg-dark-600 focus:ring-gray-500';
  
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${styleClasses} ${widthClasses}`;
  
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;