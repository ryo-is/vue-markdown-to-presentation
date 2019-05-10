import { Component, Vue } from "vue-property-decorator"
import DanmakuBodyComponent from "@/components/danmakuBody/DanmakuBody.vue"

@Component({
  components: {
    DanmakuBodyComponent
  }
})
export default class DanmakuLayerComponent extends Vue {
  public danmakuText: string = "弾幕だよー"
  public danmakuTexts: string[] = ["弾幕だよー"]

  // public created() {
  //   const self: DanmakuLayerComponent = this
  //   setInterval(() => {
  //     self.danmakuTexts.push("弾幕だよー弾幕だよー弾幕だよー")
  //   }, 5000)
  //   setInterval(() => {
  //     self.danmakuTexts.shift()
  //   }, 10000)
  // }
}
