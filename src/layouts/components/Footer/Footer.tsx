import React from "react";
import {Link} from "react-router-dom";
import {Button} from "components";
import {FooterBottom, FooterStyles, FooterTop} from "./FooterStyles";
import { ReactComponent as ArrowLink } from "assets/svg/arrow-link.svg";
import footerBg from "assets/img/backgrounds/footer-bg.svg";
// @ts-ignore
import file1 from "assets/files/Pravila-Akcii-Chiken-Tamagochi.pdf"
// @ts-ignore
import file2 from "assets/files/Polzovatelskoe-Soglashenie-Chiken-Tamagochi.pdf"
// @ts-ignore
import file3 from "assets/files/Politika-Konfidencialnosti-Chiken-Tamagochi.pdf"

export const Footer: React.FC = () => {
    const bg = { backgroundImage: `url(${footerBg})` }

    return (
        <FooterStyles>
            <FooterTop style={bg}>
                <div className="footer-container">
                    <div className="top-head">
                        <div className="footer-title">Если у вас есть вопросы</div>
                        <Link className="top-button" to="/faq">
                            Вопрос-ответ
                            <ArrowLink />
                        </Link>
	                    <div className="age">
		                    12+
	                    </div>
                    </div>

                    <div className="top-body">
                        <div className="top-regulations">
                            <a href={file1} className="top-regulations__link" target="_blank" rel="noreferrer">
                                <span>Правила Акции</span>
                                <ArrowLink/>
                            </a>
                            <a href={file2} className="top-regulations__link" target="_blank" rel="noreferrer">
                                <span>Правила пользования сайтом</span>
                                <ArrowLink/>
                            </a>
                            <a href={file3} className="top-regulations__link" target="_blank" rel="noreferrer">
                                <span>Правила в области обработки ПД</span>
                                <ArrowLink/>
                            </a>
                        </div>

                        <div className="top-tel">
                            <div className="footer-subtitle">Телефон горячей линии: <span>с 10:00 до 18:00 по Москве</span>
							</div>
                            <a href="tel:88006000232" className="top-tel__link">
	                            8 (800) 600-02-32
                            </a>
                        </div>

                        <div className="top-support" title="Обращение с Службу поддержки Чикен Тамагочи">
                            <div className="footer-subtitle">Служба поддержки</div>
                            <Button
	                            type="link"
                                variant="black"
                                children={"Написать в поддержку"}
                                href="mailto:info@chickenpromo.ru?subject=Обращение с Службу поддержки Чикен Тамагочи"
                            />
                        </div>
                    </div>
                </div>
            </FooterTop>

            <FooterBottom>
                <div className="footer-container">
                    <p className="footer-text">© {new Date().getFullYear()} KFC International Holdings Inc.</p>
                    <p className="footer-text">
	                    Организатор Акции ООО «Мирвест». Территория проведения Акции - Российская Федерация.
	                    Период совершения покупок в ресторанах KFC и Rostic’s, регистрации чеков с 08.08.2023 г. по 09.10.2023 г.
	                    Общий срок проведения Акции с 08.08.2023 г. по 31.10.2023 г., включая выдачу призов.
	                    Срок совершения покупок при условии авторизации в приложении с 08.08.2023 г. по 09.10.2023 г. включительно.
	                    Количество призов ограничено. Изображение призов на рекламных материалах может отличаться от фактически разыгрываемых призов.
	                    С информацией об Организаторе Акции, правилах и сроках проведения, количестве призов и выигрышей по результатам Акции,
	                    месте и порядке их получения можно ознакомиться на сайте <a href="www.chickenpromo.ru" target="_blank" rel="noreferrer">www.chickenpromo.ru</a><br/>
	                    Категория информационной продукции 12+ относится к приложению KFC<br/>
	                    *Общий размер призового фонда 9 311 008 призов<br/>
	                    **Объект долевого строительства в соответствии с ФЗ от 30.12.2004 N 214-ФЗ. ООО «Специализированный застройщик «А101».
	                    Проектная декларация на сайте <a href="https://a101.ru" target="_blank" rel="noreferrer">https://a101.ru</a><br/>
                    </p>
                </div>
            </FooterBottom>
        </FooterStyles>
    )
}
