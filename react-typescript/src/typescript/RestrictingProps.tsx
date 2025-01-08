import React from "react";

// type RandomNumberProps = {
//   value: number;
//   isPositive: boolean;
//   isNegative: boolean;
//   isZero: boolean;
// };

type RandomNumberProp = {
  value: number;
};

type RandomNumberPositive = RandomNumberProp & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type RandomNumberNegative = RandomNumberProp & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type RandomNumberZero = RandomNumberProp & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = RandomNumberPositive | RandomNumberNegative | RandomNumberZero

function RestrictingProps({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
}

export default RestrictingProps;
