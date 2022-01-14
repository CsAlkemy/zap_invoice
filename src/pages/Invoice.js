// material
import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
// components
import { useState } from 'react';
import moment from 'moment';
import Page from '../components/Page';
import './Invoice.css';
import { InvoiceListHead } from '../components/_dashboard/invoice';

const TABLE_HEAD = [
  { id: 'product', label: 'Product Name', alignRight: false },
  { id: 'pack', label: 'Pack', alignRight: true },
  { id: 'quantity', label: 'Quantity', alignRight: false },
  { id: 'UnitPrice', label: 'Unit Price', alignRight: false },
  { id: 'discount', label: 'Discount', alignRight: false },
  { id: 'total', label: 'Total', alignRight: false }
];

export default function Invoice() {
  const [clientId, setClientId] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [discount, setDiscount] = useState('');

  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');

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
                      type="text"
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
                      type="text"
                      id="outlined-required"
                      label="Unit price"
                      onChange={(e) => setUnitPrice(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      sx={{ my: 1 }}
                      fullWidth
                      type="text"
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
              <Table>
                <InvoiceListHead order={order} orderBy={orderBy} headLabel={TABLE_HEAD} />
                <TableBody>
                  <TableRow>
                    <TableCell align="left">{productId || '-'}</TableCell>
                    <TableCell align="center">100 ML</TableCell>
                    <TableCell align="center">{quantity || '-'}</TableCell>
                    <TableCell align="center">{unitPrice || '-'}</TableCell>
                    <TableCell align="center">{discount ? discount.concat('%') : '-'}</TableCell>
                    <TableCell align="right">
                      {quantity !== '' && unitPrice !== ''
                        ? quantity * unitPrice - quantity * unitPrice * (discount / 100)
                        : '-'}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell rowSpan={1} />
                    <TableCell colSpan={2} />
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="right">5000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
