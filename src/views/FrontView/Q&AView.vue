<template>
    <div class="bg-primary">
        <div class="container text-info py-6">
            <Loading v-model:active="isLoading" :can-cancel="false" :is-full-page="fullPage" :loader="loader"></Loading>
            <div class="row pb-6 pb-sm-0">
                <div class="col-md-6">
                    <div class="col-md-4 my-6 me-2">
                        <div class="border-bottom">
                            <h2>喵星球<br>
                                常見問答。
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="col-md-4 my-6 me-2 my-sm-0"></div>
                    <h5 class="vertical-text">
                        細心溫柔使貓咪<br>
                        有家的感覺。
                    </h5>
                </div>
            </div>
            <div class="row py-6 py-sm-0">
                <div class="accordion" id="accordionExample" data-aos="fade-up">
                    <div class="accordion-item bg-primary">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed bg-secondary text-info" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                營業時間與照護時間
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                營業時間:中午 12:00 到晚間 21:00。
                                <br>
                                採預約制，不對外開放營業。
                                <br>
                                保母照護時段為:早上 10:00 至晚間 22:00 (12 小時)，其餘時間現場將沒有保母。
                                <br>
                                ▲ 愛貓會在其專屬房間內休息，不與其他非同家庭的愛貓接觸。<br>
                                ▲ 您可以隨時透過房內兩台遠端攝影機，查看愛貓的起居情況。<br>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-primary">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed bg-secondary text-info" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                可以參觀環境嗎？
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                參觀無需事先預約，您可以在下午13:00至晚上20:00間隨時來店參觀。
                                若您恰好遇到其他顧客正在辦理入住或退房手續，我們會請您在一樓的門市稍作等待。
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-primary">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed bg-secondary text-info" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                有24小時照護嗎
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                貓森旅的專人照護時段為：
                                早上11:45至晚間21:20。

                                在其餘的時段，現場將沒有照護員。貓貴賓會在其專屬的房間內休息，不與其他非同家庭的貓貴賓接觸。
                                您可以隨時透過遠端攝影機，查看貓貴賓的起居情況。
                            </div>
                        </div>
                    </div>
                        <div class="accordion-item bg-primary">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed bg-secondary text-info" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    入住前的準備
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    為了讓貓貴賓感受到家的氛圍，請您準備其平常喜愛的睡窩、毯子或1-2件您的衣服，這可以帶來家中的味道。若能攜帶一小袋已使用過的貓砂，也有助於他們的適應。
                                    請您提供貓貴賓平常習慣吃的主食與點心，這樣可以避免因換環境及換糧造成的腸胃不適。
                                    若貓貴賓有固定使用的保健品、化毛膏或藥品等，請一併攜帶。照護員會與您確認餵食的份量和次數。
                                    您可以選擇帶上抓板或玩具。若需其他商品，貓森旅也提供加購選項。
                                    入住前，請為貓貴賓使用防蚤滴劑。如果您需要，貓森旅可協助您與獸醫院代購，並於入住當日為貓貴賓使用。對於多貓家庭，建議提前使用以防止貓咪在互相理毛時舔食滴劑。
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-primary">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed bg-secondary text-info" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    入住與退房時間
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    入住時段：下午15:00至晚間20:30
                                    ‧退房時段：中午12:00到下午14:00

                                    如果您希望提前入住或延後退房，我們將根據每逾時的小時收取額外費用。

                                    超時費用根據房型有所不同：
                                    ‧經典房：每小時150元
                                    ‧尊爵房：每小時200元
                                    ‧森林房：每小時300元
                                    費用將按您的實際到達時間計算，最高金額不會超過單晚的房費。
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-primary">
                            <h2 class="accordion-header" id="headingSix">
                                <button class="accordion-button collapsed bg-secondary text-info" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    需要自備貓砂嗎？
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    貓森旅為顧客提供以下幾種常見的砂種供選擇：
                                    艾爾博士無塵礦砂、法麗凝結木屑砂、凱優崩解木屑砂、凱沃豆腐砂、嬌聯紙砂以及嬌聯條砂。

                                    若平時使用的砂種未在我們的提供之列，您可以選取顆粒大小接近的砂種，或選擇自行攜帶貓砂使用
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-primary">
                            <h2 class="accordion-header" id="headingSeven">
                                <button class="accordion-button collapsed bg-secondary text-info" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    需要自備餐具嗎？
                                </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    貓森旅為您提供多種餐具選擇，包括不鏽鋼碗、陶瓷碗，以及木製的餐碗架。
                                    此外，我們也有陶瓷自動飲水機供貓貴賓選用。
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-primary">
                            <h2 class="accordion-header" id="headingEight">
                                <button class="accordion-button collapsed bg-secondary text-info" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    是否提供監視器可看貓咪狀態？
                                </button>
                            </h2>
                            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    每間貓房都配備了獨立的24小時連線監視器，我們會在入住當天協助家長進行設定。
                                    由於房間並未進行隔音，為了避免突然的聲音對貓貴賓造成不安，我們並未開放監視器的通話功能，敬請家長們諒解。
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-primary">
                            <h2 class="accordion-header" id="headingNine">
                                <button class="accordion-button collapsed bg-secondary text-info" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    有到房外的放風與散步時間嗎？
                                </button>
                            </h2>
                            <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    每天都會有設定的獨立放風時間，家長可以選擇是否希望貓貴賓於此時間內走到公共走廊上遊戲散步。

                                    經典房和尊爵房的放風時間為每日15分鐘，而森林房則為每日30分鐘。

                                    若家長希望增加陪伴時間，可以選擇加購服務，每加10分鐘的費用是150元。當住宿達到滿房狀態時，加購的陪伴時間會由我們的照護員進入房間陪同貓貴賓。
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-primary">
                            <h2 class="accordion-header" id="headingTen">
                                <button class="accordion-button collapsed bg-secondary text-info" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    是否有提供接送服務
                                </button>
                            </h2>
                            <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    我們目前不提供接送服務。然而，有部分的顧客選擇使用「毛孩uber」進行接送，而我們的照護員可以協助您的貓貴賓上下車。
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  data () {
    return {
      isLoading: false,
      fullPage: true,
      loader: 'bars'
    }
  },
  mounted () {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // 到哪個位置會觸發
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // 指觸發一次
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

    })
  },
  components: {
    Loading
  }
}
</script>
