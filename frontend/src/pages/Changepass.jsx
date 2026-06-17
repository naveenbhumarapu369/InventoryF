import {Link} from 'react-router-dom';
import "../App.css";

function ChangePass() {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="card shadow-lg border-0 overflow-hidden" style={{ minHeight: "700px" }}>
            <div className="row g-0">

              {/* Left Side Image */}
              <div className="col-md-6 login-image text-white d-flex align-items-start" style={{ minHeight: "700px" }}>
                <div className="px-5" style={{ marginTop: "130px" }}>
                  <h1 className="fw-bold display-4">Security First, Always</h1>
                  <p className="fs-5">
                    Keep your account secure by using 
                    <br/> 
                    a strong and unique password. 
                  </p>
                </div>
              </div>

              {/* Right Side Form */}
              <div className="col-md-6 bg-light" style={{ minHeight: "700px" }}>
                <div className="p-5 h-100 d-flex flex-column justify-content-center">

                  <Link
										to="/login"
										className="text-decoration-none mb-3"
									>
										← Back to Login Page
									</Link>

                  <h1 className="fw-bold">Change Password</h1>

                  <p className="text-muted mb-4">
                    For your security, please choose a strong password
                    that you haven't used before.
                  </p>

                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Old Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter old password"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <button className="btn btn-primary w-100 mb-3">
                    Update Password
                  </button>

                  <div className="text-center mb-3">
                    <span>or</span>
                  </div>

                  <button className="btn btn-outline-secondary w-100">
                    Cancel
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePass;