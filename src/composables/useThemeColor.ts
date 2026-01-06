import { ref } from 'vue';

const currentColor = ref('green');

export function useThemeColor() {
    const setColor = (color: string) => {
        currentColor.value = color;
        document.documentElement.setAttribute('data-color', color);
        localStorage.setItem('color', color);
    };

    const initColor = () => {
        const savedColor = localStorage.getItem('color');
        if (savedColor) {
            setColor(savedColor);
        } else {
            setColor('green');
        }
    };

    return {
        currentColor,
        setColor,
        initColor
    };
}
