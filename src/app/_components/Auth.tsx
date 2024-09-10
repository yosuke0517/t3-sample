import { signIn } from "next-auth/react";
import { Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Auth = () => {
  return (
    <Box className="h-full">
      <Button
        variant="contained"
        color="inherit"
        onClick={() => signIn("github")}
        className="flex gap-2"
      >
        <GitHubIcon />
        github auth
      </Button>
    </Box>
  );
};
