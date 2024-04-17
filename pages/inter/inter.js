// index.js
Page({
  data:{
  a:"通知公告",
  is1:"block",
  is2:"none",
  is3:"none",
  },
  aa(){
  
  },
  tabt1(){
    this.setData({
      a:"通知公告",
      is1:"block",
      is2:"none",
      is3:"none"
  
    })
  
  },
  tabt2(){
    this.setData({
      a:"综合信息",
      is1:"none",
      is2:"block",
      is3:"none",
  
    })
  },
  tabt3(){
    this.setData({
      a:"学术动态",
      is1:"none",
      is2:"none",
      is3:"block"
    })
  },
  onLoad(options){
    
  }
  
  
  
  
  })
  