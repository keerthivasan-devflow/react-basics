import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import logo from "../logo.svg";

const CardComponent = () => {
  return (
    <Card variant="outlined">
      <CardContent>
          <h1>Node JS</h1>
        <p>Node JS is a runtime environment</p>
      </CardContent>
      <CardMedia sx={{ height: 300 }} image={logo} title="green iguana" />
    </Card>
  );
};

export default CardComponent;
