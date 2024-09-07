"use client"

import React from "react";
import { motion } from 'framer-motion';
import { CssBaseline, Container } from '@mui/material';
import { Box, Typography, Grid } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

import Content from "@/content";
import Navbar from "./Navbar";
function Home() {

    const images = [
        '/images/image_new_1.jpg',
        '/images/image_new_2.jpg',
        '/images/image_new_3.jpg',
        '/images/image_new_4.jpg',
        '/images/image_new_5.jpg',
        '/images/image_new_6.jpg'
    ];

    return (
        <div className="App">
            {/* <Head>
                <title>{Content.homePageTitle}</title>
                <meta name="description" content={Content.homePageDescription} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": Content.homePageTitle,
                            "description": Content.homePageDescription,
                            "url": "https://arc-sunil.vercel.app",
                        }),
                    }}
                />
            </Head> */}
            <Navbar/>
            <CssBaseline />

            <Box id="Home" sx={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '8px', marginBottom: '20px' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <Typography variant="h3" component="h3" gutterBottom>
                        My Portfolio
                    </Typography>
                </motion.div>
                <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
                    <Typography variant="body1">
                        Sunil Kumar, with over 6 years of experience in designing beautiful homes, welcomes you to explore my work and expertise in architecture.
                    </Typography>
                </motion.div>
            </Box>
            <Box sx={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '8px', marginBottom: '20px' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        My Work
                    </Typography>
                </motion.div>
                <Grid container spacing={3} justifyContent="center">
                    {images.map((src, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                                style={{ position: "relative", width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}
                            >
                                <Image
                                    src={src}
                                    fill={true}
                                    alt={`Work ${index + 1}`}
                                    style={{ position: "absolute", width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box id="About" sx={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '8px', marginBottom: '20px' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        About
                    </Typography>
                </motion.div>
                <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
                    <Typography variant="body1">
                        I am an experienced architect and interior designer with a passion for creating spaces that are both functional and aesthetically pleasing. With over 6 years of experience and successfully completed numerous projects ranging from residential homes to commercial spaces. My attention to detail and creative approach to design have earned him recognition and praise from clients and peers alike.
                    </Typography>
                </motion.div>
            </Box>
            <Box id="Contact" sx={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '8px', marginBottom: '20px' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Contact Information
                    </Typography>
                </motion.div>
                <motion.div initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
                    <Grid container spacing={2} justifyContent="center" className='footer_bx'>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body1" component="div" style={{ display: "flex", justifyContent: 'center' }}>
                                <Link href='mailto:Sunil.sk.kumar93@gmail.com'><Email /> Sunil.sk.kumar93@gmail.com </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body1" component="div" style={{ display: "flex", justifyContent: 'center' }}>
                                <Link href='tel:+919816724796'><Phone /> (+91) 9816724796</Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="body1" component="div" style={{ display: "flex", justifyContent: 'center' }}>
                                <LocationOn /> 2479 2nd Floor Sector 71 SAS Nagar Mohali
                            </Typography>
                        </Grid>
                        {/* Add more contact methods with icons as needed */}
                    </Grid>
                </motion.div>
            </Box>
        </div>
    );
}

export default Home;
