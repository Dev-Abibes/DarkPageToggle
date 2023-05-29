const articles = [
{
    id: 1,
    title: 'Mode sombre CSS',
    date: new Date(2020, 9, 4),
    length: 11,
    snippet: `body {
        background-color: #333;
        color: #fff;
      }
      
      h1, h2, h3, h4, h5, h6 {
        color: #eee;
      }`,
    },
    {
    id: 2,
    title: 'Code sombre JS',
    date: new Date(2019, 10, 22),
    length: 5,
    snippet: `const body = document.querySelector('body');
    body.classList.add('dark-mode');
    css .dark-mode {
        background-color: #333;
        color: #fff;
      }`,
    },
    {
    id: 3,
    title: 'Poeme d\'amour',
    date: new Date(2021, 7, 11),
    length: 5,
    snippet: `Dans la vaste étendue de l'amour, laissez-moi tisser un poème,
    Un écho doux et tendre, une mélodie qui vous emblème.
    
    Au creux de mon cœur, votre présence brille comme un astre,
    Une lumière qui guide mes pas, un amour qui ne se déclare pas à la hâte.
    
    Vos yeux, deux joyaux précieux où je me perds sans fin,
    Ils reflètent l'amour, la passion qui danse en moi sans frein.
    
    Vos lèvres, suaves et douces, promesses d'un baiser volé,
    Elles murmurent des mots d'amour, des promesses éternelles échangées.
    
    Votre voix, une symphonie qui caresse mes oreilles,
    Elle charme mon âme et fait naître des émotions sans pareilles.
    
    Votre présence, telle une étreinte qui réchauffe mon être,
    Elle remplit ma vie de bonheur, de joie et de bien-être.`,
    },
    {
    id: 4,
    title: 'what are the react team principles',
    date: new Date(2015, 5, 4),
    length: 5,
    snippet: `Dans la vaste étendue de l'amour, laissez-moi tisser un poème,
    Un écho doux et tendre, une mélodie qui vous emblème.
    
    Au creux de mon cœur, votre présence brille comme un astre,
    Une lumière qui guide mes pas, un amour qui ne se déclare pas à la hâte.
    
    Vos yeux, deux joyaux précieux où je me perds sans fin,
    Ils reflètent l'amour, la passion qui danse en moi sans frein.
    
    Vos lèvres, suaves et douces, promesses d'un baiser volé,
    Elles murmurent des mots d'amour, des promesses éternelles échangées.
    
    Votre voix, une symphonie qui caresse mes oreilles,
    Elle charme mon âme et fait naître des émotions sans pareilles.
    
    Votre présence, telle une étreinte qui réchauffe mon être,
    Elle remplit ma vie de bonheur, de joie et de bien-être.`,
    },
    {
    id: 5,
    title: 'Poème d amour',
    date: new Date(2020, 9, 4),
    length: 11,
    snippet: `Dans la vaste étendue de l'amour, laissez-moi tisser un poème,
    Un écho doux et tendre, une mélodie qui vous emblème.
    
    Au creux de mon cœur, votre présence brille comme un astre,
    Une lumière qui guide mes pas, un amour qui ne se déclare pas à la hâte.
    
    Vos yeux, deux joyaux précieux où je me perds sans fin,
    Ils reflètent l'amour, la passion qui danse en moi sans frein.
    
    Vos lèvres, suaves et douces, promesses d'un baiser volé,
    Elles murmurent des mots d'amour, des promesses éternelles échangées.
    
    Votre voix, une symphonie qui caresse mes oreilles,
    Elle charme mon âme et fait naître des émotions sans pareilles.
    
    Votre présence, telle une étreinte qui réchauffe mon être,
    Elle remplit ma vie de bonheur, de joie et de bien-être.`,
    },
    {
    id: 6,
    title: 'goodby, clean code',
    date: new Date(2019, 10, 22),
    length: 5,
    snippet: `Dans la vaste étendue de l'amour, laissez-moi tisser un poème,
    Un écho doux et tendre, une mélodie qui vous emblème.
    
    Au creux de mon cœur, votre présence brille comme un astre,
    Une lumière qui guide mes pas, un amour qui ne se déclare pas à la hâte.
    
    Vos yeux, deux joyaux précieux où je me perds sans fin,
    Ils reflètent l'amour, la passion qui danse en moi sans frein.
    
    Vos lèvres, suaves et douces, promesses d'un baiser volé,
    Elles murmurent des mots d'amour, des promesses éternelles échangées.
    
    Votre voix, une symphonie qui caresse mes oreilles,
    Elle charme mon âme et fait naître des émotions sans pareilles.
    
    Votre présence, telle une étreinte qui réchauffe mon être,
    Elle remplit ma vie de bonheur, de joie et de bien-être.`,
    },
    {
    id: 7,
    title: 'my decade in review',
    date: new Date(2018, 7, 11),
    length: 5,
    snippet: `Dans la vaste étendue de l'amour, laissez-moi tisser un poème,
    Un écho doux et tendre, une mélodie qui vous emblème.
    
    Au creux de mon cœur, votre présence brille comme un astre,
    Une lumière qui guide mes pas, un amour qui ne se déclare pas à la hâte.
    
    Vos yeux, deux joyaux précieux où je me perds sans fin,
    Ils reflètent l'amour, la passion qui danse en moi sans frein.
    
    Vos lèvres, suaves et douces, promesses d'un baiser volé,
    Elles murmurent des mots d'amour, des promesses éternelles échangées.
    
    Votre voix, une symphonie qui caresse mes oreilles,
    Elle charme mon âme et fait naître des émotions sans pareilles.
    
    Votre présence, telle une étreinte qui réchauffe mon être,
    Elle remplit ma vie de bonheur, de joie et de bien-être.`,
    },
    {
    id: 8,
    title: 'what are the react team principles',
    date: new Date(2015, 5, 4),
    length: 5,
    snippet: `Dans la vaste étendue de l'amour, laissez-moi tisser un poème,
    Un écho doux et tendre, une mélodie qui vous emblème.
    
    Au creux de mon cœur, votre présence brille comme un astre,
    Une lumière qui guide mes pas, un amour qui ne se déclare pas à la hâte.
    
    Vos yeux, deux joyaux précieux où je me perds sans fin,
    Ils reflètent l'amour, la passion qui danse en moi sans frein.
    
    Vos lèvres, suaves et douces, promesses d'un baiser volé,
    Elles murmurent des mots d'amour, des promesses éternelles échangées.
    
    Votre voix, une symphonie qui caresse mes oreilles,
    Elle charme mon âme et fait naître des émotions sans pareilles.
    
    Votre présence, telle une étreinte qui réchauffe mon être,
    Elle remplit ma vie de bonheur, de joie et de bien-être.`,
    },
];

const userData =
[
{
    "postId": 1,
    "id": 1,
    "name": "TEXT One",
    "email": "contact@abdev.fr",
    "img": "https://placehold.co/600x400/000000/FFFFFF/png",
    "body": "Votre voix, une symphonie qui caresse mes oreilles,\nElle charme mon âme et fait naître des émotions sans pareilles"
},
{
    "postId": 1,
    "id": 2,
    "name": "TEXT Two",
    "email": "contact@abdev.fr",
    "img": "https://placehold.co/600x400/000000/FFFFFF/png",
    "body": "Votre voix, une symphonie qui caresse mes oreilles,\nElle charme mon âme et fait naître des émotions sans pareilles"
},
{
    "postId": 1,
    "id": 3,
    "name": "TEXT Three",
    "email": "contact@abdev.fr",
    "img": "https://placehold.co/600x400/000000/FFFFFF/png",
    "body": "Votre voix, une symphonie qui caresse mes oreilles,\nElle charme mon âme et fait naître des émotions sans pareilles"
},
{
    "postId": 1,
    "id": 4,
    "name": "TEXT Four",
    "email": "contact@abdev.fr",
    "img": "https://placehold.co/600x400/000000/FFFFFF/png",
    "body": "Votre voix, une symphonie qui caresse mes oreilles,\nElle charme mon âme et fait naître des émotions sans pareilles"
},
{
    "postId": 1,
    "id": 5,
    "name": "TEXT Five",
    "email": "contact@abdev.fr",
    "img": "https://placehold.co/600x400/000000/FFFFFF/png",
    "body": "Votre voix, une symphonie qui caresse mes oreilles,\nElle charme mon âme et fait naître des émotions sans pareilles"
}
]