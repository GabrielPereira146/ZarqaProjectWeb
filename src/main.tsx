import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import { Home } from './routes/home'
import { Project } from './routes/project'
import { Data } from './routes/data'
import { Team } from './routes/team'
import { Grants } from './routes/grants'
import { Publications } from './routes/publications'

// Hook para alterar o título da aba dinamicamente
const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title
  }, [title])
}

// Componente Home com título dinâmico
function HomeWithTitle() {
  usePageTitle('ZARQA Project | Home')
  return <Home />
}

// Componente Project com título dinâmico
function ProjectWithTitle() {
  usePageTitle('ZARQA Project | Project')
  return <Project />
}

function DataWithTitle() {
  usePageTitle('ZARQA Project | Data')
  return <Data />
}

function TeamWithTitle() {
  usePageTitle('ZARQA Project | Team')
  return <Team />
}

function GrantsWithTitle() {
  usePageTitle('ZARQA Project | Grants')
  return <Grants />
}

function PublicationsWithTitle() {
  usePageTitle('ZARQA Project | Publications')
  return <Publications />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <HomeWithTitle />,
      },
      {
        path: 'project',
        element: <ProjectWithTitle />,
      },
      {
        path: 'data',
        element: <DataWithTitle />,
      },
      {
        path: 'team',
        element: <TeamWithTitle />,
      },
      {
        path: 'grants',
        element: <GrantsWithTitle />,
      },
      {
        path: 'publications',
        element: <PublicationsWithTitle />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
