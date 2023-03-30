<script setup>
  import IphoneMokup from '../components/IphoneMokup.vue';
  import NotificationForm from '../components/NotificationForm.vue';
</script>

<template>
  <main class="t-container text-white mt-10 lg:mt-0">
    
    <div class="md:flex space-y-10 md:space-y-0">
      <div class="content w-full flex flex-wrap md:flex-nowrap items-center">
      
        <div class="w-full md:w-4/5 space-y-10">
          
          <div class="space-y-4">
            <span class="label inline-block w-[140px] text-center h-6 leading-6 rounded-full bg-t-green uppercase text-[12px] tracking-[2px] font-medium">New Course</span>
          <!-- label -->
            <h1 class="text-4xl md:text-6xl lg:text-[63px] leading-none font-light">iPhone Photo Academy</h1>
          </div>

          <div class="space-y-5">
            <p class="text-[22px]">Sign up now to get notified <br class="hidden md:block"> when this course is available!</p>
            
            <NotificationForm />
            <!-- notification form -->

          </div>

        </div>

      </div>
      <!-- content -->
      
      <div class="mobile w-full md:w-1/2 relative">
        <IphoneMokup />
      </div>
      <!-- mobile -->      
    </div>

  </main>
</template>
