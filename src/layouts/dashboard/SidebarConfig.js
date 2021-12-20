import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Client',
    path: '/dashboard/client',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Invoice',
    path: '/dashboard/invoce',
    icon: getIcon(shoppingBagFill)
  }
];

export default sidebarConfig;
