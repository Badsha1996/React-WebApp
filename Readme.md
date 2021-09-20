{% raw %}
# For Running the front end code:
The Backend has some bugs in it so you can run the frontend part for now. Go to the `client` directory open terminal and type `npm start` 
# Building Rest API(Back End)
An API, or application programming interface, is a set of rules that define how applications or devices can connect to and communicate with each other. A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style. For this reason, REST APIs are sometimes referred to RESTful APIs.

## Installation:
I am using **Node js V12.18.2.** To check which version you have just type node in your command line.If you do not have node js install in your systeme then go to [Node JS official](https://nodejs.org/en/) website to download the latest version.Initiate your **package.jason** file by typing `npm init` in command line and you are ready to install requirements.I am listing all the modules i have used in this project so you can download those and i will recommand you to go to those modules Documentation and read about different functions.
## Requiremets:
* [Express](https://expressjs.com/en/5x/api.html) (The node Js frameweork where the code is running)
* [Mongoose](https://mongoosejs.com/docs/) (It helps us to create Mongo DB Documents)
* [Dotenv](https://www.npmjs.com/package/dotenv) (For security)
* [Helmet](https://helmetjs.github.io/) (Extra security)
* [Morgan](https://www.npmjs.com/package/morgan) (Middleware http requests logger)
* [Nodemon](https://www.npmjs.com/package/nodemon) (Allow us to restart server whenever we make changes)
* [Bcrypt](https://www.npmjs.com/package/bcrypt) (This is used for hinding the user password)

>For easy installation just type `npm install add ` + all the the names above with smaller case letter and it should install everything for you easily. Remenber to put `  "scripts": {
    "start": "nodemon index.js" ` in your **package.jason** file.
## Backend:
For backend server i am using Mongo db data base. it is more flexiable and free. Go to [Mongo db cloud](https://cloud.mongodb.com/) website and create a cluster, you can use the free version or the paid version depends on your project i am using simple free version for this project.
## Testing:
For testing i am using an app call [Postman](https://www.postman.com/downloads/). For login and register checking i will use post method, here is a part of code using post method
```JavaScript
router.post("/register",async(req,res)=>{
    try{
        //Creating new password 
        //bcrypt is used for hinding password
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(req.body.password);
        //creating new user
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.hashpass,
        });
```
# App Design(Front End)
I am using **React v4.0.2** for this project.[React](https://reactjs.org/docs/getting-started.html) is a JavaScript library for building user interfaces. I have provided the hyperlink to the official documentation so you can go and check out about React.Reason for using React is first it is very powerful and it gives our web designs an extra modern looks.
## Installation:
For using React you should have Node js install as i already said in the back end section. Now just type `npx create-reactc-app` and then your app name.Remember that app name can only be small latter it is a special new adition to doc of react. Then go to [Google Font](https://fonts.google.com/specimen/Roboto) and download font or the better option is to copy paste the CDN link in your code. I am using this types if you want you can copy this link also.
```<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
```
Now for icon i am using a website called Material icon.You can got to their webpage or just type `npm install @material-ui/core` in your terminal and you can use some of those to your site.You will also need SVG icons librery so just type `npm install @material-ui/icons` or you can visit [Material icon](https://material-ui.com/getting-started/installation/) for your suit. For using a certain img icon first import that icon ex-
```javaScript
import { Search} from "@material-ui/icons"

<div className="searchbar">
    <Search/>
    <input placeholder="Search for anything" className="searchInput" />
</div>
```
For styling purposes i am using CSS but the recommanded way of styling is to use **Style Components** and **SAAS**.My reasoning for using **CSS** is basically it is the most common one and easy one to use. In wide text areas i used [Shadow generator](https://html-css-js.com/css/generator/box-shadow/) EX-
```CSS
.post{
    border-radius: 10px;
    width: 100%;
    -webkit-box-shadow: 0px 0px 7px -1px rgba(0,0,0,0.36); 
    box-shadow: 0px 0px 7px -1px rgba(0,0,0,0.36);
    margin: 30px,0;
}
```
## Creating Dynamic Data:
Previously i was using the direct data inside the code and calling it as components. But this method is good for testing and Styling your code but not for useing data any further, for that we need to incorporate the concept of dynamic data.
First i created a **Dummy data js** file. EX-
```JavaScript
export const Users=[
    {
        id:1,
        profilePicture:"path",
        username:"name",
    },
]
```
Now instead of writing the components we can you something like mapping EX-
```Js
import {Posts} from "../../Dummydata.js";

  {Posts.map((p)=>(
                    <Post key={p.id} post={p}/>
                ))}           
```
also remember to import the dummydata from your collection. After that we have to incorporate this post id in our post component page so we can just write `export default function Post({post})`.For testing user dummydata just write this little code 
```js
import {Users} from "../../Dummydata.js";
    const user = Users.filter(u=>u.id===1)
    console.log(user[0].username)
```
if your console in browser can find user by id then the test run is successful.
## Use of useState Hook:
For adding fuction in like and dislike we just have to create a new logic here.Inside Post component we can wwrite
```js
const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
```
and instead of adding **{post.like}** we can just write {like} there. 
## FavIcon:
For the little icon on the top i am using [Favicon](https://favicon.io/favicon-generator/) website to generate new icon and then just add it under link tag in your html index file. 
## Animation:
For animation you can visit [here](https://animate.style/) for varity of animation.I am using a cdn link into my index file `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">` 
## Color selection:
I am considering contemporary color and monochrometic color format, for that i am using [color wheel](https://www.canva.com/colors/color-wheel/).
# Hooks and Context API:
In this section we will just join togather the backend and front code with each other. First we will need a very powerful librery [React-router-dom](https://www.npmjs.com/package/router-dom). For installation just go to the frontend directory and type in terminal `npm add react-router-dom`. Go to [this](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/quick-start.md) website for more clear read.

{% endraw %}

