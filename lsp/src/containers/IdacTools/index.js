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
