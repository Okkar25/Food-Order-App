import { useAppDispatch } from "@/stores/hooks";
import { createMenuCategory } from "@/stores/slices/menuCategorySlice";
import { CreateMenuCategoryPayload } from "@/types/menuCategory";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  // setMenuCategories: (menuCategories: MenuCategory[]) => void; // from server
}

const defaultNewMenuCategory = { name: "", isAvailable: true };

// ***** single responsibility principle *****

const CreateMenuCategory = ({ open, setOpen }: Props) => {
  const [newMenuCategory, setNewMenuCategory] =
    useState<CreateMenuCategoryPayload>(defaultNewMenuCategory);

  const dispatch = useAppDispatch();

  // console.log(newMenuCategory)

  // POST Method
  const handleCreateMenuCategory = async () => {
    // const response = await fetch(`${config.apiBaseUrl}/menu-category`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newMenuCategory),
    // });
    // const dataFromServer = await response.json();
    // dispatch(setMenuCategories(dataFromServer));
    // setMenuCategories(dataFromServer);

    dispatch(createMenuCategory(newMenuCategory));

    setNewMenuCategory(defaultNewMenuCategory); // resetting value
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle sx={{ textAlign: "center" }}>
        Create Your Menu Category
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: 300,
              mt: 1,
              mb: 3,
            }}
          >
            <TextField
              defaultValue={newMenuCategory.name}
              sx={{ mb: 2, width: "100%" }}
              label="Menu Category Name"
              onChange={(event) => {
                setNewMenuCategory({
                  ...newMenuCategory,
                  name: event.target.value,
                });
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  defaultChecked={newMenuCategory.isAvailable}
                  onChange={(event, value) => {
                    setNewMenuCategory({
                      ...newMenuCategory,
                      //   isAvailable: !newMenuCategory.isAvailable,
                      isAvailable: value,
                    });
                  }}
                />
              }
              label="Available"
            />
          </Box>

          <Button
            variant="contained"
            sx={{ width: 150, mx: "auto", borderRadius: 5 }}
            onClick={handleCreateMenuCategory}
          >
            Create
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMenuCategory;
