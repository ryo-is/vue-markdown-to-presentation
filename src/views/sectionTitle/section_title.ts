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
    page_1: {
      mainText: `AWS使ってますか？`,
      prebLink: "/selfIntroduction",
      nextLink: "/sectionTitle/" + this.calcPageNumber("page_1", true)
    },
    page_2: {
      mainText: `アーキテクチャの構成管理
      ってどうしてますか？`,
      prebLink: "/sectionTitle/" + this.calcPageNumber("page_2", false),
      nextLink: "/sectionTitle/" + this.calcPageNumber("page_2", true)
    },
    page_3: {
      mainText: `CloudFormation?
      Terraform?
      ServerlessFramework?`,
      prebLink: "/sectionTitle/" + this.calcPageNumber("page_3", false),
      nextLink: "/sectionTitle/" + this.calcPageNumber("page_3", true)
    },
    page_4: {
      mainText: `YAMLとかJSONとか
      tfファイルとか書くの
      辛くないですか？`,
      prebLink: "/sectionTitle/" + this.calcPageNumber("page_4", false),
      nextLink: "/sectionTitle/" + this.calcPageNumber("page_4", true)
    },
    page_5: {
      mainText: `もっと身近な言語で
      書きたくないですか？`,
      prebLink: "/sectionTitle/" + this.calcPageNumber("page_5", false),
      nextLink: "/sectionTitle/" + this.calcPageNumber("page_5", true)
    },
    page_6: {
      mainText: `そんなあなたに
      AWS-CDKを紹介するぜ`,
      prebLink: "/sectionTitle/" + this.calcPageNumber("page_6", false),
      nextLink: "/sectionTitle/" + this.calcPageNumber("page_6", true)
    },
    page_7: {
      mainText: `今日の目的`,
      prebLink: "/sectionTitle/" + this.calcPageNumber("page_7", false),
      nextLink: "/sectionTitle/" + this.calcPageNumber("page_7", true)
    },
    page_8: {
      mainText: `AWS-CDKの存在を
      知ってもらう。`,
      prebLink: "/sectionTitle/" + this.calcPageNumber("page_8", false),
      nextLink: "/sectionTitle/" + this.calcPageNumber("page_8", true)
    },
    page_9: {
      mainText: `AWS-CDK is 何？`,
      prebLink: "/sectionTitle/" + this.calcPageNumber("page_9", false),
      nextLink: "/mainContents/page_1"
    },
    page_10: {
      mainText: `実演`,
      prebLink: "/mainContents/page_1",
      nextLink: "/sectionTitle/" + this.calcPageNumber("page_10", true),
    },
    page_11: {
      mainText: `ただこれだけは
      言わせてくれ…`,
      prebLink: "/sectionTitle/" + this.calcPageNumber("page_11", false),
      nextLink: "/sectionTitle/" + this.calcPageNumber("page_11", true)
    },
    page_12: {
      mainText: `絶対プロダクションで
      使ってはいけないぞ！
      絶対にだ！！`,
      prebLink: "/sectionTitle/" + this.calcPageNumber("page_12", false),
      nextLink: "/mainContents/page_3"
    },
    page_13: {
      mainText: `"絶対に"とは言いましたが、
      アップデートをしっかり追う
      覚悟があるなら…という感じです。`,
      prebLink: "/mainContents/page_5",
      nextLink: "/sectionTitle/" + this.calcPageNumber("page_13", true)
    },
    page_14: {
      mainText: `まとめ`,
      prebLink: "/sectionTitle/" + this.calcPageNumber("page_14", false),
      nextLink: "/mainContents/page_6"
    },
    end: {
      mainText: `おわり`,
      prebLink: "/mainContents/template",
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

  public calcPageNumber(pageName: string, addOfSub: boolean): string {
    const pageNumber: number = Number(pageName.split("_").pop())
    if (addOfSub) {
      return "page_" + (pageNumber + 1)
    } else {
      return "page_" + (pageNumber - 1)
    }
  }
}
