import React from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box, Card, Typography } from "@mui/material";

const NewInvoiceFile = () => {
  return (
    <Card>
      <Box
        sx={{
          width: "250px",
          height: "150px",
          border: "2px solid #47B747",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <UploadFileIcon sx={{ fontSize: 50, color: "#47B747" }} />
        <Typography variant="text">Drag and drop your files</Typography>

        <Typography
          variant="text"
          sx={{
            textDecoration: "underline",
            color: "#47B747",
            cursor: "pointer",
          }}
        >
          Browse your device
        </Typography>
        <input type="file" className="invoice_file" />
      </Box>
    </Card>
  );
};

export default NewInvoiceFile;
