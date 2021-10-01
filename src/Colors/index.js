// Primary
export const allianzColors = {
	blue: "#0070A1",
	green: "#008C9F",
	blue1: "#D1E9EE",
	blue2: "#EDF8FE",
	blue3: "#EAF7F9",
	black: "#4E5250",
	black2: "#747474",
  black3:'#D4DCE6',
	white: "#ffffff",
	orange: "#FF9D39",
	orange2: "#FFF0E2"
};
const getTheme = ()=>{
  let theme
    if(window?.location?.hostname ==='allianz.uprise.co' ||  window?.location?.hostname === 'dev-allianz-app.uprise.co'){
      theme={
        primary:{
          purple:allianzColors.blue,
          charcoal:allianzColors.black
        },
        secondary:{
          electricPurple:allianzColors.blue,
          electricBlue:allianzColors.green,
          electricLightOrange:allianzColors.orange2,
          electricOrange: allianzColors.orange,
          electricPink: "rgb(255,67,184)",
          electricLightBlue: "rgb(157,180,255)",
         
        },
        backgrounds:{
          fadedPurple:allianzColors.blue3,
          white: "rgb(255,255,255)" // #FFFFFF
        },
        semantic:{
          error: "rgb(229,33,33)",
          success: "rgb(104, 202, 0)",
          warning: "rgb(255,243,227)",
          link: "rgb(2, 121, 255)"
        },
        extended:{
          charcoal:{
            one: allianzColors.black,
            // #6D6C79
            two: allianzColors.black2,
            // #9796A0
            three: "rgb(193,192,197)",
            four: "rgb(213,213,216)",
            five: allianzColors.black3,
          },
          purple:{
            one: allianzColors.blue1,
            two: allianzColors.blue2,
            three:allianzColors.blue2,
            four: allianzColors.blue2,
            five: allianzColors.blue2,
            six: allianzColors.blue2,
            dark: allianzColors.blue // #644DCC
          },
          electricPurple: {
            one: allianzColors.blue,
            two: allianzColors.blue,
            three: allianzColors.blue1,
            four: allianzColors.blue2,
            five: allianzColors.blue3
          },
          // blue
          blue: {
            one: allianzColors.green,
            two:allianzColors.green,
            three: "rgb(136,206,255)",
            four: "rgb(175,223,255)",
            five: "rgb(215,238,255)"
          },
          // Pink
          pink: {
            one: "rgb(255,67,184)",
            two: "rgb(255,106,198)",
            three: "rgb(255,142,212)",
            four: "rgb(255,180,226)",
            five: "rgb(255,217,241)"
          },
          // Orange
          orange: {
            one: "rgb(255,134,56)",
            two: "rgb(255,159,100)",
            three: "rgb(254,187,145)",
            four: "rgb(255,214,189)",
            five: "rgb(255,228,211)"
          },
          // Light Orange
          lightOrange: {
            one: "rgb(255,206,145)",
            two: "rgb(255,212,158)",
            three: "rgb(255,224,185)",
            four: "rgb(255,237,213)",
            five: allianzColors.orange2
          }
        }
      }
    }
    else{
      // return default theme - Uprise AU
      theme={
        primary:{
          purple: "rgb(125, 96, 255)",
          charcoal: "rgb(47,45,64)" // #2f2d40
        },
        secondary:{
          electricPurple: "rgb(145,73,255)",
          electricBlue: "rgb(57,174,255)",
          electricLightOrange: "rgb(255,194,117)",
          electricOrange: "rgb(255,119,34)",
          electricPink: "rgb(255,67,184)",
          electricLightBlue: "rgb(157,180,255)"
        },
        backgrounds:{
          fadedPurple: "rgb(248,248,255)",
          // #F8F8FF
          white: "rgb(255,255,255)" // #FFFFFF
        
        },
        semantic:{
          error: "rgb(229,33,33)",
          success: "rgb(104, 202, 0)",
          warning: "rgb(255,243,227)",
          link: "rgb(2, 121, 255)"
        },
        extended:{
          charcoal: {
            one: "rgb(109,108,121)",
            // #6D6C79
            two: "rgb(151,150,160)",
            // #9796A0
            three: "rgb(193,192,197)",
            four: "rgb(213,213,216)",
            five: "rgb(234,234,236)"
          },
          // Purple
          purple: {
            one: "rgb(150,127,254)",
            two: "rgb(175,158,253)",
            three: "rgb(187,172,252)",
            four: "rgb(212,203,251)",
            five: "rgb(237,234,250)",
            six: "rgb(246,244,252)",
            dark: "rgb(100, 77, 204)" // #644DCC
        
          },
          // Electric Purple
          electricPurple: {
            one: "rgb(155,91,255)",
            two: "rgb(178,128,255)",
            three: "rgb(199,164,255)",
            four: "rgb(222,200,255)",
            five: "rgb(245,236,255)"
          },
          // blue
          blue: {
            one: "rgb(57,174,255)",
            two: "rgb(97,190,255)",
            three: "rgb(136,206,255)",
            four: "rgb(175,223,255)",
            five: "rgb(215,238,255)"
          },
          // Pink
          pink: {
            one: "rgb(255,67,184)",
            two: "rgb(255,106,198)",
            three: "rgb(255,142,212)",
            four: "rgb(255,180,226)",
            five: "rgb(255,217,241)"
          },
          // Orange
          orange: {
            one: "rgb(255,134,56)",
            two: "rgb(255,159,100)",
            three: "rgb(254,187,145)",
            four: "rgb(255,214,189)",
            five: "rgb(255,228,211)"
          },
          // Light Orange
          lightOrange: {
            one: "rgb(255,206,145)",
            two: "rgb(255,212,158)",
            three: "rgb(255,224,185)",
            four: "rgb(255,237,213)",
            five: "rgb(255,243,227)"
          }
        }
      }
    }
    return theme
}
const theme = getTheme();

export const primary = theme.primary

export const secondary = theme.secondary

export const backgrounds = theme.backgrounds

export const extended = theme.extended

export const semantic = theme.semantic;





