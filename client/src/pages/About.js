import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Aboutus-ShopPlusPlus"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Introducing ShopPlusPlus, your ultimate destination for an unparalleled online shopping experience. Our platform combines cutting-edge technology with user-centric design to offer a seamless and enjoyable shopping journey. At ShopPlusPlus, we bring together a diverse range of products, from fashion to electronics, all curated to meet your needs and desires.Experience the future of online shopping with ShopPlusPlus. Shop smarter, shop better, shop with ShopPlusPlus.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;