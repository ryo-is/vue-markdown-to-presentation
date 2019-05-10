import { Component, Vue, Watch } from "vue-property-decorator"
import router from "@/router"
import { transitionPageInfoType, pageContentsType } from "@/types"
import marked, { Renderer } from "marked"
import templateMd from "./markdown/template.md"
import PageTitle from "@/components/pageTitle/PageTitle.vue"
import PageContent from "@/components/pageContent/PageContent.vue"

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
    template: templateMd.source
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
