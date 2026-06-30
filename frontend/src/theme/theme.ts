import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette:{

        mode:"dark",

        primary:{
            main:"#00C48C"
        },

        secondary:{
            main:"#2563EB"
        },

        background:{
            default:"#07131F",
            paper:"#11253D"
        }

    },

    shape:{
        borderRadius:16
    },

    typography:{
        fontFamily:"Segoe UI"
    }

});

export default theme;