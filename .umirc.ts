import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
    hmr: false,
  },
  routes: [
    {
      name: '高级表单',
      path: '/formadvancedform',
      component: './FormAdvancedForm',
    },
    {
      name: '分步表单',
      path: '/formstepform',
      component: './FormStepForm',
    },
    {
      name: '分步表单',
      path: '/formstepform',
      component: './FormStepForm',
    },
    {
      path: '/',
      component: '@/pages/index',
    },
  ],
});
