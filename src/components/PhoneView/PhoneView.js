import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyPhone, buyRandomPhone } from '../../redux/phone/phoneAction';

export const PhoneView = () => {
    const inputVal = useRef()

    const restOfPhone = useSelector((state) => state.phone.countofPhone)
    const dispatch = useDispatch()

	return (
		<div>
			<h2>Count of Phone : {restOfPhone}</h2>
			<button onClick={() => dispatch(buyPhone())} >Buy 1pcs Phone</button>
			<div>
				<input ref={inputVal} type='text' placeholder='enter count of mac' />
				<button onClick={() => dispatch(buyRandomPhone(inputVal.current.value))} >BUY {} MAC</button>
			</div>
		</div>
	);
};
