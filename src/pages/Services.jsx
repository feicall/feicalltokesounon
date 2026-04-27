import Service from "../components/sections/Service";
import SEO from "../components/seo/SEO";
import { pageMeta } from "../components/seo/pageMeta";

const Services = () => {
  return (
    <main className="bg-black min-h-screen">
      <SEO {...pageMeta.services} />
      <Service />
      <section className="bg-[#070a12] px-6 pb-24 text-white md:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
            Des services pensés pour les entreprises au Bénin, à Cotonou, à Parakou et en Afrique.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            J&apos;interviens sur la création de sites web, le développement d&apos;applications React, les APIs, la refonte
            technique, l&apos;optimisation SEO et l&apos;amélioration des performances pour transformer une simple présence en
            ligne en système digital rentable et durable.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Services;
