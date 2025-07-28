import { FilledInput, FormControl, InputLabel } from "@mui/material";

const FilledInputExample = () => {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="username">Enter username</InputLabel>
        <FilledInput id="username" />
      </FormControl>
    </>
  );
};
export default FilledInputExample;
