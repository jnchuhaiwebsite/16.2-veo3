<template>
  <section class="py-20 bg-blue-pale">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f49d25] to-[#ff8c42] sm:text-5xl animate-fade-in">
          how to use google veo 3
        </h2>
        <p class="mt-4 text-xl text-gray-300 animate-slide-up">
          Simple 3-step process to create stunning videos with Veo 3 AI technology
        </p>
      </div>

      <div class="flex flex-row flex-wrap justify-center gap-6 lg:gap-8">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-xl border border-gray-700/50 hover:border-[#f49d25]/50 transition-all duration-300 hover:transform hover:scale-105 group flex-1 min-w-[320px] max-w-[400px] lg:min-w-[380px] lg:max-w-[450px]">
          <!-- <div class="absolute -top-5 -left-5 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#f49d25] to-[#ff8c42] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg group-hover:shadow-[#f49d25]/25 transition-all duration-300 z-10">
            {{ index + 1 }}
          </div> -->
          
          <div class="text-center">
            <!-- Hero Icon as primary visual -->
            <div class="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-700/30 rounded-full mb-6 group-hover:bg-gray-700/50 transition-colors duration-300">
              <component :is="step.icon" class="w-8 h-8 sm:w-10 sm:h-10 text-[#f49d25]" />
            </div>
            
            <h3 class="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">{{ step.title }}</h3>
            <p class="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">{{ step.description }}</p>
            
            <!-- Step number badge -->
            <div class="inline-flex items-center justify-center px-4 py-2 bg-[#f49d25]/10 border border-[#f49d25]/20 rounded-full text-[#f49d25] text-sm font-semibold">
              Step {{ index + 1 }}
            </div>
          </div>
          
          <!-- Animated underline -->
          <div class="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#f49d25] to-[#ff8c42] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
          
          <!-- Corner accent -->
          <div class="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#f49d25]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  CommandLineIcon, 
  PhotoIcon, 
  VideoCameraIcon,
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  PencilIcon,
  CpuChipIcon
} from '@heroicons/vue/24/outline'

const steps = [
{
  title: "Choose Your Generation Mode",
  description: "🚀 Select whether you want to create a video from text prompts or transform an image into motion. Veo 3 makes it easy to pick the best option for your project with intuitive tab navigation.",
  icon: CommandLineIcon
},
{
  title: "Upload and Configure",
  description: "⚙️ Upload a single image (JPG/JPEG or PNG, up to 10MB), add your creative prompts, and adjust settings for style, motion, and resolution. The more specific your input, the better your results.",
  icon: PencilIcon
},
{
  title: "Generate and Download",
  description: "🎬 Click generate and let Veo 3 AI process your request. In just moments, you'll receive a high-quality MP4 video ready for download—perfect for social media, marketing, or creative projects.",
  icon: ArrowDownTrayIcon
}

];
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out 0.2s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式优化 */
@media (max-width: 640px) {
  .min-w-[320px] {
    min-width: 280px;
  }
  
  .max-w-[400px] {
    max-width: 320px;
  }
}
</style> 