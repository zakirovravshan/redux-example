import { BUY_MAC, BUY_RANDOM_MAC } from './macType';
import {buyPhone} from "../../redux/phone/phoneAction"

export const buyMac = () => {
	return {
		type: BUY_MAC,
        
	};
    
};

export const buyRandomMac = (number , promo ) => {
	return {
		type: BUY_RANDOM_MAC,
		payload: number,promo
	};
   
};
