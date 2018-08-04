import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/components/Signup'
import Dashboard from '@/components/Dashboard'
import InvestorDashboard from '@/components/InvestorDashboard'
import CreatorDashboard from '@/components/CreatorDashboard'
import ProjectView from '@/components/ProjectView'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/investor-dashboard',
      name: 'investor-dashboard',
      component: InvestorDashboard
    },
    {
      path: '/creator-dashboard',
      name: 'creator-dashboard',
      component: CreatorDashboard
    },
    {
      path: '/project/:id',
      name: 'project-view',
      component: ProjectView
    }
  ]
})
