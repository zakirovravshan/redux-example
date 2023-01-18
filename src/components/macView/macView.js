import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyMac, buyRandomMac } from '../../redux/mac/macAction';
import { buyPhone, buyRandomPhone } from '../../redux/phone/phoneAction';

export const MacView = () => {
	const restOfMac = useSelector((state) => state.mac.countOfMac);
	const restOfPhone = useSelector((state) => state.phone.countOfMac);
	const inputVal = useRef();
	const dispatch = useDispatch();

	return (
		<div>
			<h2>Count of mac : {restOfMac}</h2>
			<button
				onClick={() => {
					dispatch(buyMac());
					dispatch(buyPhone());
				}}>
				Buy 1pcs Mac
			</button>
			<div>
				<input ref={inputVal} type='text' placeholder='enter count of mac' />
				<button onClick={() => {
					dispatch(buyRandomMac(inputVal.current.value))
					dispatch(buyRandomPhone(inputVal.current.value))
				}}>
					BUY MAC
				</button>
				<p>BONUS  : IPHONE {}</p>
			</div>
		</div>
	);
};
