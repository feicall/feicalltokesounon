import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/seo/SEO";
import { pageMeta } from "../components/seo/pageMeta";
import shopImg from "../assets/portfolio/shop-img.webp";
import agroImg from "../assets/portfolio/agro-img.webp";
import amosImg from "../assets/portfolio/amos-img.webp";
import appmusicImg from "../assets/portfolio/appmusic-img.webp";
import ecarnetImg from "../assets/portfolio/ecarnet-img.webp";
import ecomImg from "../assets/portfolio/ecom-img.webp";
import fdevImg from "../assets/portfolio/fdev-img.webp";
import tokoImg from "../assets/portfolio/toko-img.webp";
import tounreImg from "../assets/portfolio/tounre-img.webp";
import tpapyImg from "../assets/portfolio/tpapy-img.webp";
import tokoVid from "../assets/portfolio/toko.mp4";
import tpapyVid from "../assets/portfolio/tpapy.mp4";
import ecomVid from "../assets/portfolio/ecom.mp4";
import appmusicVid from "../assets/portfolio/appmusic.mp4";
import ecarnetVid from "../assets/portfolio/ecarnet.mp4";

const line = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.08,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 42, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const projects = [
    {
        title: "Landing page de vente d'Iphones",
        subtitle: "Mise en lumière des produits dans un cadre attrayant et moderne.",
        image: shopImg,
        status: "live",
        link: "https://shop-flame-psi.vercel.app/",
    },
    {
        title: "Portfolio d'architecte",
        subtitle: "Un projet pensé pour maximiser la valeur et les compétences de ce client",
        image: amosImg,
        status: "live",
        link: "https://amos-portfolio.onrender.com/",
    },
    {
        title: "Site touristique de Tounre",
        subtitle: "Une vitrine digitale qui révèle toute la richesse et les expériences uniques du site touristique Tounre.",
        image: tounreImg,
        status: "live",
        link: "https://tounre.bnasos.com/",
    },
    {
        title: "Portfolio de Dev",
        subtitle: "Plus qu'un portfolio... la première version d'un système conçu pour évoluer et performer.",
        image: fdevImg,
        status: "live",
        link: "https://myportfolio-yydi.onrender.com/",
    },
    {
        title: "Toko&Fils",
        subtitle: "Site vitrine optimisé pour générer des demandes clients et valoriser l'expertise en vitrerie.",
        image: tokoImg,
        status: "demo",
        demoVideo: tokoVid,
    },
    {
        title: "Typapy",
        subtitle: "Une plateforme d'apprentissage conçue pour transformer la connaissance en compétence réelle.",
        image: tpapyImg,
        status: "demo",
        demoVideo: tpapyVid,
    },
    {
        title: "Ecarnet",
        subtitle: "Plateforme conçue pour simplifier la gestion des notes et optimiser le suivi académique.",
        image: ecarnetImg,
        status: "demo",
        demoVideo: ecarnetVid,
    },
    {
        title: "Ecom",
        subtitle: "Infrastructure backend pensée pour gérer, automatiser et faire évoluer une boutique e-commerce.",
        image: ecomImg,
        status: "demo",
        demoVideo: ecomVid,
    },
    {
        title: "App Music",
        subtitle: "Une expérience d'écoute fluide, rapide et parfaitement organisée.",
        image: appmusicImg,
        status: "demo",
        demoVideo: appmusicVid,
    },
    {
        title: "AgroMarket ",
        subtitle: "Une plateforme qui rapproche les producteurs bio des consommateurs à travers une expérience d'achat simple, rapide et responsable.",
        image: agroImg,
        status: "building",
    },
];

const Portfolio = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section className="relative overflow-hidden bg-[#090b12] px-6 py-24 text-white md:px-12">
            <SEO {...pageMeta.portfolio} />
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_82%_30%,rgba(99,102,241,0.1),transparent_24%),linear-gradient(180deg,#090b12_0%,#0b1020_55%,#0a1224_100%)]" />
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:86px_86px]" />
            </div>

            <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <motion.div
                        variants={line}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.6 }}
                        className="mt-4 mb-8 flex justify-center"
                    >
                        <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-slate-300/80 backdrop-blur-xl">
                            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]" />
                            Réalisations
                        </span>
                    </motion.div>

                    <h1 className="text-3xl font-bold leading-tight md:text-4xl">
                        Des projets pensés pour durer,
                        <br />
                        <span className="mt-2 block bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                            performer et convaincre.
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-gray-400">
                        Des systèmes conçus pour performer, automatiser et évoluer.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.12 }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/12 via-blue-500/8 to-transparent blur-2xl" />

                            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-slate-950/40 p-3">
                                <motion.img
                                    src={project.image}
                                    alt={`${project.title} - projet de developpement web realise par Feicall Toke Sounon au Benin`}
                                    loading="lazy"
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                    className="h-full w-full rounded-lg object-contain"
                                />

                                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
                                    {project.status === "live" && (
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            initial={{ opacity: 0, y: 14 }}
                                            whileHover={{ scale: 1.04 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3 }}
                                            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
                                        >
                                            Voir le projet
                                        </motion.a>
                                    )}

                                    {project.status === "demo" && (
                                        <motion.button
                                            onClick={() => setActiveVideo(project.demoVideo)}
                                            initial={{ opacity: 0, y: 14 }}
                                            whileHover={{ scale: 1.04 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3 }}
                                            className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white"
                                        >
                                            Voir la démo
                                        </motion.button>
                                    )}

                                    {project.status === "building" && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 14 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3 }}
                                            className="rounded-lg bg-yellow-500/20 px-4 py-2 text-sm text-yellow-400"
                                        >
                                            En cours
                                        </motion.span>
                                    )}
                                </div>
                            </div>

                            <div className="relative p-6">
                                <motion.h3
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.45, delay: 0.08 }}
                                    className="mb-1 text-lg font-semibold"
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.45, delay: 0.14 }}
                                    className="mb-4 text-sm text-gray-400"
                                >
                                    {project.subtitle}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
                    <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                        Un portfolio orienté résultats, visibilité et crédibilité.
                    </h2>
                    <p className="mt-5 text-base leading-8 text-slate-300">
                        Ce portfolio rassemble des réalisations web pensées pour la performance, le référencement naturel,
                        l&apos;expérience utilisateur et la conversion. Chaque projet illustre une approche concrète du
                        développement full stack appliquée à des besoins réels au Bénin et au-delà.
                    </p>
                </div>

                <AnimatePresence>
                    {activeVideo && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveVideo(null)}
                        >
                            <motion.div
                                className="relative w-[90%] max-w-3xl"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <video
                                    src={activeVideo}
                                    controls
                                    autoPlay
                                    className="w-full rounded-xl"
                                />

                                <button
                                    onClick={() => setActiveVideo(null)}
                                    className="absolute -top-10 right-0 text-sm text-white"
                                >
                                    Fermer ×
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Portfolio;
