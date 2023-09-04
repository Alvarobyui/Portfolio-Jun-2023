import tictactoeImg from "../assets/projects/Tic_tac_toe_generated-vecteezy.com.jpg"
import weatherImg from "../assets/projects/weather-app.png"
import houstonImg from "../assets/projects/Houston_Isometric.png"
import houseImg from "../assets/projects/Real Estate Agent_Monochromatic.png"
import calculatorImg from "../assets/projects/Data_Arranging_Monochromatic.png"
import UniversityImg from "../assets/projects/university.png"
 
export const projects = [
  {
    title: "Student Information System with roles - (PHP)",
    description: "A web application that manages permissions, registers students and teachers, and is divided by roles. It also allows for inputting academic grades, editing data, uploading scores, and displaying course information for students.",
    image: UniversityImg,
    link: "https://universidadwebapp.000webhostapp.com/"
  },
  {
    title: "School API - (Laravel)",
    description: "An API implemented in Laravel to record the attendance of students in a course, encompassing students, teachers, and courses. ",
    image: UniversityImg,
    link: "https://github.com/Alvarobyui/small_school_API"
  },
  {
    title: "Forecast App - (Next JS)",
    description: "A responsive, adaptive, forecast application implemented in Next.",
    image: weatherImg,
    link: "https://forecast-weather-web-app.vercel.app/"
  },
  {
    title: "Tic Tac Toe - (React JS)",
    description: "A Tic Tac Toe game implemented in React.",
    image: tictactoeImg,
    link: "https://alvarobyui.github.io/Tic-Tac-Toe/"
  },
  {
    title: "Temple Inn & Suits website",
    description: "A fully responsive website to view amenities, check the weather in the current location using an API, and book accommodations at a hotel.",
    image: houstonImg,
    link: "https://alvarobyui.github.io/Temple-Inn-Suite-Website/"
  },
  {
    title: "Online marketplace for accommodations",
    description: "A fully responsive site similar to Airbnb displaying information from a JSON file or API that has a funtional search box. This has been implemented in React",
    image: houseImg,
    link: "https://alvarobyui.github.io/Mini-project/#"
  },
  {
    title: "Tip Calculator",
    description: "A demo in pure JavaScript that calculates how much a client should pay for their bill after adding a tip.",
    image: calculatorImg,
    link: "https://alvarobyui.github.io/Tip-Calculator/"
  },
];