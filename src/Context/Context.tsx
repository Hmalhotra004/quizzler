"use client";
import QContextProvider from "./QContext";

const Context = ({ children }: { children: React.ReactNode }) => {
  return <QContextProvider>{children}</QContextProvider>;
};

export default Context;
