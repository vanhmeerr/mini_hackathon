import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            alert('Please fill out all required fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();

            if (data.message === 'Login successful!') {
                alert(data.message);
                localStorage.setItem('user', JSON.stringify(data.user)); // Save user data to local storage
                navigate('/home'); // Redirect to the home page
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed. Please try again later.');
        }
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
                                                <h3>Log in</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={handleLogin}>
                                        <div className="row gy-3 gy-md-4 overflow-hidden">
                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                                                    <label className="form-check-label text-secondary" htmlFor="remember_me">
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn bsb-btn-xl btn-primary" type="submit">Log in now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-12">
                                            <hr className="mt-5 mb-4 border-secondary-subtle" />
                                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                                <Link to="/signup" className="link-secondary text-decoration-none">Create new account</Link>
                                                <Link to="/forgot-password" className="link-secondary text-decoration-none">Forgot password</Link>
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

export default Login;
