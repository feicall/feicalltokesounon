import Hero from "../components/sections/Hero";
import SEO from "../components/seo/SEO";
import { pageMeta } from "../components/seo/pageMeta";

export default function Home() {
    return (
        <>
            <SEO {...pageMeta.home} />
            <Hero />
        </>
    );
}
