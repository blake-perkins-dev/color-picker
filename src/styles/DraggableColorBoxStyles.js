import sizes from './sizes';

const styles = {
    root: {
        width: "20%",
        height: "25%",
        display: "flex",
        position: "relative",
        cursor: "pointer",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%"
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        padding: "2%",
        width: "100%",
        left: "0",
        bottom: "0",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
}

export default styles;