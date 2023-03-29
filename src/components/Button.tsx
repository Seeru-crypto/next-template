import React from 'react';
import styled, {css} from 'styled-components';

const ButtonStyle = styled.button<{ variant: 'primary' | 'secondary' }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  // primary style
  ${({variant}) =>
          variant == "primary" && css`
            background-color: #007bff;
            color: #fff;

            &:hover {
              background-color: #0069d9;
            }
          `}
  // secondary style
  ${({variant}) =>
          variant === 'secondary' && css`
            background-color: #6c757d;
            color: #fff;

            &:hover {
              background-color: #5a6268;
            }
          `
  }
`;


interface ButtonProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
}

const Button = ({variant, children}: ButtonProps) => <ButtonStyle variant={variant}>{children}</ButtonStyle>

export default Button;
