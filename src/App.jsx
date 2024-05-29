import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Cart from "./Pages/Cart";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ChakraProvider>
    </>
  );
}

export default App;
