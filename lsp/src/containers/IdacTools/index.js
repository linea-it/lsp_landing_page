import React from 'react'
import Grid from '@mui/material/Grid2';
import ToolsCard from '@/components/ToolsCard';

const tools = [
  {
    title: 'JupyterHub',
    description: 'Multi-user development environment based on iPython Notebooks ideal for data exploration and analysis.',
    imageSrc: 'idac_tools_logos/jupyerhub_logo_200x200.png',
    imageAlt: 'JupyterHub logo',
    href: 'https://jupyter.linea.org.br/',
    isPrivate: false
  },
  {
    title: 'Open OnDemand',
    description: 'Access interface to the HPC environment via Linux Terminal or Jupyter Notebooks with monitoring tools.',
    imageSrc: 'idac_tools_logos/open_ondemand_logo_200x200.png',
    imageAlt: 'Open OnDemand logo',
    href: 'https://ondemand.linea.org.br/',
    isPrivate: false
  },
  {
    title: 'User Query',
    description: 'A user-friendly interface for Postgres database access based on daiquiri that allows the creation of temporary tables in MyDB users\' space, which is integrated with Jupyter and visualization tools.',
    imageSrc: 'idac_tools_logos/user_query_daiquiri_logo_200x200.png',
    imageAlt: 'daiquiri logo',
    href: 'https://userquery.linea.org.br/',
    isPrivate: false
  },
  {
    title: 'Target Viewer',
    description: '(coming soon)',
    imageSrc: 'placeholder_200x200.png',
    imageAlt: 'target viewer logo',
    href: 'https://targetviewer.linea.org.br/',
    isPrivate: false
  },
  {
    title: 'Sky Viewer',
    description: '(coming soon)',
    imageSrc: 'idac_tools_logos/sky_viewer_aladin_logo_200x200.png',
    imageAlt: 'aladin logo',
    href: 'https://skyviewer.linea.org.br/',
    isPrivate: false
  },
  {
    title: 'PZ Server',
    description: 'Ancillary service available to Rubin Science Platform users to host lightweight data products related to photo-zs.',
    imageSrc: 'placeholder_200x200.png',
    imageAlt: 'pz server logo',
    href: 'https://pzserver.linea.org.br/',
    isPrivate: true
  },
]

export default function IdacTools() {
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
        <Grid size={{ xs: 12, md: 6 }} key={`idac-tool-${idx}`}>
          <ToolsCard
            title={tool.title}
            description={tool.description}
            imageSrc={tool.imageSrc}
            imageAlt={tool.image}
            href={tool.href}
            isPrivate={tool.isPrivate}
          />
        </Grid>
      ))}
    </Grid>
  );
}
