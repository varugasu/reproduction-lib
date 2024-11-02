import { Button } from "@/components/button";
import { PropsWithChildren } from "react";

export const PrimaryButton = ({ children }: PropsWithChildren) => {
  return <Button sx={{ backgroundColor: "red" }}>{children}</Button>;
};
