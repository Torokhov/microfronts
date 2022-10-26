import { useEffect, useState } from 'react';

export const useDynamicScript = (url) => {
    const [ready, setReady] = useState(false);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        if (!url) {
            return;
        }

        const script = document.createElement('script');

        script.src = url;
        script.type = 'text/javascript';
        script.async = true;

        setReady(false);
        setFailed(false);

        script.onload = () => {
            console.log(`Dynamic Script Loaded: ${url}`);
            setReady(true);
        };

        script.onerror = () => {
            console.error(`Dynamic Script Error: ${url}`);
            setReady(false);
            setFailed(true);
        };

        document.head.appendChild(script);

        return () => {
            console.log(`Dynamic Script Removed: ${url}`);
            document.head.removeChild(script);
        };
    }, [url]);

    return {
        ready,
        failed,
    };
};