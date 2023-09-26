export const siteData = JSON.parse("{\"base\":\"/CNIED/\",\"lang\":\"en-US\",\"title\":\"Collaborative New Ithkuil Examples Document\",\"description\":\"Collaborative New Ithkuil Examples Document\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
