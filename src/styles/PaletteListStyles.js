import sizes from './sizes';
import bg from './bg.svg';

export default {
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundColor: "#ffffff",
        backgroundImage: `url(${bg})`,
        overflow: "scroll"
    },
    heading: {
        fontSize: "2rem"
    },
    container: {
        width: "60%",
        paddingBottom: "50px",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down('lg')]: {
            width: "80%"
        },
        [sizes.down('xs')]: {
            width: "70%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        "& a": {
            color: "white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down('md')]: {
            gridGap: "1rem",
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.down('xs')]: {
            gridGap: ".5rem",
            gridTemplateColumns: "repeat(1, 100%)"
        }
    }
};