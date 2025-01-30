import React from "react";
import styled from "styled-components";

const ChoiceWrapper = styled.div`
    padding: 10px 20px;
    background-color: #2D9CDB;
    color: white;
    font-size: 18px;
    border-radius: 8px;
    text-align: center;
    margin-top: 10px;
`;

const Choice = ({ selectedSticker }) => {
    return (
        <ChoiceWrapper>
            {selectedSticker ? selectedSticker.name : "Оберіть стікер"}
        </ChoiceWrapper>
    );
};

export default Choice;
