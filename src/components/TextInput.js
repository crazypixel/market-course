import React, {useState} from 'react';
import styled from 'styled-components';

const TextInput = ({onSubmit}) => {
	const [value, setValue] = useState('');
	
	const handleChange = e => setValue(e.target.value);
	
	const handleKeyDown = e => {
		if (e.which === 13) {
			onSubmit(value);
			setValue('');
			e.target.value = '';
		}
	};
	
	return <Input onChange={handleChange} onKeyDown={handleKeyDown}/>;
};

export default TextInput;

const Input = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #dadada;
  transition: all 300ms;
  padding: 0 20px;
  font-size: 14px;
  color: #444;
  border-radius: 4px;
  margin-bottom: 20px;
  
  &:focus {
  	outline: none;
  	border-color: #1940ff;
  }
`;
