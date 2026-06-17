import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/");
      return;
    }

    setUser(storedUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 bg-light min-vh-100">
        {/* Header */}
        <div
          className="text-white py-4 shadow"
          style={{
            background: "linear-gradient(135deg, #0d6efd, #6610f2)",
          }}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <div>
            <h2 className="fw-bold mb-1">
              Inventory Management System
            </h2>
            <p className="mb-0 opacity-75">
              Manage products and inventory efficiently
            </p>
          </div>

          <div className="d-flex align-items-center">
            <div className="text-end me-3">
              <h6 className="mb-0 fw-bold text-white">
                {user?.fullName}
              </h6>
              <small className="text-light">
                Administrator
              </small>
            </div>

            <div
              className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center fw-bold"
              style={{
                width: "45px",
                height: "45px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              {user?.fullName?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* User Card */}
        {user && (
          <div className="card border-0 shadow-lg mb-4">
            <div className="card-body d-flex align-items-center">
              <div
                className="rounded-circle d-flex justify-content-center align-items-center text-white fw-bold"
                style={{
                  width: "70px",
                  height: "70px",
                  fontSize: "24px",
                  background:
                    "linear-gradient(135deg, #0d6efd, #6610f2)",
                }}
              >
                {user.fullName.charAt(0).toUpperCase()}
              </div>

              <div className="ms-4">
                <h4 className="mb-1">
                  Welcome, {user.fullName}
                </h4>
                <p className="text-muted mb-0">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <i
                  className="bi bi-box-seam text-primary"
                  style={{ fontSize: "3rem" }}
                ></i>
                <h5 className="mt-3">Total Products</h5>
                <h2 className="fw-bold text-primary">0</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <i
                  className="bi bi-cart-check text-success"
                  style={{ fontSize: "3rem" }}
                ></i>
                <h5 className="mt-3">Available Stock</h5>
                <h2 className="fw-bold text-success">0</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <i
                  className="bi bi-exclamation-triangle text-warning"
                  style={{ fontSize: "3rem" }}
                ></i>
                <h5 className="mt-3">Low Stock Items</h5>
                <h2 className="fw-bold text-warning">0</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <h4 className="fw-bold mb-4">Quick Actions</h4>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body text-center p-4">
                <i
                  className="bi bi-plus-circle-fill text-success"
                  style={{ fontSize: "3rem" }}
                ></i>

                <h5 className="mt-3">Add Product</h5>

                <p className="text-muted">
                  Add new inventory items to the system.
                </p>

                <button
                  className="btn btn-success"
                  onClick={() => navigate("/add-product")}
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body text-center p-4">
                <i
                  className="bi bi-list-ul text-primary"
                  style={{ fontSize: "3rem" }}
                ></i>

                <h5 className="mt-3">View Products</h5>

                <p className="text-muted">
                  Browse and manage existing inventory.
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/products")}
                >
                  View Products
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-body text-center p-4">
                <i
                  className="bi bi-graph-up-arrow text-danger"
                  style={{ fontSize: "3rem" }}
                ></i>

                <h5 className="mt-3">Inventory Reports</h5>

                <p className="text-muted">
                  Monitor inventory performance and stock.
                </p>

                <button className="btn btn-danger">
                  View Reports
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-5 text-muted">
          © 2026 Inventory Management System
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
