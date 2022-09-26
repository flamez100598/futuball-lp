import AOS from 'aos'

import 'aos/dist/aos.css'

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    offset: 500,
    once: false,
    duration: 900,
    mirror: true
    // disable: window.innerWidth < 768
  })
}
