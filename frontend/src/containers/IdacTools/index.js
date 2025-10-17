"use client";
import React from 'react'
import Grid from '@mui/material/Grid2';
import ToolsCard from '@/components/ToolsCard';
import { useAuth } from "@/contexts/AuthContext";

export default function IdacTools() {
  const { settings } = useAuth();
  const tools = [
    {
      title: 'JupyterHub',
      description: 'Multi-user development environment based on iPython Notebooks ideal for data exploration and analysis.',
      imageSrc: 'idac_tools_logos/jupyerhub_logo_200x200.png',
      imageAlt: 'JupyterHub logo',
      href: 'https://jupyter.linea.org.br/',
      membersOnly: false,
      registrationRequired: true,
      newRelease: false
    },
    {
      title: 'Open OnDemand',
      description: 'Access interface to the HPC environment via Linux Terminal or Jupyter Notebooks with monitoring tools.',
      imageSrc: 'idac_tools_logos/open_ondemand_logo_200x200.png',
      imageAlt: 'Open OnDemand logo',
      href: 'https://ondemand.linea.org.br/',
      membersOnly: true,
      registrationRequired: false,
      newRelease: false
    },
    {
      title: 'User Query',
      description: 'A user-friendly interface for Postgres database access based on daiquiri that allows the creation of temporary tables in MyDB users\' space, which is integrated with Jupyter and visualization tools.',
      imageSrc: 'idac_tools_logos/userquery_logo_200x200.png',
      imageAlt: 'daiquiri logo',
      href: settings?.is_dev ? 'https://userquery-dev.linea.org.br/query/' : 'https://userquery.linea.org.br/query/',
      membersOnly: false,
      registrationRequired: false,
      newRelease: false
    },
    {
      title: 'Target Viewer',
      description: 'Visualization tool for astronomical images based on a list of target objects previously defined by the user. (UNDER DEVELOPMENT)',
      imageSrc: 'idac_tools_logos/target_viewer_logo_200x200.png',
      imageAlt: 'target viewer logo',
      href: settings?.is_dev ? 'https://targetviewer-dev.linea.org.br/' : 'https://targetviewer.linea.org.br/',
      membersOnly: false,
      registrationRequired: true,
      newRelease: true
    },
    {
      title: 'Sky Viewer',
      description: 'Visualization tool based on Aladin that displays HIPS images and catalog overlays. (UNDER DEVELOPMENT)',
      imageSrc: 'idac_tools_logos/skyviewer_logo_200x200.png',
      imageAlt: 'aladin logo',
      href: settings?.is_dev ? 'https://skyviewer-dev.linea.org.br/' : 'https://skyviewer.linea.org.br/',
      membersOnly: false,
      registrationRequired: false,
      newRelease: true
    },
    {
      title: 'PZ Server',
      description: 'Ancillary service available to Rubin Science Platform users to host lightweight data products related to photo-zs.',
      imageSrc: 'idac_tools_logos/pzserver_logo_200x200.png',
      imageAlt: 'pz server logo',
      href: settings?.is_dev ? 'https://pzserver-dev.linea.org.br/' : 'https://pzserver.linea.org.br/',
      membersOnly: true,
      registrationRequired: false,
      newRelease: false
    },
    {
      title: 'LIneA Occultation Prediction Database',
      description: 'Regularly updated predictions for stellar occultations by small Solar System objects.',
      imageSrc: 'idac_tools_logos/occultation_database_logo_200x200.png',
      imageAlt: 'occultation predict database logo',
      href: settings?.is_dev ? 'https://solarsystem-dev.linea.org.br/' : 'https://solarsystem.linea.org.br/',
      membersOnly: false,
      registrationRequired: false,
      newRelease: false
    },
  ]


  return (
    <Grid
      container
      direction="row"
      spacing={2}
      ml={4}
      mr={4}
      alignItems="stretch"
    >
      {tools.map((tool, idx) => (
        <Grid size={{ xs: 12, md: 6, lg: 4 }} key={`idac-tool-${idx}`}>
          <ToolsCard
            title={tool.title}
            description={tool.description}
            imageSrc={tool.imageSrc}
            imageAlt={tool.image}
            href={tool.href}
            membersOnly={tool.membersOnly}
            registrationRequired={tool.registrationRequired}
            newRelease={tool.newRelease}
          />
        </Grid>
      ))}
    </Grid>
  );
}
