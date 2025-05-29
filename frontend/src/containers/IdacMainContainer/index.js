
"use client";
import React from "react";
import IdacAppBar from "@/components/IdacAppBar";
import DevAlert from "@/components/DevAlert";
import MainContainer from "@/containers/MainContainer";

export default function IdacMainContainer({ children }) {

  return (
    <MainContainer>
      <IdacAppBar />
      <DevAlert />
      {children}
    </MainContainer>
  );
}
