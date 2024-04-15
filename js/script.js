const posts = [
    {
        id: 1,
        name: 'Elon Musk',
        username: '@elonmusk',
        timestamp: '3 Hours ago',
        profile_image: 'https://pbs.twimg.com/profile_images/1591027301474799623/EYDqHm1N_200x200.jpg',
        content: 'Calling all developers! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'https://source.unsplash.com/random/400x300'
    },
    {
        id: 2,
        name: 'Jeff Bezos',
        username: '@jeffbezos',
        timestamp: '5 Hours ago',
        profile_image: 'img/jeff.webp',
        content: 'Excited to announce our latest project! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'img/event_jeff.jpeg'
    },
    {
        id: 3,
        name: 'Mark Zuckerberg',
        username: '@zuck',
        timestamp: '1 Day ago',
        profile_image: 'https://pbs.twimg.com/profile_images/1255347936490355712/58mZ2o-C_200x200.jpg',
        content: 'Big news coming soon! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'https://source.unsplash.com/random/400x302'
    },
    {
        id: 4,
        name: 'Satya Nadella',
        username: '@satyanadella',
        timestamp: '2 Days ago',
        profile_image: 'img/satyaNadela.webp',
        content: 'Join us for our upcoming event! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'img/markZuckerberg.webp'
    },
    {
        id: 5,
        name: 'Sheryl Sandberg',
        username: '@sherylsandberg',
        timestamp: '4 Days ago',
        profile_image: 'https://pbs.twimg.com/profile_images/1092637303566199808/84sqdyOh_200x200.jpg',
        content: 'Exciting things happening at our company! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'https://source.unsplash.com/random/400x304'
    },
    {
        id: 6,
        name: 'Tim Cook',
        username: '@tim_cook',
        timestamp: '1 Week ago',
        profile_image: 'https://pbs.twimg.com/profile_images/1194113895043651584/3xEaDzP7_200x200.jpg',
        content: 'Looking forward to the future! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'https://source.unsplash.com/random/400x305'
    },
    {
        id: 7,
        name: 'Susan Wojcicki',
        username: '@susanwojcicki',
        timestamp: '2 Weeks ago',
        profile_image: 'https://pbs.twimg.com/profile_images/1157182271163366913/fFyOqFyY_200x200.jpg',
        content: 'Great progress on our latest project! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'https://source.unsplash.com/random/400x306'
    },
    {
        id: 8,
        name: 'Larry Page',
        username: '@larrypage',
        timestamp: '3 Weeks ago',
        profile_image: 'img/larry.webp',
        content: 'Our team is growing! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'https://source.unsplash.com/random/400x307'
    },
    {
        id: 9,
        name: 'Sundar Pichai',
        username: '@sundarpichai',
        timestamp: '1 Month ago',
        profile_image: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_200x200.jpg',
        content: 'Exciting updates coming soon! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'img/sunderPichai.jpeg'
    },
    {
        id: 10,
        name: 'Melinda Gates',
        username: '@melindagates',
        timestamp: '2 Months ago',
        profile_image: 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_200x200.jpg',
        content: 'Thank you for your support! <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'https://source.unsplash.com/random/400x309'
    }
];






function generatePostHTML(post) {
    return `
    <div>
      <div class="flex">
        <img class="w-12 rounded-full ml-5 mt-4" src="${post.profile_image}" alt="">
        <div class="info ml-4 mt-4 flex">
          <p class="font-bold">${post.name}</p>
          <p class="ml-3 text-gray-600">${post.username}</p>
          <p class="ml-2 text-gray-600">${post.timestamp}</p>
          </div>
          </div>
          <img class="w-[454px] relative left-[80px] mt-3" src="${post.image}" alt="">
        
      </div>
      <div>
        <p class="ml-[80px]">${post.content}</p>
      </div>
      <div class="logos flex justify-between ml-[80px] mt-3 text-gray-500 ">
                  <div class="left3">
                  <span class="material-symbols-outlined mx-3 hover:text-blue-700 hover:cursor-pointer  ">
                      chat_bubble
                      </span>
                      <span class="material-symbols-outlined mx-2 hover:text-blue-700 hover:cursor-pointer ">
                          compost
                          </span>
                          <span class="material-symbols-outlined mx-2 hover:text-blue-700 hover:cursor-pointer">
                              favorite
                              </span>
                              <span class="material-symbols-outlined mx-2 hover:text-blue-700 hover:cursor-pointer">
                                  visibility
                                  </span></div>
                                  <div class="righ3">
                                      <span class="material-symbols-outlined mx-2 hover:text-blue-700 hover:cursor-pointer">
                                          bookmark
                                          </span>
                                          <span class="material-symbols-outlined mx-2 hover:text-blue-700 hover:cursor-pointer">
                                              reply
                                              </span>
                                              
                                              
    `;
  }
const twitteraccarray=[
    {id: 1, name: 'John Doe', twitter_handle: '@JohnDoeFake'},
    {id: 2, name: 'Jane Smith', twitter_handle: '@JaneSmithFake'},
    {id: 3, name: 'Michael Johnson', twitter_handle: '@MichaelJohnsonFake'},
    {id: 4, name: 'Emily Davis', twitter_handle: '@EmilyDavisFake'},
    {id: 5, name: 'Chris Brown', twitter_handle: '@ChrisBrownFake'},
    {id: 6, name: 'Samantha Wilson', twitter_handle: '@SamanthaWilsonFake'},
    {id: 7, name: 'David Martinez', twitter_handle: '@DavidMartinezFake'},
    {id: 8, name: 'Jennifer Anderson', twitter_handle: '@JenniferAndersonFake'},
    {id: 9, name: 'James Taylor', twitter_handle: '@JamesTaylorFake'},
    {id: 10, name: 'Sarah Garcia', twitter_handle: '@SarahGarciaFake'},
    {id: 11, name: 'Robert Lee', twitter_handle: '@RobertLeeFake'},
    {id: 12, name: 'Ashley Nguyen', twitter_handle: '@AshleyNguyenFake'},
    {id: 13, name: 'William Hernandez', twitter_handle: '@WilliamHernandezFake'},
    {id: 14, name: 'Jessica Miller', twitter_handle: '@JessicaMillerFake'},
    {id: 15, name: 'Daniel Kim', twitter_handle: '@DanielKimFake'},
    {id: 16, name: 'Elizabeth Jackson', twitter_handle: '@ElizabethJacksonFake'},
    {id: 17, name: 'Matthew Thompson', twitter_handle: '@MatthewThompsonFake'},
    {id: 18, name: 'Amanda White', twitter_handle: '@AmandaWhiteFake'},
    {id: 19, name: 'Christopher Brown', twitter_handle: '@ChristopherBrownFake'},
    {id: 20, name: 'Stephanie Martinez', twitter_handle: '@StephanieMartinezFake'}
];
// Function to append random posts to the post container
function appendRandomPosts() {
const postContainer = document.getElementById('postContainer');
document.getElementById('seeMoreBtn').hidden="true"
const numPostsToAdd = 4; // Number of random posts to add

// Generate an array of unique random indices
const randomIndices = [];
while (randomIndices.length < numPostsToAdd) {
  const randomIndex = Math.floor(Math.random() * posts.length);
  if (!randomIndices.includes(randomIndex)) {
    randomIndices.push(randomIndex);
  }
}
const seeMoreBtn = document.getElementById('seeMoreBtn');
seeMoreBtn.removeEventListener('click', appendRandomPosts);
// Append the selected random posts to the post container
randomIndices.forEach(index => {
  const post = posts[index];
  const postHTML = generatePostHTML(post);
  postContainer.innerHTML += postHTML;
 
});
postContainer.appendChild(seeMoreBtn);
}
seeMoreBtn.addEventListener('click', appendRandomPosts);
// Function to append a new post at the top of the post container






function prependNewPost(content) {
const postContainer = document.getElementById('postContainer');
const newPostHTML = generateNewPostHTML(content);
postContainer.insertAdjacentHTML('afterbegin', newPostHTML);
postContainer.insertAdjacentHTML('afterbegin', newPostHTML);
}

// Function to generate HTML for a new post
function generateNewPostHTML(content) {
return `
  <div class="post relative mt-4">
    <div class="flex">
      <img class="rounded-full w-12 ml-5 mt-4" src="img/clogom.png" alt="">
      <div class="info ml-4 mt-4 flex">
        <p class="font-bold">Chaitanya Kulkarni</p>
        <p class="ml-3 text-gray-600">@ChaitanyaKulkarni@twiiter</p>
        <p class="ml-2 text-gray-600">Just Now</p>
      </div>
    </div>
    <p class="ml-[80px]">${content}</p>
  </div>
`;
}

function generateFollow(content){
return `<div class="follower mt-2 pt-3">
<span class="flex justify-between relative">
  <span class="flex">
    <img class="w-10" src="img/twiiterimg.png" alt="" />
    <span class="pl-3">
      <p>${content.name}</p>
      <p class="text-gray-600">${content.gmail}</p>
    </span>
  </span>
  <span class="dot flex justify-end w-23"
    ><button class="bg-white rounded-full w-20 change2  text-black p-0">
      Follow
    </button>
  </span></span
>
`
}

// Event listener for posting a new message
const postButton = document.querySelector('.right2 button');
postButton.addEventListener('click', () => {
const inputField = document.querySelector('.whathappening input[type="text"]');
const newPostContent = inputField.value;
prependNewPost(newPostContent);
inputField.value = ''; // Clear the input field after posting
});
// Get the input field
const inputField = document.querySelector('.whathappening input[type="text"]');

// Add click event listener to the first div
const firstDiv = document.querySelector('.cur');
firstDiv.addEventListener('click', () => {
// Focus on the input field
inputField.focus();
});


const followButton = document.querySelector('.change');
const followButton2 = document.querySelector('.change2');
const followButton3 = document.querySelector('.change3');

followButton3.addEventListener('click', () => {
followButton3.textContent = "Followed";
});



followButton.addEventListener('click', () => {
followButton.textContent = "Followed";
});



followButton2.addEventListener('click', () => {
followButton2.textContent = "Followed";
});


const more = document.querySelector(".showMore")

more.addEventListener('click', () => {
const namers = document.querySelectorAll('.akshay');
const ids = document.querySelectorAll('.akshayID');
i=0
namers.forEach((ele) => {
  // Get a random index within the range of twitteraccarray length
  const randomNumber = Math.floor(Math.random() * twitteraccarray.length);
  const randomTwitterAccount = twitteraccarray[randomNumber];
  
  // Set the name
  ele.textContent = randomTwitterAccount.name;
  ids[i].textContent = randomTwitterAccount.twitter_handle
  i+=1;
  followButton.textContent = "Follow"
  followButton2.textContent = "Follow"
  followButton3.textContent = "Follow"
  // Set the Twitter handle for the corresponding name
  // If the name is found, update the corresponding ID with its twitter_handle
  
});
});
const bar2 = document.querySelector('.followbar')
bar2.hidden = true
const following = document.querySelector(".Following")
following.addEventListener('click',()=>{
// following.textContent = "clicked"
const poster = document.querySelector('.afterFollow')
poster.hidden = true
const followings = document.querySelector('.another')
followings.hidden = false
const bar = document.querySelector('.forbar')
bar.hidden = true
const bar2 = document.querySelector('.followbar')
bar2.hidden = false

})

const foryou = document.querySelector('.forYou')
foryou.addEventListener('click',()=>{
const poster = document.querySelector('.afterFollow')
poster.hidden = false
const followings = document.querySelector('.another')
followings.hidden = true
const bar = document.querySelector('.forbar')
bar.hidden = false
const bar2 = document.querySelector('.followbar')
bar2.hidden = true
})

const notify = document.querySelector('.notify')
notify.addEventListener('click',()=>{
alert("You don't have any notifications!");
})
