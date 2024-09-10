"use client";
import { Auth } from "~/app/_components/Auth";
import { Box } from "@mui/material";

/** Authをラップしているだけ
 *
 * */
export const AuthWrap = () => {
  return (
    <Box className="p-4">
      <Auth />
    </Box>
  );
};
