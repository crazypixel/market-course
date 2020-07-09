import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useSelector, useDispatch} from 'react-redux';

const Run = () => {
    // const dataStreamStore = useSelector(state => state.todo.dataStream);
    // const dateRangeStore = useSelector(state => state.todo.rangeDate);

    const session = useSelector(state => state.session);
    console.log("1111");

    console.log(session);

    return (
        <Container>
            <Header top={-130} left={-180}>
                Run Page
            </Header>

            <Position top={-40} left={-165}>
                Selected data stream: {session.config.dataStream.label}
            </Position>

            <Position top={40} left={-165}>
                Selected date range: startDate = {session.config.rangeDate.startDate.toString()} endDate = {session.config.rangeDate.endDate.toString()}
            </Position>
        </Container>
    );
};

export default Run;

const Container = styled.div`
	width: 700px;
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: White;
	position: fixed;

`;
const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	font-size: xx-large;
    margin-top: ${({top}) => `${top}px`};
    margin-left: ${({left}) => `${left}px`};

`;

const Position = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	margin-top: ${({top}) => `${top}px`};
	margin-left: ${({left}) => `${left}px`};

`;
