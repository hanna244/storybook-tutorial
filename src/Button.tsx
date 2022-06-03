import React, { HTMLAttributes, ReactNode } from 'react';

const defaultProps = {};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** 버튼의 텍스트를 설정할 수 있습니다. */
  children: ReactNode;
  backgroundColor?: string;
  variant: 'primary' | 'secondary';
}

/** 버튼입니다 */
export function Button({ children, backgroundColor, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      style={{
        backgroundColor: `${backgroundColor}`,
        padding: `15px`,
        border: `none`,
        borderRadius: `50px`,
        color: `#ffffff`,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = defaultProps;
