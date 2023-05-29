
const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');
const userSection = document.querySelector('.users-infos');

toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
//   console.log("ta mere")
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;

    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
        </div>
        <p>${snippet}</p>
        </article>`;
    }).join('');

articlesContainer.innerHTML = articlesData;

const infosCard = userData
.map((data)=>{
    const {id, name, email, body, img} = data;

    return `
            <h2>${name}</h2>
            <span>Email: ${email}</span>
            <img src="${img}" alt="">
            <p>${body}</p>
    `
    }).join('');

userSection.innerHTML = infosCard;
