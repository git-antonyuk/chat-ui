<script lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const containerVariants = cva(
  'mx-auto w-full',
  {
    variants: {
      size: {
        sm: 'max-w-screen-sm',
        md: 'max-w-screen-md',
        lg: 'max-w-screen-lg',
        xl: 'max-w-screen-xl',
        '2xl': 'max-w-screen-2xl',
        '3xl': 'max-w-[1600px]',
        '4xl': 'max-w-[1800px]',
        '5xl': 'max-w-[2000px]',
        full: 'max-w-full',
      },
      padding: {
        none: '',
        xs: 'px-2',
        sm: 'px-4',
        md: 'px-6',
        lg: 'px-8',
        xl: 'px-12',
        '2xl': 'px-16',
      },
      paddingY: {
        none: '',
        xs: 'py-2',
        sm: 'py-4',
        md: 'py-6',
        lg: 'py-8',
        xl: 'py-12',
        '2xl': 'py-16',
      },
      center: {
        true: 'mx-auto',
        false: '',
      },
    },
    defaultVariants: {
      size: 'xl',
      padding: 'md',
      paddingY: 'none',
      center: true,
    },
  },
)

type ContainerVariants = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full'
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  paddingY?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  center?: boolean
}

export type Props = {
  as?: string
  class?: HTMLAttributes['class']
} & ContainerVariants
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  size: 'xl',
  padding: 'md',
  paddingY: 'none',
  center: true,
})
</script>

<template>
  <component
    :is="as"
    :class="cn(containerVariants({ size, padding, paddingY, center }), props.class)"
  >
    <slot />
  </component>
</template> 