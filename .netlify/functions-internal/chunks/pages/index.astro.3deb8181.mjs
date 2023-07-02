/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.e45a0d31.mjs';
import { $ as $$Layout } from './404.astro.6cd01ccf.mjs';
import { useInView, motion } from 'framer-motion';
import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { P as Parallax, B as Box } from './experience.astro.43d52110.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { deepmerge, formatMuiErrorMessage, unstable_generateUtilityClass, unstable_capitalize, unstable_useForkRef, unstable_ownerDocument, elementAcceptingRef, exactProp, unstable_useEnhancedEffect, unstable_setRef, HTMLElementType, unstable_getScrollbarSize, unstable_ownerWindow, unstable_generateUtilityClasses, unstable_useEventCallback, unstable_createChainedFunction, unstable_composeClasses, unstable_useIsFocusVisible, refType, elementTypeAcceptingRef, unstable_useControlled, integerPropType } from '@mui/utils';
import clsx from 'clsx';
import * as ReactDOM from 'react-dom';
import 'react-is';
import { useStore } from '@nanostores/react';
import { j as jwtToken, L as Loading } from './dashboard.astro.f55b6498.mjs';
import { BsThreeDots } from 'react-icons/bs/index.js';
import { MdEdit, MdDelete } from 'react-icons/md/index.js';
import { AiOutlineClose } from 'react-icons/ai/index.js';
import ky from 'ky';
import { Formik } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import { getContrastRatio, lighten, darken, createTheme as createTheme$1, unstable_defaultSxConfig, unstable_styleFunctionSx, useTheme as useTheme$1, useThemeProps as useThemeProps$1, createStyled, shouldForwardProp, keyframes, alpha, styled as styled$2 } from '@mui/system';
import { TransitionGroup, Transition } from 'react-transition-group';
import { BlurhashCanvas } from 'react-blurhash';
import { useInView as useInView$1 } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import useSWR from 'swr';
import { createGrid } from '@mui/system/Unstable_Grid';

function Index() {
  const paragraphRef = useRef(null);
  useInView(paragraphRef);
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen relative",
    children: [/* @__PURE__ */ jsx("div", {
      className: "flex justify-center min-h-screen -translate-y-24 lg:translate-y-0  h-[1000px] lg:h-[1100px] pb-28 md:pb-0 pt-20 select-none overflow-hidden",
      children: /* @__PURE__ */ jsxs("div", {
        className: "w-full flex justify-center relative",
        children: [/* @__PURE__ */ jsx("div", {
          className: "overflow-hidden absolute top-12 lg:top-auto",
          children: /* @__PURE__ */ jsx(Parallax, {
            offset: 150,
            children: /* @__PURE__ */ jsx("div", {
              className: "w-[700px] h-[700px] lg:w-[900px] lg:h-[900px]",
              children: /* @__PURE__ */ jsx(motion.img, {
                animate: {
                  opacity: 0.3
                },
                alt: "",
                initial: {
                  opacity: 0
                },
                transition: {
                  duration: 1,
                  delay: 0.25
                },
                className: "origin-center",
                draggable: "false",
                src: "/homepage-img.webp"
              })
            })
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "absolute top-[20%]",
          children: /* @__PURE__ */ jsxs(Parallax, {
            offset: 150,
            children: [/* @__PURE__ */ jsx(motion.h1, {
              animate: {
                opacity: 1,
                y: 0
              },
              initial: {
                opacity: 0,
                y: -15
              },
              transition: {
                duration: 0.5,
                delay: 0.5
              },
              className: "text-lg lg:text-2xl font-bold mb-6 font-mono text-[#FF6000] mx-12 md:mx-0  bg-black/10 w-48 rounded-md px-4 py-2 backdrop-blur-sm shadow-xl",
              children: "Hi, I'm Tom"
            }), /* @__PURE__ */ jsx(motion.p, {
              animate: {
                opacity: 1,
                x: 0
              },
              initial: {
                opacity: 0,
                x: -15
              },
              transition: {
                duration: 1,
                delay: 1
              },
              ref: paragraphRef,
              className: "font-thin tarcking-widest font-serif mx-12 md:mx-0 md:w-[600px] lg:w-[700px] text-white leading-6 md:leading-10 z-50 text-sm md:text-base lg:text-xl ",
              children: "I am a highly skilled and experienced software engineer, passionate about developing elegant solutions to challenging problems. With a solid background in computer science and a keen eye for detail, I bring a depth of knowledge to each project I undertake. Whether it's building a scalable web application or designing a machine learning algorithm, I am dedicated to creating software that not only meets but exceeds client expectations."
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "flex z-50 space-x-4 relative mx-auto w-full md:w-96 -translate-y-56 justify-center",
      children: /* @__PURE__ */ jsx(Parallax, {
        offset: 150,
        children: /* @__PURE__ */ jsx(Box, {
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex space-x-4",
            children: [/* @__PURE__ */ jsx("a", {
              href: "/experience",
              className: "text-[#FFE6C7]  p-4 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center",
              children: "Experience / CV"
            }), /* @__PURE__ */ jsx("a", {
              href: "/blog",
              className: "text-[#FFE6C7]  p-4 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center",
              children: "View Posts..."
            })]
          })
        })
      })
    })]
  });
}
__astro_tag_component__(Index, "@astrojs/react");

const $$Astro$1 = createAstro("https://sliger.dev");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  let desc = "Experienced software engineer passionate about elegant solutions to complex problems. Strong background in computer science. Knowledge in scalable web apps and machine learning algorithms. Exceeding client expectations is my commitment.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home | sliger.dev", "description": desc }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="min-h-screen">
    ${renderComponent($$result2, "IndexComponent", Index, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/IndexComponent", "client:component-export": "default" })}
  </div>
` })}`;
}, "/home/tsliger/projects/sliger-blog/src/pages/index.astro");

const $$file$1 = "/home/tsliger/projects/sliger-blog/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const common = {
  black: '#000',
  white: '#fff'
};
const common$1 = common;

const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
const red$1 = red;

const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};
const purple$1 = purple;

const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
const blue$1 = blue;

const lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};
const lightBlue$1 = lightBlue;

const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
const green$1 = green;

const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
const orange$1 = orange;

const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};
const grey$1 = grey;

const THEME_ID = '$$material';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function createMixins(breakpoints, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [breakpoints.up('xs')]: {
        '@media (orientation: landscape)': {
          minHeight: 48
        }
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    }
  }, mixins);
}

const _excluded$e = ["mode", "contrastThreshold", "tonalOffset"];
const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.6)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common$1.white,
    default: common$1.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: common$1.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212',
    default: '#121212'
  },
  action: {
    active: common$1.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: blue$1[200],
      light: blue$1[50],
      dark: blue$1[400]
    };
  }
  return {
    main: blue$1[700],
    light: blue$1[400],
    dark: blue$1[800]
  };
}
function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: purple$1[200],
      light: purple$1[50],
      dark: purple$1[400]
    };
  }
  return {
    main: purple$1[500],
    light: purple$1[300],
    dark: purple$1[700]
  };
}
function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: red$1[500],
      light: red$1[300],
      dark: red$1[700]
    };
  }
  return {
    main: red$1[700],
    light: red$1[400],
    dark: red$1[800]
  };
}
function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: lightBlue$1[400],
      light: lightBlue$1[300],
      dark: lightBlue$1[700]
    };
  }
  return {
    main: lightBlue$1[700],
    light: lightBlue$1[500],
    dark: lightBlue$1[900]
  };
}
function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: green$1[400],
      light: green$1[300],
      dark: green$1[700]
    };
  }
  return {
    main: green$1[800],
    light: green$1[500],
    dark: green$1[900]
  };
}
function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: orange$1[400],
      light: orange$1[300],
      dark: orange$1[700]
    };
  }
  return {
    main: '#ed6c02',
    // closest to orange[800] that pass 3:1.
    light: orange$1[500],
    dark: orange$1[900]
  };
}
function createPalette(palette) {
  const {
      mode = 'light',
      contrastThreshold = 3,
      tonalOffset = 0.2
    } = palette,
    other = _objectWithoutPropertiesLoose(palette, _excluded$e);
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode);

  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (process.env.NODE_ENV !== 'production') {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = _extends({}, color);
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    if (!color.hasOwnProperty('main')) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
    }
    if (typeof color.main !== 'string') {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
    }
    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  const modes = {
    dark,
    light
  };
  if (process.env.NODE_ENV !== 'production') {
    if (!modes[mode]) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge(_extends({
    // A collection of common colors.
    common: _extends({}, common$1),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey: grey$1,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}

const _excluded$d = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

/**
 * @see @link{https://m2.material.io/design/typography/the-type-system.html}
 * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
 */
function createTypography(palette, typography) {
  const _ref = typeof typography === 'function' ? typography(palette) : typography,
    {
      fontFamily = defaultFontFamily,
      // The default font size of the Material Specification.
      fontSize = 14,
      // px
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      // Tell MUI what's the font-size on the html element.
      // 16px is the default font-size used by browsers.
      htmlFontSize = 16,
      // Apply the CSS properties to all the variants.
      allVariants,
      pxToRem: pxToRem2
    } = _ref,
    other = _objectWithoutPropertiesLoose(_ref, _excluded$d);
  if (process.env.NODE_ENV !== 'production') {
    if (typeof fontSize !== 'number') {
      console.error('MUI: `fontSize` is required to be a number.');
    }
    if (typeof htmlFontSize !== 'number') {
      console.error('MUI: `htmlFontSize` is required to be a number.');
    }
  }
  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants);
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit'
    }
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep
  });
}

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
}

// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
const shadows$1 = shadows;

const _excluded$c = ["duration", "easing", "delay"];
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }
  const constant = height / 36;

  // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);
  const mergedDuration = _extends({}, duration, inputTransitions.duration);
  const create = (props = ['all'], options = {}) => {
    const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0
      } = options,
      other = _objectWithoutPropertiesLoose(options, _excluded$c);
    if (process.env.NODE_ENV !== 'production') {
      const isString = value => typeof value === 'string';
      // IE11 support, replace with Number.isNaN
      // eslint-disable-next-line no-restricted-globals
      const isNumber = value => !isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (Object.keys(other).length !== 0) {
        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`);
      }
    }
    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  };
  return _extends({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
const zIndex$1 = zIndex;

const _excluded$b = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme(options = {}, ...args) {
  const {
      mixins: mixinsInput = {},
      palette: paletteInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {}
    } = options,
    other = _objectWithoutPropertiesLoose(options, _excluded$b);
  if (options.vars) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`vars\` is a private field used for CSS variables support.
Please use another name.` : formatMuiErrorMessage(18));
  }
  const palette = createPalette(paletteInput);
  const systemTheme = createTheme$1(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows$1.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex$1)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  if (process.env.NODE_ENV !== 'production') {
    // TODO v6: Refactor to use globalStateClassesMapping from @mui/utils once `readOnly` state class is used in Rating component.
    const stateClasses = ['active', 'checked', 'completed', 'disabled', 'error', 'expanded', 'focused', 'focusVisible', 'required', 'selected'];
    const traverse = (node, component) => {
      let key;

      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (key in node) {
        const child = node[key];
        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (process.env.NODE_ENV !== 'production') {
            const stateClass = unstable_generateUtilityClass('', key);
            console.error([`MUI: The \`${component}\` component increases ` + `the CSS specificity of the \`${key}\` internal state.`, 'You can not override it like this: ', JSON.stringify(node, null, 2), '', `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), '', 'https://mui.com/r/state-classes-guide'].join('\n'));
          }
          // Remove the style to prevent global conflicts.
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach(component => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.indexOf('Mui') === 0) {
        traverse(styleOverrides, component);
      }
    });
  }
  muiTheme.unstable_sxConfig = _extends({}, unstable_defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return unstable_styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}

const defaultTheme = createTheme();
const defaultTheme$1 = defaultTheme;

function useTheme() {
  const theme = useTheme$1(defaultTheme$1);
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }
  return theme[THEME_ID] || theme;
}

function useThemeProps({
  props,
  name
}) {
  return useThemeProps$1({
    props,
    name,
    defaultTheme: defaultTheme$1,
    themeId: THEME_ID
  });
}

const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== 'classes';
const styled = createStyled({
  themeId: THEME_ID,
  defaultTheme: defaultTheme$1,
  rootShouldForwardProp
});
const styled$1 = styled;

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}

const defaultContextValue = {
  disableDefaultClasses: false
};
const ClassNameConfiguratorContext = /*#__PURE__*/React.createContext(defaultContextValue);
/**
 * @ignore - internal hook.
 *
 * Wraps the `generateUtilityClass` function and controls how the classes are generated.
 * Currently it only affects whether the classes are applied or not.
 *
 * @returns Function to be called with the `generateUtilityClass` function specific to a component to generate the classes.
 */
function useClassNamesOverride(generateUtilityClass) {
  const {
    disableDefaultClasses
  } = React.useContext(ClassNameConfiguratorContext);
  return slot => {
    if (disableDefaultClasses) {
      return '';
    }
    return generateUtilityClass(slot);
  };
}

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState);
  }
  return componentProps;
}

/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = clsx(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
    const mergedStyle = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

const _excluded$a = ["elementType", "externalSlotProps", "ownerState"];
/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
      elementType,
      externalSlotProps,
      ownerState
    } = parameters,
    rest = _objectWithoutPropertiesLoose(parameters, _excluded$a);
  const resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = unstable_useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}

/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */
// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }

  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.
  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node: node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}

/**
 * Utility component that locks focus inside the component.
 *
 * Demos:
 *
 * - [Focus Trap](https://mui.com/base/react-focus-trap/)
 *
 * API:
 *
 * - [FocusTrap API](https://mui.com/base/react-focus-trap/components-api/#focus-trap)
 */
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React.useRef(false);
  const sentinelStart = React.useRef(null);
  const sentinelEnd = React.useRef(null);
  const nodeToRestore = React.useRef(null);
  const reactFocusEventTarget = React.useRef(null);
  // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.
  const activated = React.useRef(false);
  const rootRef = React.useRef(null);
  // @ts-expect-error TODO upstream fix
  const handleRef = unstable_useForkRef(children.ref, rootRef);
  const lastKeydown = React.useRef(null);
  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = unstable_ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(['MUI: The modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
        }
        rootRef.current.setAttribute('tabIndex', '-1');
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
    // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open FocusTrap
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  React.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = unstable_ownerDocument(rootRef.current);
    const contain = nativeEvent => {
      const {
        current: rootElement
      } = rootRef;

      // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (!rootElement.contains(doc.activeElement)) {
        // if the focus event is not coming from inside the children's react tree, reset the refs
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }
        if (!activated.current) {
          return;
        }
        let tabbable = [];
        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }
        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;
          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];
          if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
            if (isShiftTab) {
              focusPrevious.focus();
            } else {
              focusNext.focus();
            }
          }
        } else {
          rootElement.focus();
        }
      }
    };
    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      }

      // Make sure the next tab starts from the right place.
      // doc.activeElement refers to the origin.
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true);

    // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
        contain(null);
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /*#__PURE__*/jsxs(React.Fragment, {
    children: [/*#__PURE__*/jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /*#__PURE__*/React.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" ? FocusTrap.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: elementAcceptingRef,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: PropTypes.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: PropTypes.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: PropTypes.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: PropTypes.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: PropTypes.func,
  /**
   * If `true`, focus is locked.
   */
  open: PropTypes.bool.isRequired
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  FocusTrap['propTypes' + ''] = exactProp(FocusTrap.propTypes);
}

function getContainer$1(container) {
  return typeof container === 'function' ? container() : container;
}

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Demos:
 *
 * - [Portal](https://mui.com/base/react-portal/)
 *
 * API:
 *
 * - [Portal API](https://mui.com/base/react-portal/components-api/#portal)
 */
const Portal = /*#__PURE__*/React.forwardRef(function Portal(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React.useState(null);
  // @ts-expect-error TODO upstream fix
  const handleRef = unstable_useForkRef( /*#__PURE__*/React.isValidElement(children) ? children.ref : null, forwardedRef);
  unstable_useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer$1(container) || document.body);
    }
  }, [container, disablePortal]);
  unstable_useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      unstable_setRef(forwardedRef, mountNode);
      return () => {
        unstable_setRef(forwardedRef, null);
      };
    }
    return undefined;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if ( /*#__PURE__*/React.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /*#__PURE__*/React.cloneElement(children, newProps);
    }
    return /*#__PURE__*/jsx(React.Fragment, {
      children: children
    });
  }
  return /*#__PURE__*/jsx(React.Fragment, {
    children: mountNode ? /*#__PURE__*/ReactDOM.createPortal(children, mountNode) : mountNode
  });
});
process.env.NODE_ENV !== "production" ? Portal.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: PropTypes.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes.bool
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = exactProp(Portal.propTypes);
}
const Portal$1 = Portal;

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = unstable_ownerDocument(container);
  if (doc.body === container) {
    return unstable_ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}
function getPaddingRight(element) {
  return parseInt(unstable_ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  // The forbidden HTML tags are the ones from ARIA specification that
  // can be children of body and can't have aria-hidden attribute.
  // cf. https://www.w3.org/TR/html-aria/#docconformance
  const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, element => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = unstable_getScrollbarSize(unstable_ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      });
      // Use computed style, here to get the real padding to add our scrollbar width.
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

      // .mui-fixed is a global helper.
      const fixedElements = unstable_ownerDocument(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = unstable_ownerDocument(container).body;
    } else {
      // Improve Gatsby support
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
      const parent = container.parentElement;
      const containerWindow = unstable_ownerWindow(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
    }

    // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}

function getModalUtilityClass(slot) {
  return unstable_generateUtilityClass('MuiModal', slot);
}
unstable_generateUtilityClasses('MuiModal', ['root', 'hidden', 'backdrop']);

const _excluded$9 = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"];
const useUtilityClasses$5 = ownerState => {
  const {
    open,
    exited
  } = ownerState;
  const slots = {
    root: ['root', !open && exited && 'hidden'],
    backdrop: ['backdrop']
  };
  return unstable_composeClasses(slots, useClassNamesOverride(getModalUtilityClass));
};
function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty('in') : false;
}

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new ModalManager();

/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * *   [Dialog](https://mui.com/material-ui/api/dialog/)
 * *   [Drawer](https://mui.com/material-ui/api/drawer/)
 * *   [Menu](https://mui.com/material-ui/api/menu/)
 * *   [Popover](https://mui.com/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](https://mui.com/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 *
 * Demos:
 *
 * - [Modal](https://mui.com/base/react-modal/)
 *
 * API:
 *
 * - [Modal API](https://mui.com/base/react-modal/components-api/#modal)
 */
const Modal$2 = /*#__PURE__*/React.forwardRef(function Modal(props, forwardedRef) {
  var _props$ariaHidden, _slots$root;
  const {
      children,
      closeAfterTransition = false,
      container,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      // private
      manager: managerProp = defaultManager,
      onBackdropClick,
      onClose,
      onKeyDown,
      open,
      onTransitionEnter,
      onTransitionExited,
      slotProps = {},
      slots = {}
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$9);
  // TODO: `modal`` must change its type in this file to match the type of methods
  // provided by `ModalManager`
  const manager = managerProp;
  const [exited, setExited] = React.useState(!open);
  const modal = React.useRef({});
  const mountNodeRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const handleRef = unstable_useForkRef(modalRef, forwardedRef);
  const hasTransition = getHasTransition(children);
  const ariaHiddenProp = (_props$ariaHidden = props['aria-hidden']) != null ? _props$ariaHidden : true;
  const getDoc = () => unstable_ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = unstable_useEventCallback(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);

    // The element was already mounted.
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = React.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = unstable_useEventCallback(node => {
    mountNodeRef.current = node;
    if (!node || !modalRef.current) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [manager, ariaHiddenProp]);
  React.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const ownerState = _extends({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });
  const classes = useUtilityClasses$5(ownerState);
  const handleEnter = () => {
    setExited(false);
    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };
  const handleExited = () => {
    setExited(true);
    if (onTransitionExited) {
      onTransitionExited();
    }
    if (closeAfterTransition) {
      handleClose();
    }
  };
  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };
  const handleKeyDown = event => {
    if (onKeyDown) {
      onKeyDown(event);
    }

    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();
      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };
  const childProps = {};
  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  }

  // It's a Transition like component
  if (hasTransition) {
    childProps.onEnter = unstable_createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = unstable_createChainedFunction(handleExited, children.props.onExited);
  }
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRef,
      role: 'presentation',
      onKeyDown: handleKeyDown
    },
    className: classes.root,
    ownerState
  });
  const BackdropComponent = slots.backdrop;
  const backdropProps = useSlotProps({
    elementType: BackdropComponent,
    externalSlotProps: slotProps.backdrop,
    additionalProps: {
      'aria-hidden': true,
      onClick: handleBackdropClick,
      open
    },
    className: classes.backdrop,
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /*#__PURE__*/jsx(Portal$1
  // @ts-expect-error TODO: include ref to Base UI Portal props
  , {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/jsxs(Root, _extends({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/jsx(BackdropComponent, _extends({}, backdropProps)) : null, /*#__PURE__*/jsx(FocusTrap, {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        isEnabled: isTopModal,
        open: open,
        children: /*#__PURE__*/React.cloneElement(children, childProps)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" ? Modal$2.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: PropTypes.bool,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: PropTypes.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: PropTypes.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: PropTypes.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: PropTypes.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: PropTypes.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: PropTypes.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: PropTypes.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: PropTypes.shape({
    backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    backdrop: PropTypes.elementType,
    root: PropTypes.elementType
  })
} : void 0;
const ModalUnstyled = Modal$2;

function getSvgIconUtilityClass(slot) {
  return unstable_generateUtilityClass('MuiSvgIcon', slot);
}
unstable_generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

const _excluded$8 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
const useUtilityClasses$4 = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${unstable_capitalize(color)}`, `fontSize${unstable_capitalize(fontSize)}`]
  };
  return unstable_composeClasses(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = styled$1('svg', {
  name: 'MuiSvgIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${unstable_capitalize(ownerState.color)}`], styles[`fontSize${unstable_capitalize(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$transitions2$d, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette$ownerState$c2, _palette2, _palette2$action, _palette3, _palette3$action;
  return {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null ? void 0 : (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, 'fill', {
      duration: (_theme$transitions2 = theme.transitions) == null ? void 0 : (_theme$transitions2$d = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2$d.shorter
    }),
    fontSize: {
      inherit: 'inherit',
      small: ((_theme$typography = theme.typography) == null ? void 0 : (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || '1.25rem',
      medium: ((_theme$typography2 = theme.typography) == null ? void 0 : (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || '1.5rem',
      large: ((_theme$typography3 = theme.typography) == null ? void 0 : (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || '2.1875rem'
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null ? void 0 : (_palette$ownerState$c2 = _palette[ownerState.color]) == null ? void 0 : _palette$ownerState$c2.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null ? void 0 : (_palette2$action = _palette2.action) == null ? void 0 : _palette2$action.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null ? void 0 : (_palette3$action = _palette3.action) == null ? void 0 : _palette3$action.disabled,
      inherit: undefined
    }[ownerState.color]
  };
});
const SvgIcon = /*#__PURE__*/React.forwardRef(function SvgIcon(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiSvgIcon'
  });
  const {
      children,
      className,
      color = 'inherit',
      component = 'svg',
      fontSize = 'medium',
      htmlColor,
      inheritViewBox = false,
      titleAccess,
      viewBox = '0 0 24 24'
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$8);
  const ownerState = _extends({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses$4(ownerState);
  return /*#__PURE__*/jsxs(SvgIconRoot, _extends({
    as: component,
    className: clsx(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, more, other, {
    ownerState: ownerState,
    children: [children, titleAccess ? /*#__PURE__*/jsx("title", {
      children: titleAccess
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" ? SvgIcon.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'large', 'medium', 'small']), PropTypes.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: PropTypes.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: PropTypes.string
} : void 0;
SvgIcon.muiName = 'SvgIcon';
const SvgIcon$1 = SvgIcon;

function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /*#__PURE__*/jsx(SvgIcon$1, _extends({
      "data-testid": `${displayName}Icon`,
      ref: ref
    }, props, {
      children: path
    }));
  }
  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon$1.muiName;
  return /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(Component));
}

const reflow = node => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}

function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = React.useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  React.useEffect(() => {
    if (!inProp && onExited != null) {
      // react-transition-group#onExited
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return undefined;
  }, [onExited, inProp, timeout]);
  return /*#__PURE__*/jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /*#__PURE__*/jsx("span", {
      className: childClassName
    })
  });
}
process.env.NODE_ENV !== "production" ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: PropTypes.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: PropTypes.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: PropTypes.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: PropTypes.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: PropTypes.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: PropTypes.number,
  /**
   * exit delay
   */
  timeout: PropTypes.number.isRequired
} : void 0;

const touchRippleClasses = unstable_generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
const touchRippleClasses$1 = touchRippleClasses;

const _excluded$7 = ["center", "classes", "className"];
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
const exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
const pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
const TouchRippleRoot = styled$1('span', {
  name: 'MuiTouchRipple',
  slot: 'Root'
})({
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 'inherit'
});

// This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.
const TouchRippleRipple = styled$1(Ripple, {
  name: 'MuiTouchRipple',
  slot: 'Ripple'
})(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses$1.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses$1.child, touchRippleClasses$1.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);

/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */
const TouchRipple = /*#__PURE__*/React.forwardRef(function TouchRipple(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiTouchRipple'
  });
  const {
      center: centerProp = false,
      classes = {},
      className
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$7);
  const [ripples, setRipples] = React.useState([]);
  const nextKey = React.useRef(0);
  const rippleCallback = React.useRef(null);
  React.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);

  // Used to filter out mouse emulated events on mobile.
  const ignoringMouseDown = React.useRef(false);
  // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.
  const startTimer = React.useRef(null);

  // This is the hook called once the previous timeout is ready.
  const startTimerCommit = React.useRef(null);
  const container = React.useRef(null);
  React.useEffect(() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = React.useCallback(params => {
    const {
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses$1.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses$1.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses$1.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses$1.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses$1.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses$1.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate,
      rippleX: rippleX,
      rippleY: rippleY,
      rippleSize: rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = React.useCallback((event = {}, options = {}, cb = () => {}) => {
    const {
      pulsate = false,
      center = centerProp || options.pulsate,
      fakeElement = false // For test purposes
    } = options;
    if ((event == null ? void 0 : event.type) === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if ((event == null ? void 0 : event.type) === 'touchstart') {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };

    // Get the size of the ripple
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);

      // For some reason the animation is broken on Mobile Chrome if the size is even.
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }

    // Touche devices
    if (event != null && event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = () => {
          startCommit({
            pulsate,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        // Delay the execution of the ripple effect.
        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = React.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = React.useCallback((event, cb) => {
    clearTimeout(startTimer.current);

    // The touch interaction occurs too quickly.
    // We still want to show ripple effect.
    if ((event == null ? void 0 : event.type) === 'touchend' && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples(oldRipples => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  React.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /*#__PURE__*/jsx(TouchRippleRoot, _extends({
    className: clsx(touchRippleClasses$1.root, classes.root, className),
    ref: container
  }, other, {
    children: /*#__PURE__*/jsx(TransitionGroup, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
process.env.NODE_ENV !== "production" ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string
} : void 0;
const TouchRipple$1 = TouchRipple;

function getButtonBaseUtilityClass(slot) {
  return unstable_generateUtilityClass('MuiButtonBase', slot);
}
const buttonBaseClasses = unstable_generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);
const buttonBaseClasses$1 = buttonBaseClasses;

const _excluded$6 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
const useUtilityClasses$3 = ownerState => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  const composedClasses = unstable_composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonBaseRoot = styled$1('button', {
  name: 'MuiButtonBase',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.
  },

  [`&.${buttonBaseClasses$1.disabled}`]: {
    pointerEvents: 'none',
    // Disable link interactions
    cursor: 'default'
  },
  '@media print': {
    colorAdjust: 'exact'
  }
});

/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */
const ButtonBase = /*#__PURE__*/React.forwardRef(function ButtonBase(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiButtonBase'
  });
  const {
      action,
      centerRipple = false,
      children,
      className,
      component = 'button',
      disabled = false,
      disableRipple = false,
      disableTouchRipple = false,
      focusRipple = false,
      LinkComponent = 'a',
      onBlur,
      onClick,
      onContextMenu,
      onDragLeave,
      onFocus,
      onFocusVisible,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      tabIndex = 0,
      TouchRippleProps,
      touchRippleRef,
      type
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const buttonRef = React.useRef(null);
  const rippleRef = React.useRef(null);
  const handleRippleRef = unstable_useForkRef(rippleRef, touchRippleRef);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = unstable_useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const [mountedState, setMountedState] = React.useState(false);
  React.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;
  React.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple && mountedState) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, mountedState]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return unstable_useEventCallback(event => {
      if (eventCallback) {
        eventCallback(event);
      }
      const ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  const handleMouseDown = useRippleHandler('start', onMouseDown);
  const handleContextMenu = useRippleHandler('stop', onContextMenu);
  const handleDragLeave = useRippleHandler('stop', onDragLeave);
  const handleMouseUp = useRippleHandler('stop', onMouseUp);
  const handleMouseLeave = useRippleHandler('stop', event => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler('start', onTouchStart);
  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  const handleTouchMove = useRippleHandler('stop', onTouchMove);
  const handleBlur = useRippleHandler('stop', event => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = unstable_useEventCallback(event => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };

  /**
   * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */
  const keydownRef = React.useRef(false);
  const handleKeyDown = unstable_useEventCallback(event => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = unstable_useEventCallback(event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }

    // Keyboard accessibility for non interactive elements
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === 'button' && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === 'button') {
    buttonProps.type = type === undefined ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = 'button';
    }
    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }
  const handleRef = unstable_useForkRef(ref, focusVisibleRef, buttonRef);
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(['MUI: The `component` prop provided to ButtonBase is invalid.', 'Please make sure the children prop is rendered in this custom component.'].join('\n'));
      }
    }, [enableTouchRipple]);
  }
  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });
  const classes = useUtilityClasses$3(ownerState);
  return /*#__PURE__*/jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    onBlur: handleBlur,
    onClick: onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type: type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ?
    /*#__PURE__*/
    /* TouchRipple is only needed client-side, x2 boost on the server. */
    jsx(TouchRipple$1, _extends({
      ref: handleRippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});
process.env.NODE_ENV !== "production" ? ButtonBase.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: refType,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: PropTypes.bool,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: PropTypes.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: PropTypes.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * @ignore
   */
  href: PropTypes /* @typescript-to-proptypes-ignore */.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: PropTypes.elementType,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  onContextMenu: PropTypes.func,
  /**
   * @ignore
   */
  onDragLeave: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,
  /**
   * @ignore
   */
  onMouseDown: PropTypes.func,
  /**
   * @ignore
   */
  onMouseLeave: PropTypes.func,
  /**
   * @ignore
   */
  onMouseUp: PropTypes.func,
  /**
   * @ignore
   */
  onTouchEnd: PropTypes.func,
  /**
   * @ignore
   */
  onTouchMove: PropTypes.func,
  /**
   * @ignore
   */
  onTouchStart: PropTypes.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * @default 0
   */
  tabIndex: PropTypes.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      pulsate: PropTypes.func.isRequired,
      start: PropTypes.func.isRequired,
      stop: PropTypes.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string])
} : void 0;
const ButtonBase$1 = ButtonBase;

const _excluded$5 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};

/**
 * The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Fade = /*#__PURE__*/React.forwardRef(function Fade(props, ref) {
  const theme = useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = defaultTimeout,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const nodeRef = React.useRef(null);
  const handleRef = unstable_useForkRef(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node); // So the animation always start from the start.

    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  return /*#__PURE__*/jsx(TransitionComponent, _extends({
    appear: appear,
    in: inProp,
    nodeRef: nodeRef ,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/React.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
process.env.NODE_ENV !== "production" ? Fade.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: PropTypes.oneOfType([PropTypes.shape({
    enter: PropTypes.string,
    exit: PropTypes.string
  }), PropTypes.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes.func,
  /**
   * @ignore
   */
  onEntered: PropTypes.func,
  /**
   * @ignore
   */
  onEntering: PropTypes.func,
  /**
   * @ignore
   */
  onExit: PropTypes.func,
  /**
   * @ignore
   */
  onExited: PropTypes.func,
  /**
   * @ignore
   */
  onExiting: PropTypes.func,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : void 0;
const Fade$1 = Fade;

function getBackdropUtilityClass(slot) {
  return unstable_generateUtilityClass('MuiBackdrop', slot);
}
unstable_generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);

const _excluded$4 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];
const useUtilityClasses$2 = ownerState => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ['root', invisible && 'invisible']
  };
  return unstable_composeClasses(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = styled$1('div', {
  name: 'MuiBackdrop',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.invisible && styles.invisible];
  }
})(({
  ownerState
}) => _extends({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent'
}, ownerState.invisible && {
  backgroundColor: 'transparent'
}));
const Backdrop = /*#__PURE__*/React.forwardRef(function Backdrop(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  const props = useThemeProps({
    props: inProps,
    name: 'MuiBackdrop'
  });
  const {
      children,
      className,
      component = 'div',
      components = {},
      componentsProps = {},
      invisible = false,
      open,
      slotProps = {},
      slots = {},
      TransitionComponent = Fade$1,
      transitionDuration
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const ownerState = _extends({}, props, {
    component,
    invisible
  });
  const classes = useUtilityClasses$2(ownerState);
  const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return /*#__PURE__*/jsx(TransitionComponent, _extends({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /*#__PURE__*/jsx(BackdropRoot, _extends({
      "aria-hidden": true
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: clsx(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
      ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
      classes: classes,
      ref: ref,
      children: children
    }))
  }));
});
process.env.NODE_ENV !== "production" ? Backdrop.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: PropTypes.bool,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: PropTypes.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : void 0;
const Backdrop$1 = Backdrop;

const _excluded$3 = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"];
const ModalRoot = styled$1('div', {
  name: 'MuiModal',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: 'fixed',
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: 'hidden'
}));
const ModalBackdrop = styled$1(Backdrop$1, {
  name: 'MuiModal',
  slot: 'Backdrop',
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  }
})({
  zIndex: -1
});

/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/material-ui/api/dialog/)
 * - [Drawer](/material-ui/api/drawer/)
 * - [Menu](/material-ui/api/menu/)
 * - [Popover](/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */
const Modal = /*#__PURE__*/React.forwardRef(function Modal(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
  const props = useThemeProps({
    name: 'MuiModal',
    props: inProps
  });
  const {
      BackdropComponent = ModalBackdrop,
      BackdropProps,
      classes,
      className,
      closeAfterTransition = false,
      children,
      container,
      component,
      components = {},
      componentsProps = {},
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      onBackdropClick,
      onClose,
      open,
      slotProps,
      slots,
      // eslint-disable-next-line react/prop-types
      theme
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const [exited, setExited] = React.useState(true);
  const commonProps = {
    container,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted,
    onBackdropClick,
    onClose,
    open
  };
  const ownerState = _extends({}, props, commonProps, {
    exited
  });
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
  const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
  return /*#__PURE__*/jsx(ModalUnstyled, _extends({
    slots: {
      root: RootSlot,
      backdrop: BackdropSlot
    },
    slotProps: {
      root: () => _extends({}, resolveComponentProps(rootSlotProps, ownerState), !isHostComponent(RootSlot) && {
        as: component,
        theme
      }, {
        className: clsx(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
      }),
      backdrop: () => _extends({}, BackdropProps, resolveComponentProps(backdropSlotProps, ownerState), {
        className: clsx(backdropSlotProps == null ? void 0 : backdropSlotProps.className, BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop)
      })
    },
    onTransitionEnter: () => setExited(false),
    onTransitionExited: () => setExited(true),
    ref: ref
  }, other, commonProps, {
    children: children
  }));
});
process.env.NODE_ENV !== "production" ? Modal.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: PropTypes.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: PropTypes.object,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: PropTypes.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes.shape({
    Backdrop: PropTypes.elementType,
    Root: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: PropTypes.shape({
    backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: PropTypes.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: PropTypes.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: PropTypes.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: PropTypes.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: PropTypes.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: PropTypes.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: PropTypes.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: PropTypes.shape({
    backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    backdrop: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
const Modal$1 = Modal;

const Grid2 = createGrid({
  createStyledComponent: styled$1('div', {
    name: 'MuiGrid2',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  }),
  componentName: 'MuiGrid2',
  useThemeProps: inProps => useThemeProps({
    props: inProps,
    name: 'MuiGrid2'
  })
});
process.env.NODE_ENV !== "production" ? Grid2.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
const Grid = Grid2;

function getPaginationUtilityClass(slot) {
  return unstable_generateUtilityClass('MuiPagination', slot);
}
unstable_generateUtilityClasses('MuiPagination', ['root', 'ul', 'outlined', 'text']);

const _excluded$2 = ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"];
function usePagination(props = {}) {
  // keep default values in sync with @default tags in Pagination.propTypes
  const {
      boundaryCount = 1,
      componentName = 'usePagination',
      count = 1,
      defaultPage = 1,
      disabled = false,
      hideNextButton = false,
      hidePrevButton = false,
      onChange: handleChange,
      page: pageProp,
      showFirstButton = false,
      showLastButton = false,
      siblingCount = 1
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const [page, setPageState] = unstable_useControlled({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page'
  });
  const handleClick = (event, value) => {
    if (!pageProp) {
      setPageState(value);
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  // https://dev.to/namirsab/comment/2050
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({
      length
    }, (_, i) => start + i);
  };
  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  const siblingsStart = Math.max(Math.min(
  // Natural start
  page - siblingCount,
  // Lower boundary when page is high
  count - boundaryCount - siblingCount * 2 - 1),
  // Greater than startPages
  boundaryCount + 2);
  const siblingsEnd = Math.min(Math.max(
  // Natural end
  page + siblingCount,
  // Upper boundary when page is low
  boundaryCount + siblingCount * 2 + 2),
  // Less than endPages
  endPages.length > 0 ? endPages[0] - 2 : count - 1);

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [...(showFirstButton ? ['first'] : []), ...(hidePrevButton ? [] : ['previous']), ...startPages,
  // Start ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []),
  // Sibling pages
  ...range(siblingsStart, siblingsEnd),
  // End ellipsis
  // eslint-disable-next-line no-nested-ternary
  ...(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), ...endPages, ...(hideNextButton ? [] : ['next']), ...(showLastButton ? ['last'] : [])];

  // Map the button type to its page number
  const buttonPage = type => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map(item => {
    return typeof item === 'number' ? {
      onClick: event => {
        handleClick(event, item);
      },
      type: 'page',
      page: item,
      selected: item === page,
      disabled,
      'aria-current': item === page ? 'true' : undefined
    } : {
      onClick: event => {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || item.indexOf('ellipsis') === -1 && (item === 'next' || item === 'last' ? page >= count : page <= 1)
    };
  });
  return _extends({
    items
  }, other);
}

function getPaginationItemUtilityClass(slot) {
  return unstable_generateUtilityClass('MuiPaginationItem', slot);
}
const paginationItemClasses = unstable_generateUtilityClasses('MuiPaginationItem', ['root', 'page', 'sizeSmall', 'sizeLarge', 'text', 'textPrimary', 'textSecondary', 'outlined', 'outlinedPrimary', 'outlinedSecondary', 'rounded', 'ellipsis', 'firstLast', 'previousNext', 'focusVisible', 'disabled', 'selected', 'icon']);
const paginationItemClasses$1 = paginationItemClasses;

const FirstPageIcon = createSvgIcon( /*#__PURE__*/jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), 'FirstPage');

const LastPageIcon = createSvgIcon( /*#__PURE__*/jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), 'LastPage');

const NavigateBeforeIcon = createSvgIcon( /*#__PURE__*/jsx("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'NavigateBefore');

const NavigateNextIcon = createSvgIcon( /*#__PURE__*/jsx("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext');

const _excluded$1 = ["className", "color", "component", "components", "disabled", "page", "selected", "shape", "size", "slots", "type", "variant"];
const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[ownerState.variant], styles[`size${unstable_capitalize(ownerState.size)}`], ownerState.variant === 'text' && styles[`text${unstable_capitalize(ownerState.color)}`], ownerState.variant === 'outlined' && styles[`outlined${unstable_capitalize(ownerState.color)}`], ownerState.shape === 'rounded' && styles.rounded, ownerState.type === 'page' && styles.page, (ownerState.type === 'start-ellipsis' || ownerState.type === 'end-ellipsis') && styles.ellipsis, (ownerState.type === 'previous' || ownerState.type === 'next') && styles.previousNext, (ownerState.type === 'first' || ownerState.type === 'last') && styles.firstLast];
};
const useUtilityClasses$1 = ownerState => {
  const {
    classes,
    color,
    disabled,
    selected,
    size,
    shape,
    type,
    variant
  } = ownerState;
  const slots = {
    root: ['root', `size${unstable_capitalize(size)}`, variant, shape, color !== 'standard' && `${variant}${unstable_capitalize(color)}`, disabled && 'disabled', selected && 'selected', {
      page: 'page',
      first: 'firstLast',
      last: 'firstLast',
      'start-ellipsis': 'ellipsis',
      'end-ellipsis': 'ellipsis',
      previous: 'previousNext',
      next: 'previousNext'
    }[type]],
    icon: ['icon']
  };
  return unstable_composeClasses(slots, getPaginationItemUtilityClass, classes);
};
const PaginationItemEllipsis = styled$1('div', {
  name: 'MuiPaginationItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 32,
  padding: '0 6px',
  margin: '0 3px',
  color: (theme.vars || theme).palette.text.primary,
  height: 'auto',
  [`&.${paginationItemClasses$1.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.size === 'small' && {
  minWidth: 26,
  borderRadius: 26 / 2,
  margin: '0 1px',
  padding: '0 4px'
}, ownerState.size === 'large' && {
  minWidth: 40,
  borderRadius: 40 / 2,
  padding: '0 10px',
  fontSize: theme.typography.pxToRem(15)
}));
const PaginationItemPage = styled$1(ButtonBase$1, {
  name: 'MuiPaginationItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 32,
  height: 32,
  padding: '0 6px',
  margin: '0 3px',
  color: (theme.vars || theme).palette.text.primary,
  [`&.${paginationItemClasses$1.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${paginationItemClasses$1.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.short
  }),
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${paginationItemClasses$1.selected}`]: {
    backgroundColor: (theme.vars || theme).palette.action.selected,
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selected} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (theme.vars || theme).palette.action.selected
      }
    },
    [`&.${paginationItemClasses$1.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selected} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    },
    [`&.${paginationItemClasses$1.disabled}`]: {
      opacity: 1,
      color: (theme.vars || theme).palette.action.disabled,
      backgroundColor: (theme.vars || theme).palette.action.selected
    }
  }
}, ownerState.size === 'small' && {
  minWidth: 26,
  height: 26,
  borderRadius: 26 / 2,
  margin: '0 1px',
  padding: '0 4px'
}, ownerState.size === 'large' && {
  minWidth: 40,
  height: 40,
  borderRadius: 40 / 2,
  padding: '0 10px',
  fontSize: theme.typography.pxToRem(15)
}, ownerState.shape === 'rounded' && {
  borderRadius: (theme.vars || theme).shape.borderRadius
}), ({
  theme,
  ownerState
}) => _extends({}, ownerState.variant === 'text' && {
  [`&.${paginationItemClasses$1.selected}`]: _extends({}, ownerState.color !== 'standard' && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
    '&:hover': {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    },
    [`&.${paginationItemClasses$1.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
    }
  }, {
    [`&.${paginationItemClasses$1.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    }
  })
}, ownerState.variant === 'outlined' && {
  border: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`,
  [`&.${paginationItemClasses$1.selected}`]: _extends({}, ownerState.color !== 'standard' && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : alpha(theme.palette[ownerState.color].main, 0.5)}`,
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.activatedOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity),
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    [`&.${paginationItemClasses$1.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity)
    }
  }, {
    [`&.${paginationItemClasses$1.disabled}`]: {
      borderColor: (theme.vars || theme).palette.action.disabledBackground,
      color: (theme.vars || theme).palette.action.disabled
    }
  })
}));
const PaginationItemPageIcon = styled$1('div', {
  name: 'MuiPaginationItem',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})(({
  theme,
  ownerState
}) => _extends({
  fontSize: theme.typography.pxToRem(20),
  margin: '0 -8px'
}, ownerState.size === 'small' && {
  fontSize: theme.typography.pxToRem(18)
}, ownerState.size === 'large' && {
  fontSize: theme.typography.pxToRem(22)
}));
const PaginationItem = /*#__PURE__*/React.forwardRef(function PaginationItem(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiPaginationItem'
  });
  const {
      className,
      color = 'standard',
      component,
      components = {},
      disabled = false,
      page,
      selected = false,
      shape = 'circular',
      size = 'medium',
      slots = {},
      type = 'page',
      variant = 'text'
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const ownerState = _extends({}, props, {
    color,
    disabled,
    selected,
    shape,
    size,
    type,
    variant
  });
  const theme = useTheme();
  const classes = useUtilityClasses$1(ownerState);
  const normalizedIcons = theme.direction === 'rtl' ? {
    previous: slots.next || components.next || NavigateNextIcon,
    next: slots.previous || components.previous || NavigateBeforeIcon,
    last: slots.first || components.first || FirstPageIcon,
    first: slots.last || components.last || LastPageIcon
  } : {
    previous: slots.previous || components.previous || NavigateBeforeIcon,
    next: slots.next || components.next || NavigateNextIcon,
    first: slots.first || components.first || FirstPageIcon,
    last: slots.last || components.last || LastPageIcon
  };
  const Icon = normalizedIcons[type];
  return type === 'start-ellipsis' || type === 'end-ellipsis' ? /*#__PURE__*/jsx(PaginationItemEllipsis, {
    ref: ref,
    ownerState: ownerState,
    className: clsx(classes.root, className),
    children: "\u2026"
  }) : /*#__PURE__*/jsxs(PaginationItemPage, _extends({
    ref: ref,
    ownerState: ownerState,
    component: component,
    disabled: disabled,
    className: clsx(classes.root, className)
  }, other, {
    children: [type === 'page' && page, Icon ? /*#__PURE__*/jsx(PaginationItemPageIcon, {
      as: Icon,
      ownerState: ownerState,
      className: classes.icon
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" ? PaginationItem.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'standard'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['primary', 'secondary', 'standard']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes.shape({
    first: PropTypes.elementType,
    last: PropTypes.elementType,
    next: PropTypes.elementType,
    previous: PropTypes.elementType
  }),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * The current page number.
   */
  page: PropTypes.node,
  /**
   * If `true` the pagination item is selected.
   * @default false
   */
  selected: PropTypes.bool,
  /**
   * The shape of the pagination item.
   * @default 'circular'
   */
  shape: PropTypes.oneOf(['circular', 'rounded']),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes.shape({
    first: PropTypes.elementType,
    last: PropTypes.elementType,
    next: PropTypes.elementType,
    previous: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The type of pagination item.
   * @default 'page'
   */
  type: PropTypes.oneOf(['end-ellipsis', 'first', 'last', 'next', 'page', 'previous', 'start-ellipsis']),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['outlined', 'text']), PropTypes.string])
} : void 0;
const PaginationItem$1 = PaginationItem;

const _excluded = ["boundaryCount", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"];
const useUtilityClasses = ownerState => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ['root', variant],
    ul: ['ul']
  };
  return unstable_composeClasses(slots, getPaginationUtilityClass, classes);
};
const PaginationRoot = styled$1('nav', {
  name: 'MuiPagination',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})({});
const PaginationUl = styled$1('ul', {
  name: 'MuiPagination',
  slot: 'Ul',
  overridesResolver: (props, styles) => styles.ul
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  listStyle: 'none'
});
function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`;
  }
  return `Go to ${type} page`;
}
const Pagination = /*#__PURE__*/React.forwardRef(function Pagination(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiPagination'
  });
  const {
      boundaryCount = 1,
      className,
      color = 'standard',
      count = 1,
      defaultPage = 1,
      disabled = false,
      getItemAriaLabel = defaultGetAriaLabel,
      hideNextButton = false,
      hidePrevButton = false,
      renderItem = item => /*#__PURE__*/jsx(PaginationItem$1, _extends({}, item)),
      shape = 'circular',
      showFirstButton = false,
      showLastButton = false,
      siblingCount = 1,
      size = 'medium',
      variant = 'text'
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    items
  } = usePagination(_extends({}, props, {
    componentName: 'Pagination'
  }));
  const ownerState = _extends({}, props, {
    boundaryCount,
    color,
    count,
    defaultPage,
    disabled,
    getItemAriaLabel,
    hideNextButton,
    hidePrevButton,
    renderItem,
    shape,
    showFirstButton,
    showLastButton,
    siblingCount,
    size,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsx(PaginationRoot, _extends({
    "aria-label": "pagination navigation",
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: /*#__PURE__*/jsx(PaginationUl, {
      className: classes.ul,
      ownerState: ownerState,
      children: items.map((item, index) => /*#__PURE__*/jsx("li", {
        children: renderItem(_extends({}, item, {
          color,
          'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
          shape,
          size,
          variant
        }))
      }, index))
    })
  }));
});

// @default tags synced with default values from usePagination

process.env.NODE_ENV !== "production" ? Pagination.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount: integerPropType,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'standard'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['primary', 'secondary', 'standard']), PropTypes.string]),
  /**
   * The total number of pages.
   * @default 1
   */
  count: integerPropType,
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage: integerPropType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @param {bool} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel: PropTypes.func,
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton: PropTypes.bool,
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton: PropTypes.bool,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange: PropTypes.func,
  /**
   * The current page.
   */
  page: integerPropType,
  /**
   * Render the item.
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   * @default (item) => <PaginationItem {...item} />
   */
  renderItem: PropTypes.func,
  /**
   * The shape of the pagination items.
   * @default 'circular'
   */
  shape: PropTypes.oneOf(['circular', 'rounded']),
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: PropTypes.bool,
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: PropTypes.bool,
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount: integerPropType,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['outlined', 'text']), PropTypes.string])
} : void 0;
const Pagination$1 = Pagination;

function PostDeleteModal({
  isDeleteModalOpen,
  setDeleteModal,
  postId
}) {
  const $jwtToken = useStore(jwtToken);
  const url = "https://sliger-backend-production.up.railway.app";
  const [postData, setPostData] = useState(void 0);
  const fetchPost = async (postId2) => {
    const data = await ky.get(`${url}/api/posts/${postId2}?populate=*`).json();
    if (data) {
      setPostData(data.data);
    }
  };
  let slugSchema = object({
    slug: string().min(1).matches(new RegExp(postData ? postData.attributes.slug : void 0), "Does not match slug").required()
  });
  useEffect(() => {
    fetchPost(postId);
  }, [postId]);
  const deletePost = async () => {
    const contents = postData.attributes.contents.data;
    if (contents) {
      contents.forEach((obj) => {
        const id = obj.id;
        ky.delete(`${url}/api/contents/${id}`, {
          headers: {
            Authorization: `Bearer ${$jwtToken}`
          }
        });
      });
    }
    const data = await ky.delete(`${url}/api/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${$jwtToken}`
      }
    });
    if (data) {
      setDeleteModal(false);
    }
  };
  return /* @__PURE__ */ jsx(Modal$1, {
    open: isDeleteModalOpen,
    className: "grid place-items-center",
    children: /* @__PURE__ */ jsxs("div", {
      className: "h-96 px-6 py-6 w-96 lg:w-[500px] lg:h-[350px] shadow-sm bg-[#403d39] border-[1.5px] border-black/20 rounded-md flex flex-col  overflow-hidden z-[60]",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "w-full flex",
        children: [/* @__PURE__ */ jsxs("p", {
          className: "flex-grow h-full flex items-center text-white font-mono select-none",
          children: ["Delete post ", postData && postData.attributes.slug, "?"]
        }), /* @__PURE__ */ jsx("button", {
          className: "text-[#FFE6C7]  w-12 h-10 text-xs font-mono border-2 border-black/20 font-bold rounded-xl shadow-lg active:shadow-none active:scale-95 duration-150 transition grid place-items-center",
          onClick: () => setDeleteModal(false),
          children: /* @__PURE__ */ jsx(AiOutlineClose, {})
        })]
      }), /* @__PURE__ */ jsx(Formik, {
        initialValues: {
          slug: ""
        },
        onSubmit: deletePost,
        validationSchema: slugSchema,
        children: ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => /* @__PURE__ */ jsxs("form", {
          onSubmit: handleSubmit,
          className: "flex flex-col w-full h-full justify-around",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "w-full flex flex-col",
            children: [/* @__PURE__ */ jsx("div", {
              className: "h-4 text-xs text-red-500",
              children: errors.slug
            }), /* @__PURE__ */ jsx("label", {
              htmlFor: "slug",
              className: "my-2 font-semibold font-mono text-white",
              children: "Slug"
            }), /* @__PURE__ */ jsx("input", {
              name: "slug",
              className: "input-field mb-4 w-full",
              onChange: handleChange,
              placeholder: postData && postData.attributes.slug
            })]
          }), /* @__PURE__ */ jsx("button", {
            type: "submit",
            disabled: errors.slug !== void 0,
            className: "text-[#FFE6C7] h-12 px-3 disabled:scale-100 disabled:cursor-not-allowed text-xs font-mono border-2 border-black/20 font-bold rounded-xl w-20 grid place-items-center mx-auto shadow-lg active:shadow-none active:scale-95 duration-150 transition grid-items-center",
            children: "Delete"
          })]
        })
      })]
    })
  });
}
__astro_tag_component__(PostDeleteModal, "@astrojs/react");

function PostDropdown({
  isDropdownOpen,
  postId,
  setDropOpen
}) {
  const [isDeleteModalOpen, setDeleteModal] = useState(false);
  const dropRef = useRef(void 0);
  useEffect(() => {
    async function click(event) {
      if (dropRef.current.contains(event.target)) {
        setDropOpen(true);
      } else {
        setDropOpen(false);
      }
    }
    if (isDropdownOpen) {
      setTimeout(() => {
        document.body.addEventListener("click", click);
      }, 1);
    } else {
      setTimeout(() => {
        document.body.removeEventListener("click", click);
      }, 1);
    }
    return () => {
      setTimeout(() => {
        document.body.removeEventListener("click", click);
      }, 1);
    };
  }, [dropRef, isDropdownOpen, setDropOpen]);
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.35
      }
    },
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs(motion.div, {
      ref: dropRef,
      variants,
      initial: "hidden",
      animate: isDropdownOpen ? "visible" : "hidden",
      className: "text-xs absolute right-1 top-8 w-24 shadow-sm bg-[#403d39] border-[1.5px] border-black/20 rounded-md flex flex-col  overflow-hidden z-[60]",
      children: [/* @__PURE__ */ jsxs("button", {
        className: "py-3 text-left px-2 flex items-center space-x-1 hover:text-[#ff6000] transition-all duration-150",
        children: [/* @__PURE__ */ jsx(MdEdit, {}), " ", /* @__PURE__ */ jsx("p", {
          children: "Edit Post"
        }), " "]
      }), /* @__PURE__ */ jsxs("button", {
        onClick: () => {
          setDeleteModal(true);
          setDropOpen(false);
        },
        className: "py-3 text-left px-2 flex items-center space-x-1 hover:text-[#ff6000] transition-all duration-150",
        children: [/* @__PURE__ */ jsx(MdDelete, {}), " ", /* @__PURE__ */ jsx("p", {
          children: " Delete"
        }), " "]
      })]
    }), isDeleteModalOpen && /* @__PURE__ */ jsx(PostDeleteModal, {
      isDeleteModalOpen,
      setDeleteModal,
      postId
    })]
  });
}
__astro_tag_component__(PostDropdown, "@astrojs/react");

function PostEditButton({
  onClick,
  isDropdownOpen,
  postId,
  setDropOpen
}) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: `${!isDropdownOpen ? "overflow-hidden" : ""} absolute h-6 w-6 top-0 right-0 rounded-bl-xl bg-black/40 shadow-md grid place-items-center`,
      children: /* @__PURE__ */ jsx("button", {
        onClick,
        className: "hover:text-[#ff6000] transition-colors duration-200 ease-in-out",
        children: /* @__PURE__ */ jsx(BsThreeDots, {
          size: 12
        })
      })
    }), /* @__PURE__ */ jsx(PostDropdown, {
      isDropdownOpen,
      postId,
      setDropOpen
    })]
  });
}
__astro_tag_component__(PostEditButton, "@astrojs/react");

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
function PostCard({
  post,
  authors,
  categories,
  image,
  postId
}) {
  const [isHover, setHover] = useState(false);
  const [isDropdownOpen, setDropOpen] = useState(false);
  const [imageLoaded, setLoad] = useState(false);
  const {
    ref,
    inView,
    entry
  } = useInView$1();
  const createdAt = new Date(post.createdAt);
  const $token = useStore(jwtToken);
  useEffect(() => {
    if (inView === true) {
      const target = entry.target;
      const source = entry.target.getAttribute("load-src");
      target.src = source;
    } else {
      setHover(false);
    }
  }, [inView]);
  const checkTouch = async () => {
    setHover(isHover === false ? true : false);
  };
  const endHover = async () => {
    setHover(false);
  };
  const startHover = async () => {
    setHover(true);
  };
  const changeLoad = async () => {
    setTimeout(() => {
      setLoad(true);
    }, 200);
  };
  return /* @__PURE__ */ jsx(Tilt, {
    tiltMaxAngleX: 2,
    tiltMaxAngleY: 0,
    children: /* @__PURE__ */ jsxs("div", {
      onTouchStart: checkTouch,
      onMouseEnter: startHover,
      onMouseLeave: endHover,
      className: `${isHover ? "shadow-lg" : "opacity-70"} z-30 overflow-hidden relative bg-gradient-to-bl my-8 hover:bg-black/10  from-[#FFFFFF]/20 from-10%  to-black/20 select-none text-white ease-in-out transition duration-300 w-[350px] md:w-[400px] h-[325px] rounded-md shadow-xl shadow-black/30 hover:shadow-lg p-4`,
      children: [$token && /* @__PURE__ */ jsx(Fragment, {
        children: /* @__PURE__ */ jsx(PostEditButton, {
          onClick: () => setDropOpen(!isDropdownOpen),
          isDropdownOpen,
          postId,
          setDropOpen
        })
      }), /* @__PURE__ */ jsx("h1", {
        className: `${isHover ? "" : "opacity-70"} transition duration-300 font-semibold tracking-wider text-2xl`,
        children: post.title
      }), /* @__PURE__ */ jsx("div", {
        className: `${isHover ? "" : "opacity-50"}  text-[0.8rem] space-y-1 py-2`,
        children: /* @__PURE__ */ jsx("p", {
          className: "font-mono  underline-offset-2 text-[#FF6000] font-semibold underline text-sm ease-in-out",
          children: categories[0].attributes.name
        })
      }), /* @__PURE__ */ jsx("div", {
        className: `${imageLoaded ? "opacity-10" : "opacity-0"} absolute -z-10 duration-300 transition top-0 left-0 w-full h-[50%] overflow-hidden ease-in  flex items-center`,
        children: image && /* @__PURE__ */ jsx("img", {
          className: `${isHover ? "scale-105 grayscale-0" : "grayscale"} transition duration-[600ms] ease-in-out w-full`,
          ref,
          draggable: false,
          "load-src": image.attributes.url,
          onLoad: changeLoad,
          alt: ""
        })
      }), image.attributes.blurhash && /* @__PURE__ */ jsx("div", {
        className: "absolute grayscale -z-10 duration-300 transition top-0 left-0 w-full h-[50%] overflow-hidden opacity-30 animate-pulse flex items-center",
        children: imageLoaded === false && /* @__PURE__ */ jsx(BlurhashCanvas, {
          hash: image.attributes.blurhash,
          className: "w-full"
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "absolute bottom-16 h-16 overflow-hidden w-full px-4 left-0",
        children: [/* @__PURE__ */ jsxs("div", {
          className: `${!isHover ? "delay-300" : "opacity-0"} px-4 text-[0.8rem] tracking-wider font-mono`,
          children: [/* @__PURE__ */ jsxs("p", {
            className: "opacity-50",
            children: ["Posted: ", createdAt.toLocaleDateString(void 0, options)]
          }), /* @__PURE__ */ jsxs("h2", {
            className: "tracking-wider font-mono opacity-50",
            children: ["Author: ", authors.attributes.name]
          })]
        }), /* @__PURE__ */ jsx("p", {
          className: `${isHover ? "delay-300 opacity-50" : "translate-y-4 opacity-0"} absolute top-0 transition duration-[600ms]  ease-in-out text-sm px-8`,
          children: post.excerpt
        })]
      }), /* @__PURE__ */ jsx("a", {
        draggable: false,
        href: "/blog/" + post.slug,
        className: `${isHover ? "opacity-90 delay-300" : "opacity-0"} font-mono duration-300 ease-in-out absolute w-full left-0 bottom-0 h-16 grid place-items-center px-4 text-md transition rounded-sm origin-center hover:cursor-pointer hover:text-[#FF6000] active:text-[#FF6000] font-semibold tracking-widest text-sm`,
        children: "Read More..."
      })]
    })
  });
}
__astro_tag_component__(PostCard, "@astrojs/react");

function NetworkIssue() {
  return /* @__PURE__ */ jsx("div", {
    className: "absolute top-0 left-0 w-full h-[400px] grid place-items-center font-mono text-red-500",
    children: "Network Issue, reload page..."
  });
}
__astro_tag_component__(NetworkIssue, "@astrojs/react");

const MyPagination = styled$2(Pagination$1)({
  "& .Mui-selected": {
    backgroundColor: "transparent",
    color: "#FFF"
  },
  "& .MuiPaginationItem-root": {
    border: "1px solid #fff",
    opacity: 0.3
  }
});
const fetcher = (url) => fetch(url).then((res) => res.json());
function Posts() {
  const [currentPage, setPage] = useState(1);
  const url = "https://sliger-backend-production.up.railway.app";
  const {
    data,
    error,
    isLoading
  } = useSWR(`${url}/api/posts?populate=*&pagination[page]=${currentPage}`, fetcher);
  function handlePageClick(e, val) {
    setPage(val);
    if ("URLSearchParams" in window) {
      var searchParams = new URLSearchParams(window.location.search);
      searchParams.set("page", val);
      var newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    }
  }
  useEffect(() => {
    if ("URLSearchParams" in window) {
      const urlParams = new URLSearchParams(window.location.search);
      const currPage = Number(urlParams.get("page"));
      if (currPage) {
        setPage(currPage);
      }
    }
  }, [currentPage]);
  if (isLoading) {
    return /* @__PURE__ */ jsx(Loading, {});
  }
  if (error) {
    return /* @__PURE__ */ jsx(NetworkIssue, {});
  }
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "space-x-4",
      children: [/* @__PURE__ */ jsx("button", {
        className: "text-xs hover:text-[#FF6000] bg-[#FF6000] hover:bg-black/20 transition-all duration-200 ease-in-out shadow-md px-6 py-2 rounded-full font-semibold text-white tracking-wider",
        children: "Most Recent"
      }), /* @__PURE__ */ jsx("button", {
        className: "text-xs hover:text-[#FF6000] bg-[#FF6000] hover:bg-black/20 transition-all duration-200 ease-in-out shadow-md px-6 py-2 rounded-full font-semibold text-white tracking-wider",
        children: "Technology"
      })]
    }), /* @__PURE__ */ jsx(Grid, {
      container: true,
      className: "gap-8",
      xs: 12,
      children: data && data.data && data.data.map((item) => {
        const post = item.attributes;
        const authors = item.attributes.author.data;
        const categories = item.attributes.categories.data;
        const image = item.attributes.featured_image.data;
        const id = item.id;
        return /* @__PURE__ */ jsx(Grid, {
          sm: 12,
          md: 8,
          lg: 6,
          xl: 4,
          children: /* @__PURE__ */ jsx(PostCard, {
            post,
            authors,
            categories,
            image,
            postId: id
          }, post.slug)
        }, post.slug);
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "w-full grid place-items-center relative top-20 mb-24",
      children: data.meta.pagination && /* @__PURE__ */ jsx(Box, {
        children: /* @__PURE__ */ jsx(MyPagination, {
          page: currentPage,
          classes: {
            root: " px-4 shadow-xl py-3 rounded-full"
          },
          variant: "outlined",
          count: data.meta.pagination.pageCount,
          boundaryCount: 2,
          onChange: handlePageClick,
          hidePrevButton: true
        })
      })
    })]
  });
}
__astro_tag_component__(Posts, "@astrojs/react");

const $$Astro = createAstro("https://sliger.dev");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let desc = "Discover my recent blog posts that delve into various topics, including innovative technologies and practical implementations of software/code. Explore and stay informed!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | sliger.dev", "description": desc, "type": "page" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="h-32"></div>
  <div class="flex overflow-hidden items-center lg:items-start flex-col px-2 lg:px-0 w-full lg:w-[800px] xl:w-[1200px] self-center">
    <h1 class="grid place-items-center pb-12 text-4xl font-semibold font-serif opacity-70 text-white tracking-wider">
      Blog Posts
    </h1>
    <div class="flex-grow"></div>
  
  <div class="w-full relative pb-24 min-h-[800px]">
    ${renderComponent($$result2, "Posts", Posts, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/tsliger/projects/sliger-blog/src/components/blog/Posts", "client:component-export": "default" })}
  </div>
</div>
` })}`;
}, "/home/tsliger/projects/sliger-blog/src/pages/blog/index.astro");

const $$file = "/home/tsliger/projects/sliger-blog/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
