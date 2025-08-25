<template>
  <footer class="relative bg-blue-pale text-gray-300 py-8 md:py-12 pt-8 border-t border-gray-700/30 mobile-footer">
    <div class="max-w-7xl mx-auto px-4 mobile-padding">
      
      <!-- 友情链接区域 -->
      <div class="mb-8" v-if="partnerSites && partnerSites.length > 0">
        <div class="text-[#f49d25] font-medium mb-4 text-left text-sm md:text-lg">Partner Sites</div>
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <a v-for="(item,index) in partnerSites" :key="index" 
             :href="item.url" 
             target="_blank" 
             rel="nofollow noopener" 
             class="text-gray-400 hover:text-[#f49d25] transition-colors text-sm"
             :title="item.name"
             >
            {{ item.name }}
          </a>
        </div>
      </div>

      <!-- 分割线 -->
      <div class="w-full h-px bg-gray-700/30 mb-8" v-if="partnerSites && partnerSites.length > 0"></div>

      <!-- 主要内容区域 -->
      <div class="flex flex-col md:flex-row gap-8 md:gap-16 mobile-footer-links">
        <!-- Logo 和描述 -->
        <div class="flex-1">
          <div class="flex flex-col items-start text-left">
            <div class="flex items-center gap-4 mb-4">
              <img src="/logo.png" alt="veo 3 AI - AI Image Animator Platform" loading="lazy" class="h-16 md:h-24">
              <p class="text-sm text-gray-400 max-w-xl">
                veo3 revolutionizes your photos into captivating motion videos through cutting-edge AI animation technology, delivering Hollywood-grade visual effects in minutes.
              </p>
            </div>
            <div class="flex flex-col items-start gap-2 text-sm text-gray-500">
              <p>© 2025 veo3 AI. All rights reserved.</p>
              <div class="text-left">
                <p class="text-gray-400 text-sm">
                 
                  <a href="mailto:support@vidveo3.com" class="transition-colors text-[#f49d25] font-medium hover:text-[#f49d25]" title="support@vidveo3.com">support@vidveo3.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 导航链接和法律条款 -->
        <div class="flex-1 flex flex-col sm:flex-row gap-6 md:gap-8">
          <!-- 导航链接 -->
          <div class="flex-1 text-center sm:text-left">
            <div class="text-[#f49d25] font-medium mb-4 text-sm md:text-lg">Navigation</div>
            <div class="flex flex-col gap-2 items-center sm:items-start">
              <template v-for="(section, index) in sections" :key="index">
                <NuxtLink v-if="section.href" :to="section.href" :title="section.title" :Anchor="section.Anchor"
                  class="text-gray-400 hover:text-[#f49d25] transition-colors flex items-center gap-2 justify-center sm:justify-start">
                  <span>{{ section.name }}</span>
                </NuxtLink>
                <div v-else @click.prevent="handleNavClick(section.id)" 
                  class="text-gray-400 hover:text-[#f49d25] transition-colors cursor-pointer flex items-center gap-2 justify-center sm:justify-start">
                  <span>{{ section.name }}</span>
                </div>
              </template>
            </div>
          </div>

          <!-- 法律条款 -->
          <div class="flex-1 text-center sm:text-left">
            <div class="text-[#f49d25] font-medium mb-4 text-sm md:text-lg">Legal</div>
            <div class="flex flex-col gap-2 items-center sm:items-start">
              <NuxtLink title="Privacy Policy" to="/subsidiary/privacy-policy" class="text-gray-400 hover:text-[#f49d25] transition-colors text-center sm:text-left">Privacy Policy</NuxtLink>
              <NuxtLink title="Terms of Service" to="/subsidiary/terms-of-service" class="text-gray-400 hover:text-[#f49d25] transition-colors text-center sm:text-left">Terms of Service</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNavigation } from '~/utils/navigation'
import { getFriendLinkList } from '~/api'
import { useAsyncData } from 'nuxt/app'

interface PartnerSite {
  url: string
  name: string
}

const { activeSection, sections, handleNavClick, handleScroll } = useNavigation()

// 服务端请求友情链接
const { data: partnerSites, error } = await useAsyncData('partnerSites'+Math.random(), async () => {
  const res = await getFriendLinkList()
  if (res.code === 200) {
    return res.data as PartnerSite[]
  }
  return []
})
</script>

<style scoped>
/* 导航链接悬停效果 */
a {
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #f49d25;  /* theme color */
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

footer a:focus {
  outline: none !important;
  box-shadow: none !important;
}

/* 确保标签在小屏幕上也能正确显示 */
@media (max-width: 640px) {
  .flex.items-center.justify-between {
    flex-wrap: wrap;
  }
  
  .flex.items-center.gap-2.ml-2 {
    margin-left: 0;
    margin-top: 0.25rem;
  }
}
</style> 