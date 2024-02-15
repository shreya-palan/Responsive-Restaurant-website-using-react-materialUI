import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">
          Welcome to Swadham Bhog
        </Typography>
        <p>
          Welcome to Swadham Bhog, a culinary haven where passion meets palate! At Swadham Bhog, we embark on a flavorful journey to celebrate the diverse and rich tapestry of global cuisines. Our commitment is simple yet profound – to redefine your gastronomic experience with a symphony of tastes, textures, and aromas. Inspired by the essence of 'Swadham,' meaning 'flavor' in Sanskrit, and 'Bhog,' referring to the joy of indulgence, our website is a virtual feast for all food enthusiasts.
          Established with the vision of bringing people together through the universal language of food, Swadham Bhog showcases an array of delectable recipes, culinary tips, and food stories that resonate with both beginners and seasoned chefs alike. From mouthwatering appetizers to indulgent desserts, our curated collection caters to every taste bud, ensuring a delightful journey for food lovers of all backgrounds.
        </p>
        <br />
        <p>
          What sets Swadham Bhog apart is our unwavering dedication to authenticity, quality, and innovation. Each recipe is a labor of love, crafted with precision and a deep appreciation for the cultural roots that inspire it. Whether you're seeking inspiration for your next home-cooked meal or exploring the nuances of global gastronomy, Swadham Bhog is your go-to resource for culinary exploration.
          Join us on this savory adventure as we share not just recipes, but stories that evoke the joy and emotion behind each dish. At Swadham Bhog, we believe that food is not just sustenance; it's an art, a celebration, and a journey that transcends borders. So, come, immerse yourself in the world of flavors, and let Swadham Bhog be your companion in the pursuit of culinary excellence. Bon appetit!
        </p>
      </Box>
    </Layout>
  )
}

export default About
