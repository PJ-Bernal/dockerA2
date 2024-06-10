import React from 'react';
import styled, { css } from 'styled-components';

interface MyLinkProps {
    label: string;
    href: string;
    primary?: boolean;
    disabled?: boolean;
    visible?: boolean;
}

const StyledLink = styled.a<{ primary: boolean; disabled: boolean, visible: boolean  }>`
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    font-size: 16px;
    ${(props) =>
        props.primary &&
        css`
            color: #F3EEEA;
            &:hover {
                border-radius: 20%;
                background: linear-gradient(-45deg, #040D12, #5C8374, #040D12);
	            background-size: 400% 400%;
	            animation: gradient 10s ease infinite;
                }

                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                            }
        `}
    ${(props) =>
        props.disabled &&
        css`
            background-color: gray;
            color: white;
            pointer-events: none;
            cursor: not-allowed;
        `}
    ${(props) =>
        !props.visible &&
        css`
            display: none;
        `}
`;

const MyLink: React.FC<MyLinkProps> = ({
    label,
    visible = true,
    href,
    primary = false,
    disabled = false,
}) => {
    return (
        <StyledLink
            href={disabled ? undefined : href}
            primary={primary}
            disabled={disabled}
            visible={visible}
        >
            {label}
        </StyledLink>
    );
};

export default MyLink;
