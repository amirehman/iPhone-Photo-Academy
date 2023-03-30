<script setup>
    
    import ResonsiveImage from '../components/utils/ResonsiveImage.vue';
    import Image from '../components/utils/Image.vue';
    import { ref, onMounted } from 'vue'

    let currentPhoto = ref(0);
    let smallPhoto = ref(0);
    let currentSlide = 0;
    let currentSmallSlide = 0;
    const flash = ref(null);

    const images = ref([
        {
            id: 1,
            color: "rgba(245, 230, 39, 0.38)",
            big: {
                lg: 'carousel-photo-01.jpg',
                xl: 'carousel-photo-01@2x.jpg',
                xxl: 'carousel-photo-01@3x.jpg',
            },
            small: {
                lg: 'small-carousel-photo-01.jpg',
                xl: 'small-carousel-photo-01@2x.jpg',
                xxl: 'small-carousel-photo-01@3x.jpg'
            }
        },
        {
            id: 2,
            color: "rgba(251, 191, 75, 0.8)",
            big: {
                lg: 'carousel-photo-02.jpg',
                xl: 'carousel-photo-02@2x.jpg',
                xxl: 'carousel-photo-02@3x.jpg',
            },
            small: {
                lg: 'small-carousel-photo-02.jpg',
                xl: 'small-carousel-photo-02@2x.jpg',
                xxl: 'small-carousel-photo-02@3x.jpg'
            }
        },
        {
            id: 3,
            color: "rgba(255, 255, 255, 0.8)",
            big: {
                lg: 'carousel-photo-03.jpg',
                xl: 'carousel-photo-03@2x.jpg',
                xxl: 'carousel-photo-03@3x.jpg',
            },
            small: {
                lg: 'small-carousel-photo-03.jpg',
                xl: 'small-carousel-photo-03@2x.jpg',
                xxl: 'small-carousel-photo-03@3x.jpg'
            }
        },
        {
            id: 4,
            color: "rgba(68, 160, 235, 0.8)",
            big: {
                lg: 'carousel-photo-04.jpg',
                xl: 'carousel-photo-04@2x.jpg',
                xxl: 'carousel-photo-04@3x.jpg',
            },
            small: {
                lg: 'small-carousel-photo-04.jpg',
                xl: 'small-carousel-photo-04@2x.jpg',
                xxl: 'small-carousel-photo-04@3x.jpg'
            }
        },

    ])

    // setinterval for main carousel
    let timer = setInterval(nextSlide, 5000)

    function nextSlide() {

        removeAnimatedClasses()

        goToSlide(currentSlide == images.value.length-1 ? currentSlide = 0 : currentSlide += 1);

        // delaying the small image by  0.2s
        setTimeout(function(){
            nextSmallSlide()
            addAnimatedClasses()
        }, 300);

    }

    function nextSmallSlide() {
        goToSlide(currentSlide == 0 ? currentSmallSlide = images.value.length-1 : currentSmallSlide = currentSlide - 1);
    }
    
    function goToSlide(n) {

        currentPhoto.value = images.value[currentSlide];
        smallPhoto.value = images.value[currentSmallSlide];

        // Reseting SetInterval to prevent the conflect between auto nextSlide() and onClick nextSlide()
        window.clearInterval(timer);
        timer = window.setInterval(nextSlide, 8000);        

    }

    function removeAnimatedClasses () {
        flash.value.classList.remove('flash')

    }

    function addAnimatedClasses () {
        flash.value.classList.add('flash')
    }

    onMounted(() => {
        nextSlide()
        
        
    });


</script>

<template>
    <div>
        
        <div class="relative z-10 w-5/6 min-md:mx-auto md:w-[88%]">
            <Image src="iPhone-mokup.png" classes="iphone mockup w-full md:w-auto" alt="iphone mockup" />
            <div class="absolute inset-0">

            <div class="absolute top-[16.5%] left-[4%] w-[92%] h-[60.5%] -z-[1] overflow-hidden rounded-[2px] transition-all duration-500" :style="`box-shadow:0 -60px 300px -55px ${currentPhoto.color};`"></div>
            <!-- glow-->

            <div class="absolute top-[16.55%] left-[3%] md:left-[4%] w-[94%] md:w-[91.5%] h-[60.5%] overflow-hidden">

                <div class="absolute bg-black inset-0" ref="flash"></div>
                <!-- flash on slide change -->

                <ResonsiveImage v-if="currentPhoto" :image="currentPhoto.big" classes="w-full h-full object-cover" alt="slide big" />
                <!-- Carousel big photo : using responsive image based on screen size -->
                
                <div class="absolute bottom-3 left-0 w-full flex items-center justify-center">
                    <Image src="FE-test-assets.svg" classes="w-[36.5%]" alt="FE Test" />
                </div>
                <!-- FE Zoom Buttons -->

            </div>
            <!-- carousel photo wrapper -->

            <div class="bg-black w-[12.2%] h-[6.1%] absolute left-[8%] bottom-[10.5%] rounded overflow-hidden">
                <ResonsiveImage v-if="smallPhoto" :image="smallPhoto.small" classes="w-full h-full rounded object-cover" alt="Slide Small" />
                <!-- Carousel small photo : using responsive image based on screen size -->
            </div>
            <!-- Carousel small photo wrapper -->

            <div>
                <div @click="nextSlide()" class="cursor-pointer w-[17%] h-[8.2%] rounded-full absolute left-[41.5%] bottom-[9.5%]"></div>
            </div>
            <!-- round click button  -->

            </div>

            <div class="w-full absolute -bottom-12 md:-bottom-8 left-0 ">
                <div class="space-x-2 mt-10 w-3/4 mx-auto flex">
                    <div class="h-px rounded-full bg-white bg-opacity-25 w-full relative" v-for="item in images" :key="item.id" ref="pagination">
                        <div v-if="item.id < currentPhoto.id" class="slidebar absolute left-0 w-full top-0 bg-white h-full rounded-full"></div>
                        <div :class="item.id == currentPhoto.id ? 'pagination-loader' : ''" class="slidebar absolute left-0 top-0 bg-white h-full rounded-full"></div>
                    </div>
                </div>
            </div>
            <!-- paginations -->

        </div>
    </div>
</template>