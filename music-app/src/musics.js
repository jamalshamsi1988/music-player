import { v4 as uuidv4 } from "uuid";

//"https://dl.musicya.ir/1401/06/11/Omid Ameri - Khoon Sard [128].mp3"
export default function musicList() {
  return [
    {
      id: uuidv4(),
      name: "Khoon Sard",
      artist: "Omid Ameri",
      audio:
        "https://dl.musicya.ir/1401/06/11/Omid Ameri - Khoon Sard [128].mp3",
      cover:
        "https://musicya.ir/wp-content/uploads/2022/09/Omid%20Ameri%20-%20Khoon%20Sard.jpg",
      active: true,
    },
    {
      id: uuidv4(),
      name: "Khoon Sard",
      artist: "Omid Ameri",
      audio:
        "https://dl.musicya.ir/1401/06/11/Saman Yasin - Namadari [128].mp3",
      cover:
        "https://musicya.ir/wp-content/uploads/2022/09/Saman%20Yasin%20-%20Namadari.jpg",
      active: true,
    },
    {
      id: uuidv4(),
      name: "Khoon Sard",
      artist: "Omid Ameri",
      audio:
        "https://dl.musicya.ir/1401/06/09/Mohsen Yeganeh - Azab [128].mp3" ,
      cover:
        "https://musicya.ir/wp-content/uploads/2022/08/Mohsen%20Yeganeh%20-%20Azab.jpg",
      active: true,
    },
    {
      id: uuidv4(),
      name: "Khoon Sard",
      artist: "Omid Ameri",
      audio:
        "https://dl.musicya.ir/1401/05/25/Alireza Talischi - Del Bastim [128].mp3",
      cover:
        "https://musicya.ir/wp-content/uploads/2022/08/Alireza%20Talischi%20-%20Akharesh%20Ghashange.jpg",
      active: true,
    },
  ];
 
}