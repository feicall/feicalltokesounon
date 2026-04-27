import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Zap,
  RefreshCw,
  ShoppingBag,
  Brain,
  Layers,
  Terminal,
  Settings,
  Rocket,
} from "lucide-react";

import devWebImg from "../../assets/services_img/dev-web.webp";
import apiImg from "../../assets/services_img/api.webp";
import seoImg from "../../assets/services_img/seo.webp";
import refonteImg from "../../assets/services_img/refonte.webp";
import ecomImg from "../../assets/services_img/ecom.webp";

const services = [
  {
    image: devWebImg,
    icon: <Code2 />,
    title: "Développement Web Sur Mesure",
    description:
      "Création d’applications web modernes, rapides et adaptées à tes besoins spécifiques.",
  },
  {
    image: apiImg,
    icon: <Server />,
    title: "Développement d’API & Backend",
    description:
      "Création d’APIs robustes et sécurisées pour connecter tes applications et gérer tes données.",
  },
  {
    image: seoImg,
    icon: <Zap />,
    title: "Optimisation & Performance",
    description:
      "Amélioration de la vitesse, du SEO technique et des performances globales de ton application.",
  },
  {
    image: refonteImg,
    icon: <RefreshCw />,
    title: "Refonte & Optimisation Web",
    description:
      "Je transforme les sites existants en systèmes modernes, rapides et optimisés pour la performance et la conversion.",
  },
  {
    image: ecomImg,
    icon: <ShoppingBag />,
    title: "Boutiques E-commerce Performantes",
    description:
      "Je conçois des boutiques en ligne pensées pour vendre, convertir et évoluer avec ton business.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Analyse & Stratégie",
    goal: "Comprendre avant d’agir",
    description: "Compréhension de ton besoin, analyse des objectifs et définition d’une stratégie claire.",
    icon: <Brain />,
  },
  {
    number: "02",
    title: "Conception & Architecture",
    goal: "Structurer le système",
    description: "Mise en place de l’architecture, du design et des bases techniques du projet.",
    icon: <Layers />,
  },
  {
    number: "03",
    title: "Développement",
    goal: "Construire proprement",
    description: "Développement des fonctionnalités avec une attention particulière à la performance.",
    icon: <Terminal />,
  },
  {
    number: "04",
    title: "Optimisation & Tests",
    goal: "Perfectionner",
    description: "Tests rigoureux, optimisation des performances et de l’expérience utilisateur.",
    icon: <Settings />,
  },
  {
    number: "05",
    title: "Livraison & Suivi",
    goal: "Assurer la réussite",
    description: "Mise en ligne, accompagnement et suivi pour garantir un résultat durable.",
    icon: <Rocket />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

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

const Service = () => {
  return (
    <div className="bg-[#090b12]">
      {/* SECTION SERVICES */}
      <section className="relative py-24 px-6 md:px-12 text-white overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_82%_30%,rgba(99,102,241,0.1),transparent_24%),linear-gradient(180deg,#090b12_0%,#0b1020_55%,#0a1224_100%)]" />
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:86px_86px]" />
        </div>

        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -translate-x-1/2" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* HOOK */}
          <motion.div
            variants={line}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="mt-4 mb-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-slate-300/80 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]" />
              Services
            </span>
          </motion.div>
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Un site web ne suffit plus.
              <br />
              <span className="text-indigo-400">
                Ce qu’il te faut, c’est un système.
              </span>
            </h1>

            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Je conçois et développe des solutions digitales pensées pour performer, automatiser et évoluer.
            </p>
          </div>

          {/* GRID */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 overflow-hidden"
              >
                {/* Glow hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 blur-2xl" />

                {/* Image Zone */}
                <div className="relative h-44 mb-6 overflow-hidden rounded-xl bg-white/5 border border-white/5">
                  <img
                    src={service.image}
                    alt={`${service.title} - service de developpement web et SEO par Feicall Toke Sounon au Benin`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Icon */}
                <div className="mb-4 text-indigo-400 text-3xl">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* SECTION WORKFLOW */}
      <section className="relative py-24 px-6 md:px-12 text-white overflow-hidden border-t border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Badge Workflow */}
          <motion.div
            variants={line}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="mt-4 mb-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-slate-300/80 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_16px_rgba(129,140,248,0.8)]" />
              Workflow
            </span>
          </motion.div>

          {/* Header Workflow */}
          <div className="text-center mb-20">
            <motion.h2
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              Travailler avec un développeur ne devrait <br className="hidden md:block" />
              <span className="text-indigo-400">jamais être flou.</span>
            </motion.h2>
            <motion.p
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Chaque projet suit une méthode précise, pensée pour garantir performance, clarté et résultats. Avec moi, tout est structuré.
            </motion.p>
          </div>

          {/* TIMELINE CONTAINER */}
          <div className="relative">
            {/* Progress Line Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -translate-y-1/2" />

            {/* Progress Line Mobile */}
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/20 via-indigo-500/20 to-transparent" />

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6"
            >
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative group"
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-8 lg:left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-20">
                    <div className="h-4 w-4 rounded-full bg-[#090b12] border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  {/* Card */}
                  <div className="ml-16 lg:ml-0 lg:pt-16 lg:text-center">
                    {/* Large Number */}
                    <span className="block text-5xl font-black text-white/5 mb-4 group-hover:text-indigo-500/10 transition-colors duration-500">
                      {step.number}
                    </span>

                    {/* Icon Circle */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-indigo-400 mb-6 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group-hover:bg-white/[0.04] transition-colors duration-300">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-indigo-400/80 text-xs font-medium uppercase tracking-wider mb-3">
                        {step.goal}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Final Call to Action inside section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
          >
            <p className="text-gray-500 text-sm italic">
              Prêt à lancer ton projet avec cette structure ?
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Service;
