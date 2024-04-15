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
  async function fetchUsers() {
    try {
      const response = await fetch('/api/users'); // Assuming your API endpoint is '/api/users'
      const data = await response.json();
      // console.log(data.twiiteraccounts);
      return data.users; // Assuming the response contains an array of users under the key 'users'
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }

  async function fetchtwiiteraccounts() {
    try {
      const response = await fetch('/api/twitteraccounts'); // Assuming your API endpoint is '/api/users'
      const data = await response.json();
      return data.twiiteraccounts; // Assuming the response contains an array of users under the key 'users'
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }
  async function fetchtrending() {
    try {
      const response = await fetch('/api/trending'); // Assuming your API endpoint is '/api/users'
      const data = await response.json();
      return data.trending; // Assuming the response contains an array of users under the key 'users'
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }
  posts=[]
  // Use the fetchUsers function to fetch the users and then process them
  async function processData() {
    const users = await fetchUsers();
    // Now you have the users data, you can use it in your client-side JavaScript
    posts = users
    console.log(users);
    // Perform any further operations with the users data
  }
  twitteraccarray =[]
  async function takeData(){
    try {
        const response = await fetch('/api/twitteraccounts');
        if (!response.ok) {
            throw new Error('Failed to fetch Twitter accounts');
        }
        const data = await response.json();
        console.log(data.twitteraccounts);
        twitteraccarray = data.twitteraccounts;
    } catch (error) {
        console.error('Error fetching Twitter accounts:', error);
    }
}
  async function taketrending(){
    try {
        const response = await fetch('/api/trending');
        if (!response.ok) {
            throw new Error('Failed to fetch Twitter accounts');
        }
        const data = await response.json();
        console.log(data.trending);
        trendingArray = data.trending;
    } catch (error) {
        console.error('Error fetching Twitter accounts:', error);
    }
}

  processData();
  takeData();
taketrending();

function prependNewPost(content) {
  const postContainer = document.getElementById('postContainer');
  const newPostHTML = generateNewPostHTML(content);
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
