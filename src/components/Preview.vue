<template>
  <div class="mykit-preview">
    <section>
      <slot></slot>
    </section>

    <div v-show="codeVisible" class="source-code">
      <pre :class="`${isDark?'dark':''} language-html`"><code class="language-html">{{ previewSourceCode }}</code></pre>
    </div>

    <div class="preview-bottom">
      <span name="Code" @click="showSourceCode">查看代码</span>
    </div>
  </div>
</template>

<script setup>
import Prism from 'prismjs'
// import '../assets/prism.css'
import { isDark } from '@/composables'

// if(isDark){
// }else{
//   import '../assets/prism1.css';
// }


const isDev = import.meta.env.MODE === 'development';

const props = defineProps({
  /** 组件名称 */
  compName: {
    type: String,
    default: '',
    require: true,
  },
  /** 要显示代码的组件 */
  demoName: {
    type: String,
    default: '',
    require: true,
  },
})

const sourceCode = ref('')
const codeVisible = ref(false)

const previewSourceCode = computed(() => {
  return sourceCode.value.replace(/'\.\.\/\.\.\/index'/g, `'@tencent/my-kit'`);
})

  watch(isDark,(newVal)=>{
    document.getElementById("theme").href = `prism${newVal?'':'1'}.css`;
  })

 onMounted(async () => {
  let link = document.createElement("link");
  link.type = "text/css";
  link.id = "theme";
  link.rel = "stylesheet";
  link.href = `prism${isDark.value?'':'1'}.css`;
  document.getElementsByTagName("head")[0].appendChild(link);


  if (props.compName && props.demoName) {
    if (isDev) {
      sourceCode.value = (
        await import(/* @vite-ignore */ `../../packages/${props.compName}/docs/${props.demoName}.vue?raw`)
      ).default;
    } else {
      sourceCode.value = await fetch(`${isDev ? '' : '/datav-vue3'}/packages/${props.compName}/docs/${props.demoName}.vue`).then((res) => res.text());
    }
  }
  await nextTick();
  Prism.highlightAll();
})

const copyCode = async () => {
  // this.$copyText(this.sourceCode);
}

const showSourceCode = () => {
  codeVisible.value = !codeVisible.value
}

</script>

<style lang="less">
// @import '@/assets/prism.css';

pre {
  line-height: 0;
}

.mykit-preview {
  border: 4px;
  border: 1px dashed #e7e7e7;
  padding: 10px;
  border-bottom: 1px dashed #e7e7e7;

  section {
    margin: 15px;
  }
}

.source-code {
  max-height: 500px;
}

.language-html {
  margin: 0;
  padding: 0 15px;
}

.preview-bottom {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px dashed #e7e7e7;
}

</style>
