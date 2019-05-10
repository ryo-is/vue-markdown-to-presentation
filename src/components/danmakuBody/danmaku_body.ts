import { Component, Vue, Prop } from "vue-property-decorator"

@Component({})
export default class DanmakuBodyComponent extends Vue {
  @Prop() public text: string

  public textMoveClass: boolean = false
  public topPosition: string = ""

  public created() {
    this.topPosition = (Math.random() * 80 + 10) + "vh"
  }

  // public mounted() {
  //   setTimeout(() => {
  //     this.textMoveClass = true
  //   }, 1000)
  // }
}
