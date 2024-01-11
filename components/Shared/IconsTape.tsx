import Image from "next/image";

// import {
//   // mn = manufacture
//   mn,
//   // cn = construction
//   cn,
//   // er = ERP
//   er,
//   // iv = invoice
//   iv,
//   sla,
//   // ac = accounting
//   ac,
//   // wb = web apps
//   wb,
//   // cm = e-commerce
//   cm,
//   // mb = mobile apps
//   mb,
// } from "@/public/products/index.js";

// const tapeVarient = [mn, cn, er, iv, sla, ac, wb, cm, mb];

const IconsTape = ({ varient }: { varient: number }) => {
  // const images = tapeVarient[varient];

  return (
    <section className="overflow-hidden bg-[#F3F3F3] max-w-[1440px] mx-auto px-6 md:px-[4.75rem] py-6 md:py-[4.375rem] my-6 md:my-[4.375rem]">
      <article className="w-[90%] mx-auto flex items-center gap-5 justify-center overflow-x-hidden">
        {/* {images.map((i) => (
          <Image
            key={`${i}`}
            src={i}
            quality={100}
            alt=""
            className="min-w-[57px] max-w-[70px] md:min-w-[150px] md:max-w-[170px]"
          />
        ))} */}
      </article>
    </section>
  );
};

export default IconsTape;
