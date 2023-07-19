/**
 * @type {object[]}
 */
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

/**
 * @type {Element}
 */
const postContainer = document.querySelector("#container");

/**
 * @type {object[]}
 */
const postList = [];

/**
 * @type {object[]}
 */
const likedPost = [];


//chiamate funzioni
createPostObjects(posts);

printAllPost(postList);


/**
 * Create All the post objects that will be pushed in the array
 * @param {object[]} dataArray The Array that contains the datas for creating the posts
 */
function createPostObjects(dataArray) {
    dataArray.forEach((element) => {
        const newPost = {};

        newPost.postId = element.id;
        newPost.authorName = element.author.name;
        newPost.authorImage = element.author.image;

        newPost.postData = formattingItalianTime(element.created);

        newPost.postContent = element.content;
        newPost.postImage = element.media;
        newPost.postLikes = element.likes;

        postList.push(newPost);
    });
}

/**
 * Formatting and returns the input date but in italian Time
 * @param {string} timeToConvert 
 * @returns {string}
 */
function formattingItalianTime(timeToConvert) {
    const timeArray = timeToConvert.split("-");
    const italianData = `${timeArray[2]}/${timeArray[1]}/${timeArray[0]}`;

    return italianData;
}

/**
 * Formatting and returns the input date but in american Time
 * @param {string} timeToConvert 
 * @returns {string}
 */
function formattingAmericanTime(timeToConvert) {
    const timeArray = timeToConvert.split("-");
    const americanData = `${timeArray[1]}-${timeArray[2]}-${timeArray[0]}`;

    return americanData;
}

/**
 * Printing all the post inside the input array in the HTML
 * @param {object[]} postArray The Array that contains the post 
 */
function printAllPost(postArray) {
    postArray.forEach(element => {
        postContainer?.append(createPostElement(element));
    });
}

/**
 * Create and returns a single post element created from the input datas
 * @param {object} elementData The Object where you take all post the datas
 * @returns {Element}
 */
function createPostElement(elementData) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.append(createPostHeader(elementData));
    postElement.append(createPostText(elementData));
    postElement.append(createPostImage(elementData));
    postElement.append(createPostFooter(elementData));

    return postElement;
}

/**
 * Create and returns the post header element created from the input datas
 * @param {object} elementData The Object where you take all post the datas
 * @returns {Element}
 */
function createPostHeader(elementData) {
    const postHeader = document.createElement("div");
    postHeader.classList.add("post__header");

    const postMeta = document.createElement("div");
    postMeta.classList.add("post-meta");
    postHeader.append(postMeta);

    const postMetaIcon = document.createElement("div");
    postMetaIcon.classList.add("post-meta__icon");
    postMeta.append(postMetaIcon);

    const iconText = document.createElement("h2");
    postMetaIcon.append(iconText);

    const metaIcon_img = document.createElement("img");
    metaIcon_img.classList.add("profile-pic");

    if(elementData.authorImage === null) {
        iconText.textContent = getInitials(elementData.authorName);
    }
    else {
        metaIcon_img.src = elementData.authorImage;
    }
    postMetaIcon.append(metaIcon_img);

    const postMetaData = document.createElement("div");
    postMetaData.classList.add("post-meta__data");
    postMeta.append(postMetaData);

    const postMetaAuthor = document.createElement("div");
    postMetaAuthor.classList.add("post-meta__author");
    postMetaAuthor.textContent = elementData.authorName;
    postMetaData.append(postMetaAuthor);

    const postMetaTime = document.createElement("div");
    postMetaTime.classList.add("post-meta__time");
    postMetaTime.textContent = elementData.postData;
    postMetaData.append(postMetaTime);

    return postHeader;
}

/**
 * Create and returns the post Text element created from the input datas
 * @param {object} elementData The Object where you take all post the datas
 * @returns {Element}
 */
function createPostText(elementData) {
    const postText = document.createElement("div");
    postText.classList.add("post__text");
    postText.textContent = elementData.postContent;

    return postText;
}

/**
 * Create and returns the post Image element created from the input datas
 * @param {object} elementData The Object where you take all post the datas
 * @returns {Element}
 */
function createPostImage(elementData) {
    const postImageDiv = document.createElement("div");
    postImageDiv.classList.add("post__image");

    const iconText = document.createElement("h2");
    postImageDiv.append(iconText);

    const postImg = document.createElement("img");
    if(elementData.postImage === null) {
        iconText.textContent = getInitials(elementData.post__image);
    }
    else {
        postImg.src = elementData.postImage;
    }

    postImageDiv.append(postImg);

    return postImageDiv;
}

/**
 * Create and returns a the post Footer element created from the input datas
 * @param {object} elementData The Object where you take all post the datas
 * @returns {Element}
 */
function createPostFooter(elementData) {
    const postFooterDiv = document.createElement("div");
    postFooterDiv.classList.add("post__footer");

    const postLikesDiv = document.createElement("div");
    postLikesDiv.classList.add("likes", "js-likes");
    postFooterDiv.append(postLikesDiv);

    const likesButtonDiv = document.createElement("div");
    likesButtonDiv.classList.add("likes__cta");
    postLikesDiv.append(likesButtonDiv);

    const buttonLink = document.createElement("a");
    buttonLink.classList.add("like-button", "js-like-button");
    buttonLink.href = "#0";
    buttonLink.setAttribute("postid", elementData.postId.toString());
    buttonLink.addEventListener("click", likeClick);
    likesButtonDiv.append(buttonLink);

    const ButtonLinkIcon = document.createElement("i");
    ButtonLinkIcon.classList.add("like-button__icon", "fas", "fa-thumbs-up");
    buttonLink.append(ButtonLinkIcon);

    const buttonLinkText = document.createElement("span");
    buttonLinkText.classList.add("like-button__label");
    buttonLinkText.textContent = " Mi Piace";
    buttonLink.append(buttonLinkText);

    const likesCounter = document.createElement("div");
    likesCounter.classList.add("likes__counter");

    const likes = document.createElement("b");
    likes.classList.add("js-likes-counter");
    likes.id = `like-counter-${elementData.postId}`;
    likes.textContent = elementData.postLikes;

    likesCounter.innerHTML = "piace a ";
    likesCounter.append(likes);
    likesCounter.innerHTML += " persone"
    postLikesDiv.append(likesCounter)

    return postFooterDiv;
}

/**
 * Function called when the like button is clicked
 */
function likeClick() {
    if(this.classList.contains("like-button--liked")) {
        let ID = parseInt(this.getAttribute("postid")) - 1;
        postList[ID].postLikes--;
        this.classList.remove("like-button--liked");
        updateLikes(postList[ID].postLikes, ID);

        const index = likedPost.indexOf(postList[ID]);
        likedPost.splice(index, 1); 
        console.log(likedPost);
    }
    else {
        let ID = parseInt(this.getAttribute("postid")) - 1;
        postList[ID].postLikes++;
        this.classList.add("like-button--liked");
        updateLikes(postList[ID].postLikes, ID);
        likedPost.push(postList[ID]);
        console.log(likedPost);
    }
}

/**
 * Get the Initials of the passing Name
 * @param {string} word The Word you want the Initials
 * @returns {string}
 */
function getInitials(word) {
    const nameSplitted = word.split(" ");
    let name = "";

    nameSplitted.forEach(element => {
        name += element[0];
    });

    return name;
}

/**
 * Updates the likes in the HTML
 * @param {number} likesValue The number of likes that need to be updated
 * @param {number} id The id Value of the post  
 */
function updateLikes(likesValue, id) {
    id++;
    const likesElement = document.getElementById(`like-counter-${id}`);
    likesElement.textContent = likesValue;
}