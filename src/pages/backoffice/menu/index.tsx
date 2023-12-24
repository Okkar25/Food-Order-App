import BackofficeLayout from "@/components/backofficeLayout";
import MenuCard from "@/components/menuCard/MenuCard";
import { useAppSelector } from "@/stores/hooks";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import CreateMenu from "../../../components/createMenu/CreateMenu";

const MenuPage = () => {
  // const [menus, setMenus] = useState<Menu[]>([]); // in Store
  const [open, setOpen] = useState<boolean>(false);
  const menus = useAppSelector((store) => store.menu.items);

  // console.log(config);

  // const fetchMenus = async () => {
  //   const response = await fetch(`${config.apiBaseUrl}/menu`);
  //   const menusFromServer = await response.json();
  //   // setMenus(menusFromServer); // in Store
  // };

  // console.log("Current Menus : ", menus);

  useEffect(() => {
    // fetchMenus();
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
            Create Menu
          </Button>
        </Box>
        {/* <CreateMenu open={open} setOpen={setOpen} setMenus={setMenus} /> */}
        <CreateMenu open={open} setOpen={setOpen} />

        {/* Displaying Menus */}
        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 3 }}>
          {menus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </Box>
      </Box>
    </BackofficeLayout>
  );
};

export default MenuPage;
