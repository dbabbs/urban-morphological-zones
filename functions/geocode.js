const HERE_API_KEY = process.env.NEXT_PUBLIC_HERE_API_KEY;

async function geocode([lng, lat]) {
   const response = await fetch(
      `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat},${lng}&apikey=${HERE_API_KEY}`
   ).then((res) => res.json());
   console.log(response);
   const notFound = 'Location unknown';
   if (response.items.length < 1) {
      return notFound;
   }
   const curr = response.items[0];
   const city = curr.address?.city;
   const country = curr.address?.country;
   return city && country ? `${city}, ${country}` : notFound;
}

export default geocode;
