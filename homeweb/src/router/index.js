import { createRouter, createWebHashHistory } from 'vue-router'

import HomeRoutes from '@/router/Maps/Homes'
import AboutRoutes from "@/router/Maps/Abouts";
import ProjectRoutes from "@/router/Maps/Projects";
import OtherRoutes from "@/router/Maps/Others";
import Error404Routes from "@/router/Maps/ErrorNotFound";

const routes = [
    ...HomeRoutes,
    ...AboutRoutes,
    ...ProjectRoutes,
    ...OtherRoutes,
    ...Error404Routes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
