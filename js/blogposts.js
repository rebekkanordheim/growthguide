// Making a call to fetch the blog posts from the API
async function getPosts() {
    const response = await fetch("https://www.rebekkanordheim.no/wp-json/wp/v2/posts?per_page=12");
    return await response.json();
  }
  
  // Console logging the data to check if it calls right
  async function myPosts() {
    const posts = await getPosts();
    console.log(posts);
    createPostsHTML(posts);
  }
  
  myPosts();
  
  // Creating the HTML for each post that gets called from the API
  function createPostsHTML(posts) {
    const container = document.querySelector('.carouselBlog');
  
    posts.forEach(post => {
      // Create the post container
      const postContainer = document.createElement('div');
      postContainer.classList.add('carousel-item');
      postContainer.id = post.id;
  
      // Create the post title
      const title = document.createElement('h3');
      title.innerText = post.title.rendered;
      postContainer.append(title);
  
      // Create the post content
      const content = document.createElement('div');
      content.innerHTML = post.content.rendered;
      postContainer.append(content);
  
      // Hide all p tags in the content div on the homepage
      const pTags = content.querySelectorAll('p');
      pTags.forEach(p => {
        p.style.display = 'none';
      });
  
      // Making a button which links to the different page's individual page
      const readMoreButton = document.createElement('a');
      readMoreButton.classList.add('read-more');
      readMoreButton.innerText = 'Read More';
      readMoreButton.href = `motivation.html?id=${post.id}`;
      postContainer.append(readMoreButton);
  
      container.append(postContainer);
    });
  }
  