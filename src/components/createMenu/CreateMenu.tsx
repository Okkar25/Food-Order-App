import config from "@/config";
import { useAppDispatch } from "@/stores/hooks";
import { createMenu } from "@/stores/slices/menuSlice";
import { CreateMenuPayload } from "@/types/menu";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  // setMenus: (menus: Menu[]) => void; // in Store
}

const defaultNewMenu = { name: "", price: 0, assetUrl: "" };

// ***** single responsibility principle *****

const CreateMenu = ({ open, setOpen }: Props) => {

  const [newMenu, setNewMenu] = useState<CreateMenuPayload>(defaultNewMenu);
  const dispatch = useAppDispatch();

  // POST Method
  const handleCreateMenu = async () => {
    // const response = await fetch(`${config.apiBaseUrl}/menu`, {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(newMenu),
    // });
    // const menusFromServer = await response.json();
    // dispatch(setMenus(menusFromServer));
    // setMenus(dataFromServer);

    dispatch(createMenu(newMenu));

    setNewMenu(defaultNewMenu); // resetting value
    setOpen(false); // closing dialog box
  };

  // DELETE Method
  const deleteMenu = async () => {
    const menuIdToDelete = 3;
    const response = await fetch(
      `${config.apiBaseUrl}/menu/${menuIdToDelete}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
  };

  // PUT Method
  const updateMenu = async () => {
    const menuToUpdate = { id: 3, name: "Spaghetti", price: 40 };
    const response = await fetch(`http://localhost:5000/menu`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(menuToUpdate),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle sx={{ textAlign: "center" }}>Create Your Menu</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: 300,
              mb: 3,
              mt: 1,
            }}
          >
            <TextField
              defaultValue={newMenu.name}
              sx={{ mb: 3, width: "100%" }}
              label="Menu Name"
              onChange={(event) => {
                setNewMenu({ ...newMenu, name: event.target.value });
              }}
            />

            <TextField
              defaultValue={newMenu.price}
              sx={{ width: "100%" }}
              label="menu Price"
              onChange={(event) => {
                setNewMenu({
                  ...newMenu,
                  price: parseFloat(event.target.value),
                });
              }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{ width: 150, mx: "auto", borderRadius: 5 }}
            onClick={handleCreateMenu}
            // disabled={menu?.name && menu?.price ? false : true}
          >
            Create
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMenu;
