const spektrum = {
  lighterGrey: '#f1f3f5',
  lightGrey: '#bfc7ce',
  textGrey: '#5c666e',
  activeGrey: '#6d7780',
  boldTextGrey: '#4b545c',
  darkGrey: '#323c45',
  hoverGrey: '#3b444d',
  white: '#ffffff',
  lightBlue: '#00a5ff',
  textBlue: '#0096fa',
  blue: '#0064b4',
  headlineBlue: '#002d5a',
  lighterGreen: '#c8d205',
  lightGreen: '#96be00',
  green: '#6ea500',
};
export const colors = {
  background: {
    primary: spektrum.white,
    secondary: spektrum.textGrey,
    tertiary: spektrum.white,
    quartiary: spektrum.blue,
    quintiary: spektrum.headlineBlue,
    linearGradient: `linear-gradient(
      165deg,
      ${spektrum.blue},
      #0083d8 13%,
      #009df6 37%,
      ${spektrum.lightBlue}
    )`,
  },
  text: {
    primary: spektrum.textGrey,
    primaryHeadline: spektrum.headlineBlue,
    primarySubHeadline: spektrum.boldTextGrey,
    secondary: spektrum.white,
    divider: spektrum.lighterGrey,
  },
  interact: {
    anchor: {
      burgerIcon: spektrum.headlineBlue,
      linkPrimary: spektrum.textBlue,
      linkSecondary: spektrum.white,
    },
    buttons: {
      primary: {
        normal: spektrum.lightBlue,
        active: spektrum.textBlue,
        hover: spektrum.blue,
        focus: spektrum.blue,
      },
      secondary: {
        normal: spektrum.textGrey,
        active: spektrum.activeGrey,
        hover: spektrum.hoverGrey,
        focus: spektrum.hoverGrey,
      },
      tertiary: {
        normalBorder: spektrum.textGrey,
        activeBorder: spektrum.activeGrey,
        hoverBorder: spektrum.hoverGrey,
        focusBorder: spektrum.hoverGrey,
      },
      green: {
        normal: spektrum.lightGreen,
        active: spektrum.lighterGreen,
        hover: spektrum.green,
        focus: spektrum.green,
      },
      reset: {
        normal: spektrum.textGrey,
        active: spektrum.activeGrey,
        hover: spektrum.hoverGrey,
      },
    },
    select: {},
    input: {
      mailTxtPwBG: spektrum.lighterGrey,
      mailTxtPwHover: spektrum.headlineBlue,
      buttonReset: spektrum.white,
      placeholder: spektrum.activeGrey,
      text: spektrum.darkGrey,
    },
  },
  state: {
    base: spektrum.lightBlue,
    pending: '',
    success: '',
    danger: '',
    warning: '',
  },
};
