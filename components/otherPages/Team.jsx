// "use client";
// import Image from "next/image";
// // import { teamMembers } from "@/data/team";
// import { useContextElement } from "@/context/Context";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

// export default function Team() {
//   const {
//     teamMembers
//     } = useContextElement();

//   return (
//     <section className="flat-spacing">
//       <div className="container">
//         <div className="heading-section text-center wow fadeInUp">
//           <h3 className="heading">Meet Our Teams</h3>
//           <p className="subheading text-secondary-2">
//             Discover exceptional experiences through testimonials from our
//             satisfied customers.
//           </p>
//         </div>
//         <Swiper
//           dir="ltr"
//           spaceBetween={30}
//           slidesPerView={4}
//           breakpoints={{
//             // 0: { slidesPerView: 2, spaceBetween: 15 },
//             768: { slidesPerView: 2, spaceBetween: 30 },
//             1024: { slidesPerView: 4, spaceBetween: 30 },
//           }}
//           modules={[Pagination]}
//           pagination={{
//             clickable: true,
//             el: ".spd80",
//           }}
//         >
//           {teamMembers.map((member, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="team-item hover-image wow fadeInUp"
//                 data-wow-delay="0s"
//               >
//                 <div className="image">
//                   <Image
//                     className="lazyload"
//                     data-src={member.imgSrc}
//                     alt={member.alt}
//                     src={member.imgSrc}
//                     width={600}
//                     height={600}
//                   />
//                 </div>
//                 <div className="content">
//                   <div>
//                     <h6 className="name">
//                       <a className="link text-line-clamp-1" href="#">
//                         {member.name}
//                       </a>
//                     </h6>
//                     <div className="infor text-caption-1 text-secondary-2">
//                       {member.position}
//                     </div>
//                   </div>
//                   {/* <ul className="tf-social-icon">
//                     {member.social.map((social, socialIndex) => (
//                       <li key={socialIndex}>
//                         <a href={social.href} className={social.className}>
//                           <i className={social.icon} />
//                         </a>
//                       </li>
//                     ))}
//                   </ul> */}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//           <div className="sw-pagination-latest sw-dots type-circle justify-content-center spd80" />
//         </Swiper>
//       </div>
//     </section>
//   );
// }



"use client";
import Image from "next/image";
import { useContextElement } from "@/context/Context";

export default function Team() {
  const { teamMembers } = useContextElement();

  return (
    <section className="flat-spacing">
      <div className="container">

        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Meet Our Teams</h3>
          <p className="subheading text-secondary-2">
            Discover exceptional experiences through testimonials from our satisfied customers.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="row justify-content-center g-4">

          {teamMembers?.map((member, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="team-item hover-image wow fadeInUp text-center">

                <div className="image">
                  <Image
                    className="img-fluid"
                    src={member.imgSrc}
                    alt={member.alt}
                    width={600}
                    height={600}
                  />
                </div>

                <div className="content mt-3">
                  <h6 className="name">
                    {member.name}
                  </h6>

                  <div className="infor text-caption-1 text-secondary-2">
                    {member.position}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
