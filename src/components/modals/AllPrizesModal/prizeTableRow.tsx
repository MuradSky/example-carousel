import {
	ModalTableRow,
	ModalTableCell,
	PromoCode
} from "../ModalStyles";
import {useEffect, useRef, useState} from 'react';

export const TableRow: React.FC<{ data: any }> = ({data}) => {
	const [isMore, setIsMore] = useState(false)
	const descriptionRef = useRef<HTMLDivElement | null>(null)

	useEffect(()=> {
		if (descriptionRef) {
			const height = descriptionRef.current?.getBoundingClientRect().height || 0
			if (height > 90) {
				setIsMore(true)
			}
		}
	}, [descriptionRef])

	return (
		<ModalTableRow>
			<ModalTableCell>
				<picture className="logo">
					<img src={data?.image?.path} alt={'logo'} loading="lazy" width={120} height={120} />
				</picture>
			</ModalTableCell>
			<ModalTableCell>
				<div className="type">{data?.type}</div>
				<div className="name">{data?.name}</div>
				{data?.promocode && <PromoCode>{data?.promocode}</PromoCode>}
			</ModalTableCell>
			<ModalTableCell>
				<div className="label">Как воспользоваться</div>
				{!!data?.rules &&
                    <>
                        <div
                            className={`description${isMore ? ' is-more' : ''}`}
                            ref={descriptionRef}
                            dangerouslySetInnerHTML={{ __html: data?.rules }}
                        />
	                    {isMore && <button className="btn-more" onClick={()=> setIsMore(false)}>Подробнее</button>}
                    </>
				}
			</ModalTableCell>
		</ModalTableRow>
	);
}
