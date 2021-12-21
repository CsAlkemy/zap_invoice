// material
import { Button, Card, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
// components
import { useState } from 'react';
import moment from 'moment';
import Page from '../components/Page';
import './Invoice.css';

export default function Invoice() {
  const [clientId, setClientId] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [discount, setDiscount] = useState('');

  const date = new Date();

  return (
    <Page title="Invoice | Zap Invoice">
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 5 }}>
              <form>
                <TextField
                  sx={{ my: 1 }}
                  fullWidth
                  required
                  id="outlined-select-currency"
                  select
                  label="Select client"
                  onChange={(e) => setClientId(e.target.value)}
                >
                  <MenuItem value={1}>Client 1</MenuItem>
                  <MenuItem value={2}>Client 2</MenuItem>
                  <MenuItem value={3}>Client 3</MenuItem>
                </TextField>
                <TextField
                  sx={{ my: 1 }}
                  fullWidth
                  required
                  id="outlined-select-currency"
                  select
                  label="Select Product"
                  onChange={(e) => setProductId(e.target.value)}
                >
                  <MenuItem value={1}>Product 1</MenuItem>
                  <MenuItem value={2}>Product 2</MenuItem>
                  <MenuItem value={3}>Product 3</MenuItem>
                </TextField>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      sx={{ my: 1 }}
                      fullWidth
                      required
                      type="number"
                      id="outlined-required"
                      label="Quantity"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      sx={{ my: 1 }}
                      fullWidth
                      required
                      type="number"
                      id="outlined-required"
                      label="Unit price"
                      onChange={(e) => setUnitPrice(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      sx={{ my: 1 }}
                      fullWidth
                      required
                      type="number"
                      id="outlined-required"
                      label="Discount %"
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button sx={{ my: 1 }} variant="contained" type="submit" size="medium">
                  Submit
                </Button>
              </form>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} hidden={clientId === ''}>
            <Card sx={{ p: 5 }}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Invoice
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={12} md={7} xl={7}>
                  <strong>Client ID : </strong> {clientId} <br />
                  <strong>Client Name :</strong> Tahrim Ahmed Miad <br />
                  <strong>Contact No : </strong>+8801733781618
                </Grid>
                <Grid item xs={12} md={5} xl={5}>
                  <div className="date">
                    <strong>Date: </strong> {moment(date).format('MMMM DD, YYYY')} <br />
                    <strong>Invoice No: </strong>{' '}
                    {[
                      'INV-',
                      date.getFullYear(),
                      date.getMonth(),
                      date.getDate(),
                      date.getHours(),
                      date.getMinutes()
                    ].join('')}
                  </div>
                </Grid>
              </Grid>
              <table />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
