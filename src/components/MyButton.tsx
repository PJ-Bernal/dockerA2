import React from 'react';
import styled, { css } from 'styled-components';

interface MyButtonProps {
    label: string;
    backgroundColor?: string;
    onClick?: () => void;
    primary?: boolean;
    disabled?: boolean;
    visible?: boolean;
}

const StyledButton = styled.button<{ primary: boolean, disabled: boolean, backgroundColor?: string, visible: boolean  }>`
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    ${(props) =>
        props.primary &&
        css`
            background-color: ${props.backgroundColor || 'white'};
            color: white;

            &:hover {
                background-color: #6C5B7B;
            }
        
            &:active {
                background-color: #004494;
                transform: scale(1);
                box-shadow: 0 0 20px 1px gray;
              }
        
        `}
    ${(props) =>
        props.disabled &&
        css`
            background-color: gray;
            color: white;
            cursor: not-allowed;
        `}
    ${(props) =>
        !props.primary && !props.disabled &&
        css`
            background-color: white;
            color: white;
        `}
    ${(props) =>
        !props.visible &&
        css`
            display: none;
        `}
`;

const MyButton: React.FC<MyButtonProps> = ({
    label,
    backgroundColor = "white",
    onClick,
    primary = false,
    disabled = false,
    visible = true,
}) => {
    return (
        <StyledButton
            onClick={onClick}
            primary={primary}
            disabled={disabled}
            backgroundColor={backgroundColor}
            visible={visible}
        >
            {label}
        </StyledButton>
    );
};

export default MyButton;
