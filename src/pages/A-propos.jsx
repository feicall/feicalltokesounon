import AboutSection from "../components/sections/About";
import SEO from "../components/seo/SEO";
import { pageMeta } from "../components/seo/pageMeta";

export default function About() {
    return (
        <>
            <SEO {...pageMeta.about} />
            <AboutSection />
        </>
    );
}
