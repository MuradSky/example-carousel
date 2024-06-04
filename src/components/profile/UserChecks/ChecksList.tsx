import {
	Accordion,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import {UserChecksList} from './UserChecksStyles';

import {ReactComponent as ArrowUp} from 'assets/svg/arrow-up.svg';
import {PeriodCard} from './PeriodCard';
import {useUser} from 'helpers/hooks';

const Checklist = ({data}: TChecklist) => {
	return (
		<UserChecksList uuid={data.id}>
			<AccordionItemHeading className="checks-date">
				<AccordionItemButton>
					<div className="checks-date__numb">
						<span>{data.date}</span>
						<ArrowUp/>
					</div>
				</AccordionItemButton>
			</AccordionItemHeading>
			<AccordionItemPanel>
				<PeriodCard data={data.purchases} />
			</AccordionItemPanel>
		</UserChecksList>
	);
};

export const ChecksCollapses= () => {
	const { periods } = useUser()
	const expanded = periods?.map((item: any) => item.id);

	return (
		<Accordion allowMultipleExpanded allowZeroExpanded preExpanded={expanded}>
			{periods?.map((item: any, i: number) => (
				<Checklist data={item} key={item.id}/>
			))}
		</Accordion>
	);
};
