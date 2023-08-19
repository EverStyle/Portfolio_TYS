import { useState } from 'react'
import React from 'react';
import './comp_styles/ContactScroll.css';
import { CSSTransition } from 'react-transition-group';
export function LeftInfo() {
    return (
        <div className='contact_container'>
            <div className='contact_img_block'>
                <div className="telegram-icon-container">
                    <CSSTransition
                        in={true}
                        timeout={300}
                        classNames="telegram-icon-transition"
                        unmountOnExit
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="0.65em"
                            fill="currentColor"
                            viewBox="0 0 496 512"
                            className="telegram-icon"
                        >
                            <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
                        </svg>

                    </CSSTransition>
                </div>
            </div>
            <div className='contact_img_block'>
                <div className="github-icon-container">
                    <CSSTransition
                        in={true}
                        timeout={300}
                        classNames="github-icon-transition"
                        unmountOnExit
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="github-icon"
                        >
                            <path d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58l-.01-1.98c-3.34.73-4.04-1.5-4.04-1.5a3.18 3.18 0 0 0-1.34-1.75c-1.1-.75.09-.73.09-.73a2.51 2.51 0 0 1 1.82 1.22a2.57 2.57 0 0 0 3.52 1a2.53 2.53 0 0 1 .75-1.59c-2.63-.3-5.4-1.31-5.4-5.89a4.61 4.61 0 0 1 1.23-3.21a4.29 4.29 0 0 1 .12-3.16s1-.32 3.3 1.22a11.38 11.38 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22a4.29 4.29 0 0 1 .12 3.16a4.61 4.61 0 0 1 1.23 3.21c0 4.59-2.77 5.59-5.41 5.89a2.79 2.79 0 0 1 .77 2.19l-.01 3.24c0 .32.21.7.82.58A12 12 0 0 0 12 0z" />
                        </svg>
                    </CSSTransition>
                </div>
            </div>
            <div className='contact_img_block'>
                <div className="vk-icon-container">
                    <CSSTransition
                        in={true}
                        timeout={300}
                        classNames="vk-icon-transition"
                        unmountOnExit
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="0.625em"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                            className="vk-icon"
                        >
                            <path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z" />
                        </svg>
                    </CSSTransition>
                </div>
            </div>
            {/* <div className='contact_img_block'>
                Four
            </div>
            <div className='contact_img_block'>
                Five
            </div> */}
        </div>
    );
}
export function RightInfo() {
    return (
        <div className='contact_container'>
            <div className='imail_block'>
                <div className="rotating-email-link-container">
                    <a
                        href="mailto:your.email@example.com"
                        className="rotating-email-link"
                    >
                        your.email@example.com
                    </a>
                </div>
            </div>
            <div className='imail_img'>
                Imail img
            </div>
        </div>
    );
}

