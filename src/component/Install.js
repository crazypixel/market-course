import React, {useState} from 'react';
import {Button, Datepicker, Select} from '@datorama/app-components';
import sdk from '@datorama/sdk';
import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';
import {changeDataStream, changeDateRange} from '../redux/actions/todo.actions';
import moment from "moment";

const Install = () => {
    const dispatch = useDispatch();
    const installConfig = useSelector(state => state.todo);

    const handleClick = () => {
        console.log(installConfig);
        sdk.app.install({config: installConfig});
    };

    const [selected, setSelected] = useState([]);
    const handleDateRangeClick = (event) => {
        dispatch(changeDateRange(event));
    };

    const handleDataStreamClick = event => {
        setSelected(event);
        dispatch(changeDataStream(event[0]));
    };


    const options = [
        {value: '1', label: 'Facebook'},
        {value: '2', label: 'Google Analytics'},
        {value: '3', label: 'MailChimp'},
        {value: '4', label: 'Instagram'},
        {value: '5', label: 'Google Ads'},
    ];

    const dateRangePicker = {
        startDate: moment().toDate(),
        endDate: moment()
            .add(3, 'days')
            .toDate()
    };

    return (
        <Container>
            <Header top={-130} left={-160}>
                Installation Page
            </Header>
            <Position top={-70} left={-189}>
                Pick an existing data stream
            </Position>
            <SelectBar>
                <Select
                    placeholder="Select data stream"
                    options={options}
                    onChange={handleDataStreamClick}
                    values={selected}
                />
            </SelectBar>
            <Position top={10} left={-189}>
                Pick an existing data stream
            </Position>
            <Position top={35} left={-180}>
                <Datepicker dateRangePicker={dateRangePicker} onChange={handleDateRangeClick}/>
            </Position>

            <Position top={140} left={270}>
                <Button onClick={handleClick}>Install</Button>
            </Position>
        </Container>
    );
};

export default Install;

const Container = styled.div`
	width: 700px;
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: White;
	position: fixed;

`;

const Header = styled.h1`
	width: 20%;
	height: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
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

const SelectBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	margin-top: -35px;
	margin-left: -210px;
	background-color: gray;
	z-index: 999;
`;