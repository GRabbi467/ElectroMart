import React from 'react';
import './BannerItem.css';
import {FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-1/5">
                <div className='carousel-img '>
                    <img src={image} alt="" className="w-full" />
                </div>
                <div className=" invisible lg:visible absolute flex justify-end transform -translate-y-1/2 right-24 top-1/4">
                    <h1 className='text-xl lg:text-6xl font-bold font-serif text-orange-400'>
                        We Offer Best <br />
                        Price for All kind <br />
                        Of Electronics
                    </h1>
                </div>
                <div className=" invisible lg:visible absolute flex justify-end transform -translate-y-1/2 w-2/5 right-24 top-1/2">
                    <p className=' text-xl  font-mono text-white'>
                        There are many variations of passages of  available <br /> but the majority have suffered alteration in some form
                        </p>
                </div>
                
                <div className="invisible lg:visible absolute flex justify-center transform -translate-y-1/2 w-2/5 right-24 top-3/4">
                    <Link to ='/'><button className="btn btn-warning border border-none rounded-full text-xl  hover:bg-orange-400">SHOP NOW<FaLongArrowAltRight></FaLongArrowAltRight></button></Link>
                </div>
                <div className="visible lg:invisible absolute flex justify-end transform -translate-y-1/2 w-2/5 right-5 top-3/4">
                    <Link to = '/'><button className=" btn btn-warning border border-none rounded-full text-xl  hover:bg-orange-400"><FaLongArrowAltRight></FaLongArrowAltRight></button></Link>
                </div>
                <div className="invisible lg:visible absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5 hover:bg-orange-400">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle hover:bg-orange-400">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;
