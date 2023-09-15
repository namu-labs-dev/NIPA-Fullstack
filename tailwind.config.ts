import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mob: "375px",
    },
    extend: {
      width: {
        mob: "375px",
      },
      colors: {
        Primary: {
          "1": "#f6ffed",
          "2": "#d9f7be",
          "3": "#b7eb8f",
          "4": "#95de64",
          "5": "#73d13d",
          "6": "#52c41a",
          "7": "#389e0d",
          "8": "#237804",
          "9": "#135200",
          "10": "#092b00",
        },
        Neutral: {
          "1": "#ffffff",
          "2": "#fafafa",
          "3": "#f5f5f5",
          "4": "#f0f0f0",
          "5": "#d9d9d9",
          "6": "#bfbfbf",
          "7": "#8c8c8c",
          "8": "#595959",
          "9": "#434343",
          "10": "#262626",
          "11": "#1f1f1f",
          "12": "#141414",
          "13": "#000000",
        },
        DayBreakBlue: {
          "1": "#e6f7ff",
          "2": "#bae7ff",
          "3": "#91d5ff",
          "4": "#69c0ff",
          "5": "#40a9ff",
          "6": "#1890ff",
          "7": "#096dd9",
          "8": "#0050b3",
          "9": "#003a8c",
          "10": "#002766",
        },
        DustRed: {
          "1": "#fff1f0",
          "2": "#ffccc7",
          "3": "#ffa39e",
          "4": "#ff7875",
          "5": "#ff4d4f",
          "6": "#f5222d",
          "7": "#cf1322",
          "8": "#a8071a",
          "9": "#820014",
          "10": "#5c0011",
        },
        Volcano: {
          "1": "#fff2e8",
          "2": "#ffd8bf",
          "3": "#ffbb96",
          "4": "#ff9c6e",
          "5": "#ff7a45",
          "6": "#fa541c",
          "7": "#d4380d",
          "8": "#ad2102",
          "9": "#871400",
          "10": "#610b00",
        },
        SunsetOrange: {
          "1": "#fff7e6",
          "2": "#ffe7ba",
          "3": "#ffd591",
          "4": "#ffc069",
          "5": "#ffa940",
          "6": "#fa8c16",
          "7": "#d46b08",
          "8": "#ad4e00",
          "9": "#873800",
          "10": "#612500",
        },
        CalendulaGold: {
          "1": "#fffbe6",
          "2": "#fff1b8",
          "3": "#ffe58f",
          "4": "#ffd666",
          "5": "#ffc53d",
          "6": "#faad14",
          "7": "#d48806",
          "8": "#ad6800",
          "9": "#874d00",
          "10": "#613400",
        },
        SunriseYellow: {
          "1": "#feffe6",
          "2": "#ffffb8",
          "3": "#fffb8f",
          "4": "#fff566",
          "5": "#ffec3d",
          "6": "#fadb14",
          "7": "#d4b106",
          "8": "#ad8b00",
          "9": "#876800",
          "10": "#614700",
        },
        Lime: {
          "1": "#fcffe6",
          "2": "#f4ffb8",
          "3": "#eaff8f",
          "4": "#d3f261",
          "5": "#bae637",
          "6": "#a0d911",
          "7": "#7cb305",
          "8": "#5b8c00",
          "9": "#3f6600",
          "10": "#254000",
        },
        PolarGreen: {
          "1": "#f6ffed",
          "2": "#d9f7be",
          "3": "#b7eb8f",
          "4": "#95de64",
          "5": "#73d13d",
          "6": "#52c41a",
          "7": "#389e0d",
          "8": "#237804",
          "9": "#135200",
          "10": "#092b00",
        },
        Cyan: {
          "1": "#e6fffb",
          "2": "#b5f5ec",
          "3": "#87e8de",
          "4": "#5cdbd3",
          "5": "#36cfc9",
          "6": "#13c2c2",
          "7": "#08979c",
          "8": "#006d75",
          "9": "#00474f",
          "10": "#002329",
        },
        GeekBlue: {
          "1": "#f0f5ff",
          "2": "#d6e4ff",
          "3": "#adc6ff",
          "4": "#85a5ff",
          "5": "#597ef7",
          "6": "#2f54eb",
          "7": "#1d39c4",
          "8": "#10239e",
          "9": "#061178",
          "10": "#030852",
        },
        GoldenPurple: {
          "1": "#f9f0ff",
          "2": "#efdbff",
          "3": "#d3adf7",
          "4": "#b37feb",
          "5": "#9254de",
          "6": "#722ed1",
          "7": "#531dab",
          "8": "#391085",
          "9": "#22075e",
          "10": "#120338",
        },
        Magenta: {
          "1": "#fff0f6",
          "2": "#ffd6e7",
          "3": "#ffadd2",
          "4": "#ff85c0",
          "5": "#f759ab",
          "6": "#eb2f96",
          "7": "#c41d7f",
          "8": "#9e1068",
          "9": "#780650",
          "10": "#520339",
        },
        Character: {
          "Primary(inverse)": "#ffffff",
          "Secondary .45": "#000000",
          mark: "#000000",
          warning: "#faad14",
          success: "#52c41a",
          "Title .85": "#000000",
          "Primary .85": "#000000",
          "Disabled & Placeholder .25": "#000000",
          danger: "#ff4d4f",
        },
        Tooltip: {
          ".75": "#000000",
        },
        Conditional: {
          "pop-over": "#ffffff",
          "item-background-hover": "#f5f5f5",
          "table-column-sort": "#fafafa",
          "header-background": "#ffffff",
          "sider-background": "#ffffff",
          "menu-item-text-selected": "#1890ff",
          divider: "#000000",
          "page-background": "#f0f2f5",
          "menu-item-background-selected": "#e6f7ff",
          ".85l → .65d": "#000000",
          "table-filter-trigger:hover": "#000000",
        },
        placeholder: {
          image: "#fafafa",
        },
        "◇": {
          HitBox: "#ffffff",
        },
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.375rem",
      },
      fontFamily: {
        "pretendard-variable": "Pretendard Variable",
        menlo: "Menlo",
        "roboto-mono": "Roboto Mono",
      },
      boxShadow: {
        "drop-shadow/0.15": "0px 2px 8px 0px rgba(0,0,0,0.15)",
        "drop-shadow/active-2px-spread": "0px 0px 0px 2px rgba(24,144,255,0.2)",
        "drop-shadow/1px-spread": "0px 0px 0px 1px rgba(255,255,255,1)",
        "drop-shadow/0.12+0.8+0.5":
          "0px 9px 28px 8px rgba(0,0,0,0.05), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 3px 6px -4px rgba(0,0,0,0.12)",
        "drop-shadow/button-primary": "0px 2px 0px 0px rgba(0,0,0,0.04)",
        "drop-shadow/button-secondary": "0px 2px 0px 0px rgba(0,0,0,0.02)",
        "drop-shadow/0.15 yOffset=6": "0px 6px 8px 0px rgba(0,0,0,0.15)",
        "border & divider/divider ↓":
          "inset 0px -1px 0px 0px rgba(240,240,240,1)",
        "border & divider/divider ↑":
          "inset 0px 1px 0px 0px rgba(240,240,240,1)",
        "border & divider/divider →":
          "inset -1px 0px 0px 0px rgba(240,240,240,1)",
        "border & divider/divider <-":
          "inset 1px 0px 0px 0px rgba(240,240,240,1)",
        "border & divider / border←↑→ 1px":
          "inset 1px 0px 0px 0px rgba(240,240,240,1), inset 0px 1px 0px 0px rgba(240,240,240,1), inset -1px 0px 0px 0px rgba(240,240,240,1)",
        "border & divider/border↕︎→":
          "inset 0px -1px 0px 0px rgba(217,217,217,1), inset 0px 1px 0px 0px rgba(217,217,217,1), inset -1px 0px 0px 0px rgba(217,217,217,1)",
        "border & divider/border←↕︎":
          "inset 0px -1px 0px 0px rgba(217,217,217,1), inset 0px 1px 0px 0px rgba(217,217,217,1), inset 1px 0px 0px 0px rgba(217,217,217,1)",
        "border & divider / border ↕︎ 0.5px":
          "inset 0px 0.5px 0px 0px rgba(240,240,240,1), inset 0px -0.5px 0px 0px rgba(240,240,240,1)",
        "border & divider/outer-border-1px":
          "0px 0px 0px 1px rgba(255,255,255,1)",
        "ink / theme→2px": "inset -2px 0px 0px 0px rgba(24,144,255,1)",
        "ink / theme↑2px": "inset 0px 2px 0px 0px rgba(24,144,255,1)",
        "ink / theme→3px": "inset -3px 0px 0px 0px rgba(24,144,255,1)",
        "ink / theme←↕︎→1px":
          "inset 0px -1px 0px 0px rgba(24,144,255,1), inset 0px 1px 0px 0px rgba(24,144,255,1), inset -1px 0px 0px 0px rgba(24,144,255,1), -1px 0px 0px 0px rgba(24,144,255,1)",
        "ink / F0F0F0 ←2px": "inset 2px 0px 0px 0px rgba(240,240,240,1)",
      },
      borderRadius: {
        none: "0",
        xs: "0.0625rem",
        sm: "0.125rem",
        default: "0.1875rem",
        lg: "0.25rem",
        xl: "0.3125rem",
        "2xl": "0.375rem",
        "3xl": "0.5rem",
        "4xl": "0.625rem",
        "5xl": "0.875rem",
        "6xl": "1rem",
        "7xl": "1.0056818723678589rem",
        "8xl": "1.0625rem",
        "9xl": "1.25rem",
        "10xl": "1.4375rem",
        "11xl": "1.5rem",
        "12xl": "1.5625rem",
        "13xl": "1.625rem",
        "14xl": "1.704545497894287rem",
        "15xl": "1.875rem",
        "16xl": "2rem",
        "17xl": "3.0625rem",
        "18xl": "3.125rem",
        "19xl": "3.625rem",
        "20xl": "3.6875rem",
        "21xl": "4.5rem",
        "22xl": "4.8125rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
