import { Box, Button, TextField, Typography, Checkbox, FormControlLabel, Select, MenuItem, Grid } from "@mui/material";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
        termsAccepted: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
        const { name, value } = e.target;

        if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
            const isChecked = (e.target as HTMLInputElement).checked;
            setFormData((prevData) => ({
                ...prevData,
                [name]: isChecked,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.termsAccepted) {
            alert("Please accept the terms to continue.");
            return;
        }

        // configurações do EmailJS
        const serviceID = "service_3kb88pu";
        const templateID = "template_o60q50o";
        const userID = "rH0NRzdjg4oN4fB4y";

        // inclui o e-mail do destinatário
        const emailData = {
            ...formData,
            to_email: "flowdevservices@gmail.com" // email de destino do emailjs 
        };

        try {
            await emailjs.send(serviceID, templateID, emailData, userID);
            alert("Thank you for contacting us!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                topic: "",
                message: "",
                termsAccepted: false,
            });
        } catch (error) {
            console.error("EmailJS error:", error);
            alert("There was an error sending your message. Please try again later.");
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 1000,
                mx: "auto",
                mt: 5,
                p: { xs: 2, sm: 6 }, // ajuste de tamanho para telas pequenas
                textAlign: "center",
            }}
        >
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    mb: 1,
                    fontWeight: "bold",
                    color: "#2a2830",
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: { xs: "1.5rem", sm: "2rem" },
                }}
            >
                Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 4, color: "#666", fontSize: "1rem" }}>
                Contact us for more information about our working conditions
            </Typography>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            fullWidth
                            required
                            sx={{ backgroundColor: "#f3f4fc", borderRadius: 1 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            fullWidth
                            required
                            sx={{ backgroundColor: "#f3f4fc", borderRadius: 1 }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            sx={{ backgroundColor: "#f3f4fc", borderRadius: 1 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            sx={{ backgroundColor: "#f3f4fc", borderRadius: 1 }}
                        />
                    </Grid>
                </Grid>

                <Select
                    label="Choose a topic"
                    name="topic"
                    value={formData.topic}
                    onChange={(e: SelectChangeEvent<string>) => handleChange(e)}
                    displayEmpty
                    fullWidth
                    required
                    sx={{
                        backgroundColor: "#f3f4fc",
                        borderRadius: 1,
                        "& .MuiSelect-root": { color: "#666" },
                    }}
                >
                    <MenuItem value="" disabled>Choose a topic</MenuItem>
                    <MenuItem value="general">General Inquiry</MenuItem>
                    <MenuItem value="support">Support</MenuItem>
                    <MenuItem value="feedback">Feedback</MenuItem>
                </Select>

                <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    required
                    sx={{ backgroundColor: "#f3f4fc", borderRadius: 1 }}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            required
                            sx={{
                                color: "#3b00ff",
                                "&.Mui-checked": { color: "#3b00ff" },
                            }}
                        />
                    }
                    label="I accept the terms"
                    sx={{ color: "#666", fontFamily: "'Roboto', sans-serif" }}
                />

<Box
    sx={{
        display: "flex",
        justifyContent: "center", // Centraliza horizontalmente
        mt: 2, // Espaço superior opcional
    }}
>
    <Button
        type="submit"
        variant="contained"
        sx={{
            textTransform: "none",
            backgroundColor: "#3b00ff",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "0.875rem",
            borderRadius: 2,
            padding: "8px 16px",
            width: "150px",
            ":hover": {
                backgroundColor: "#2a00cc",
            },
            transition: "all 0.3s ease",
        }}
    >
        Submit
    </Button>
</Box>

                <br />
                <br />
            </form>
        </Box>
    );
};

export default Contact;
