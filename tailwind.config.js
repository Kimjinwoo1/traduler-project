/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      normal: '16px',
      lg: '18px',
      xlg: '24px',
    },
    fontFamily: {
      light: ['Pretendard-Light'],
      Regular: ['Pretendard-Regular'],
      SemiBold: ['Pretendard-SemiBold'],
      Bold: ['Pretendard-Bold'],
    },
    extend: {
      colors: {
        red_light_1: '#FFD5DD',
        blue: '#2DA4FF',
        blue_dark: '#116DB3',
        blue_light_0: '#E9F5FF',
        blue_light_1: '#D5EDFF',
        blue_light_2: '#ABDBFF',
        blue_light_3: '#81C8FF',
        yellow: '#FFC803',
        yellow_dark: '#C9A219',
        yellow_light_3: '#FFDE68',
        yellow_light_2: '#FFE99A',
        yellow_light_1: '#FFF4CD',
        orange: '#FF8B1F',
        orange_dark: '#D46D0E',
        orange_light_3: '#FFB979',
        orange_light_2: '#FFB979',
        orange_light_1: '#FFE8D2',
        navy: '#162F70',
        navy_dark: '#071E5D',
        navy_light_3: '#5C6E9B',
        navy_light_2: '#8A96B7',
        navy_light_1: '#D0D5E2',
        gray_dark_1: '#4E4F54',
        gray_dark_2: '#171717',
        gray: '#949499',
        gray_light_1: '#F9F9FB',
        gray_light_2: '#F4F4F4',
        gray_light_3: '#E1E2E3',
        bg_white: '#F9F8F8',
        white: '#FFFFFF',
      },
      width: {
        auth: '450px',
        modal: '500px',
        card: '800px',
        plan: '720px',
        pin_card: '600px',
      },
      height: {
        auth_1: '410px',
        auth_2: '540px',
        modal_1: '575px',
        modal_2: '675px',
        card: '150px',
        pin_card: '100px',
      },
      padding: {
        modal: '36px 40px',
      },
      boxShadow: {
        base: '0px 20px 20px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)',
        sideBar: '4px 4px 50px 2px rgba(0, 0, 0, 0.05) inset',
        card: ' 2px 6px 50px 2px rgba(0, 0, 0, 0.05)',
        index: '0px 2px 2px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};
