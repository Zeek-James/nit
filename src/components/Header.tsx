import { Typography } from "@mui/material";
import React, { FC } from "react";

interface iH {
  title: string;
}
export const Header: FC<iH> = ({ title }) => {
  return (
    <Typography variant="h3" sx={{ m: 5 }}>
      {title}
    </Typography>
  );
};
