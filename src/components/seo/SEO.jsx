import { useEffect } from "react";

export const SITE_URL = "https://feicalltokesounon.vercel.app";
const DEFAULT_IMAGE = "/preview.svg";

const PERSON_NAME = "Feiçall Toke Sounon";
const PERSON_VARIANTS = [
  "Feicall",
  "Feicall Toke",
  "Feicall Sounon",
  "Feisall Toke Sounon",
  "Feisall Toke",
  "Feicall Toke Sounon",
];

const SAME_AS = [
  "https://web.facebook.com/feicall.tokesounon.5",
  "https://www.linkedin.com/in/feiçall-toke-sounon-0b71b4312",
];

const BASE_KEYWORDS = [
  "Feiçall Toke Sounon",
  "Feicall",
  "Feicall Toke",
  "Feicall Sounon",
  "Feisall Toke Sounon",
  "développeur web bénin",
  "développeur web cotonou",
  "développeur web parakou",
  "développeur web full stack afrique",
  "référenceur seo bénin",
  "référenceur seo afrique",
];

function upsertMeta(attribute, key, content) {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export default function SEO({
  title,
  description,
  keywords = [],
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
}) {
  useEffect(() => {
    const pageUrl = new URL(path, SITE_URL).toString();
    const imageUrl = new URL(image, SITE_URL).toString();
    const mergedKeywords = [...BASE_KEYWORDS, ...keywords].join(", ");

    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", mergedKeywords);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("name", "author", PERSON_NAME);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:locale", "fr_FR");
    upsertMeta("property", "og:site_name", PERSON_NAME);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    upsertLink("canonical", pageUrl);

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: PERSON_NAME,
          alternateName: PERSON_VARIANTS,
          url: SITE_URL,
          image: imageUrl,
          jobTitle: "Développeur web full stack et référenceur SEO",
          description,
          email: "mailto:feicalltokesounon@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cotonou",
            addressRegion: "Littoral",
            addressCountry: "BJ",
          },
          areaServed: ["Bénin", "Cotonou", "Parakou", "Afrique", "Monde"],
          sameAs: SAME_AS,
          knowsAbout: [
            "Développement web full stack",
            "React",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "SEO technique",
            "Référencement local",
            "APIs",
            "Architecture web",
          ],
        },
        {
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#business`,
          name: "FDEV",
          url: SITE_URL,
          image: imageUrl,
          description:
            "Développement web full stack, SEO technique et création de systèmes web performants depuis le Bénin.",
          founder: { "@id": `${SITE_URL}/#person` },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cotonou",
            addressCountry: "BJ",
          },
          areaServed: ["Bénin", "Cotonou", "Parakou", "Afrique", "Monde"],
          serviceType: [
            "Développement web",
            "Développement full stack",
            "Référencement SEO",
            "Optimisation de performance",
          ],
          sameAs: SAME_AS,
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: PERSON_NAME,
          inLanguage: "fr",
        },
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: title,
          description,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#person` },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: imageUrl,
          },
        },
      ],
    };

    let script = document.head.querySelector('script[data-seo="structured-data"]');

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "structured-data");
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }, [description, image, keywords, path, title]);

  return null;
}
