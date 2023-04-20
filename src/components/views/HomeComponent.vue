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
            }
        }
    },
    methods: {
        

    }
}
</script>

<style>

</style>