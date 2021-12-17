import { Container } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { Header } from "./components/Header";
import { Rooms } from "./components/Rooms";

const App: FC = (): ReactElement => {
  return (
    <Container sx={{ my: 6 }}>
      <Header title="Move-out List" />
      <Rooms />
    </Container>
  );
};

export default App;
