import { createSlice } from "@reduxjs/toolkit";


const requireContext = require.context('../../assets/images/real',false)
export const gemImages = requireContext.keys().map(requireContext)

const requireContext1 = require.context('../../assets/images/real 2',false)
export const gemImages1 = requireContext.keys().map(requireContext1)

export const gemSlice = createSlice({
    name:'gem',
    initialState:{
        selectedGem:'Arctic 2 White Gold Alfalfa',
        selectedSeries:'Artist Series',
        artist:{
          gemGroup1:{
              title:"ARCTIC 2",
              product:[
               {name:"Arctic 2 White Gold Alfalfa",src:gemImages[2]},
               {name:"Arctic 2 Moon Gold Jasper",src:gemImages[1]},
               {name:"Arctic 2 24K Gold Ivory",src:gemImages[0]},
              ]
            },
            gemGroup2:{
              title:"SHADOW IV",
              product:[
               {name:"Shadow IV 24K & White Gold 214A",src:gemImages[32]},
               {name:"Shadow IV Green & White Gold 214B",src:gemImages[33]},
               {name:"Shadow IV Moon & White Gold 209B",src:gemImages[34]},
               {name:"Shadow IV White & 24K Gold 209A",src:gemImages[35]},
              ]
            },
            gemGroup3:{
              title:"CUBIK",
              product:[
               {name:"Cubik 24K Gold CBC",src:gemImages[4]},
               {name:"Cubik 24K Gold CBB",src:gemImages[3]},
               {name:"Cubik White Gold CBD",src:gemImages[5]},
              ]
            },
            gemGroup4:{
              title:"INK 4",
              product:[
               {name:"Ink 4 24K Gold Sacred Flame",src:gemImages[7]},
               {name:"Ink 4 Moon & White Gold Omoiyari",src:gemImages[8]},
               {name:"Ink 4 White & 24K Gold Purple Fairy I",src:gemImages[11]},
               {name:"Ink 4 White Gold Ecstasy",src:gemImages[12]},
               {name:"Ink 4 Moon & White Gold Spirit",src:gemImages[9]},
               {name:"Ink 4 Moon Gold Roy Fox",src:gemImages[10]},
               {name:"Ink 4 24K Gold Roy Fox",src:gemImages[6]},
               {name:"Ink 4 White Gold Roy Fox",src:gemImages[13]},
              ]
            },
            gemGroup5:{
              title:"JAZZ 2",
              product:[
               {name:"Jazz 2 24K Golden Orange Citrine",src:gemImages[15]},
               {name:"Jazz 2 24K Pink Morganite",src:gemImages[17]},
               {name:"Jazz 2 24K Red Garnet & Yellow Quartz",src:gemImages[19]},
               {name:"Jazz 2 24K Green Tsavorite",src:gemImages[16]},
               {name:"Jazz 2 24K Red Garnet & Yellow Quartz 1",src:gemImages[18]},
               {name:"Jazz 2 24K Golden Orange Citrine 1",src:gemImages[14]},
              ]
            },
      },
        material:{
            gemGroup1:{
                title:"SONNET",
                product:[
                 {name:"Sonnet",src:gemImages[40]},
                ]
              },
              gemGroup2:{
                title:"PURE 3",
                product:[
                 {name:"Pure 3 24K & White Gold",src:gemImages[29]}
                ]
              },
              gemGroup3:{
                title:"PACIFIC PEARL",
                product:[
                 {name:"Pacific Pearl White Gold, Gold & Black Pearl, Abalone",src:gemImages[28]},
                ]
              },
              gemGroup4:{
                title:"LANTERN",
                product:[
                 {name:"Lantern 24K & White Gold, Golden Orange Citrine",src:gemImages[23]},
                 {name:"Lantern 24K Gold White, Gold & Black Pearls",src:gemImages[24]},
                 {name:"Lantern Grey Gold Pink Pearls",src:gemImages[25]},
                ]
              },
              gemGroup5:{
                title:"ZOHIKO LACQUER",
                product:[
                 {name:"Lacquer 24K Gold Burmese Green & Ice Jade",src:gemImages[21]},
                 {name:"Lacquer Moon Gold Rose Quartz",src:gemImages[22]},
                 {name:"Lacquer 24K Gold 209C",src:gemImages[20]},
                ]
              },
              gemGroup6:{
                title:"MARMORINO T. ANDO",
                product:[
                 {name:"Marmorino Moon Gold Black Pearls",src:gemImages[27]},
                 {name:"Marmorino 24K Gold 209D",src:gemImages[26]},
                ]
              },
              gemGroup7:{
                title:"SIXTY-SIX MARMORINO",
                product:[
                 {name:"Sixty-Six Marmorino 24K & White Gold Vanilla Sky",src:gemImages[37]},
                 {name:"Sixty-Six Marmorino Green & Grey Gold Jade",src:gemImages[38]},
                 {name:"Sixty-Six Marmorino 24K & Grey Gold Pewter",src:gemImages[36]},
                 {name:"Sixty-Six Marmorino White & Moon Gold Emerald",src:gemImages[39]},
                ]
              },
        },
        collabration:{
            gemGroup1:{
                title:"PUTMAN",
                product:[
                 {name:"Putman Au750 3N Yellow Gold Onyx, Lapis and Topaz",src:gemImages[30]},
                 {name:"Putman Au750 3N Yellow Gold",src:gemImages[31]},
                ]
              },
              gemGroup2:{
                title:"ZOHIKO 4",
                product:[
                 {name:"Zohiko 4 Be Brave",src:gemImages[47]},
                 {name:"Zohiko 4 Great Wave",src:gemImages[48]},
                ]
              },
              gemGroup3:{
                title:"ZOHIKO 2 ",
                product:[
                 {name:"Zohiko 2 ZOHIKO 2 Fan",src:gemImages[46]},
                 {name:"Zohiko 2 Autumn Leaves",src:gemImages[41]},
                 {name:"Zohiko 2 Biwa",src:gemImages[42]},
                 {name:"Zohiko 2 Pull Toy",src:gemImages[45]},
                 {name:"Zohiko 2 Kotsuzumi",src:gemImages[43]},
                 {name:"Zohiko 2 Peach Blossom",src:gemImages[44]},
                ]
              },
        },
        

        

    },
    reducers:{
      setSelectedGem:(state,action)=>{
            state.selectedGem=action.payload
        },
      setSelectedSeries:(state,action)=>{
        state.selectedSeries=action.payload
      }
    }
})

export const {setSelectedGem,setSelectedSeries} = gemSlice.actions
export default gemSlice.reducer