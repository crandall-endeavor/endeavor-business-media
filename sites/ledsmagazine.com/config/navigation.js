const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/leds-ssl-design', label: 'LEDs & SSL Design' },
      { href: '/architectural-lighting', label: 'Architectural Lighting' },
      { href: '/smart-lighting-iot', label: 'Smart Lighting & IoT' },
      { href: '/lighting-health-wellbeing', label: 'Lighting for Health & Wellbeing' },
      { href: '/horticultural-lighting', label: 'HortiCann Lighting' },
    ],
  },
  secondary: {
    items: [
      { href: '/directory', label: 'Industry Guide' },
      { href: 'https://www.strategiesinlight.com/', label: 'Strategies in Light', target: '_blank' },
      { href: 'https://www.strategiesinlight.com/sil2021/sapphireawards', label: 'Awards', target: '_blank' },
      { href: '/leds-ssl-design/article/14179410/leds-magazine-40-under-40-class-features-leaders-across-led-and-ssl-sectors-magazine', label: '40 Under 40' },
      { href: 'https://www.horticannlt.com/', label: 'HortiCann', target: '_blank' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/magazine', label: 'Magazine' },
      { href: 'https://www.strategies-u.com/', label: 'Research', target: '_blank' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/leds-ssl-design', label: 'LEDs & SSL Design' },
        { href: '/architectural-lighting', label: 'Architectural Lighting' },
        { href: '/smart-lighting-iot', label: 'Smart Lighting & IoT' },
        { href: '/lighting-health-wellbeing', label: 'Lighting for Health & Wellbeing' },
        { href: '/specialty-ssl', label: 'Specialty SSL' },
        { href: '/horticultural-lighting', label: 'Horticultural Lighting' },
        { href: '/manufacturing-services-testing', label: 'Manufacturing, Services & Testing' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/magazine', label: 'Magazine' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/videos', label: 'Videos' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/webcasts', label: 'Webcasts' },
        { href: '/events', label: 'Industry Events' },
        { href: '/company-newsfeed', label: 'Company Newsfeed' },
        { href: '/directory', label: 'Industry Guide' },
        { href: 'https://www.strategiesinlight.com/', label: 'Strategies in Light', target: '_blank' },
        { href: 'https://www.strategiesinlight.com/sil2021/sapphireawards', label: 'Sapphire Awards', target: '_blank' },
        { href: '/leds-ssl-design/article/14179410/leds-magazine-40-under-40-class-features-leaders-across-led-and-ssl-sectors-magazine', label: '40 Under 40' },
        { href: 'https://www.horticannlt.com/', label: 'HortiCann Light + Tech', target: '_blank' },
        { href: 'https://www.strategies-u.com/index.html', label: 'Research', target: '_blank' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
