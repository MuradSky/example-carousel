import React, {useState} from "react";
import {FAQStyle, FAQTitle} from "./FAQStyles";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";
import { ReactComponent as ArrowIcon } from "assets/svg/arrow-back-1.svg";
import {Button} from "components";
import {faqData} from "./faqData";

const isOpenItem = (data: string[] | number[], id: string | number) => {
    /*@ts-ignore*/
    return data.includes(id) ? "Свернуть ответ" : "Развернуть ответ"
}

export const FAQ: React.FC = () => {
    const [slicer, setSlicer] = useState<number>(6)
    const [changeAcc, setChangeAcc] = useState<string[]>(["1"])
    return (
        <FAQStyle className="content">
            <FAQTitle>Вопрос-ответ</FAQTitle>

            <Accordion
                allowMultipleExpanded
                allowZeroExpanded
                preExpanded={["1"]}
                onChange={(props:string[]) => setChangeAcc(props)}
            >
                {[...faqData].slice(0, slicer).map((item: any) => (
                    <AccordionItem key={item.id} uuid={item.id}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="head-title">{item.head}</div>
                                <div className="head-prompt">
                                    {isOpenItem(changeAcc, item.id)}
                                </div>
                                <div className="head-arrow">
                                    <ArrowIcon />
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="faq-body" dangerouslySetInnerHTML={{__html: item.body}}></div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>

            { faqData.length > 6 && faqData.length > slicer ?
                <Button
                    variant="black"
                    children="Показать больше"
                    onClick={()=> setSlicer(faqData.length)}
                    className="btn-more"
                />
                : null
            }
        </FAQStyle>
    )
}

