// src/components/Article/ArticleCard.jsx
import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Chip,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  Button,
  Stack,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "secondary.main",
  color: "common.white",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function ArticleCard({ id, image, theme, title, author, onDelete }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    onDelete(id);
    handleClose();
  };

  return (
    <Box sx={{ width: 346, m: 1 }}>
      <Card sx={{ position: "relative", borderRadius: 2, overflow: "hidden" }}>
        <CardActionArea component={Link} to={`/article-content/${id}`} sx={{ display: "block" }}>
          <CardMedia
            component="img"
            height="230"
            image={image}
            alt={title}
            sx={{ objectFit: "cover" }}
          />
        </CardActionArea>

        <IconButton
          onClick={handleOpen}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            width: 28,
            height: 28,
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.5)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            p: 0.5,
          }}
        >
          <ClearIcon fontSize="small" />
        </IconButton>

        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 500 }}
        >
          <Fade in={open}>
            <Box sx={modalStyle}>
              <Typography variant="h6" gutterBottom>
                Delete this article?
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDelete}
                  sx={{ textTransform: "none" }}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  sx={{ textTransform: "none" }}
                >
                  No
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Modal>
      </Card>

      {theme && (
        <Chip label={theme} variant="outlined" size="small" sx={{ mt: 1, mb: 1 }} />
      )}

      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {author}
      </Typography>
    </Box>
  );
}
