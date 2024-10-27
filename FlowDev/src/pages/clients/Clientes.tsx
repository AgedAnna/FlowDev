import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import { makeStyles } from '@mui/styles';

// Estilos personalizados
const useStyles = makeStyles({
  root: {
    backgroundColor: "hsl(216, 33%, 97%)",
    padding: "40px 0",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: "40px",
  },
  logo: {
    width: 80,
    height: "auto",
  },
  card: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  cardIcon: {
    fontSize: "2rem",
    color: "#6BBE92",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: "1.25rem",
    marginTop: "10px",
  },
  cardDescription: {
    fontSize: "0.9rem",
    color: "gray",
  },
});

const Clientes: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "hsl(216, 33%, 97%)", padding: "40px 0" }}>
      <Container maxWidth="lg">
        {/* Seção de Logos */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingBottom: "40px",
          }}
        >
          <img
            src=""
            alt="Cliente 1"
            style={{ width: 80, height: "auto" }}
          />
          <img
            src=""
            alt="Cliente 2"
            style={{ width: 80, height: "auto" }}
          />
          <img
            src=""
            alt="Cliente 3"
            style={{ width: 80, height: "auto" }}
          />
          <img
            src=""
            alt="Cliente 4"
            style={{ width: 80, height: "auto" }}
          />
          <img
            src=""
            alt="Cliente 5"
            style={{ width: 80, height: "auto" }}
          />
        </Box>

        {/* Título e Descrição */}
        <Typography variant="h4" align="center" gutterBottom>
          Nossos Clientes
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          paragraph
        >
          Temos trabalhado com algumas das principais empresas do mercado.
        </Typography>

        {/* Cards de Informações */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: "center",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: "2rem", color: "#6BBE92" }}>
                  👥
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginTop: "10px" }}
                >
                  Organizações de Membros
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "gray" }}>
                  Nosso software de gerenciamento de membros automatiza
                  completamente as renovações e pagamentos de associações.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: "center",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: "2rem", color: "#6BBE92" }}>
                  🏢
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginTop: "10px" }}
                >
                  Associações Nacionais
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "gray" }}>
                  Oferecemos soluções completas para automatizar renovações e
                  pagamentos para grandes associações.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: "center",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: "2rem", color: "#6BBE92" }}>
                  🤝
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginTop: "10px" }}
                >
                  Clubes e Grupos
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "gray" }}>
                  Facilite o gerenciamento e automação de pagamentos para clubes
                  e grupos locais.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Clientes;
