import "./App.css";
import FooterClient from "./components/layout/client/FooterClient";
import HeaderClient from "./components/layout/client/HeaderClient";
import Button from "./components/ui/Button";

function App() {
  return (
    <>
      <HeaderClient />
      <main>
        {/* props = properties = các thuộc tính */}
        <Button color="red" size="big">
          Login
        </Button>
        <Button color="green" size="medium">
          Register
        </Button>
        <Button color="violet" size="small">
          Submit
        </Button>
      </main>
      <FooterClient />
    </>
  );
}

export default App;
