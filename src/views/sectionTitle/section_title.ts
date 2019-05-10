import { Component, Vue, Watch } from "vue-property-decorator"
import { transitionPageInfoType, pageContentsType } from "@/types"

@Component({
  beforeRouteUpdate(to, from, next) {
    this.$data.pageName = to.path
    next()
  }
})
export default class SectionTitle extends Vue {
  public created() {
    this.setContentInfo()
  }

  @Watch("pageName")
  public onPageNameChange() {
    this.setContentInfo()
  }

  public contents: pageContentsType = {
    hoge: {
      mainText: "小タイトル",
      prebLink: "/mainContents/summary",
      nextLink: "/mainContents/hoge_1"
    },
    end: {
      mainText: "EOF",
      prebLink: "/mainContents/fuga",
      nextLink: "/"
    }
  }
  public transitionPageInfo: transitionPageInfoType = {
    preb: "",
    next: ""
  }
  public pageName: string = ""
  public pageTitleText: string = ""

  public setContentInfo() {
    this.pageName = this.$route.params.pageName
    this.pageTitleText = this.contents[this.pageName].mainText
    this.transitionPageInfo.preb = this.contents[this.pageName].prebLink
    this.transitionPageInfo.next = this.contents[this.pageName].nextLink
  }
}
