import React from 'react';
import {Modal} from 'components';
import {AppPrizesHead, ModalTitle} from '../ModalStyles';

import {TableRow} from './prizeTableRow';

interface TP extends TModal {
	prizes: object[]
}

export const AllPrizesModal = ({
	isOpen,
	prizes,
	onClosed,
	className,
}: TP) => {
	return (
		<Modal className={className} isOpen={isOpen} onClosed={onClosed}>
			<ModalTitle alignLeft>Мои призы</ModalTitle>
			<AppPrizesHead>
				<div>Фото</div>
				<div>Приз</div>
				<div>Как воспользоваться</div>
			</AppPrizesHead>
			{prizes?.map((data: any) => <TableRow data={data} key={data.id}/>)}
		</Modal>
	);
};
