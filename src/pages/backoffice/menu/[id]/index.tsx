import BackofficeLayout from "@/components/backofficeLayout";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { updateMenu } from "@/stores/slices/menuSlice";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const UpdateMenu = () => {
  const [name, setName] = useState<string>("");

  const menus = useAppSelector((store) => store.menu.items);
  const router = useRouter();
  const menuId = Number(router.query.id);
  // console.log(menuId);
  const dispatch = useAppDispatch();

  const menu = menus.find((item) => item.id === menuId);
  console.log("update menu rendered", menu?.name);

  if (!menu) return null;

  return (
    <BackofficeLayout>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Update Menu Page - {menu?.name}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          defaultValue={menu?.name}
          sx={{ maxWidth: 300, mb: 3 }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ width: "fit-content" }}
          onClick={() => {
            dispatch(updateMenu({ id: menuId, name }));
          }}
        >
          Update
        </Button>
      </Box>
    </BackofficeLayout>
  );
};

export default UpdateMenu;
