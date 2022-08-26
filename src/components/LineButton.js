import React from "react";
import styled from "styled-components/native";
import PropsTypes from 'prop-types';


const StyledTouchableOpacity = styled.TouchableOpacity`
    background-color: orange;
    width:100%;
    align-items:center;
`;

const StyledText = styled.Text`
    font-size: 20px;
    padding: 5px;
    font-weight:bold;
`;

const LineButton = ({text,onPressOut}) =>{

    return(
        <StyledTouchableOpacity onPressOut={onPressOut}>
            <StyledText>{text}</StyledText>
        </StyledTouchableOpacity>
    );
};

LineButton.defaultProps = {
    text : '임시',
    onPressOut : ()=>{}
}


LineButton.propTypes={
    text: PropsTypes.string.isRequired,
    onPressOut : PropsTypes.func.isRequired
}

export default LineButton;