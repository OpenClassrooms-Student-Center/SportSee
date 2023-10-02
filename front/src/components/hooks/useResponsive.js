import { useEffect, useState } from 'react';

const ScreenType = {
    INITIAL: "INITIAL",
    DESKTOP: "DESKTOP",
    TABLET: "TABLET",
    MOBILE: "MOBILE"
};

/**
 * 
 * @returns the window width and the screen type
 */

const MyComponent = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [screenType, setScreenType] = useState(ScreenType.INITIAL);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setWindowWidth(window.innerWidth);

            if (window.innerWidth > 1330) {
                setScreenType(ScreenType.DESKTOP);
            } else if (window.innerWidth <= 1330 && windowWidth > 800) {
                setScreenType(ScreenType.TABLET);
            } else {
                setScreenType(ScreenType.MOBILE);
            }
        };

        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    }, [windowWidth]);

    return {
        windowWidth,
        screenType,
    };
};

export default MyComponent;