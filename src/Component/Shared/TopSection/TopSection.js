import React from 'react';
import './TopSection.css'
import { BsBell } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Container } from 'react-bootstrap';
const TopSection = () => {
    return (
        <div>
            <div className='top-section'>
                <Container>

                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-10 col-12'>

                        </div>
                        <div className='col-md-2 col-12'>
                            <div className='d-flex'>
                                <BsBell className='top-ico' />
                                <MdOutlineShoppingCart className='top-ico' />
                                <FaRegUser className='top-ico' />
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default TopSection;