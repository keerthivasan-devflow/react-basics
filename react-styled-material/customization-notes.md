
1. one-off customization using sx prop

Palette - mainly used to change the colors of the components (primary/secondary colors...)

There are 4 available tokens insde palette object: 
palette:{
    primary: {
        main: "",
        light: "",
        dark: "",
        contrastText: ""
    },
    secondary: {...} // goes like this...
}

Note: if you would like to add your own custom colors to the palette like primary, secondary, warning:
    you can also add color tokens manually as you've added "customgreen" color names. (newly added - "darker")
    you can add manually like below:
    palette:{
        customgreen: {
            main: "",
            light: "",
            dark: "",
            darker: "",
            contrastText: ""
        }
    }

Color values:
1. available color names from mui - give it manually and directly
    Example: primary: lime
2. augmentColor like: variety of shades - deepOrange[100], deepOrange[500]