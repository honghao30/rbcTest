<template>
    <div class="main__wrap">
        <section class="main__visual__sec">
            <swiper
                ref="visualSlide"
                :options="swiperOption" 
            >
                <swiper-slide>
                    <div class="slide__item01--down fadeindown">
                        <img src="../../assets/images/ex_img.png" alt="">
                    </div>
                    <div class="slide__item01--right fadeinright">
                        <img src="../../assets/images/ex_img2.png" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide>slide 2</swiper-slide>
                <swiper-slide>slide 3</swiper-slide>
            </swiper>  
        </section>
        <section class="main__sec02 anim__target">
           <div class="slide__item01--down fadeinUp">
                        <img src="../../assets/images/ex_img.png" alt="">
            </div>
            <div class="slide__item01--right fadeinUp">
                <img src="../../assets/images/ex_img2.png" alt="">
            </div>

        </section>
        <section class="main__sec02 anim__target">
           <div class="slide__item01--down fadeinUp">
                        <img src="../../assets/images/ex_img.png" alt="">
            </div>
            <div class="slide__item01--right fadeinUp">
                <img src="../../assets/images/ex_img2.png" alt="">
            </div>

        </section>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// Import Swiper styles
import "swiper/css/swiper.css";

export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
        return{
            swiperOption: {
                loop: true
            },
            scrollOffset: 100,
            scrollElems: undefined,
            windowH : window.innerHeight
           
        }
    },
    created() {
    },
    mounted() {
        this.scrollElems = document.querySelectorAll('.anim__target')
        document.addEventListener('scroll', this.handleScroll);
    },  
    unmounted() {
        document.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        elementInView(el, offset = 0) {
            let elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (this.windowH - offset)
            )
        },
        handleScroll() {
            for(let i = 0; i < this.scrollElems.length ; i++) {
                 if(this.elementInView(this.scrollElems[i], this.scrollOffset)) {
                    this.scrollElems[i].classList.add('animated')
                }else {
                    this.scrollElems[i].classList.remove('animated')
                }
            }
           
        }


    }
}
</script>

<style>

</style>