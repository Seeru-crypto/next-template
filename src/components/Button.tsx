import React from 'react';
import styled, {css} from 'styled-components';

const ButtonStyle = styled.button<{ variant: 'primary' | 'secondary' }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  // primary style
  ${({variant}) =>
          variant == "primary" && css`
            background-color: ${({ theme }) => theme.primaryColor};
            color: ${({ theme }) => theme.primaryText};
            border: 1px solid ${({ theme }) => theme.primaryColor};

            &:hover {
              background-color: ${({ theme }) => theme.primaryText};
              color: ${({ theme }) => theme.primaryColor};
            }
          `}
  // secondary style
  ${({variant}) =>
          variant === 'secondary' && css`
            background-color: ${({ theme }) => theme.secondaryColor};
            color: ${({ theme }) => theme.secondaryText};
            border: 1px solid ${({ theme }) => theme.secondaryColor};

            &:hover {
              background-color: ${({ theme }) => theme.secondaryText};
              color: ${({ theme }) => theme.secondaryColor};            }
          `
  }
`;


interface ButtonProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick: () => void;
}

const Button = ({variant, children, onClick}: ButtonProps) => <ButtonStyle onClick={onClick} variant={variant}>{children}</ButtonStyle>

export default Button;
