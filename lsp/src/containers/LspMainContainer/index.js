
import React from "react";
import LspAppBar from "@/components/LspAppBar";
import DevAlert from "@/components/DevAlert";
import MainContainer from "@/containers/MainContainer";


export default function LspMainContainer({ children }) {

  return (
    <MainContainer>
      <LspAppBar />
      <DevAlert />
      {children}
    </MainContainer>
  );
}
