import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      Id: uuidv4(),
      name: "Everlight",
      artist: "Parkbench Epiphany",
      cover:
        "https://i.ibb.co/xgXxSyV/song.jpg",
      active: true,
      color: ["#323D42", "#8A5354"],
    },
    {
      Id: uuidv4(),
      name: "Indian Smmer Rally",
      artist: "oddfish, cocabona",
      cover:
        "https://i.ibb.co/xgXxSyV/song.jpg",
      active: false,
      color: ["#FDD5BC", "#070B17"],
    },
    {
      Id: uuidv4(),
      name: "Kokon",
      artist: "Plusma, Guillaume Muschalle",
      cover:
        "https://i.ibb.co/xgXxSyV/song.jpg",
      active: false,
      color: ["#223846", "#FACB8D"],
    },
    {
      Id: uuidv4(),
      name: "Reflections",
      artist: "King I Divine",
      cover: "https://i.ibb.co/xgXxSyV/song.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32854",
      active: false,
      color: ["#9E5963", "#C3E7F7"],
    },
    {
      Id: uuidv4(),
      name: "Ending",
      artist: "sadtoi, Relyae",
      cover: "https://i.ibb.co/xgXxSyV/song.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28969",
      active: false,
      color: ["#141732", "#23508E"],
    },
    {
      Id: uuidv4(),
      name: "Lavender",
      artist: "Mdjsty",
      cover: "https://i.ibb.co/xgXxSyV/song.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30086",
      active: false,
      color: ["#FAE0C9", "#091429"],
    },
  ];
}
export default chillHop;
