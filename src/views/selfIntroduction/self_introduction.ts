import { Component, Vue } from "vue-property-decorator"
import { transitionPageInfoType } from "@/types"
import PageTitle from "@/components/pageTitle/PageTitle.vue"

@Component({
  components: {
    PageTitle
  }
})
export default class Introduction extends Vue {
  public pageTitleText: string = "自己紹介"
  public nameText: string = "Ryosuke Izumi / is_ryo"
  public jobText: string = "IoT / FrontEnd"
  public communityText: string = "v-kansai / JAWS-UG / Node学園"
  public transitionPageInfo: transitionPageInfoType = {
    preb: "/",
    next: "/mainContents/summary"
  }
}
