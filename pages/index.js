import Head from "next/head";

// custom components
import TopNav from "../components/topNavbar/TopNav.component";
import Navbar from "../components/navBar/Navbar.component";
import HeroSection from "../components/heroSection/HeroSection.component";
import ProductListing from "../components/productListing/ProductListing.component";
import SaleBanner from "../components/saleBanner/SaleBanner.component";
import MidBanner from "../components/mid-banner/MidBanner.component";
import OurQualities from "../components/ourQualities/OurQualities.component";
import Footer from "../components/footer/Footer.component";

export default function Home({ homePageData }) {
  return (
    <div className="app">
      {/* top navbar  */}
      <TopNav />
      {/* main navbar */}
      <Navbar />
      {/* hero section */}
      <HeroSection />
      {/* mid banner */}
      <MidBanner />
      {/* top selling product section */}
      {/* <ProductListing */}
      {/* // title={homePageData.topSellingProducts.title} */}
      {/* // description={homePageData.topSellingProducts.description} */}
      {/* // /> */}
      {/* new arrivel product section */}
      {/* <ProductListing */}
      {/* // title={homePageData.newArrivalProducts.title} */}
      {/* // description={homePageData.newArrivalProducts.description} */}
      {/* // /> */}
      {/* deal of the week banner */}
      {/* <SaleBanner /> */}
      {/* our OurQualities area */}
      {/* <OurQualities /> */}
      {/* footer area */}
      {/* <Footer /> */}
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      homePageData: {
        topSellingProducts: {
          title: "Top Selling",
          description:
            "In our own little way we echo that. The idea of eShakti includes all women. Everywhere, Whatever their size, shape, height and style preferences.",
        },
        newArrivalProducts: {
          title: "New Arrivel",
          description:
            "In our own little way we echo that. The idea of eShakti includes all women. Everywhere, Whatever their size, shape, height and style preferences.",
        },
      },
    }, // will be passed to the page component as props
  };
}
