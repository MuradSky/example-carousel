import {css} from 'styled-components';

const stripUnit = (val: string | number)=> {
	return Number(val) / (Number(val) * 0 + 1)
}

export const fluidTypo = (minVw: number, maxVw: number, minFs: number, maxFs: number)=> {
	return css`
		font-size: ${minFs}px;
	  	@media screen and (min-width: ${minVw}px) {  
		  	font-size: calc(${minFs}px + ${stripUnit( maxFs- minFs)} * ((100vw - ${minVw}px) / ${stripUnit(maxVw - minVw)}));
		}

	  	@media screen and (min-width: ${maxVw}px) {
	        font-size: ${maxFs}px;
	    }
	`
}

