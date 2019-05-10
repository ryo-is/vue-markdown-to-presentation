import { Component, Vue } from "vue-property-decorator"
import router from "@/router"

@Component({})
export default class App extends Vue {
  public prebArrow: boolean = false
  public nextArrow: boolean = false
  public colorMode: string = "default-mode"

  public changeColorMode() {
    switch (this.colorMode) {
      case "default-mode":
        this.colorMode = "dark-mode"
        break
      case "dark-mode":
        this.colorMode = "default-mode"
        break
      default:
        break
    }
  }

  public transitionPage(action: string) {
    const targetRoute: string = this.$parent.$children[0].$children[1].$data
      .transitionPageInfo[action]
    if (targetRoute !== "") {
      router.push(targetRoute)
    }
  }

  public showArrow(action: string) {
    switch (action) {
      case "preb":
        this.prebArrow = true
        break
      case "next":
        this.nextArrow = true
        break
      default:
        break
    }
  }

  public hiddenArrow(action: string) {
    switch (action) {
      case "preb":
        this.prebArrow = false
        break
      case "next":
        this.nextArrow = false
        break
      default:
        break
    }
  }
}
