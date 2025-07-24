import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  let products = [];

  try {
    const response = await fetch(baseURL + '/api/products');
    if (!response.ok) throw new Error('Bad response');
    products = await response.json();
  } catch (err) {
    console.error('Error fetching products:', err.message);
    // Return an empty array to avoid breaking the build
    products = [];
  }

  return products;
}


export default async function Home() {

  const products = await getProducts()

  let planner = null
  let stickers = []
  
  for (let product of products) {
    if (product.name === "Medieval Dragon Month Planner") {
      planner = product
      continue
    }
    stickers.push(product)
  }

  return (
    <>
      <ImageBanner/>
      <section>
        <Products planner={planner} stickers={stickers}/>
      </section>

    </>
  );
}
