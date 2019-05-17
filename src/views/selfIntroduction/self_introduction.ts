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
  public jobText: string = "IoT / WebApp (/ Android )"
  public communityText: string = "AWS / Vue / GraphQL / Serverless"
  public transitionPageInfo: transitionPageInfoType = {
    preb: "/",
    next: "/sectionTitle/page_1"
  }
}
