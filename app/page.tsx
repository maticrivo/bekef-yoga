import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  GridCol,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";

export default function Home() {
  return (
    <Container size="lg">
      {/* Hero Section */}
      <Box component="section" my="xl">
        <Title mb="md" order={2} size="h1">
          Descubre la paz interior con Bekef Yoga
        </Title>
        <Text mb="md" size="xl">
          Únete a nuestras clases y transforma tu cuerpo y mente
        </Text>
        <Button color="blue" size="lg">
          Reserva tu clase ahora
        </Button>
      </Box>

      {/* Benefits of Yoga */}
      <Box component="section" my="xl">
        <Title mb="md" order={3} ta="center">
          Beneficios del Yoga
        </Title>
        <Grid>
          <GridCol span={4}>
            <Card padding="lg" shadow="sm">
              <Text fw={500}>Mejora la flexibilidad</Text>
            </Card>
          </GridCol>
          <GridCol span={4}>
            <Card padding="lg" shadow="sm">
              <Text fw={500}>Reduce el estrés</Text>
            </Card>
          </GridCol>
          <GridCol span={4}>
            <Card padding="lg" shadow="sm">
              <Text fw={500}>Aumenta la fuerza</Text>
            </Card>
          </GridCol>
        </Grid>
      </Box>

      {/* Class Schedule */}
      <Box component="section" my="xl">
        <Title mb="md" order={3} ta="center">
          Horario de Clases
        </Title>
        <Grid>
          <GridCol span={6}>
            <Card padding="lg" shadow="sm">
              <Text fw={500}>Yoga para principiantes</Text>
              <Text>18:00 - 19:30</Text>
            </Card>
          </GridCol>
          <GridCol span={6}>
            <Card padding="lg" shadow="sm">
              <Text fw={500}>Yoga avanzado</Text>
              <Text>19:00 - 20:30</Text>
            </Card>
          </GridCol>
        </Grid>
      </Box>

      {/* Contact Form */}
      <Box component="section" my="xl">
        <Title mb="md" order={3} ta="center">
          Contáctanos
        </Title>
        <form>
          <Stack>
            <TextInput label="Nombre" mb="sm" placeholder="Nombre" />
            <TextInput
              label="Correo electrónico"
              mb="sm"
              placeholder="Correo electrónico"
            />
            <Textarea label="Mensaje" mb="sm" placeholder="Mensaje" />
            <Button type="submit">Enviar mensaje</Button>
          </Stack>
        </form>
      </Box>

      {/* Footer */}
      <Box component="footer" py="md" ta="center">
        <Text>&copy; 2025 Bekef Yoga. Todos los derechos reservados.</Text>
      </Box>
    </Container>
  );
}
