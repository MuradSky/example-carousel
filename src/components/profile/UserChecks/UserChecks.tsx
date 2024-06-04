import React, {useMemo, useState} from 'react';
import {
	UserChecksBody,
	UserChecksStyles,
	UserChecksTop,
} from './UserChecksStyles';
import {Button} from 'components';
import {ChecksCollapses} from './ChecksList';
import {AllPrizesModal} from 'components/modals/AllPrizesModal';
import {useUser} from 'helpers/hooks';

const putOutPrizes = (data: any) => {
	return data?.map((item: any) => (
		item.purchases.map((item: any) => (
			item.checks?.map((item: any)=> item.prizes)
		))
	)).flat(100).filter((item: any)=> item)
}

export const UserChecks: React.FC<TData> = () => {
	const {periods} = useUser()
	const [open, setOpen] = useState<boolean>(false)
	const prizes = useMemo(()=> putOutPrizes(periods) || null, [periods])

	const onOpen = () => setOpen(true)
	const onClose = () => setOpen(false)

	return (
		<UserChecksStyles>
			<UserChecksTop>
				<div className="top-title">
					<span>Мои покупки</span>
				</div>
				<Button disabled={!!!prizes} onClick={onOpen} children={'Мои призы'}/>
			</UserChecksTop>

			<UserChecksBody>
				<div className="list-top">
					<div className="list-title">Недели</div>
					<div className="list-title">Зарегистрированные чеки</div>
				</div>
				<ChecksCollapses/>
			</UserChecksBody>

			<AllPrizesModal
				className={'allPrizes'}
				onClosed={onClose}
				isOpen={open}
				prizes={prizes}
			/>
		</UserChecksStyles>
	);
};
