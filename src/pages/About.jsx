import React from 'react';
import Me from '../assets/self2.jpg';
import '../style/About.css'

const About = () => {
    return (
        <section id='about'>
            <h5>Tentang Aku</h5>
            <h2>Lebih Detail</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="Aboutimage" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <h5>
                                Pengalaman
                            </h5>
                            <small>+3 Tahun terakhir</small>
                        </article>
                        <article className='about__card'>
                            <h5>
                                Pekerjaan
                            </h5>
                            <small>+10 Pekerjaan</small>
                        </article>
                        <article className='about__card'>
                            <h5>
                                Proyek
                            </h5>
                            <small>+50 Completed</small>
                        </article>
                    </div>
                    <p>
                        Saya adalah lulusan dari Fakultas Teknik dengan Prodi Teknik Informatika. Saya memiliki kemampuan dalam mengoperasikan Ms. Office dengan baik, memiliki kemampuan dasar Front End Developer meliputi HTML, CSS, JavaScript, React JS. Saya mampu bekerja secara individu atau secara Team
                    </p>
                    <a href="http://" className='btn'>Contact me</a>
                </div>
            </div>
        </section>
    );
};

export default About;