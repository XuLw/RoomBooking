var localData = {
  rooms: [
    {
      building: "信息楼",
      roomNum: "a404",
      hasMultimedia: true,
      airConditioin :true,
      blackBoard:true,
      people: 8,
      isBooked: false
    },
    {
      building: "信息楼",
      roomNum: "b404",
      hasMultimedia: true,
      airConditioin: false,
      blackBoard: false,
      people: 8,
      isBooked: false
    },
    {
      building: "信息楼",
      roomNum: "b101",
      hasMultimedia: true,
      airConditioin :true,
      blackBoard:true,
      people: 23,
      isBooked: false
    },
    {
      building: "建筑楼",
      roomNum: "a131",
      hasMultimedia: true,
      airConditioin :true,
      blackBoard:true,
      people: 22,
      isBooked: false
    },
    {
      building: "建筑楼",
      roomNum: "b305",
      hasMultimedia: false,
      airConditioin :true,
      blackBoard:true,
      people: 4,
      isBooked: false
    },
    {
      building: "文馆楼",
      roomNum: "a101",
      hasMultimedia: true,
      airConditioin :true,
      blackBoard:true,
      people: 23,
      isBooked: false
    },
    {
      building: "生科楼",
      roomNum: "a307",
      hasMultimedia: true,
      airConditioin :false,
      blackBoard:true,
      people: 44,
      isBooked: false
    },
    {
      building: "文馆楼",
      roomNum: "b409",
      hasMultimedia: false,
      airConditioin :true,
      blackBoard: false,
      people: 12,
      isBooked: false
    }
  ],
  bookRecord:[
    {
      bookDate:"",
      bookStartTime:"",
      bookEndTime:"",
      bookBuilding:"",
      bookRoomNum:""
    }
  ],
  // 传入startTime 和 endTime 格式为 00:00 返回startTime > endTime
  compareTime:function (startTime,endTime){

  },
  
}

module.exports = {
  dataList: localData
};
