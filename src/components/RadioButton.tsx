// Checkbox.tsx

import React, { useState } from 'react';
import styled, {css} from 'styled-components';

// Define types for props
interface CheckboxProps {
  label: string;
  onChange: (checked: boolean) => void;
  defaultChecked?: boolean;
  visible?: boolean;
}

// Styled checkbox input
const CheckboxInput = styled.input<{visible: boolean}>`
  margin-right: 8px;
  ${(props) =>
    !props.visible &&
    css`
        display: none;
    `}
`;

// Styled label for checkbox
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

// Checkbox component
const Checkbox: React.FC<CheckboxProps> = ({ label, onChange, defaultChecked = false, visible = true, }) => {
  const [checked, setChecked] = useState(defaultChecked);

  // Handler for checkbox change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onChange(isChecked);
  };

  return (
    <CheckboxLabel>
      <CheckboxInput type="checkbox" checked={checked} onChange={handleChange} visible={visible} />
      {label}
    </CheckboxLabel>
  );
};

export default Checkbox;
