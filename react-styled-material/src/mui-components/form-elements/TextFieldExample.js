import { FormControl, TextField } from "@mui/material";

const TextFieldExample = () => {
  return (
    <>
      <FormControl>
        <TextField variant="outlined" label={"Enter username"} />
        <TextField variant="filled" label={"Enter username"} />
        <TextField variant="standard" label={"Enter username"} />
      </FormControl>
    </>
  );
};

export default TextFieldExample;
