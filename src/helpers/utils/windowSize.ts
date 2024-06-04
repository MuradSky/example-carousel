/**
 * Check window size
 *
 * @param {number} maxWidthPixel max width in pixel
 */
export const checkWindow = (maxWidthPixel: number): boolean =>
    typeof window !== "undefined" &&
    window.matchMedia(`(max-width: ${maxWidthPixel}px)`).matches;

export const isNotebook: boolean = checkWindow(1919);
export const isLaptop: boolean = checkWindow(1380);
export const isPad: boolean = checkWindow(1024);
export const isMobile: boolean = checkWindow(768);
export const isMobileSm: boolean = checkWindow(660);


export const windowResize = (setMathSize: (value: (((prevState: boolean) => boolean) | boolean)) => void, width: number) => {
    window.addEventListener("resize", () => {
        setMathSize(checkWindow(width));
        return window.removeEventListener("resize", () =>
            setMathSize(checkWindow(width))
        );
    });
};