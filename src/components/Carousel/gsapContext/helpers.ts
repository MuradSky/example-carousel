import {gsap} from "gsap";
import {Draggable} from "gsap/Draggable";

type TPAnimateSlides = {
    carouselRef: HTMLDivElement,
    timer: {
        restart: (type: boolean)=> void
    },
    oneItem: number
}

type TPAutoPlay = {
    draggable: { isPressed: boolean, isDragging: boolean, isThrowing: boolean }
    timer: {
        restart: (type: boolean)=> void
    },
    rotateToGo: (type: number) => void
}

type TPDraggable = {
    carouselRef: HTMLDivElement,
    oneItem: number,
    numSlides: number,
    timer: {
        restart: (type: boolean)=> void
    }
}

type TPRotateToLevel = {
    afterClickReset: ()=> void,
    level: number,
    numSlides: number,
    timer: { restart: (type: boolean) => void },
    carouselRef: HTMLDivElement
}

export const circleSetup = (mainCircle: HTMLDivElement, circleItem: NodeListOf<Element>) => {
    const radius = mainCircle.offsetWidth / 2;
    const center = mainCircle.offsetWidth / 2;
    const total = circleItem.length;
    const slice = (2 * Math.PI) / total;

    circleItem.forEach((item: Element, i: number) => {
        const angle = i * slice;

        const x = center + radius * Math.sin(angle);
        const y = center - radius * Math.cos(angle);

        gsap.set(item, {
            rotation: angle + "_rad",
            xPercent: -50,
            yPercent: -50,
            duration: 5,
            x: x,
            y: y,
        });
    });
};

export const autoPlay = (props: TPAutoPlay)=> {
    const { draggable, timer, rotateToGo } = props
    return () => {
        if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
            timer.restart(true);
        } else {
            rotateToGo(-1)
        }
    }
}

export function animateSlides(props: TPAnimateSlides) {
    const { carouselRef, timer, oneItem } = props
    const snapRotate = (value: number, oneItem: number) => gsap.utils.snap(oneItem, value)
    return (direction: number, slideDuration: number) => {
        const rotate = Math.floor(+gsap.getProperty(carouselRef, "rotation") + direction * Math.floor(oneItem))
        gsap.to(carouselRef, {
            rotation:  snapRotate(rotate, oneItem),
            duration: slideDuration,
            ease: "none",
            onComplete:  ()=> {
                timer.restart(true);
            }
        })
    }
}

export const initRotateDraggable = ( props: TPDraggable) => {
    const { carouselRef, oneItem, timer, numSlides } = props
    const draggableSnap = (oneItem: number, numSlides: number) => {
        return (endValue: number) => {
            const activeIndex = Math.floor(endValue / oneItem);
            return Math.floor((activeIndex * 360) / numSlides)
        }
    }

    let releaseTimeOut: any;
    return new Draggable(carouselRef, {
        type: "rotation",
        inertia: true,
        snap: draggableSnap(oneItem, numSlides),
        onPress: ()=> {
            clearTimeout(releaseTimeOut)
        },
        onRelease: ()=> {
            releaseTimeOut = setTimeout(()=> timer.restart(true), 5000)
        }
    });
}

export function toggleButton(BUTTON: HTMLButtonElement, levelChild: HTMLCollection) {
    Array.from(levelChild).forEach((elem: Element) => elem.classList.remove("is-active"))
    BUTTON.classList.add("is-active")
}

const detectLevel = (level: number, prizeLevel: number) => {
    const prisesList = [
        ["1"],
        ["1", "2"],
        ["1", "2", "3"],
        ["1", "2", "3", "4"],
        ["1", "2", "3", "4", "5"]
    ]
    // @ts-ignore
    return Boolean(!prisesList[level-1].includes(String(prizeLevel)), String(prizeLevel))
}

export function changeCardByLevel(cards: any, SELECT_LEVEL: number) {
    const collection = Array.from(cards)
    collection.forEach((elem: any) => {
        const { level } = elem.dataset
        elem.classList.remove("is-weak")
        if (detectLevel(SELECT_LEVEL, +level)) {
            elem.classList.add("is-weak")
        }
    })
}

export function rotateToLevel(props: TPRotateToLevel) {
    const { afterClickReset, carouselRef, level, numSlides, timer } = props
    const positionToCard = [3, 4, 5, 9, 13]
    afterClickReset()
    const draggableSnap = (activeIndex: number,  numSlides: number) => -Math.floor((activeIndex * 360) / numSlides)
    gsap.to(carouselRef, {
        rotation:  draggableSnap(positionToCard[level], numSlides),
        duration: 1,
        ease: "none",
        onComplete: ()=> {
            timer.restart(true);
        }
    })
}
