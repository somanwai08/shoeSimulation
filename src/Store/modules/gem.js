import { createSlice } from "@reduxjs/toolkit";


const requireContext = require.context('../../assets/images/legacy',false)
export const gemImages = requireContext.keys().map(requireContext)




const requireContextKelly = require.context('../../assets/images/Kelly/',false)
export const gemImagesKelly = requireContextKelly.keys().map(requireContextKelly)


const requireContext1 = require.context('../../assets/images/legacy2',false)
export const gemImages1 = requireContext1.keys().map(requireContext1)


export const gemSlice = createSlice({
    name:'gem',
    initialState:{
        selectedGem:'',
        selectedKelly:{
          selectedSide:'LEFT',
          LEFT:'Kelly 1',
          RIGHT:'Kelly 2'
        },
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
               {name:"Shadow IV 24K & White Gold 214A",src:gemImages[29]},
               {name:"Shadow IV Green & White Gold 214B",src:gemImages[30]},
               {name:"Shadow IV Moon & White Gold 209B",src:gemImages[31]},
               {name:"Shadow IV White & 24K Gold 209A",src:gemImages[32]},
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
               {name:"Jazz 2 24K Golden Orange Citrine",src:gemImages[14]},
               {name:"Jazz 2 24K Red Garnet & Yellow Quartz",src:gemImages[16]},
               {name:"Jazz 2 24K Green Tsavorite",src:gemImages[15]},
              ]
            },
            gemGroup6:{
              title:"Kelly",
              product:[
               {name:"Kelly 1",src:gemImagesKelly[0]},
               {name:"Kelly 2",src:gemImagesKelly[7]},
               {name:"Kelly 3",src:gemImagesKelly[8]},
               {name:"Kelly 4",src:gemImagesKelly[9]},
               {name:"Kelly 5",src:gemImagesKelly[10]},
               {name:"Kelly 6",src:gemImagesKelly[11]},
               {name:"Kelly 7",src:gemImagesKelly[12]},
               {name:"Kelly 8",src:gemImagesKelly[13]},
               {name:"Kelly 9",src:gemImagesKelly[14]},
               {name:"Kelly 10",src:gemImagesKelly[1]},
               {name:"Kelly 11",src:gemImagesKelly[2]},
               {name:"Kelly 12",src:gemImagesKelly[3]},
               {name:"Kelly 13",src:gemImagesKelly[4]},
               {name:"Kelly 14",src:gemImagesKelly[5]},
               {name:"Kelly 15",src:gemImagesKelly[6]},
              
              ]
            },
      },
        material:{
            gemGroup1:{
                title:"SONNET",
                product:[
                 {name:"Sonnet",src:gemImages[37]},
                ]
              },
              gemGroup2:{
                title:"PURE 3",
                product:[
                 {name:"Pure 3 24K & White Gold",src:gemImages[26]}
                ]
              },
              gemGroup3:{
                title:"PACIFIC PEARL",
                product:[
                 {name:"Pacific Pearl White Gold, Gold & Black Pearl, Abalone",src:gemImages[25]},
                ]
              },
              gemGroup4:{
                title:"LANTERN",
                product:[
                 {name:"Lantern 24K & White Gold, Golden Orange Citrine",src:gemImages[20]},
                 {name:"Lantern 24K Gold White, Gold & Black Pearls",src:gemImages[21]},
                 {name:"Lantern Grey Gold Pink Pearls",src:gemImages[22]},
                ]
              },
              gemGroup5:{
                title:"ZOHIKO LACQUER",
                product:[
                 {name:"Lacquer 24K Gold Burmese Green & Ice Jade",src:gemImages[18]},
                 {name:"Lacquer Moon Gold Rose Quartz",src:gemImages[19]},
                 {name:"Lacquer 24K Gold 209C",src:gemImages[17]},
                ]
              },
              gemGroup6:{
                title:"MARMORINO T. ANDO",
                product:[
                 {name:"Marmorino Moon Gold Black Pearls",src:gemImages[24]},
                 {name:"Marmorino 24K Gold 209D",src:gemImages[23]},
                ]
              },
              gemGroup7:{
                title:"SIXTY-SIX MARMORINO",
                product:[
                 {name:"Sixty-Six Marmorino 24K & White Gold Vanilla Sky",src:gemImages[34]},
                 {name:"Sixty-Six Marmorino Green & Grey Gold Jade",src:gemImages[35]},
                 {name:"Sixty-Six Marmorino 24K & Grey Gold Pewter",src:gemImages[33]},
                 {name:"Sixty-Six Marmorino White & Moon Gold Emerald",src:gemImages[39]},
                ]
              },
        },
        collabration:{
            gemGroup1:{
                title:"PUTMAN",
                product:[
                 {name:"Putman Au750 3N Yellow Gold Onyx, Lapis and Topaz",src:gemImages[27]},
                 {name:"Putman Au750 3N Yellow Gold",src:gemImages[28]},
                ]
              },
              gemGroup2:{
                title:"ZOHIKO 4",
                product:[
                 {name:"Zohiko 4 Be Brave",src:gemImages[44]},
                 {name:"Zohiko 4 Great Wave",src:gemImages[45]},
                ]
              },
              gemGroup3:{
                title:"ZOHIKO 2 ",
                product:[
                 {name:"Zohiko 2 Biwa",src:gemImages[38]},
                 {name:"Zohiko 2 Black Peach Blossom",src:gemImages[39]},
                 {name:"Zohiko 2 Pull Toy",src:gemImages[40]},
                 {name:"Zohiko 2 Red Autumn Leaves",src:gemImages[41]},
                 {name:"Zohiko 2 Red Biwa",src:gemImages[42]},
                 {name:"Zohiko 2 Red Peach Blossom",src:gemImages[43]},
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
      },
      setSelectedKellySide:(state,action)=>{
        state.selectedKelly.selectedSide = action.payload
      },
      setSelectedKelly:(state,action)=>{
        const {side,name}=action.payload
        state.selectedKelly[side]=name
      },
      ResetKelly:(state)=>{
        state.selectedKelly.selectedSide='LEFT'
        state.selectedKelly.LEFT='Kelly 1'
        state.selectedKelly.RIGHT='Kelly 2'
      },
      ResetLegacy:(state)=>{
        state.selectedGem=''
      }
    }
})

export const {setSelectedGem,setSelectedSeries,setSelectedKellySide,setSelectedKelly,ResetKelly,ResetLegacy} = gemSlice.actions
export default gemSlice.reducer