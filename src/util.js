import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      Id: uuidv4(),
      name: "Everlight",
      artist: "Parkbench Epiphany",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27501",
      active: true,
      color: ["#323D42", "#8A5354"],
    },
    {
      Id: uuidv4(),
      name: "Indian Smmer Rally",
      artist: "oddfish, cocabona",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32863",
      active: false,
      color: ["#FDD5BC", "#070B17"],
    },
    {
      Id: uuidv4(),
      name: "Kokon",
      artist: "Plusma, Guillaume Muschalle",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28895",
      active: false,
      color: ["#223846", "#FACB8D"],
    },
    {
      Id: uuidv4(),
      name: "Reflections",
      artist: "King I Divine",
      cover: "https://i.scdn.co/image/ab67616d0000b273609989517da2836064d2c051",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32854",
      active: false,
      color: ["#9E5963", "#C3E7F7"],
    },
    {
      Id: uuidv4(),
      name: "Ending",
      artist: "sadtoi, Relyae",
      cover: "https://i.scdn.co/image/ab67616d0000b273eaed420428f4881b7c6db265",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28969",
      active: false,
      color: ["#141732", "#23508E"],
    },
    {
      Id: uuidv4(),
      name: "Lavender",
      artist: "Mdjsty",
      cover: "https://i.scdn.co/image/ab67616d0000b2732254728af1d599d01f3f3da4",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30086",
      active: false,
      color: ["#FAE0C9", "#091429"],
    },
  ];
}
export default chillHop;
