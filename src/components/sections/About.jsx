import { motion } from "framer-motion";
import aboutProfile from "../../assets/about-profil.webp";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.1,
        },
    },
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

const skillGroups = [
    {
        title: "Frontend Engineering",
        items: [
            { name: "HTML-CSS-JS", value: 80 },
            { name: "Bootstrap", value: 85 },
            { name: "React", value: 90 },
            { name: "TailwindCSS", value: 95 },
            { name: "Framer Motion", value: 85 },
            { name: "Responsive Design", value: 92 },
        ],
    },
    {
        title: "Backend & Systems",
        items: [
            { name: "PHP-Laravel", value: 80 },
            { name: "Python-Django", value: 75 },
            { name: "Java EE", value: 68 },
            { name: "API REST", value: 75 },
            { name: "MYSQL-Postgresql", value: 80 },
        ],
    },
    {
        title: "SEO & Optimization",
        items: [
            { name: "SEO technique", value: 80 },
            { name: "Performance web", value: 85 },
            { name: "Structure HTML optimisée", value: 90 },
        ],
    },
];

function SkillCard({ title, items, index }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
            <div className="relative">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">{title}</h3>

                <div className="mt-6 space-y-4">
                    {items.map((item, itemIndex) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.08 + itemIndex * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="mb-2 flex items-center justify-between gap-3">
                                <span className="text-sm font-medium text-slate-200">{item.name}</span>
                                <span className="text-xs tracking-[0.18em] text-slate-400">{item.value}%</span>
                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-800/90">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.value}%` }}
                                    viewport={{ once: true, amount: 0.7 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.15 + itemIndex * 0.06,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-500 shadow-[0_0_16px_rgba(59,130,246,0.45)]"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}

export default function About() {
    return (
        <>
            <section className="relative overflow-hidden bg-[#090b12] py-20 text-white sm:py-24 lg:py-28" translate="no">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_82%_30%,rgba(99,102,241,0.1),transparent_24%),linear-gradient(180deg,#090b12_0%,#0b1020_55%,#0a1224_100%)]" />
                    <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:86px_86px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <motion.div
                        variants={line}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.6 }}
                        className="mb-8 flex justify-center"
                    >
                        <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-slate-300/80 backdrop-blur-xl">
                            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]" />
                            À propos
                        </span>
                    </motion.div>

                    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.97, y: 24 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="order-1 mx-auto w-full max-w-[400px] lg:order-2 lg:max-w-[500px]"
                        >
                            <div className="relative">
                                <div className="absolute inset-x-8 bottom-6 top-10 rounded-[2rem] bg-blue-500/18 blur-[90px]" />
                                <div className="absolute -right-4 top-5 h-24 w-24 rounded-full bg-blue-400/10 blur-xl" />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    src={aboutProfile}
                                    alt="Portrait de Feiçall Toke Sounon"
                                    className="relative z-10 h-[400px] w-full rounded-[2rem] object-cover object-top shadow-[0_24px_80px_rgba(0,0,0,0.42)] sm:h-[500px] lg:h-[520px]"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="order-2 max-w-[44rem] lg:order-1"
                        >
                            <motion.h1
                                variants={line}
                                className="max-w-3xl text-[1.5rem] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[1.9rem] lg:text-[2.25rem]"
                            >
                                Certains construisent des interfaces. 
                                <span className="mt-2 block bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                                    Moi, je construis des systèmes.
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={line}
                                className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
                            >
                                Je suis <span className="font-semibold text-white">Feiçall Toke Sounon</span>,
                                développeur fullstack spécialisé dans la création de systèmes digitaux
                                performants et orientés résultats.
                            </motion.p>

                            <motion.p
                                variants={line}
                                className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
                            >
                                Je conçois des interfaces, développe des APIs robustes et mets en place
                                des systèmes automatisés dans une approche premium, précise et scalable.
                            </motion.p>

                            <motion.div
                                variants={line}
                                className="mt-7 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
                            >
                                <p className="text-base leading-8 text-slate-200 sm:text-lg">
                                    Là où beaucoup livrent des sites…<br />
                                    <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text font-medium text-transparent">
                                        je construis des solutions pensées pour générer de la valeur.
                                    </span>
                                </p>
                            </motion.div>

                            <motion.div
                                variants={line}
                                className="mt-7 border-l border-blue-400/25 pl-5"
                            >
                                <p className="text-base leading-8 text-slate-300 sm:text-lg">
                                    Mon objectif est simple :<br />
                                    créer des systèmes qui ne se contentent pas de fonctionner,<br />
                                    <span className="font-medium text-white">mais qui performent.</span>
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#070a12] py-20 text-white sm:py-24 lg:py-28" translate="no">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(99,102,241,0.12),transparent_24%),linear-gradient(180deg,#06080f_0%,#09101e_55%,#0a1324_100%)]" />
                    <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:88px_88px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <div className="mb-6 flex justify-center">
                            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-slate-300/80 backdrop-blur-xl">
                                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]" />
                                Compétances
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                            Mes outils ne me définissent pas.
                            <span className="mt-2 block bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                                Ce que je construis avec, oui.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                            Une stack pensée pour la performance, la scalabilité et l’impact réel.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {skillGroups.map((group, index) => (
                            <SkillCard key={group.title} title={group.title} items={group.items} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
