import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryOverview from "@/components/CategoryOverview";
import ProductCollection from "@/components/ProductCollection";
import ThreeDShowcase from "@/components/ThreeDShowcase";
import OEMServices from "@/components/OEMServices";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CategoryOverview />
      <ProductCollection />
      <ThreeDShowcase />
      <OEMServices />
      <InquiryForm />
      <Footer />
    </main>
  );
}
