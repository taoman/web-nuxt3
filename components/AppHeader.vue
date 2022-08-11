<template>
  <header class="app-header">
    <h1 class="seo">为商云服</h1>
    <div class="desktop" v-if="isDesktop">
      <div class="header">
        <img
          class="logo"
          src="@/assets/images/header-logo.png"
          alt="logo"
          @click="toIndex"
        />
        <div class="action-list">
          <NuxtLink
            to="/"
            :class="['item', desktopActiveMap[1] ? 'item__active' : '']"
          >
            首页
          </NuxtLink>
          <div
            :class="['item', desktopActiveMap[2] ? 'item__active' : '']"
            @click="togglePanel()"
          >
            <span>产品及服务</span>
            <img
              src="@/assets/images/desktop-arrow-down.png"
              style="width: 10px; height: 10px"
              alt=""
            />
          </div>
          <div :class="['item', desktopActiveMap[3] ? 'item__active' : '']">
            <NuxtLink to="/about"> 关于我们 </NuxtLink>
          </div>
          <div class="item">
            <img
              src="@/assets/images/header-phone.png"
              style="width: 14px; height: 14px"
              alt="phone"
            />
            <span style="user-select: text">400-1188-365</span>
          </div>
        </div>
      </div>
      <div
        class="product-list-panel animate__animated animate__fadeIn"
        v-show="desktopActiveMap[2]"
      >
        <div class="content">
          <div class="title">我们的产品及服务</div>
          <div class="product-list">
            <div
              v-for="item in productList"
              class="product-card"
              @click="toDetail(item.url)"
            >
              <img class="product-icon" :src="item.icon" alt="logo" />
              <div class="info">
                <div v-if="item.title" v-html="item.title"></div>
                <div v-if="item.subtitle">{{ item.subtitle }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="panel-mask"
        v-show="desktopActiveMap[2]"
        @click="togglePanel()"
      >
      </div>
    </div>
    <div v-if="isMobile">
      <div class="mobile">
        <div class="header">
          <img
            class="logo"
            src="@/assets/images/header-logo.png"
            alt="logo"
            @click="toIndex"
          />
          <img
            v-show="!mobileActiveMap[0]"
            class="menu"
            src="@/assets/images/header-menu.png"
            alt="logo"
            @click="toggleMobilePanel()"
          />
          <img
            v-show="mobileActiveMap[0]"
            class="menu"
            src="@/assets/images/header-close.png"
            alt="logo"
            @click="toggleMobilePanel()"
          />
        </div>
        <div
          v-show="mobileActiveMap[0]"
          class="header-action-list animate__animated animate__fadeIn"
        >
          <div class="action-item" @click="toIndex">
            <span>首页</span>
            <img
              class="action-icon"
              src="@/assets/images/header-arrow-right.png"
              alt="向右"
            />
          </div>
          <div class="action-item" @click="toggleMobileProductPanel">
            <span>产品及服务</span>
            <img
              v-if="mobileActiveMap[2]"
              class="action-icon"
              src="@/assets/images/header-arrow-down.png"
              alt="向右"
            />
            <img
              v-else
              class="action-icon"
              src="@/assets/images/header-arrow-right.png"
              alt="向右"
            />
          </div>
          <div v-show="mobileActiveMap[2]" class="product-list-panel">
            <div class="title">我们的产品及服务</div>
            <div
              v-for="(item, index) in productList"
              :key="item.title"
              class="product-card animate__animated animate__delay-2s animate__fadeInRight"
              :class="[`animate-delay-${index + 1}`]"
              @click="toDetail(item.url)"
            >
              <img class="product-icon" :src="item.icon" alt="logo" />
              <div class="info">
                <div v-if="item.title" v-html="item.title"></div>
                <div v-if="item.subtitle">{{ item.subtitle }}</div>
              </div>
            </div>
          </div>
          <div class="action-item" @click="toAboutUs">
            <span>关于我们</span>
            <img
              class="action-icon"
              src="@/assets/images/header-arrow-right.png"
              alt="向右"
            />
          </div>
          <div class="action-phone">
            <img src="@/assets/images/header-phone.png" alt="phone" />
            <a href="tel:400-1188-365">400-1188-365</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import "animate.css";
import { useAppBreakpoints } from "~~/common/useAppBreakpoints";
import logo1 from "~~/assets/images/product/logo01.png";
import logo2 from "~~/assets/images/product/logo02.png";
import logo3 from "~~/assets/images/product/logo03.png";
import logo4 from "~~/assets/images/product/logo04.png";
import logo5 from "~~/assets/images/product/logo05.png";
import logo6 from "~~/assets/images/product/logo06.png";
import logo7 from "~~/assets/images/product/logo07.png";
import logo8 from "~~/assets/images/product/logo08.png";

const breakpoints = useAppBreakpoints();
const isDesktop = breakpoints.isDesktop();
const isMobile = breakpoints.isMobile();
const router = useRouter();
const route = useRoute();
const productList = [
  {
    icon: logo1,
    title: "云贩",
    subtitle: "品牌全渠道进销存管理",
    url: "/services/mallmodepsi"
  },
  {
    icon: logo2,
    title: "365缤纷购智慧门店工具",
    subtitle: "赋能一线零售门店，实现高效营销",
    url: "/services/365app"
  },
  {
    icon: logo3,
    title: "云Mall",
    subtitle: "协助商场高效构建数字化购物中心",
    url: "/services/YunMall"
  },
  {
    icon: logo4,
    title: "智慧云屏",
    subtitle: "商场营销+消费者服务一体化平台",
    url: "/services/yunping"
  },
  {
    icon: logo5,
    title: "基于腾讯企业微信的</br>私域流量运营服务",
    subtitle: "",
    url: "/qyWechat"
  },
  {
    icon: logo6,
    title: "微奥莱",
    subtitle: "线上奥莱+TOD城市奥莱的全渠道特卖",
    url: "/services/weoutlets"
  },
  {
    icon: logo7,
    title: "为商",
    subtitle: "零售行业全方位信息聚合应用",
    url: "/services/wedealerapp"
  },
  {
    icon: logo8,
    title: "云猫·猫聘零售HRM",
    subtitle: "零售企业身边的人力资源管理专家",
    url: "/services/mallHr"
  }
];
const desktopActiveMap = reactive({
  // 首页
  1: true,
  // 产品及服务
  2: false,
  // 关于我们
  3: false
});
const mobileActiveMap = reactive({
  0: false,
  2: false
});

watch(
  route,
  () => {
    switch (route.path) {
      case "/":
        desktopActiveMap[1] = true;
        desktopActiveMap[2] = false;
        desktopActiveMap[3] = false;
        break;
      case "/about":
        desktopActiveMap[1] = false;
        desktopActiveMap[2] = false;
        desktopActiveMap[3] = true;
        break;

      default:
        desktopActiveMap[1] = false;
        desktopActiveMap[2] = false;
        desktopActiveMap[3] = false;
        break;
    }
  },
  {
    immediate: true
  }
);
const toIndex = () => {
  toggleMobilePanel(false);
  router.push({
    path: "/"
  });
};

// 切换 产品及服务
const togglePanel = (data?: boolean) => {
  desktopActiveMap[2] = data ?? !desktopActiveMap[2];
};
const toggleMobilePanel = (data?: boolean) => {
  console.log("data", data);

  mobileActiveMap[0] = data ?? !mobileActiveMap[0];
  if (mobileActiveMap[0]) {
    window.document.body.style.overflow = "hidden";
  } else {
    mobileActiveMap[2] = false;
    window.document.body.style.overflow = "inherit";
  }
};
const toggleMobileProductPanel = () =>
  (mobileActiveMap[2] = !mobileActiveMap[2]);

const toDetail = (path: string) => {
  if (!path) return;
  togglePanel(false);
  toggleMobilePanel(false);
  router.push({
    path
  });
};

const toAboutUs = () => {
  togglePanel(false);
  toggleMobilePanel(false);
  router.push({
    path: "/about"
  });
};

const openMobilePanel = () => {
  toggleMobilePanel();
  toggleMobileProductPanel();
};

defineExpose({
  togglePanel,
  openMobilePanel
});
</script>
<style lang="scss" scoped>
.app-header {
  --animate-duration: 0.375s;
  @for $i from 1 through 12 {
    .animate-delay-#{$i} {
      --animate-delay: #{$i * 0.015s};
    }
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  .seo {
    position: fixed;
    top: -9999px;
    right: -9999px;
  }

  .header,
  .action-list,
  .item {
    display: flex;
    align-items: center;
  }
  .desktop {
    min-height: 81px;
    user-select: none;
    .header {
      margin: auto;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
      padding: 23px 0;
      box-sizing: border-box;
      justify-content: center;
      background-color: #fff;
      gap: 550px;
      .logo {
        width: 113px;
      }
      .action-list {
        gap: 60px;
        .item {
          cursor: pointer;
          gap: 10px;
          color: #333;
          &:hover {
            color: #1573ef;
          }
          &__active {
            color: #1573ef;
          }
          &:last-child {
            cursor: text;
            &:hover {
              color: #333;
            }
          }
        }
      }
    }
    .panel-mask {
      position: fixed;
      top: 74px;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 2;
      background: #000000;
      opacity: 0.5;
    }
    .product-list-panel {
      position: fixed;
      top: 73px;
      left: 0;
      right: 0;
      z-index: 10;
      background-color: #fff;
      width: 100%;
      height: 277px;
      display: flex;
      .content {
        width: 1200px;
        height: 100%;
        margin: auto;
        .title {
          padding: 60px 0 34px;
          font-size: 14px;
          color: #98989a;
        }
        .product-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 37px 0;
          .product-card {
            display: flex;
            align-items: center;
            gap: 16px;
            width: 273px;
            cursor: pointer;
            .product-icon {
              width: 32px;
              height: 32px;
            }
            .info {
              div:nth-child(1) {
                font-size: 14px;
                color: #333333;
                padding-bottom: 3px;
                line-height: 19px;
              }
              div:nth-child(2) {
                font-size: 12px;
                color: #9a9a9a;
              }
            }
          }
        }
      }
    }
  }
  .mobile {
    min-height: 90rem;
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
      height: 90rem;
      width: 100vw;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24rem 40rem;
      box-sizing: border-box;
      .logo {
        width: 149rem;
        height: 46rem;
      }
      .menu {
        cursor: pointer;
        width: 50rem;
        height: 50rem;
      }
    }
    .header-action-list {
      position: fixed;
      top: 85rem;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      width: 100vw;
      max-height: calc(100vh - 87rem);
      overflow: auto;
      background: #fff;
      font-size: 32rem;
      color: #333333;
      line-height: 46rem;
      .action-phone {
        padding: 34rem 50rem 34rem 40rem;
        font-size: 32rem;
        > img {
          width: 30rem;
          height: 30rem;
          padding-right: 20rem;
        }
      }
      .action-item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        height: 114rem;
        padding: 34rem 50rem 34rem 40rem;
        .action-icon {
          width: 30rem;
          height: 30rem;
        }
      }
      .product-list-panel {
        transition: all 0.375;
        // position: absolute;
        // top: 114rem;
        // left: 0;
        // right: 0;
        // z-index: 1;
        display: flex;
        flex-direction: column;
        background: #fff;
        .title {
          padding: 32rem 0 38rem 60rem;
          font-size: 28rem;
          line-height: 40rem;
          color: #98989a;
        }

        .product-card {
          padding: 26rem 0 24rem 60rem;
          display: flex;
          align-items: center;
          .product-icon {
            width: 64rem;
            height: 64rem;
            padding-right: 32rem;
          }
          .info {
            div:nth-child(1) {
              font-size: 28rem;
              color: #333333;
              line-height: 40rem;
            }
            div:nth-child(2) {
              font-size: 24rem;
              color: #9a9a9a;
              line-height: 34rem;
            }
          }
        }
      }
    }
  }
}
</style>
