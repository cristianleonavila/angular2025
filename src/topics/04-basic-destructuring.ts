interface AudioPlayer {
    audioVolume:number;
    songDureacion:number;
    song:string;
    details: Details

}

interface Details {
    author:string;
    year:number;
}

const audioPlayer:AudioPlayer = {
    audioVolume: 90,
    songDureacion: 36,
    song: "Fade to Black",
    details: {
        author: "Metallica",
        year: 1984
    }
};

const { song, details: {author} } = audioPlayer;
console.log(`${song} - ${author}`);

const [, , mboo = 'Not Found']:string[] = ['Broly','Cel','Majin Boo'];

console.log(`Personaje: ${mboo}`);





