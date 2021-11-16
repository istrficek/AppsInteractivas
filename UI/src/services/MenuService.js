import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import vaccine from '@iconify/icons-ic/outline-vaccines';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import baby from '@iconify/icons-healthicons/baby-0203m';
import doctorIcon from '@iconify/icons-healthicons/doctor';
import activityFill from '@iconify/icons-eva/activity-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

var children = []

export function getMenu(currentUser) { 
  
    var sidebar = [];
  
    var dasboard = {
      title: 'dashboard',
      path: '/main/dashboard',
      icon: getIcon(pieChart2Fill)
    };

    sidebar.push(dasboard);    

    currentUser.children.map((c)=>{
      var item = {
        title: c.child.name,
        path:'',
        icon: getIcon(baby),
        children: [
          {
            title: 'controles',
            path: '/main/controles/' + c.child.id,
            icon: getIcon(doctorIcon)
          },
          {
            title: 'estudios',
            path: '/main/estudios/' + c.child.id,
            icon: getIcon(fileTextFill)
          },
          {
            title: 'vacunas',
            path: '/main/vacunas/' + c.child.id,
            icon: getIcon(vaccine)
          },
          {
            title: 'percentiles',
            path: '/main/percentiles/' + c.child.id,
            icon: getIcon(activityFill)
          }
        ]
      }
      sidebar.push(item);
    })

    return sidebar;
}

