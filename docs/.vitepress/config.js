const ourStorySidebar = [{ text: 'Our Story', link: '/about/our-story' }];

module.exports = {
  title: 'Vitepress Tutorial',
  themeConfig: {
    base: 'https://github.com/ThiagoBrunoPereira/framework/',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Contact', link: '/contact' },
    ],
    sidebar:  [
      {
        text: 'Guide',
        items: [
          { text: 'Our Story', link: '/about/our-story' },
        ]
      }
    ]
  }
}