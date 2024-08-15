import { ProductCategoryType } from "@/types/ProductCategories";
import { Box, Chip } from "@mui/material";

interface ProductCategoriesProps {
  productCategories: ProductCategoryType[];
}

export default function ProductCategories(props: ProductCategoriesProps) {
  return (
    <Box
      sx={{
        overflowX: "auto",
        backgroundColor: "#FAFAFA",
        padding: "8px 0px",
        "&::-webkit-scrollbar": {
          width: "1px",
          height: "1px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
      }}
    >
      <Box sx={{ display: "flex", gap: "8px", marginLeft: "16px" }}>
        {props.productCategories.map((category, index) => (
          <Chip
            sx={{
              borderRadius: "8px",
              backgroundColor: "white",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            label={category.name}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
}
