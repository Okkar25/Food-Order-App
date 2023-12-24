import PaidIcon from "@mui/icons-material/Paid";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import { Menu } from "../../types/menu";

interface Props {
  menu: Menu;
}

const MenuCard = ({ menu }: Props) => {
  return (
    <Link
      href={`menu/${menu.id}`} // router (nextjs)
      style={{
        textDecoration: "none",
        marginRight: "15px",
        marginBottom: "20px",
      }}
    >
      <Card
        sx={{
          width: 200,
          height: 220,
          pb: 2,
          borderRadius: 4,
        }}
      >
        <CardMedia
          sx={{ height: 140, backgroundSize: "cover" }}
          image={menu.assetUrl || ""}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ textAlign: "center", mb: 0 }}
          >
            {menu.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pb: 2,
            }}
          >
            <PaidIcon />
            <Typography
              gutterBottom
              variant="subtitle1"
              sx={{ mt: 0.8, ml: 0.8 }}
            >
              {menu.price}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MenuCard;
