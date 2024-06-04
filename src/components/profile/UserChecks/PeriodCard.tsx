import React, {useState} from 'react';
import {PeriodCardsStyles} from './UserChecksStyles';
import {Button} from 'components';
import {PrizeModal} from 'components/modals';

import {formatDateWithTime} from 'helpers/utils';
import {ReactComponent as StatusCheck} from 'assets/svg/icon-status-check.svg';
import {ReactComponent as ArrowIcon} from 'assets/svg/arrow-next.svg';
import {ReactComponent as LevelUp} from 'assets/svg/level-up.svg';
import {ReactComponent as LevelDown} from 'assets/svg/level-down.svg';
import {ReactComponent as Tinkoff} from 'assets/img/tinkoff.svg';

const levelTitle = (level: number)=> {
	const number = Math.abs(level)
	const title = ()=> {
		return number === 1 ?  number + ' уровень'
			: number > 1 && number <=3  ? number + ' уровня'
				: number + ' уровней'
	}
	return +level < 0  ? `- ${title()}` : `+ ${title()}`
}

const renderTitle = (data: any)=> {
	return data.type === 'Регистрация' ? 'Регистрация' : +data.level_change < 0 ? 'Нет чеков в течение 10 дней'
		: `Покупка на ${data.sum} ₽`
}

const validType = (type: string)=> ['Регистрация', 'Покупка', 'При использовании карты Tinkoff Black'].includes(type)

const Status = ({status, sum}: { status: 'register' | 'accepted', sum: number | null }) => {
	const statuses = {
		register: (
			<div className="status status_red">
				<span className="status-title">Приз</span>
			</div>
		),
		accepted: (
			<div className="status status_green">
				<span className="status-title">Чек</span>
				<span className="status-text">{sum} ₽</span>
				<StatusCheck/>
			</div>
		),
	};
	/*@ts-ignore*/
	return statuses[status] || null;
};

const CardHead = ({ data }: any)=> {
	const createdDate = formatDateWithTime(data.date).split(',')
	const isTinkoff = data.type.includes('Tinkoff Black')
	return (
		<header className="header">
			{isTinkoff ?
				<div className="tinkoff-title">
					<div className="header-title">
						<Tinkoff className="logo" />
					</div>
					<strong>При использовании карты Tinkoff</strong>
				</div> :
				<div className="header-title">
					{renderTitle(data)}
				</div>
			}

			<div className="header-date">
				<span>{createdDate[0]}</span>
				<span>{createdDate[1]}</span>
			</div>

			{!!data.level_change && (
				<div className="level-status">
					{levelTitle(data.level_change)}
					{+data.level_change > 0 ? <LevelUp /> : <LevelDown /> }
				</div>
			)}
		</header>
	)
}

const Prizes = ({ data } : any)=> {
	const [prizeData, setPrizeData] = useState<any>(null)
	const onClick = (id: number)=> ()=> {
		const prize = data.find((prize: any) => prize.id === id)
		if (prize) setPrizeData(prize)
	}
	const onClose = ()=> setPrizeData(null)

	return (
		<div className="prizes">
			{data.map((prize: any)=> {
				if (prize.is_main && !prize.main_prize_show) return null
				return (
					<div className="prize-item" key={prize.id}>
						<div className="prize-content">
							<div className="prize-name">{prize.name}</div>
							<div className="prize-type">{prize.type}</div>
						</div>

						<Button
							onClick={onClick(prize.id)}
							icon={<ArrowIcon/>}
							children="Показать приз"
							className="prize-btn"
						/>

						<PrizeModal
							isOpen={!!prizeData}
							data={prizeData}
							onClosed={onClose}
						/>
					</div>
				)
			})}
		</div>
	)
}

const CardBody = ({ data, status }: { data: any, status: 'register' | 'accepted' })=> {
	if (data?.length === 0) return null


	return (
		<div className="checks" style={{ display: !data ? 'none' : '' }}>
			{data?.map((check: any)=> (
				<div className="checks-item" key={check.id}>
					<Status status={status} sum={check.sum} />
					{check.prizes.length > 0 && <Prizes data={check.prizes}/>}
				</div>
			))}
		</div>
	)
}

export const PeriodCard = ({ data }: any) => {
	const isTinkoff = (type: string)=> type.includes('Tinkoff Black')

	return (
		<>
			{data.map((item: any)=> (
				<PeriodCardsStyles key={item.id} isGrey={isTinkoff(item.type)}>
					<CardHead data={item} />
					{validType(item.type) &&
                        <CardBody
                            data={item.checks}
                            status={['Регистрация', 'При использовании карты Tinkoff Black'].includes(item.type) ? 'register' : 'accepted'}
                        />
					}
				</PeriodCardsStyles>
			))}
		</>
	)
}
