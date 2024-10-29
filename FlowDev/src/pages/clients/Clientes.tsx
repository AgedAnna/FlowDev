import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import Slider from "react-slick";
import { testimonials } from "./utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Clientes.module.css";

const Clientes: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "hsl(216, 33%, 97%)",
        padding: { xs: "20px 0", sm: "40px 0" },
        marginBottom: "3px",
        fontFamily: "Jost, sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mb={4}
          px={{ xs: 2, sm: 0 }}
        >
          <Box textAlign="left">
            <Typography variant="h4" gutterBottom>
              Customer Testimonials
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={style.card}
            >
              Clients Feedback
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            margin: "0",
            padding: { xs: "0 8px", sm: "0 10px" },
          }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ padding: { xs: "0", sm: "0 10px" } }}>
                <Card
                  sx={{
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "white",
                    textAlign: "left",
                    minHeight: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardContent>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{ color: "#FFD700" }}
                    />
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{ margin: "20px 0" }}
                      className={style.card}
                    >
                      "{testimonial.description}"
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Avatar
                        alt={testimonial.name}
                        src={testimonial.avatar}
                        sx={{ marginRight: "10px" }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                          className={style.card}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          className={style.card}
                        >
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Clientes;
