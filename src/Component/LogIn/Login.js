import React from 'react';
import './LogIn.css'
import log from '../../Image/Login/log.PNG'
import llog from '../../Image/Logo/logo2.png'
import { Form, Nav } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <section>
                <div className='log-flex'>
                    <div className='log-w-img'>
                        <img className='l-w-i' src={log} alt='' />
                    </div>
                    <div className='log-info mt-5'>
                        <div className='l-logo'>
                            <img className='lll-img' src={llog} alt='' />
                        </div>
                        <h4 className='log-h4'>Nice to see you again</h4>
                        <div className='l-form'>
                            <from>
                                <h6 className='f-t mt-4'>Login</h6>
                                <input className='login-input' type='email' placeholder='Email or phone number' />
                                <h6 className='f-t mt-4'>Password</h6>
                                <input className='login-input' type='password' placeholder='Enter password' />
                                <div className='d-flex mt-3 justify-content-between'>
                                    <div>
                                        <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label="Remember me"
                                        />
                                    </div>
                                    <div>
                                        <Nav.Link className='forget-p'>Forgot password?</Nav.Link>
                                    </div>
                                </div>
                                <br />
                                <button className='log-btn'>Sign in</button>
                                <div className='devider'></div>
                                <button className='log-btn-google'><FcGoogle className='g-icon' />Or sign in with Google</button>
                            </from>
                            <div className='d-flex justify-content-center'>
                                <p className='mt-3'>Dont have an account?</p><Nav.Link as={Link} to='/register' className='mt-2'>Sign up now</Nav.Link>
                            </div>
                        </div>
                        <div>
                            <p className='copy-write' style={{fontSize: '13px'}}>© crossfit 2022</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;