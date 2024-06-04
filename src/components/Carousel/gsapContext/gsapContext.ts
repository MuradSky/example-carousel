import {gsap} from "gsap";
import {
    animateSlides,
    changeCardByLevel,
    circleSetup,
    initRotateDraggable,
    rotateToLevel,
    toggleButton
} from "./helpers";


type TPContext = {
    carouselRef: HTMLDivElement | null
    prevRef: HTMLDivElement | null,
    nextRef: HTMLDivElement | null,
    levelButton: HTMLButtonElement | null,
}

export const gsapContext = (props: TPContext ) => {
    const { carouselRef, prevRef, nextRef, levelButton } = props
    if (!carouselRef) return
    let HAS_CLICK = false;
    const slideDelay = 0.01;
    const timer = gsap.delayedCall(slideDelay, autoPlay);
    let afterClickTime: any;
    const slideDuration = 5;
    const cards = Array.from(carouselRef.children).filter((item: any) => item.tagName !== "svg")
    const circleItem = gsap.utils.toArray(cards)
    const numSlides = circleItem.length;
    const oneItem = 360 / numSlides;
    const rotateToGo = animateSlides({ carouselRef, timer, oneItem })

    // @ts-ignore
    circleSetup(carouselRef, circleItem)
    gsap.set(carouselRef, { transformOrigin: "50% 50%" })
    const draggable = initRotateDraggable({ carouselRef, oneItem, timer, numSlides})

    prevRef?.addEventListener("click", navigation(1))
    nextRef?.addEventListener("click", navigation(-1))


    if (!levelButton) return;
    const levelChild = levelButton.children
    levelChild[levelChild.length-1].classList.add("is-active")

    let SELECT_LEVEL: number = 5;
    levelButton?.addEventListener("click", (e: any)=> {
        const { target } = e
        const { level } = target.dataset
        if (target.tagName !== "BUTTON" || SELECT_LEVEL === +level) return;
        SELECT_LEVEL = +level

        toggleButton(target, levelChild)
        changeCardByLevel(circleItem, SELECT_LEVEL)
        rotateToLevel({
            afterClickReset,
            level: SELECT_LEVEL - 1,
            carouselRef,
            numSlides,
            timer
        })
    })

    function navigation(direction: number) {
        return ()=> {
            afterClickReset()
            rotateToGo(direction, 1)
        }
    }
    function afterClickReset() {
        clearTimeout(afterClickTime)
        HAS_CLICK = true
        gsap.killTweensOf(carouselRef)
        afterClickTime = setTimeout(()=> HAS_CLICK = false, 5000)
    }

    function autoPlay() {
        if (draggable.isPressed || draggable.isDragging || draggable.isThrowing || HAS_CLICK) {
            timer.restart(true)
        } else {
            rotateToGo(-1, slideDuration)
        }
    }

}
