import { Container } from "@mui/material";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Container maxWidth="sm" sx={{ padding: "16px", minHeight: "100vh" }}>
        <Navbar />
      </Container>
    </main>
  );
}
