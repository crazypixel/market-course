import * as AT from '../action.types';

export const changeDateRange = rangeDate => ({
	type: AT.RANGE_DATE_REQUEST,
	payload: {rangeDate},
});

export const changeDataStream = dataStream => ({
	type: AT.DATA_STREAM_REQUEST,
	payload: {dataStream},
});


