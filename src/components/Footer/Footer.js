import React from 'react';
import {
    MDBFooter,
    MDBIcon
} from 'mdb-react-ui-kit';
const Footer = () => {
    return (
        <>
            <MDBFooter className='bg-dark text-center text-white mt-5'>
                <div className='container p-4 pb-0'>
                    <section className='mb-4'>
                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#3b5998' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='facebook-f' />
                        </a>

                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#55acee' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='twitter' />
                        </a>

                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#dd4b39' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='google' />
                        </a>
                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#ac2bac' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='instagram' />
                        </a>

                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#0082ca' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='linkedin-in' />
                        </a>

                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#333333' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='github' />
                        </a>
                    </section>
                </div>

                <div className='text-center p-3'>
                    © 2022 Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        Alamin Sarker
                    </a>
                </div>
            </MDBFooter>
        </>
    );
};

export default Footer;



