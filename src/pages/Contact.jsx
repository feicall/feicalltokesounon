import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import SEO from "../components/seo/SEO";
import { pageMeta } from "../components/seo/pageMeta";

const GOOGLE_FORM_WIDTH = 800;
const GOOGLE_FORM_HEIGHT = 820;
const GOOGLE_FORM_BREAKPOINT = 768;
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeInoWl0tDqcVR0PjXYee3W6_U4Pb437zPTKdQxUkotxdUfXw/viewform";
const GOOGLE_FORM_EMBED_URL = `${GOOGLE_FORM_URL}?embedded=true`;

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

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const fieldMotion = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const form = useRef(null);
  const googleFormRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [googleFormScale, setGoogleFormScale] = useState(1);
  const [showEmbeddedGoogleForm, setShowEmbeddedGoogleForm] = useState(true);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  useEffect(() => {
    const updateGoogleFormScale = () => {
      const isDesktopLayout = window.innerWidth >= GOOGLE_FORM_BREAKPOINT;
      setShowEmbeddedGoogleForm(isDesktopLayout);

      if (!googleFormRef.current || !isDesktopLayout) {
        setGoogleFormScale(1);
        return;
      }

      const availableWidth = googleFormRef.current.offsetWidth;
      setGoogleFormScale(Math.min(1, availableWidth / GOOGLE_FORM_WIDTH));
    };

    updateGoogleFormScale();
    window.addEventListener("resize", updateGoogleFormScale);

    return () => window.removeEventListener("resize", updateGoogleFormScale);
  }, []);

  const isEmailValid = emailRegex.test(email.trim());
  const showEmailError = emailTouched && email.trim() !== "" && !isEmailValid;

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!isEmailValid) {
      setEmailTouched(true);
      setStatus({
        type: "error",
        message: "Entre une adresse email valide avant d'envoyer ton message.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      form.current?.reset();
      setEmail("");
      setEmailTouched(false);
      setStatus({
        type: "success",
        message: "Message envoyé avec succès. Je reviens vers toi très vite.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "L'envoi a échoué. Réessaie dans un instant ou utilise le brief avancé.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#090b12] px-6 py-24 text-white md:px-12">
      <SEO {...pageMeta.contact} />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_25%),linear-gradient(180deg,#090b12_0%,#0b1020_60%,#0a1224_100%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="absolute left-1/2 top-[22%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute right-[10%] top-[55%] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.div
            variants={line}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-slate-300/80 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]" />
              Contacts
            </span>
          </motion.div>

          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Construisons plus qu&apos;un site.
            <br />
            <span className="text-indigo-400">Créons un système.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Décris ton projet avec précision. Je reviens vers toi avec une approche claire, pensée pour performer.
          </p>

          <p className="mt-3 text-sm italic text-gray-500">Réponse sous 24-48h</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.36)] backdrop-blur-2xl md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />

            <div className="relative">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mb-10"
              >
                <motion.h3
                  variants={fieldMotion}
                  className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-4xl"
                >
                  Parlons de ton projet.
                </motion.h3>

                <motion.p
                  variants={fieldMotion}
                  className="mt-4 max-w-2xl text-base leading-8 text-slate-300"
                >
                  Décris-moi ton besoin. Je te réponds avec une approche claire, structurée et orientée résultat.
                </motion.p>
              </motion.div>

              <motion.form
                ref={form}
                onSubmit={sendEmail}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative space-y-5"
              >
                <motion.div variants={fieldMotion}>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ton nom"
                    className={inputClassName}
                  />
                </motion.div>

                <motion.div variants={fieldMotion}>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                    placeholder="ton@email.com"
                    className={`${inputClassName} ${showEmailError ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/20" : ""}`}
                  />
                  {showEmailError ? (
                    <p className="mt-2 text-sm text-red-300">
                      Entre une adresse email valide, par exemple nom@email.com.
                    </p>
                  ) : null}
                </motion.div>

                <motion.div variants={fieldMotion}>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    placeholder="Décris le contexte, l'objectif et ce que tu attends."
                    className={`${inputClassName} min-h-[180px] resize-none`}
                  />
                </motion.div>

                <motion.div variants={fieldMotion} className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={isSending ? undefined : { scale: 1.02 }}
                    whileTap={isSending ? undefined : { scale: 0.99 }}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-500 to-blue-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(59,130,246,0.24)] transition disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSending ? "Envoi..." : "Envoyer le message"}
                  </motion.button>
                </motion.div>

                {status.message ? (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                        : "border-red-500/20 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {status.message}
                  </motion.p>
                ) : null}
              </motion.form>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-24 max-w-[920px]"
        >
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-slate-300/80 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]" />
              Brief avancé
            </span>

            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
              Tu veux structurer ton projet en détail ?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Utilise ce formulaire si tu veux cadrer précisément ton besoin.
            </p>
          </div>

          <div ref={googleFormRef} className="mx-auto w-full">
            <div className="mx-auto max-w-[800px]">
              {showEmbeddedGoogleForm ? (
                <div
                  className="mx-auto overflow-hidden rounded-2xl border border-white/8 bg-slate-950/30"
                  style={{
                    maxWidth: `${GOOGLE_FORM_WIDTH}px`,
                    height: `${GOOGLE_FORM_HEIGHT * googleFormScale}px`,
                  }}
                >
                  <iframe
                    src={GOOGLE_FORM_EMBED_URL}
                    title="Brief projet détaillé"
                    className="block origin-top-left overflow-hidden rounded-2xl bg-slate-950/40"
                    style={{
                      width: `${GOOGLE_FORM_WIDTH}px`,
                      height: `${GOOGLE_FORM_HEIGHT}px`,
                      transform: `scale(${googleFormScale})`,
                    }}
                    loading="lazy"
                  >
                    Chargement...
                  </iframe>
                </div>
              ) : (
                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(9,11,18,0.98))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-500 to-blue-500 px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(59,130,246,0.24)] transition hover:brightness-110"
                    >
                      Ouvrir le formulaire
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
            Besoin d&apos;un développeur web au Bénin pour structurer ton projet ?
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Je collabore avec des entrepreneurs, marques et entreprises qui cherchent un développeur web full stack
            capable de cadrer un besoin, concevoir un système fiable et améliorer la visibilité SEO d&apos;un projet à
            Cotonou, Parakou, dans le reste du Bénin ou à distance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
