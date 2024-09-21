import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import CartDrawer from "./CartDrawer/CartDrawer";

export default function App() {
  let [inventory, setInventory] = useState([]);
  let [cart, setCart] = useState({});
  let [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetch("src/assets/inventory.json") // Replace with the correct path to your JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Cannot fetch store inventory " + response.statusText
          );
        }
        return response.json(); // Parse the JSON data from the response
      })
      .then((data) => {
        setInventory(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <>
      <Nav cart={cart} setDrawerOpen={setDrawerOpen}></Nav>
      <div>
        <Outlet context={{ inventory, cart, setCart }}></Outlet>
        {drawerOpen ? (
          <CartDrawer closeDrawer={setDrawerOpen}></CartDrawer>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
