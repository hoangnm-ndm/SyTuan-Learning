import "./App.css";
import FooterClient from "./components/layout/client/FooterClient";
import HeaderClient from "./components/layout/client/HeaderClient";
import Button from "./components/ui/Button";

function App() {
  return (
    <>
      <HeaderClient />
      <main>
        <Button />
        <Button />
        <Button />
        <Button />
      </main>
      <FooterClient />
    </>
  );
}

export default App;
