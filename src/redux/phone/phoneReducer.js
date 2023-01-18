import { BUY_PHONE, BUY_RANDOM_PHONE } from './phoneType';

export const initialPhoneState = {
	countofPhone: 20,
    
};

export const phoneReducer = (state = initialPhoneState, action) => {
	switch (action.type) {
		case BUY_PHONE:
			return {
				countofPhone: state.countofPhone - 1,
			};
		case BUY_RANDOM_PHONE:
			return {
				countofPhone: state.countofPhone - action.payload,
			};
		default:
			return state;
	}
};
