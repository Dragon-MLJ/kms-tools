<script setup lang="ts">
import * as dayjs from 'dayjs'

const currentYear = ref(dayjs().year())

const { t } = useI18n()
</script>

<template>
  <ALayoutFooter class="bg-[--color-bg-2] px-2">
    <div class="mx-auto flex h-14 w-256 max-w-full whitespace-nowrap flex items-center justify-center">
      <ASpace>
        <div>
          Copyright &copy; {{ currentYear }}
        
        </div>
       
      </ASpace>
    </div>
  </ALayoutFooter>
</template>
