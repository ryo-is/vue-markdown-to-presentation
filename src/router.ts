import Vue from "vue"
import Router from "vue-router"
import Title from "./views/title/Title.vue"
import SelfIntroduction from "./views/selfIntroduction/SelfIntroduction.vue"
import MainContents from "./views/mainContents/MainContents.vue"
import SectionTitle from "./views/sectionTitle/SectionTitle.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "title",
      component: Title
    },
    {
      path: "/selfIntroduction",
      name: "selfIntroduction",
      component: SelfIntroduction
    },
    {
      path: "/mainContents/:pageName",
      name: "mainContents",
      component: MainContents
    },
    {
      path: "/sectionTitle/:pageName",
      name: "sectionTitle",
      component: SectionTitle
    }
  ]
})
