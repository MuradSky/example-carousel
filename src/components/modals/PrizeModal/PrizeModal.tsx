import {Modal} from '../Modal';
import React from 'react';
import {ModalTitle, FormsModalContent, ModalText, PrizeImage, PromoCode, PrizeInformer} from '../ModalStyles';
import {Button} from '../../Button';

interface TPrizeModal extends TModal {
	data: any
}

export const PrizeModal = ({ isOpen, onClosed, data } : TPrizeModal) => {
	return (
		<Modal isOpen={isOpen} onClosed={onClosed}>
			<FormsModalContent>
				<ModalTitle>Ваш приз</ModalTitle>
				<ModalText>{data?.name}</ModalText>

				<PrizeImage>
					<picture>
						<img src={data?.image?.path} alt="" width={220} height={178} loading="lazy" />
					</picture>
				</PrizeImage>

				{data?.promocode && <PromoCode>{data?.promocode}</PromoCode>}
				{!!data?.rules &&
                    <PrizeInformer>
	                    {data?.type === 'Ценный приз' ?
		                    <strong>Как получить приз</strong> :
		                    <strong>Как воспользоваться промокодом</strong>
	                    }
                        <p dangerouslySetInnerHTML={{ __html: data?.rules }}/>
                    </PrizeInformer>
				}
				<Button onClick={onClosed}>
					Ок
				</Button>
			</FormsModalContent>
		</Modal>
	)
}
