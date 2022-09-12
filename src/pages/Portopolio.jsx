import React from 'react';
import '../style/Portopolio.css';

const Portopolio = () => {
    return (
        <section id='portopolio'>
            <h5>Apa Saja SKill yang Kupunya?</h5>
            <h2>Kemampuanku</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front End Development</h3>
                    <div className="experience__content">
                        <article className='experience__detail'>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Pengalaman</small>
                            </div>
                        </article>
                        <article className='experience__detail'>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Pengalaman</small>
                            </div>
                        </article>
                        <article className='experience__detail'>
                            <div>
                                <h4>Java Script</h4>
                                <small className='text-light'>Pengalaman</small>
                            </div>
                        </article>
                        <article className='experience__detail'>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Pengalaman</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* batas */}

                <div className="experience_backend">
                    <h3>Back End Development</h3>
                    <div className="experience__content">
                        <article className='experience__detail'>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Pengalaman</small>
                            </div>
                        </article>
                        <article className='experience__detail'>
                            <div>
                                <h4>Java Script</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                        <article className='experience__detail'>
                            <div>
                                <h4>Phython</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portopolio;