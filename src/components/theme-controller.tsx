import Moon from "@/components/moon";
import Sun from "@/components/sun";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

type Theme = typeof LIGHT_THEME | typeof DARK_THEME | null;
type SwapClass = "swap-on" | "swap-off";

interface Dataset {
    moonSwapClassName: SwapClass;
    sunSwapClassName: SwapClass;
    togglableThemes: string;
    themeToSet: Theme;
}

const getTheme = () => document.documentElement.dataset.theme as Theme;
const createDataset = (): Dataset => {
    const theme = getTheme();

    if (theme === null || theme === LIGHT_THEME) {
        return {
            moonSwapClassName: "swap-on",
            sunSwapClassName: "swap-off",
            togglableThemes: `${DARK_THEME},${LIGHT_THEME}`,
            themeToSet: DARK_THEME,
        };
    } else if (theme === DARK_THEME) {
        return {
            moonSwapClassName: "swap-off",
            sunSwapClassName: "swap-on",
            togglableThemes: `${LIGHT_THEME},${DARK_THEME}`,
            themeToSet: LIGHT_THEME,
        };
    }

    throw new Error(`Illegal theme ${theme} found`);
};

export default () => {
    const theme = getTheme();
    const dataset = createDataset();

    const swapTheme = () => {
        const currentTheme = getTheme();
        const newTheme =
            currentTheme === null || currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <div className="flex size-10 items-center justify-center">
            <label className="swap swap-rotate size-8 transition-size duration-300 hover:size-10 active:size-7 xl:size-10 xl:active:size-8">
                <input
                    className="theme-controller"
                    data-toggle-theme={dataset.togglableThemes}
                    type="checkbox"
                    onChange={swapTheme}
                    value={dataset.themeToSet as string}
                />

                {theme === LIGHT_THEME ? (
                    <>
                        <Sun swapClassName="swap-off" />
                        <Moon swapClassName="swap-on" />
                    </>
                ) : (
                    <>
                        <Sun swapClassName="swap-on" />
                        <Moon swapClassName="swap-off" />
                    </>
                )}
            </label>
        </div>
    );
};
