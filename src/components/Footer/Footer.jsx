import React from 'react'
import Logo from "../../assets/logo.png";
import Banner from "../../assets/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
};

const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/#"
    },
    {
        id: 2,
        title: "About",
        link: "/#about"
    },
    {
        id: 3,
        title: "Contact",
        link: "/#contact"
    },
    {
        id: 4,
        title: "Blog",
        link: "/#blog"
    },
];

const Links = [
    {
        id: 1,
        title: "Top Rated",
        link: "/#"
    },
    {
        id: 2,
        title: "Kids Wear",
        link: "/#"
    },
    {
        id: 3,
        title: "Men's Wear",
        link: "/#"
    },
    {
        id: 4,
        title: "Electronics",
        link: "/#"
    },
];

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white'>
        <div className='container px-8 sm:px-16'>
            <div 
            data-aos="zoom-in"
            className='grid md:grid-cols-3 pb-44 pt-5'
            >
                <div className='py-8 px-4'>
                    <h1
                    className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'
                    >
                        <img src={Logo} alt="" 
                        className='max-w-[50px]'
                        />
                        SnapKart
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, pariatur saepe. Assumenda nihil facilis reprehenderit!</p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 
                            className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'
                            >Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link)=>(
                                        <li 
                                        className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' 
                                        key={link.id}
                                        >
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='py-8 px-4'>
                            <h1 
                            className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'
                            >Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    Links.map((link)=>(
                                        <li 
                                        className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' 
                                        key={link.id}
                                        >
                                            <span>{link.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center gap-3 mt-10'>
                            <a href="#">
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl' />
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl' />
                            </a>
                        </div>

                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Indore, Madhya Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt />
                                <p>+91 1234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;