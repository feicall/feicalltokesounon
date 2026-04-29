import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const { language, setLanguage } = useLanguage();
    const content = translations[language].navbar;
    const navLinks = content.links;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
                    scrolled || mobileOpen
                        ? "border-b border-white/5 bg-black/60 py-1.5 backdrop-blur-xl"
                        : "bg-transparent py-2.5"
                }`}
            >
                <div className="container mx-auto flex items-center justify-between px-5 md:px-8">
                    <Link to="/" className="relative group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center"
                        >
                            <img
                                src="/Fdev-Logo.png"
                                alt="Fdev Logo"
                                className="h-12 w-auto object-contain drop-shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 md:h-16"
                            />
                        </motion.div>
                    </Link>

                    <div className="hidden flex-1 items-center justify-center md:flex">
                        <div className="flex items-center space-x-1">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;

                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="group relative px-4 py-1.5"
                                    >
                                        <span
                                            className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                                                isActive
                                                    ? "text-white"
                                                    : "text-gray-400 group-hover:text-white"
                                            }`}
                                        >
                                            {link.name}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-active"
                                                className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500"
                                                transition={{ type: "spring", duration: 0.6 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="hidden items-center space-x-6 md:flex">
                        <form className="relative">
                            <select
                                name="language"
                                id="language"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="cursor-pointer appearance-none rounded-full border border-white/10 bg-white/5 px-4 py-1.5 pr-8 text-xs text-gray-300 outline-none transition-all hover:bg-white/10 focus:border-blue-500"
                            >
                                <option value="fr" className="bg-[#0f172a] text-white">
                                    {content.french}
                                </option>
                                <option value="en" className="bg-[#0f172a] text-white">
                                    {content.english}
                                </option>
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            aria-label={mobileOpen ? content.closeMenu : content.openMenu}
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen((open) => !open)}
                            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white transition-colors hover:bg-white/10"
                        >
                            {mobileOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            ) : (
                                <span className="relative block h-5 w-5">
                                    <span className="absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current" />
                                    <span className="absolute left-0 top-[9px] h-[1.5px] w-5 rounded-full bg-current" />
                                    <span className="absolute left-0 bottom-0 h-[1.5px] w-5 rounded-full bg-current" />
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.button
                            type="button"
                            aria-label={content.closeMenu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed left-5 right-5 top-[5.4rem] z-50 overflow-hidden rounded-[1.15rem] border border-white/8 bg-[#1b1b1b]/96 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />

                            <div className="relative mb-4">
                                <p className="text-sm font-medium tracking-[-0.03em] text-slate-500">
                                    {content.brand}
                                </p>
                            </div>

                            <div className="relative rounded-[0.9rem] border border-white/6 bg-[#171717] px-4 py-3">
                                {navLinks.map((link, index) => {
                                    const isActive = location.pathname === link.path;

                                    return (
                                        <motion.div
                                            key={link.path}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ delay: 0.04 * index }}
                                        >
                                            <Link
                                                to={link.path}
                                                className={`block py-3 text-[1.05rem] font-medium tracking-[-0.03em] transition-colors duration-300 ${
                                                    isActive
                                                        ? "text-blue-400"
                                                        : "text-white hover:text-slate-300"
                                                }`}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="relative mt-5 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                                <label
                                    htmlFor="mobile-language"
                                    className="mb-2 block text-[0.65rem] uppercase tracking-[0.28em] text-slate-500"
                                >
                                    {content.language}
                                </label>
                                <select
                                    id="mobile-language"
                                    name="mobile-language"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="w-full appearance-none rounded-lg border border-white/10 bg-[#111111] px-3 py-3 text-sm text-slate-200 outline-none transition-colors focus:border-blue-400"
                                >
                                    <option value="fr">{content.french}</option>
                                    <option value="en">{content.english}</option>
                                </select>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
