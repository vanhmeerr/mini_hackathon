import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hmsty1 from '../Assets/hmsty1.jpeg';
import hmsty2 from '../Assets/hmsty2.jpeg';
import hmsty3 from '../Assets/hmsty3.jpeg';
import { useNavigate } from 'react-router-dom';

const List = () => {
    const [homestay, setHomestay] = useState('');

    // Function to handle booking action
    const handleBooking = (homestay) => {
        setHomestay(homestay);
    };

    // Generate URLs or parameters based on the homestay name
    const url = `/Bookingpage?homestay=${homestay}`;

    return (
        <div className='container text-center mt-5'>
            <h1 className="text-center mb-5 display-4">List of Homestays</h1>
            <div className="card-list col d-flex justify-content-center flex-wrap">

                <div className="card mb-3" style={{ width: "18rem" }}>
                    <img src={hmsty1} className="card-img-top h-50" alt="Cozy Homestay" />
                    <div className="card-body">
                        <h5 className="card-title">Cozy Homestay</h5>
                        <p className="card-text">Escape to a tranquil retreat with mountain views. Enjoy elegant rooms, free Wi-Fi, and complimentary breakfast—perfect for a peaceful getaway.</p>
                        <p><strong>Starting from RM 499</strong></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link
                            to="/Bookingpage?homestay=Cozy Homestay"
                            className="btn btn-primary"
                            onClick={() => handleBooking('Cozy Homestay')}>
                            Reserve or Book Now
                        </Link>
                    </div>
                </div>

                <div className="card mb-3" style={{ width: "18rem" }}>
                    <img src={hmsty2} className="card-img-top h-50" alt="Nha Homestay" />
                    <div className="card-body">
                        <h5 className="card-title">Nha Homestay</h5>
                        <p className="card-text">Nestled in lush greenery, our retreat offers cozy rooms, stunning valley views, and a hearty breakfast. Relax and unwind in a peaceful setting.</p>
                        <p><strong>Starting from RM 499</strong></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link
                            to="/Bookingpage?homestay=Nha Homestay"
                            className="btn btn-primary"
                            onClick={() => handleBooking('Nha Homestay')}>
                            Reserve or Book Now
                        </Link>
                    </div>
                </div>

                <div className="card mb-3" style={{ width: "18rem" }}>
                    <img src={hmsty3} className="card-img-top h-50" alt="Nha Minh Homestay" />
                    <div className="card-body">
                        <h5 className="card-title">Nha Minh Homestay</h5>
                        <p className="card-text">Experience comfort and charm with breathtaking hillside views, modern rooms, and a complimentary breakfast. Ideal for a restful escape.</p>
                        <p><strong>Starting from RM 499</strong></p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <Link
                            to="/Bookingpage?homestay=Nha Minh Homestay"
                            className="btn btn-primary"
                            onClick={() => handleBooking('Nha Minh Homestay')}>
                            Reserve or Book Now
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default List;
