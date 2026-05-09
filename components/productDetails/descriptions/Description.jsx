// import React from "react";

// export default function Description({  product}) {
//   return (
//     <>
//       <div className="right">
//         <div className="letter-1 text-btn-uppercase mb_12">
//           {product?.title}
//         </div>

//         <p className="mb_12 text-secondary">
//           {product?.description ||
//             "Nodding to retro styles, this Hyperbola T-shirt is defined by its off-the-shoulder design. It's spun from a green stretch cotton jersey and adorned with an embroidered AC logo on the front, a brand's signature."}
//         </p>

//         {/* <p className="text-secondary">
//           {product?.features ||
//             "Thick knitted fabric. Short design. Straight design. Rounded neck. Sleeveless. Straps. Unclosed. Cable knit finish. Co-ord."}
//         </p> */}
//       </div>

//       {/* <div className="left">
//         <div className="letter-1 text-btn-uppercase mb_12">
//           COMPOSITION, ORIGIN AND CARE GUIDELINES
//         </div>

//         <ul className="list-text type-disc mb_12 gap-6">
//           <li className="font-2">
//             Composition: {product?.composition || "55% polyester, 30% acrylic"}
//           </li>
//           <li className="font-2">
//             Designed in {product?.designedIn || "Barcelona"}
//           </li>
//           <li className="font-2">Origin: {product?.origin || "USA"}</li>
//           <li className="font-2">
//             Manufacture: {product?.manufacture || "USA"}
//           </li>
//         </ul>

//         <div className="text-caption-2">
//           MACHINE WASHING MAX 30°C / 85ºF SHORT SPIN DRY
//         </div>

       
//         <div className="mt-3">
//           <div className="letter-1 text-btn-uppercase mb_12">
//             REVIEWS
//           </div>

//           {review?.length > 0 ? (
//             review.map((r, i) => (
//               <p key={i} className="text-secondary mb_12">
//                 {r.comment}
//               </p>
//             ))
//           ) : (
//             <p className="text-secondary">No reviews yet.</p>
//           )}
//         </div>
//       </div> */}
//     </>
//   );
// }


export default function Description({ product }) {
  return (
    <>
      <div className="right">
        <div className="letter-1 text-btn-uppercase mb_12">
          {product?.title}
        </div>

        <p
          className="mb_12 text-secondary"
          dangerouslySetInnerHTML={{
            __html:
              product?.description ||
              "Nodding to retro styles, this Hyperbola T-shirt is defined by its off-the-shoulder design.",
          }}
        />
      </div>
    </>
  );
}