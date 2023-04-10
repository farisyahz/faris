import Auto_Handsanitizer from "./posts/Auto_Handsanitizer"
import Digit_recognition from "./posts/Digit_recognition"
import My_first_post from "./posts/My_first_post"
import Started_tugasify from "./posts/Started_tugasify"

export const blogs = [
  {
    title: "Digit Recognition",
    post_date: "April 9, 2023",
    year: 2023,
    cat:"AI & ML",
    link: '/digit-recognition',
    post: <Digit_recognition/>
  },
  {
    title:"Started Tugasify",
    post_date:"March 22, 2023",
    year: 2023,
    cat:"Start Up",
    link: '/started-tugasify',
    post: <Started_tugasify/>
  },
  {
    title:"Automatic Handsanitizer",
    post_date:"March 4, 2023",
    year: 2023,
    cat:"Arduino",
    link: '/automatic-handsanitizer',
    post: <Auto_Handsanitizer/>
  },
  {
    title:"My First Post",
    post_date:"March 3, 2023",
    year: 2023,
    cat:"Random",
    link: '/my-first-post',
    post: <My_first_post/>
  }
]
  


export const projects = [
  {
    title:"farisyah.me",
    desc:"The source of this website",
    year:2023,
    article:null,
    demo:null,
    source:"https://github.com/farisyahz/farisyah.me"
  },
  {
    title:"Digit Recognition",
    desc:"A machine learning model that can recognize handwritten digit (1 - 9). Trained using MNIST database.",
    year:2023,
    article: "/digit-recognition",
    demo:null,
    source:"https://github.com/farisyahz"
  },
  {
    title:"faqbox.co*",
    desc:"A tool that allows you to create FAQ page for your small business, organization, event, or anything very easily. (*under development)",
    year:2023,
    article:null,
    demo:null,
    source:"https://github.com/faqbox-co"
  },
  {
    title:"Tugasify*",
    desc:"A task consultant marketplace for highschool and college student. (*temporarily postponed)",
    year:2023,
    article:"/started-tugasify",
    demo:null,
    source:"https://github.com/Tugasify"
  },
  {
    title:"Unusual Snake Game",
    desc:"A snake game but using computer vision with python and openCV module",
    year:2022,
    article: null,
    demo:null,
    source:"https://github.com/farisyahz/project/tree/main/AI%20and%20ML/snake_game"
  },
  {
    title:"Auto Handsanitizer",
    desc:"An automatic handsanitizer using arduino and sensor",
    year:2021,
    article:"/automatic-handsanitizer",
    demo:null,
    source:"https://github.com/farisyahz/project/blob/main/Arduino/hand_sanitizer.ino"
  }
]