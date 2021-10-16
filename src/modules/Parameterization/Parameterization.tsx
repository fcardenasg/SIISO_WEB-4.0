import { Person } from '@mui/icons-material'
import React from 'react'
import { ButtonLinkDashboard } from '../../components/buttons/ButtonLinkDashboard'
import AssignmentIcon from '@mui/icons-material/Assignment';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

export const Parameterization = () => {
  return (

    /* Botones  */
    <div className="flex flex-1 w-full flex-col gap-10">
      
    <div className="w-full flex justify-between">
      <h1 className="text-md text-gray-700 font-montserrat font-semibold">
        Parametrización
      </h1>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
      <ButtonLinkDashboard
        title="Tipo de Catálogos"
        subtitle="Registro de tipos de catálogos"
        icon={<AssignmentIcon sx={{ fontSize: 40 }} />}
      />
      <ButtonLinkDashboard
        title="Catálogos"
        subtitle="Registro de catálogos"
        icon={<AutoStoriesIcon sx={{ fontSize: 40 }} />}
      />
      <ButtonLinkDashboard
        title="Empresas"
        subtitle="Regitro de Empresas"
        icon={<CorporateFareIcon sx={{ fontSize: 40 }} />}
      />
    </div>
    
  </div>

  )
}
