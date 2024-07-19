/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Alert } from "react-bootstrap";
import './dashboard.css';

function Dashboard() {
  //styling
  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
  };

  const sidebarStyle = {
    minWidth: "250px",
  };

  const mainContentStyle = {
    flexGrow: 1, // Takes the remaining width
    padding: "1rem",
    fontFamily: "Times New Roman, Times, serif",
    color: "black",
    backgroundImage: `url('../assets/Management.jpeg')})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [lowStockProducts, setLowStockProducts] = useState([]);

  useEffect(() => {
    // Fetch low stock products
    fetch("http://127.0.0.1:5000/low_stock?threshold=10")
     .then((response) => response.json())
     .then((data) => setLowStockProducts(data))
     .catch((error) =>
        console.error("Error fetching low stock products:", error)
      );
  }, []);

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <div style={sidebarStyle}>
          <Sidebar />
        </div>
        <main role="main" style={mainContentStyle}>
          <h2>Dashboard</h2>
          {lowStockProducts.length > 0 && (
            <Alert variant="warning">
              The following products are in low stock:
              <ul>
                {lowStockProducts.map((product) => (
                  <li key={product.id}>
                    {product.sku}
                  </li>
                ))}
              </ul>
            </Alert>
          )}
        </main>
      </div>
    </>
  );
}

export default Dashboard;