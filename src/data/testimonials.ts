export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: '網站做得非常好，整個開發流程溝通順暢，設計質感超乎預期，強烈推薦！',
    name: 'John Allendane',
    title: 'CEO, Digital Agency',
  },
  {
    quote: '從需求討論到上線，每個細節都很用心。網站跑超快，老闆非常滿意。',
    name: 'Anamika Sandula',
    title: 'Marketing Manager',
  },
  {
    quote: '響應速度很快，修改需求都能快速配合。最終成品完全符合我們的品牌形象。',
    name: 'Souther Hakcox',
    title: 'Founder, Startup',
  },
];
