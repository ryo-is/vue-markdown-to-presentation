import { Component, Vue, Watch } from "vue-property-decorator"
import router from "@/router"
import { transitionPageInfoType, pageContentsType } from "@/types"
import marked, { Renderer } from "marked"
import PageTitle from "@/components/pageTitle/PageTitle.vue"
import PageContent from "@/components/pageContent/PageContent.vue"

import templateMd from "./markdown/template.md"
import page1Md from "./markdown/kantaiTs1/page_1.md"
import page2Md from "./markdown/kantaiTs1/page_2.md"
import page3Md from "./markdown/kantaiTs1/page_3.md"
import page4Md from "./markdown/kantaiTs1/page_4.md"
import page5Md from "./markdown/kantaiTs1/page_5.md"
import page6Md from "./markdown/kantaiTs1/page_6.md"

const markedRenderer: Renderer = new marked.Renderer()

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
    template: {
      prebLink: "/selfIntroduction",
      nextLink: "/sectionTitle/end"
    },
    page_1: {
      prebLink: "/sectionTitle/page_6",
      nextLink: "/mainContents/page_2"
    },
    page_2: {
      prebLink: "/mainContents/page_1",
      nextLink: "/sectionTitle/page_10"
    },
    page_3: {
      prebLink: "/sectionTitle/page_12",
      nextLink: "/mainContents/page_4"
    },
    page_4: {
      prebLink: "/mainContents/page_3",
      nextLink: "/mainContents/page_5"
    },
    page_5: {
      prebLink: "/mainContents/page_4",
      nextLink: "/sectionTitle/page_13"
    },
    page_6: {
      prebLink: "/sectionTitle/page_14",
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
  public markdownTextObject: {[key: string]: string} = {
    template: templateMd.source,
    page_1: page1Md.source,
    page_2: page2Md.source,
    page_3: page3Md.source,
    page_4: page4Md.source,
    page_5: page5Md.source,
    page_6: page6Md.source
  }

  /**
   * Create HTML
   */
  public compiledMarkdownText() {
    const key: string = this.$route.params.pageName
    const mdText: string = this.markdownTextObject[key]
    if (mdText) {
      markedRenderer.code = function(code, lang) {
        const codeBody: string = `<pre><code class="language-${lang} code-block">${code}</code></pre>`
        return codeBody
      }
      markedRenderer.image = function(href, title, text) {
        return `<p class="image-wrapper"><img src=${href} alt=${text} /></p>`
      }
      const markedContent: string = marked(mdText, {
        renderer: markedRenderer
      })
      return markedContent
    } else {
      return router.push("/")
    }
  }

  public setContentInfo() {
    this.pageName = this.$route.params.pageName
    this.transitionPageInfo.preb = this.contents[this.pageName].prebLink
    this.transitionPageInfo.next = this.contents[this.pageName].nextLink
  }
}
