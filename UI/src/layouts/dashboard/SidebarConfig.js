import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import vaccine from '@iconify/icons-ic/outline-vaccines';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import baby from '@iconify/icons-healthicons/baby-0203m';
import meds from '@iconify/icons-healthicons/medicines';
import settings from '@iconify/icons-eva/settings-2-fill';
import doctorIcon from '@iconify/icons-healthicons/doctor';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/main/dashboard',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Roberto',
    path: '/main/products',
    icon: getIcon(baby),
    children: [{
      title: 'controles',
      path: '/main/user',
      icon: getIcon(doctorIcon)
    },
    {
      title: 'estudios',
      path: '/main/blog',
      icon: getIcon(fileTextFill)
    },
    {
      title: 'vacunas',
      path: '/main/blog',
      icon: getIcon(vaccine)
    },
    {
      title: 'medicamentos',
      path: '/main/blog',
      icon: getIcon(meds)
    }]
  },
  {
    title: 'Camelia',
    path: '/main/blog',
    icon: getIcon(baby),
    children: [{
      title: 'controles',
      path: '/main/user',
      icon: getIcon(doctorIcon)
    },
    {
      title: 'estudios',
      path: '/main/blog',
      icon: getIcon(fileTextFill)
    },
    {
      title: 'vacunas',
      path: '/main/blog',
      icon: getIcon(vaccine)
    },
    {
      title: 'medicamentos',
      path: '/main/blog',
      icon: getIcon(meds)
    }]
  }
];

export default sidebarConfig;
