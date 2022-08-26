import React from "react";
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import PropTypes from 'prop-types';




const StyledInput = styled.TextInput.attrs(
({placeholder}) => ({
            placeholderTextColor: '#EE9C8C'
        })
  
)`
    width:${({width})=>width-40}px;
    height:60px;
    margin:3px 0;
    padding: 15px 20px;
    border-radius:10px;
    background-color: ${({theme})=>theme.itemBackground};
    font-size:25px;
    color:${({theme})=>theme.text};
`;

const Input = ({value, placeholder,onChangeText,onSubmitEditing,onBlur})=>{
    const width = Dimensions.get('window').width;

    return( <StyledInput 
    width={width} 
    value={value}
    placeholder={placeholder} 
    maxLength ={50}
    autoCapitalize={'none'}
    returnKeyType={'done'} 
    keyboardAppearance={'dark'} 
    onChangeText={onChangeText}
    onSubmitEditing={onSubmitEditing} 
    onBlur={onBlur}
    />
    )
}

Input.defaultProps = {
    value: '기본값'
}


Input.propTypes = {
    placeholder: PropTypes.string, 
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur:PropTypes.func.isRequired
}


export default Input;
