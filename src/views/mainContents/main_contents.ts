import { Component, Vue, Watch } from "vue-property-decorator"
import { transitionPageInfoType, pageContentsType } from "@/types"
import PageTitle from "@/components/pageTitle/PageTitle.vue"
import PageContent from "@/components/pageContent/PageContent.vue"

@Component({
  components: {
    PageTitle,
    PageContent
  },
  beforeRouteUpdate(to, from, next) {
    this.$data.pageName = to.path
    next()
  }
})
export default class MainContents extends Vue {
  public created() {
    this.setContentInfo()
  }

  @Watch("pageName")
  public onPageNameChange() {
    this.setContentInfo()
  }

  public basicContent: boolean = true
  public contents: pageContentsType = {
    summary: {
      mainText: "LTDR",
      mainTitle: "今日のお話",
      prebLink: "/selfIntroduction",
      nextLink: "/sectionTitle/hoge"
    },
    hoge_1: {
      mainText: "hogehoge",
      mainTitle: "小タイトル",
      prebLink: "/sectionTitle/hoge",
      nextLink: "/mainContents/fuga"
    },
    fuga: {
      mainText: "hogehoge",
      mainTitle: "小タイトル",
      prebLink: "/mainContents/hoge_1",
      nextLink: "/sectionTitle/end"
    }
  }
  public transitionPageInfo: transitionPageInfoType = {
    preb: "",
    next: ""
  }
  public pageContentText: string = ""
  public pageName: string = ""
  public pageTitleText: string = ""

  public setContentInfo() {
    this.pageName = this.$route.params.pageName
    this.pageContentText = this.contents[this.pageName].mainText
    this.pageTitleText = this.contents[this.pageName].mainTitle as string
    this.transitionPageInfo.preb = this.contents[this.pageName].prebLink
    this.transitionPageInfo.next = this.contents[this.pageName].nextLink
  }
}
