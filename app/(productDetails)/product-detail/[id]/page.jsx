import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import Breadcumb from "@/components/productDetails/Breadcumb";
import Descriptions1 from "@/components/productDetails/descriptions/Descriptions1";
import Details1 from "@/components/productDetails/details/Details1";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import { allProducts } from "@/data/products";
import React from "react";

export const metadata = {
  title:
    "Product Detail || Modave - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const userId =
    typeof window !== "undefined"
      ? Number(localStorage.getItem("userId")) || 0
      : 0;

  // const res = await fetch(
  //   `${API_URL}/api/products-detail/${id}/${userId}`,
  //   { cache: "no-store" }
  // );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch product");
  // }


  let data = null;
  let error = false;

  try {
    const res = await fetch(
      `${API_URL}/api/products-detail/${id}/${userId}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      error = true;
    } else {
      data = await res.json();
    }
  } catch (err) {
    error = true;
  }

  /* ================= ERROR UI ================= */
  if (error || !data?.product) {
    return (
      <>
        <Topbar6 bgColor="bg-main" />
        <Header1 />

        <div
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h2>Unable to fetch data right now</h2>
          <p>Please try again later</p>

          <button
            onClick={() => (window.location.href = window.location.href)}
            style={{
              marginTop: "12px",
              padding: "10px 18px",
              cursor: "pointer",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          >
            Retry
          </button>
        </div>

        <Footer1 hasPaddingBottom />
      </>
    );
  }


  // const data = await res.json();

  const product = data.product;
  const reviews = data.reviews || [];
  const ratingStats = data.ratingStats || {};
  const relatedProducts = data.relatedProducts;

  return (
    <>
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <Breadcumb product={product} />
      <Details1 product={product} />

      {/*  PASS ALL DATA */}
      <Descriptions1
        product={product}
        reviews={reviews}
        ratingStats={ratingStats}
      />

      <RelatedProducts relatedProducts={relatedProducts} />
      <Footer1 hasPaddingBottom />
    </>
  );
}

// // import Footer1 from "@/components/footers/Footer1";
// // import Header1 from "@/components/headers/Header1";
// // import Topbar6 from "@/components/headers/Topbar6";
// // import Breadcumb from "@/components/productDetails/Breadcumb";
// // import Descriptions1 from "@/components/productDetails/descriptions/Descriptions1";
// // import Details1 from "@/components/productDetails/details/Details1";
// // import RelatedProducts from "@/components/productDetails/RelatedProducts";
// // import React from "react";

// // export const metadata = {
// //   title: "Product Detail || Modave",
// //   description: "Product detail page",
// // };

// // export default async function ProductDetailPage({ params }) {
// //   const { id } = params;
// //   const userId =
// //     typeof window !== "undefined"
// //       ? Number(localStorage.getItem("userId")) || 0
// //       : 0;
// //   const API_URL = process.env.NEXT_PUBLIC_API_URL;


// //   const res = await fetch(
// //     `${API_URL}/api/products-detail/${id}/${userId}`,
// //     {
// //       cache: "no-store",
// //     }
// //   );

// //   if (!res.ok) {
// //     throw new Error("Failed to fetch product");
// //   }

// //   const data = await res.json();

// //   const product = data.product;
// //   const reviews = data.reviews;
// //   const relatedProducts = data.relatedProducts;

// //   return (
// //     <>
// //       <Topbar6 bgColor="bg-main" />
// //       <Header1 />

// //       {/* ================= PRODUCT ================= */}
// //       <Breadcumb product={product} />

// //       <Details1 product={product} reviews={reviews} />

// //       <Descriptions1 product={product} reviews={reviews} />

// //       {/* ================= RELATED ================= */}
// //       <RelatedProducts products={relatedProducts} />

// //       <Footer1 hasPaddingBottom />
// //     </>
// //   );
// // }


// import Footer1 from "@/components/footers/Footer1";
// import Header1 from "@/components/headers/Header1";
// import Topbar6 from "@/components/headers/Topbar6";
// import Breadcumb from "@/components/productDetails/Breadcumb";
// import Descriptions1 from "@/components/productDetails/descriptions/Descriptions1";
// import Details1 from "@/components/productDetails/details/Details1";
// import RelatedProducts from "@/components/productDetails/RelatedProducts";
// import { cookies } from "next/headers";

// export const metadata = {
//   title: "Product Detail || Modave - Multipurpose React Nextjs eCommerce Template",
//   description: "Modave - Multipurpose React Nextjs eCommerce Template",
// };

// export default async function ProductDetailPage({ params }) {
//   const { id } = params;

//   const API_URL = process.env.NEXT_PUBLIC_API_URL;

//   //  SAFE server-side userId (from cookies)
//   // const cookieStore = cookies();
//   // const userId = Number(cookieStore.get("userId")?.value || 0);

//   const userId =
//     typeof window !== "undefined"
//       ? Number(localStorage.getItem("userId")) || 0
//       : 0;

//   const res = await fetch(
//     `${API_URL}/api/products-detail/${id}/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch product");
//   }

//   const data = await res.json();

//   const product = data.product;
//   const reviews = data.reviews || [];
//   const ratingStats = data.ratingStats || {};
//   const relatedProducts = data.relatedProducts;

//   return (
//     <>
//       <Topbar6 bgColor="bg-main" />
//       <Header1 />
//       <Breadcumb product={product} />
//       <Details1 product={product} />

//       {/*  PASS ALL DATA */}
//       <Descriptions1
//         product={product}
//         reviews={reviews}
//         ratingStats={ratingStats}
//       />

//       <RelatedProducts products={relatedProducts} />
//       <Footer1 hasPaddingBottom />
//     </>
//   );
// }