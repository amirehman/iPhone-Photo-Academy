<script setup>

    import { ref, computed } from 'vue'
    import { useRouter } from 'vue-router'

    let email = ref(null);
    let formError = ref(false);

    const isValidEmail = computed(() => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    }) 

    const focused = computed(() => {
        return email.value != null && email.value.length != 0;
    }) 

    const router = useRouter()

    function submitForm () {
        router.push({
            name: 'thank-you',
        })
    }



</script>

<template>
    <form @submit.prevent="submitForm" class="space-y-5">
        <div :class="isValidEmail || !focused ? 'border-t-gray' : 'border-[#D41C3D]'" class="input-element relative border pt-3 bg-t-dark-gray rounded-lg w-full md:w-[423px]">
        <img src="@/assets/images/mail-icon.svg" alt="mail icon" class="absolute flex items-center right-5 top-[1.4rem]">
        <input type="email" autocomplete="off" v-model="email" id="inputField" class="peer bg-transparent p-4 focus:outline-none">
        <label
            for="inputField"
            :class="[
                        (isValidEmail || !focused) || formError ? 'text-neutral-100 peer-focus:text-neutral-700' : 'text-[#D41C3D]',
                        focused ? 'focused-input' : '',
                    ]"
            class="pointer-events-none absolute top-[4px] md:top-0 left-3 origin-[0_0] h-full flex items-center transition-all duration-200 ease-out peer-focus:-translate-y-[0.7rem] peer-focus:scale-[0.8]"
            >  {{ (isValidEmail || !focused) || formError ? 'Enter Your Email Address' : 'Please enter a valid email' }}
        </label>
        </div>  
        <!-- input element -->

        <div class="input-element">
        <div class="notify-button-wrapper">
            <input v-if="isValidEmail" type="submit" value="Please Notify Me" class="notify-button cursor-pointer">
            <span v-else class="notify-button cursor-not-allowed">Please Notify Me</span>
        </div>
        </div>
        <!-- input-element -->
    </form>
</template>