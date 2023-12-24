import BackofficeLayout from "@/components/backofficeLayout";
import CreateMenuCategory from "@/components/createMenuCategory/CreateMenuCategory";
import ItemCard from "@/components/itemCard/ItemCard";
import config from "@/config";
import { useAppSelector } from "@/stores/hooks";
import ExtensionSharpIcon from "@mui/icons-material/ExtensionSharp";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const MenuCategoryPage = () => {
  // const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const menuCategories = useAppSelector((store) => store.menuCategory.items);

  // const fetchMenuCategories = async () => {
  //   const response = await fetch(`${config.apiBaseUrl}/menu-category`);
  //   const menuCategoriesFromServer = await response.json();
  //   // setMenuCategories(menuCategoriesFromServer);
  // };

  // console.log("Current Menu Categories : ", menuCategories);

  useEffect(() => {
    // fetchMenuCategories();
  }, []);

  return (
    <BackofficeLayout>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant="contained"
            color="info"
            onClick={() => {
              setOpen(true);
            }}
          >
            Create Menu Category
          </Button>
        </Box>
        <CreateMenuCategory
          open={open}
          setOpen={setOpen}
          // setMenuCategories={setMenuCategories}
        />

        {/* Displaying Menus */}
        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
          {menuCategories.map((menuCategory) => (
            <ItemCard
              href={`menu-category/${menuCategory.id}`}
              key={menuCategory.id}
              icon={<ExtensionSharpIcon />}
              title={menuCategory.name}
              // subtitle="3 menu categories"
            />
          ))}
        </Box>
      </Box>
    </BackofficeLayout>
  );
};

export default MenuCategoryPage;
