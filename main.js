const reviews = [
    {
        id:1,
        name:"Rohit Sharma",
        job:"Cricketer",
        img:"https://m.economictimes.com/thumb/msid-70119616,width-1200,height-900,resizemode-4,imgsize-160034/rohit-sharma-the-odi-cricket-phenomenon.jpg",
        text:"Talent – an apparently heartening term that has followed Rohit Sharma around like a shadow; even haunted him at times. It seems to be a burden that the cricketing fraternity has enforced upon him and, after more than a decade in the national setting, he has been weighed down by the label."
    },
    {
        id:2,
        name:"Virat Kohli",
        job:"Cricketer",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/The_President%2C_Shri_Pranab_Mukherjee_presenting_the_Padma_Shri_Award_to_Shri_Virat_Kohli%2C_at_a_Civil_Investiture_Ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_March_30%2C_2017_%28cropped%29.jpg/260px-thumbnail.jpg",
        text:"A spunky, chubby teenager with gelled hair shot to fame after leading India to glory in the Under-19 World Cup at Kuala Lumpur in early 2008. In an Indian team filled with saint-like icons worthy of their own hagiographies, Virat Kohli, with his most un-Indian, 'bad-boy' intensity, would clearly be an outcast."
    },
    {
        id:3,
        name:"Jeff Bezos",
        job:"CEO of Amazon",
        img:"https://cnet1.cbsistatic.com/img/Ck97FjY5TwoJprAAVI9cpRB6vG8=/940x0/2019/02/08/cf0360fc-f41f-4dcd-bfa6-265addf591f0/gettyimages-1036084450.jpg",
        text:"He is best known as the founder, CEO, and president of the multi-national technology company Amazon. The first centi-billionaire on the Forbes wealth index, Bezos has been the world's richest person since 2017 and was named the richest man in modern history"
    },
    {
        id:4,
        name:"Elon Musk",
        job:"CEO of SpaceX",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/330px-Elon_Musk_Royal_Society.jpg",
        text:"Musk was born to a Canadian mother and South African father and raised in Pretoria, South Africa.He briefly attended the University of Pretoria before moving to Canada when he was 17 to attend Queen's University.",
    },
    {
        id:5,
        name:"Mark Zuckerberg",
        job:"CEO of Facebook",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        text:"Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004, with college roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.",
    },
];

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevbtn = document.querySelector('.prev-btn'); 
const nextbtn = document.querySelector('.next-btn'); 
const randombtn = document.querySelector('.random-btn'); 

let currentItem = -1;
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
})

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

randombtn.addEventListener('click', function(){
    const num = Math.floor(Math.random() * reviews.length);
    showPerson(num);
});
nextbtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length){
        currentItem = 0;
    }
    showPerson(currentItem);
})
prevbtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = 0;
    }
    showPerson(currentItem);
})