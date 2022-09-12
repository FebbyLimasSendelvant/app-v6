import React from 'react';
import Me from '../assets/css.png';
import '../style/Blog.css'
const Blog = () => {
    return (
        <section id='blog'>
            <h5>Blog's</h5>
            <h2>Yuk Baca!!!</h2>

            <div className="container blog__container">
                <div className="blog__me">
                    <div className="blog__me-image">
                        <img src={Me} alt="blogimage" />
                    </div>
                </div>
                <div className="blog__content">
                    <p>
                    CSS adalah salah satu bahasa yang wajib Anda ketahui saat belajar membuat website. Tanpanya, tampilan website akan kurang menarik, dan perlu upaya lebih untuk melakukan perubahan pada elemen tampilan. 
                    </p>
                    <a href="https://www.niagahoster.co.id/blog/pengertian-css/" className='btn'>Detail</a>
                </div>
            </div>
        </section>
    );
};

export default Blog;