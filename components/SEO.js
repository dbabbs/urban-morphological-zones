import { NextSeo } from 'next-seo';

const base = `https://urban-morphological-zones.vercel.app/`;
const SEO = () => {
   return (
      <NextSeo
         title="Urban Morphological Zones "
         description="An Urban Morpholigical Zone is a set of urban areas laying less than
         200m apart"
         canonical={base}
         openGraph={{
            url: base,
            title: 'CartoGrid',
            description:
               'An Urban Morpholigical Zone is a set of urban areas laying less than 200m apart',
            images: [
               {
                  url: base + 'open-graph.png',
                  width: 1024,
                  height: 512,
                  alt: 'Europe image',
               },
            ],
            site_name: 'CartoGrid',
         }}
         twitter={{
            handle: '@dbabbs',
            site: '@dbabbs',
            cardType: 'summary_large_image',
         }}
      />
   );
};
export default SEO;
