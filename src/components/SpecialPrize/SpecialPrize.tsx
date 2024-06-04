import {BlockStyled} from './styles';
import {Button} from '../Button';
import { ReactComponent as Prize } from 'assets/svg/icon-prize.svg';
import {GetPrize, SuccessModal} from '../modals';
import {useState} from 'react';
import {useUser} from 'helpers/hooks';

const PrizeTitles = ()=> {
	const { user } = useUser()

	if (user?.winSoftToy && user?.winMerch && user?.winCompliment)  {
		return  (
			<>
				<span>«Мягкая игрушка»</span>
				<span>«Стильный мерч»</span>
				<span>«Персональный приз за участие в Чикен Тамагочи»</span>
			</>
		)
	}

	if (user?.winSoftToy && user?.winCompliment) {
		return  (
			<>
				<span>«Мягкая игрушка»</span>
				<span>«Персональный приз за участие в Чикен Тамагочи»</span>
			</>
		)
	}

	if (user?.winMerch && user?.winCompliment) {
		return  (
			<>
				<span>«Стильный мерч»</span>
				<span>«Персональный приз за участие в Чикен Тамагочи»</span>
			</>
		)
	}

	if (user?.winSoftToy && user?.winMerch) {
		return  (
			<>
				<span>«Мягкая игрушка»</span>
				<span>«Стильный мерч»</span>
			</>
		)
	}

	if (user?.winSoftToy) {
		return  <span>«Мягкая игрушка»</span>
	}

	if (user?.winCompliment) {
		return  <span>«Персональный приз за участие в Чикен Тамагочи»</span>
	}

	return <span>«Стильный мерч»</span>

}

export const SpecialPrize = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenSuccess, setIsOpenSuccess] = useState(false)
	const { user } = useUser()

	return (
		<>
			{((user?.winSoftToy || user?.winMerch || user?.winCompliment) && !user.requirePersonalData) &&
                <BlockStyled>
                    <div className="wrap">
                        <div className="icon">
                            <Prize />
                        </div>

                        <h3 className="title">
	                        {user.requirePersonalData ? 'Вы получили приз:' : 'Вы выиграли и успешно заполнили данные для получения приза:'}
							<PrizeTitles />
                        </h3>
                        <p className="text">
	                        {user.requirePersonalData ?
		                        'Пожалуйста, заполните форму для получения приза:' :
		                        'Ожидайте, ваш приз будет отправлен вам до 31.10. Спасибо!'
							}
                        </p>
	                    {user.requirePersonalData &&
                            <Button variant="black" onClick={()=> setIsOpen(true)}>
                                Заполнить форму
                            </Button>
	                    }
                    </div>
                </BlockStyled>
			}

			<GetPrize
				isOpen={isOpen}
				onClose={()=> setIsOpen(false)}
				openSuccess={()=> setIsOpenSuccess(true)}
			/>
			<SuccessModal type="personalData" isOpen={isOpenSuccess} />
		</>
	)
}
