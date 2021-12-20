// material
import { Button, Card, Container, Grid, TextField, Typography } from '@mui/material';
// components
import Page from '../components/Page';

export default function EcommerceShop() {
  return (
    <Page title="Invoice | Zap Invoice">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Invoice
        </Typography>
        <Card sx={{ p: 5 }}>
          <form>
            <TextField
              sx={{ my: 1 }}
              fullWidth
              required
              id="outlined-required"
              label="Name"
              defaultValue="Alex Hope"
            />
            <TextField
              sx={{ my: 1 }}
              fullWidth
              required
              type="email"
              id="outlined-required"
              label="Email"
            />
            <TextField
              sx={{ my: 1 }}
              fullWidth
              required
              type="password"
              id="outlined-required"
              label="Password"
            />
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <TextField
                  sx={{ my: 1 }}
                  fullWidth
                  required
                  type="password"
                  id="outlined-required"
                  label="Password"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  sx={{ my: 1 }}
                  fullWidth
                  required
                  type="password"
                  id="outlined-required"
                  label="Password"
                />
              </Grid>
            </Grid>
            <Button sx={{ my: 1 }} variant="contained" type="submit" size="medium">
              Submit
            </Button>
          </form>
        </Card>
      </Container>
    </Page>
  );
}
