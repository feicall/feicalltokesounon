import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroProfile from "../../assets/hero-profile.webp";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export default function Hero() {
    const [pointer, setPointer] = useState({ x: 0, y: 0 });
    const [typedRole, setTypedRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const { language } = useLanguage();
    const content = translations[language].hero;
    const roleTexts = content.roles;

    useEffect(() => {
        const handlePointerMove = (event) => {
            const x = (event.clientX / window.innerWidth - 0.5) * 2;
            const y = (event.clientY / window.innerHeight - 0.5) * 2;
            setPointer({ x, y });
        };

        window.addEventListener("mousemove", handlePointerMove);
        return () => window.removeEventListener("mousemove", handlePointerMove);
    }, []);

    useEffect(() => {
        setTypedRole("");
        setIsDeleting(false);
        setRoleIndex(0);
    }, [language]);

    useEffect(() => {
        const currentRole = roleTexts[roleIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting && typedRole.length < currentRole.length) {
                setTypedRole(currentRole.slice(0, typedRole.length + 1));
                return;
            }

            if (!isDeleting && typedRole.length === currentRole.length) {
                setIsDeleting(true);
                return;
            }

            if (isDeleting && typedRole.length > 0) {
                setTypedRole(currentRole.slice(0, typedRole.length - 1));
                return;
            }

            setIsDeleting(false);
            setRoleIndex((current) => (current + 1) % roleTexts.length);
        }, typedRole.length === currentRole.length && !isDeleting ? 1500 : isDeleting ? 45 : 85);

        return () => clearTimeout(timeout);
    }, [typedRole, isDeleting, roleIndex, roleTexts]);

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#0B0B0B] pt-24 text-white" translate="no">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.18),transparent_26%),radial-gradient(circle_at_82%_24%,rgba(99,102,241,0.16),transparent_28%),linear-gradient(140deg,#050505_0%,#0a0c14_45%,#0d1327_100%)]" />
                <motion.div
                    animate={{ x: pointer.x * -18, y: pointer.y * -18 }}
                    transition={{ type: "spring", stiffness: 40, damping: 16 }}
                    className="absolute left-[12%] top-[12%] h-64 w-64 rounded-full bg-blue-500/20 blur-[120px]"
                />
                <motion.div
                    animate={{ x: pointer.x * 22, y: pointer.y * 18 }}
                    transition={{ type: "spring", stiffness: 40, damping: 16 }}
                    className="absolute bottom-[12%] right-[8%] h-72 w-72 rounded-full bg-indigo-500/20 blur-[140px]"
                />
                <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:84px_84px]" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 sm:px-8 lg:px-12">
                <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <div className="max-w-2xl">
                        <div className="sm:hidden">
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                                className="relative max-w-sm overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_40px_rgba(15,23,42,0.28)] backdrop-blur-2xl"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />

                                <div className="relative mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-gradient-to-r from-blue-400/80 to-transparent" />
                                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-slate-300/80">
                                        {content.mobileBadge}
                                    </span>
                                </div>

                                <p className="relative mb-4 text-lg font-medium leading-relaxed tracking-[-0.03em] text-slate-100">
                                    {content.mobileLeadTop}
                                </p>

                                <p className="relative mb-6 text-lg font-medium leading-relaxed tracking-[-0.03em] text-slate-100/92">
                                    {content.mobileLeadBottom}
                                </p>

                                <div className="relative mb-6">
                                    <div className="absolute -inset-x-2 -inset-y-1 rounded-2xl bg-blue-500/10 blur-xl" />
                                    <p className="relative bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-2xl font-bold leading-[1.02] tracking-[-0.05em] text-transparent drop-shadow-[0_0_18px_rgba(96,165,250,0.18)]">
                                        Feiçall TOKE SOUNON
                                    </p>
                                </div>

                                <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                    <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-cyan-300 to-blue-500" />
                                    <p className="relative text-lg font-medium leading-relaxed tracking-[-0.03em] text-slate-100">
                                        {content.mobileStatement}
                                    </p>
                                </div>

                                <div className="relative flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.75)]" />
                                    <p className="relative text-sm leading-relaxed tracking-[0.01em] text-slate-300/80">
                                        {content.mobileMeta}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="hidden sm:block">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: 0.2 }}
                                className="max-w-2xl text-xl font-medium leading-[1.35] tracking-[-0.03em] text-slate-200 sm:text-2xl"
                            >
                                {content.introTopA}
                                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                                    {content.introTopB}
                                </span>
                                {content.introTopC}
                                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                                    {content.introTopD}
                                </span>
                                {content.introTopE}
                                <br />
                                {content.introBottomA}
                                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                                    {content.introBottomB}
                                </span>
                                {content.introBottomC}
                                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                                    {content.introBottomD}
                                </span>
                                {content.introBottomE}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 22 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.38 }}
                                className="mt-6 max-w-xl"
                            >
                                <p className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-5xl">
                                    {content.welcome}{" "}
                                    <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                                        Feiçall TOKE SOUNON
                                    </span>
                                </p>

                                <div className="mt-5">
                                    <p className="text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-slate-100 sm:text-3xl">
                                        <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(59,130,246,0.18)]">
                                            {typedRole}
                                        </span>
                                        <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-blue-300 align-[-4px]" />
                                    </p>
                                </div>

                                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                                    {content.description}
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.54 }}
                            className="mt-10 flex flex-col gap-4 sm:flex-row"
                        >
                            <Link
                                to="/portfolio"
                                className="inline-flex items-center justify-center rounded-full border border-blue-400/40 bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:bg-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]"
                            >
                                {content.ctaProjects}
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:border-white/25 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                            >
                                {content.ctaContact}
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 34, scale: 0.97 }}
                        animate={{
                            opacity: 1,
                            x: pointer.x * -10,
                            y: pointer.y * -8,
                            scale: 1,
                        }}
                        transition={{
                            opacity: { duration: 0.9, delay: 0.35 },
                            x: { type: "spring", stiffness: 24, damping: 18 },
                            y: { type: "spring", stiffness: 24, damping: 18 },
                            scale: { duration: 0.8, delay: 0.35 },
                        }}
                        className="relative mx-auto mt-6 w-full max-w-[440px] sm:max-w-[500px] lg:mt-1"
                    >
                        <div className="absolute inset-x-8 bottom-6 top-14 rounded-[2rem] bg-blue-500/20 blur-[90px] sm:inset-x-10" />
                        <div className="absolute -right-4 top-6 h-24 w-24 rounded-full border border-blue-400/20 bg-blue-400/10 blur-xl" />
                        <div className="relative">
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-blue-500/20 via-transparent to-transparent blur-2xl" />
                            <img
                                src={heroProfile}
                                alt="Développeur web full stack au Bénin - Feiçall Toke Sounon"
                                fetchPriority="high"
                                className="relative z-10 h-[360px] w-full rounded-[2rem] object-cover object-top shadow-[0_0_70px_rgba(15,23,42,0.5)] sm:h-[470px] lg:h-[500px]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
