import APIClient from "@/client";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Feature from "@/types/feature";
import CustomersSection from "@/components/CustomersSection";

export default function Home({ customers, features, hero }) {
  return (
    <>
      {!!hero && <HeroSection data={hero} />}
      <CustomersSection customers={customers} />
      <FeaturesSection features={features} />
    </>
  );
}

export async function getServerSideProps() {
  const [
    {
      data: {
        data: [hero = null],
      },
    },
    {
      data: { data: customers },
    },
    {
      data: { data: features },
    },
  ] = await Promise.all([
    APIClient.get("/heroes"),
    APIClient.get("/customers", {
      params: { sort: "orderId", populate: "logo" },
    }),
    APIClient.get<{ data: { data: Feature[] } }>("/features", {
      params: { sort: "orderId", populate: ["desktopImage", "mobileImage"] },
    }),
  ]);

  return {
    props: {
      hero,
      customers,
      features,
    },
  };
}
