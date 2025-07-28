## Styled Components
1. Basic Styled Component Creation - using template literals `styled.div (OR) styled("div")`
2. Adapting css based on props
3. Extending styles - styled() constructor
4. What is polymorphic prop and how to define it
5. How to add CSS with pseudo-classes?
6. How to add attributes at once? `object - attrs({}) (OR) arrow function which returns an object attrs(()=>({}))`
7. 


## React Material UI Components
Note: Whatever component you import, which will have class names such as MuiCard-root, MuiStack-root, MuiButton-root etc

makeStyles
createStyles
withStyles
useStyles

Theme Customization:
--------------------
Default Theme or Theme Object
Function: createTheme()
Hook: useTheme()
What is ThemeProvider w/ theme prop
Can we have mutiple <ThemeProvider> in single component - To apply specific styles to specific parts of a component

Integration with CssBaseline: It is common practice to use <CssBaseline /> in 
combination with <ThemeProvider> to ensure a consistent baseline of CSS styles across different browsers.

Palette Objects
----------------------
Primary: The main color of your app, often used for key elements like buttons, links, and highlights.
Secondary: An additional color that complements the primary color, used for secondary actions or accents.
Error: Defines the color for error messages and components related to errors.
Warning: Defines the color for warning messages and components.
Info: Defines the color for informational messages or components.
Success: Defines the color for success messages or components.
Text: Defines the color for text (usually includes primary, secondary, and disabled text).
Background: Defines the background colors for different sections of the app.
Divider: Color for dividers or borders.
Action: Defines the colors for interactive elements like hover states or selected items.



# Form Elements
1. TextField - Input, FilledInput, OutlinedInput, FormHelperText, InputLabel, InputBase
2. TextareaAutoSize
   
# Selection Controls
1. Checkbox
2. Radio
3. RadioGroup
4. Switch
5. Select
6. Autocomplete
7. Slider
8. Rating

# Form Grouping and Labeling
1. FormControl
2. FormGroup
3. FormControlLalel
4. FormLabel

# Date Picker - need to install separate library like @mui/x-date-pickers
1. DatePicker
2. TimePicker
3. DateTimePicker
4. DateRangePicker

1. useFormControl
2. InputAdornment
3. InputLabelProps / FormHelperTextProps