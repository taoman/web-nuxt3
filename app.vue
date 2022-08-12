<template>
  <ClientOnly>
    <Teleport to="body">
      <div>
        <NuxtLayout>
          <NuxtPage :key="$route.fullPath" />
        </NuxtLayout>
      </div>
    </Teleport>
  </ClientOnly>
</template>
<script lang="ts" setup>
let rootDom: null | HTMLHtmlElement = null;
const onResize = useThrottleFn(() => {
  if (!process.client) return;
  rootDom ??= window.document.querySelector("html");
  const width = window.screen.width;
  let fontSize: string;
  if (width > 1200) fontSize = "16px";
  else fontSize = `${width / 750}px`;
  rootDom.style.fontSize = fontSize;
}, 100);


onMounted(() => {
  onResize();
  useEventListener("resize", onResize);
  
});
</script>
<style lang="scss">
@font-face {
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  font-family: "Harmony_Regular";
  src: url("https://bucket-webassets.oss-cn-hangzhou.aliyuncs.com/wedealer/web_static/HarmonyOS_Sans_SC.woff2")
      format("woff2"),
    url("https://bucket-webassets.oss-cn-hangzhou.aliyuncs.com/wedealer/web_static/HarmonyOS_Sans_SC.woff")
      format("woff"),
    url("https://bucket-webassets.oss-cn-hangzhou.aliyuncs.com/wedealer/web_static/HarmonyOS_Sans_SC_Regular.ttf")
      format("truetype");
}
body {
  font-family: "Harmony_Regular";
}
body a {
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
}
</style>
