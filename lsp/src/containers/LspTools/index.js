import React from 'react'
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import ToolsCard from '@/components/ToolsCard';

const tools = [
  {
    title: 'JupyterHub',
    description: 'Multi-user development environment based on iPython Notebooks ideal for data exploration and analysis.',
    imageSrc: 'lsp_tools_logos/jupyerhub_logo_200x200.png',
    imageAlt: 'JupyterHub logo',
    href: 'https://jupyter.linea.org.br/',
    isPrivate: false
  },
  {
    title: 'LIneA Occultation Prediction Database',
    description: 'Regularly updated predictions for stellar occultations by small Solar System objects.',
    imageSrc: 'lsp_tools_logos/occultation_database_logo_200x200.png',
    imageAlt: 'occultation predict database logo',
    href: 'https://solarsystem.linea.org.br/',
    isPrivate: false
  },
  {
    title: 'OnDemand',
    description: 'Access interface to the HPC environment via Linux Terminal or Jupyter Notebooks with monitoring tools.',
    imageSrc: 'lsp_tools_logos/open_ondemand_logo_200x200.png',
    imageAlt: 'Open OnDemand logo',
    href: 'https://ondemand.linea.org.br/',
    isPrivate: true
  },
  {
    title: 'DES Science Server',
    description: 'Access to DES images with custom visualization tools built on top of Aladin and Visiomatic.',
    imageSrc: 'lsp_tools_logos/des_science_server_logo_200x200.png',
    imageAlt: 'des science server logo',
    href: 'https://scienceserver.linea.org.br/',
    isPrivate: false
  },
  {
    title: 'User Query',
    description: 'A user-friendly interface for Postgres database access based on daiquiri that allows the creation of temporary tables in MyDB users\' space, which is integrated with Jupyter and visualization tools.',
    imageSrc: 'lsp_tools_logos/user_query_daiquiri_logo_200x200.png',
    imageAlt: 'daiquiri logo',
    href: 'https://userquery.linea.org.br/',
    isPrivate: false
  },
  {
    title: 'Sky Viewer',
    description: '(coming soon)',
    imageSrc: 'lsp_tools_logos/sky_viewer_aladin_logo_200x200.png',
    imageAlt: 'aladin logo',
    href: 'https://skyviewer.linea.org.br/',
    isPrivate: false
  },
  {
    title: 'SDSS Sky Server',
    description: 'Access to all the data from the SDSS with SQL sample queries and API for programmatic access and web services such as Image Cutou, VO Services, Advanced Search, and Cross-id.',
    imageSrc: 'lsp_tools_logos/sdss_sky_server_logo_200x200.png',
    imageAlt: 'sdss sky server logo',
    href: 'http://skyserver.linea.org.br/sciserver/',
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
    title: 'MaNGA Portal',
    description: 'A custom tool to visualize the reduced IFU data and the results of the data analysis showing maps of various physical quantities derived from the spectra.',
    imageSrc: 'lsp_tools_logos/manga_portal_logo_black_200x200.png',
    imageAlt: 'sdss sky server logo',
    href: 'https://manga.linea.org.br/',
    isPrivate: false
  },
  {
    title: 'DES Science Portal',
    description: 'Legacy service of provenance information maintenance for DES data preparation and science workflow results. Its original infrastructure has been decommissioned.',
    imageSrc: 'lsp_tools_logos/des_science_portal_logo_200x200.png',
    imageAlt: 'des science server logo',
    href: 'https://scienceportal.linea.org.br/',
    isPrivate: true
  },
]

export default function LspTools() {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      ml={4}
      mr={4}
      sx={{
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      {tools.map((tool, idx) => (
        <Grid size={{ xs: 12, md: 6 }} key={`tool-${idx}`}>
          {/* <Link href={tool.href} underline="hover"> */}
          <ToolsCard
            title={tool.title}
            description={tool.description}
            imageSrc={tool.imageSrc}
            imageAlt={tool.image}
            href={tool.href}
            isPrivate={tool.isPrivate}
          />
          {/* </Link> */}
        </Grid>
      ))}
    </Grid>
  );
}
