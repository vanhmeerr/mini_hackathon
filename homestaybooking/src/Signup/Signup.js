import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, password, confirmPassword } = formData;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Please fill out all required fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Show a success alert
        alert('Signup successful!');
        navigate('/');
    };

    return (
        <div>
            <section className="p-3 p-md-4 p-xl-5">
                <div className="container">
                    <div className="card border-light-subtle shadow-sm">
                        <div className="row g-0">
                            <div className="col-12 col-md-6 text-bg-primary">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="col-10 col-xl-8 py-3">
                                        <img className="img-fluid rounded mb-4" loading="lazy" src="Images/SB.png" width="245" height="80" alt="Swift Book Logo" />
                                        <hr className="border-primary-subtle mb-4" />
                                        <h2 className="h1 mb-4">Experience Unique Stays That Make Your Travels Unforgettable.</h2>
                                        <p className="lead m-0">Book cozy homestays, explore local culture, and create lasting memories with personalized accommodations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-5">
                                                <h3>Sign up</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSignup}>
                                        <div className="row gy-3 gy-md-4 overflow-hidden">
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="first_name" className="form-label">First Name <span className="text-danger">*</span></label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="firstName" 
                                                    id="first_name" 
                                                    placeholder="John" 
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required 
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="last_name" className="form-label">Last Name <span className="text-danger">*</span></label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="lastName" 
                                                    id="last_name" 
                                                    placeholder="Doe" 
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required 
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    name="email" 
                                                    id="email" 
                                                    placeholder="name@example.com" 
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required 
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    name="password" 
                                                    id="password"  
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required 
                                                />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label htmlFor="confirm_password" className="form-label">Confirm Password <span className="text-danger">*</span></label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    name="confirmPassword" 
                                                    id="confirm_password"  
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    required 
                                                />
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" name="terms" id="terms" required />
                                                    <label className="form-check-label text-secondary" htmlFor="terms">
                                                        I agree to the <a href="#!" className="link-secondary text-decoration-none">Terms and Conditions</a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn bsb-btn-xl btn-primary" type="submit">Sign up now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-12">
                                            <hr className="mt-5 mb-4 border-secondary-subtle" />
                                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                                <Link to="/login" className="link-secondary text-decoration-none">Already have an account?</Link>
                                                <Link to="/forgot-password" className="link-secondary text-decoration-none">Forgot password</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="mt-5 mb-4">Or sign up with</p>
                                            <div className="d-flex gap-3 flex-column flex-xl-row">
                                                <a href="#!" className="btn bsb-btn-xl btn-outline-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                    </svg>
                                                    <span className="ms-2 fs-6">Google</span>
                                                </a>
                                                <a href="#!" className="btn bsb-btn-xl btn-outline-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 3.993 2.926 7.307 6.75 7.93v-5.609H4.897V8.05H6.75V6.275c0-1.836 1.066-2.851 2.698-2.851.779 0 1.594.139 1.594.139v1.78h-.898c-.886 0-1.164.551-1.164 1.115v1.593h1.974l-.316 2.321H8.98v5.608c3.824-.623 6.75-3.937 6.75-7.93z" />
                                                    </svg>
                                                    <span className="ms-2 fs-6">Facebook</span>
                                                </a>
                                                <a href="#!" className="btn bsb-btn-xl btn-outline-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                                        <path d="M5.026 15c6.038 0 9.341-5 9.341-9.334 0-.14 0-.282-.01-.422A6.683 6.683 0 0 0 16 3.542a6.56 6.56 0 0 1-1.889.518 3.293 3.293 0 0 0 1.443-1.817 6.57 6.57 0 0 1-2.084.794A3.281 3.281 0 0 0 7.88 6.034a9.325 9.325 0 0 1-6.766-3.429 3.28 3.28 0 0 0 1.015 4.381A3.323 3.323 0 0 1 .64 6.575v.045a3.283 3.283 0 0 0 2.633 3.218 3.288 3.288 0 0 1-.865.115c-.21 0-.417-.02-.616-.059a3.283 3.283 0 0 0 3.066 2.28A6.588 6.588 0 0 1 .78 13.58a9.286 9.286 0 0 0 5.034 1.475" />
                                                    </svg>
                                                    <span className="ms-2 fs-6">Twitter</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signup;
