import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ["Cairo", "sans-serif"].join(","),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "*::-webkit-scrollbar": {
                    width: "2px",
                },
                "*::-webkit-scrollbar-track": {
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                },
                "*::-webkit-scrollbar-thumb": {
                    backgroundColor: "#007a11c4",
                    borderRadius: 99,
                },
                body: {
                    backgroundColor: "#1b1b1b",
                    color: "#e3e3e3",
                    overflowX: "hidden",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontSize: 16,
                },
            },
        },
    },
});

export default theme;
