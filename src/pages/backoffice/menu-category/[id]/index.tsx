import BackofficeLayout from "@/components/backofficeLayout";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { updateMenuCategory } from "@/stores/slices/menuCategorySlice";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const UpdateMenuCategory = () => {
  const [name, setName] = useState<string>("");

  const menuCategories = useAppSelector((store) => store.menuCategory.items); // store
  const route = useRouter();
  const menuCategoryId = Number(route.query.id);
  // console.log(menuCategoryId);
  const dispatch = useAppDispatch()

  const menuCategory = menuCategories.find(
    // find item from store
    (item) => item.id === menuCategoryId
  );
  console.log(menuCategory?.name);

  if (!menuCategory) return null;

  return (
    <BackofficeLayout>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Update Menu Category Page - {menuCategory?.name}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          defaultValue={menuCategory.name}
          sx={{ maxWidth: 300, mb: 3 }}
          onChange={(event) => setName(event.target.value)}
        />
        <Button
          variant="contained"
          sx={{ width: "fit-content" }}
          onClick={() => {
            dispatch(updateMenuCategory({id: menuCategoryId, name}))
          }}
        >
          Update
        </Button>
      </Box>
    </BackofficeLayout>
  );
};

export default UpdateMenuCategory;
