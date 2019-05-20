import { Component, Vue } from "vue-property-decorator"
import { transitionPageInfoType } from "@/types"

@Component({})
export default class Title extends Vue {
  public title: string = `AWS-CDK for TypeScript
  を紹介するぜ`
  public subTitle: string = `kansai.ts#1
  Ryosuke Izumi( is_ryo )`
  public transitionPageInfo: transitionPageInfoType = {
    preb: "/sectionTitle/end",
    next: "/selfIntroduction"
  }
}
