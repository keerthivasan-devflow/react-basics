
type Horizontal = "left" | "right" | "center";
type Vertical = "top" | "bottom" | "center";

type PositionProps = {
  position: Exclude<`${Horizontal}-${Vertical}`, "center-center"> | "center";
};

export const StringLiterals = ({ position }: PositionProps) => {
  return (
    <div>
      <h3>String literal component...</h3>
      <p>Position = {position}</p>
    </div>
  );
};
