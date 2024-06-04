import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';

const ProgressBar = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  height: 4px;
  background-color: #29d;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: width 0.2s;
`

export const RouterProgress = () => {
	const location = useLocation()
	const [progress, setProgress] = useState(0)
	useEffect(() => {
		const startProgress = () => {
			setProgress(10)
		}

		const endProgress = () => {
			setProgress(100)
			setTimeout(() => setProgress(0), 500);
		};
		endProgress()
	}, [location]);
	// console.log(location)

	return <ProgressBar width={progress} />
}

