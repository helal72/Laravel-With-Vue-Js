
import Dashboard from './components/admin/DashboardComponent.vue'
import Profile from './components/admin/ProfileComponent.vue'

export const routes = [
    { 
      path: '/dashboard',
       component: Dashboard 
      },
    { 
      path: '/profile', 
      component: Profile 
    }
  ]