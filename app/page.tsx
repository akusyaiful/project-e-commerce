"use client";

import { ProductCategoryType } from "@/types/ProductCategories";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCategories from "./components/ProductCategories";

export default function Home() {
  const [productCategories, setProductCategories] = useState<
    ProductCategoryType[]
  >([]);

  const getProductsCategories = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/categories"
      ).then((res) => res.json());

      setProductCategories(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsCategories();
  }, []);

  return (
    <main>
      <Container maxWidth="sm" sx={{ padding: "0px !important" }}>
        <Navbar />
        <ProductCategories productCategories={productCategories} />
      </Container>
    </main>
  );
}
