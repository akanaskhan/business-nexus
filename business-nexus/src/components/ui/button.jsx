import React from 'react';

const Button = ({ 
  children, 
  icon: Icon, 
  iconSize = 15, 
  iconPosition = 'before', 
  className = '', 
  onClick, 
  ...props 
}) => {
  return (
    <button
      onClick={onClick}
      className={`sm:w-auto  group px-3.5 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {iconPosition === 'before' && Icon && (
        <Icon 
          size={iconSize} 
          className="transition-transform group-hover:translate-x-0.5 duration-700 ease-in-out text-blue-700" 
        />
      )}

      <span
        className={`text-blue-700 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out ${className}`}
      >
        {children}
      </span>

      {iconPosition === 'after' && Icon && (
        <Icon 
          size={iconSize} 
          className="transition-transform group-hover:translate-x-0.5 duration-700 ease-in-out text-blue-700" 
        />
      )}
    </button>
  );
};

export default Button;
