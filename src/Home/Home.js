import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from "../Images/14.jpeg"
import img2 from "../Images/16.jpg"
import img3 from "../Images/25.jpg"
import img4 from "../Images/19.jpg"
const Home = () => {
    const navigate = useNavigate()
 const nav = () => {
navigate("/")
 }
return (
  <div>
    <center>
    <h1>
    Welcome to SKCT
</h1>
<img src={img1} alt='images'/>
<br/>
<a href="https://skct.edu.in/#/" target="_blank">CLICK HERE!!!!</a>
<p>
    Sri Krishna College of Technology abbreviated as SKCT was established in the year of 1985.
    The college provides undergraduate and postgraduate courses such as BE/ B.Tech, ME/ M.Tech, MCA, and MBA under 7 different 
    specializations.The people who work here are smart, dedicated, and committed with core values.We believe our nation’s
    future depends on our ability to make effective use of the enormous talent and resources represented by the diversity of our people
    and our ideas.We adopt truthfulness, honesty, fairness and transparency in the conduct of our academic,administrative and professional
    activities as a means for achieving holistic development of the students.We encourage students to be themselves and we embrace
    everyone for their unique contributions to the team. We also set expectations that everyone should acknowledge, and take responsibilities
    for mistakes. And then, treat mistakes as opportunities for learning and growth.An exclusive Centre for Social and Community 
    services caters to the needs of the local community, especially the under-privileged and the socially disadvantaged sectors of the 
    community by offering Training and Development in Employability Skills and Entrepreneurship Initiatives with the participation of 
    the community and in collaboration with the Government and Corporate. This service will not only benefit the underprivileged people,
     but also give a good exposure to students to interact with the local community and to be aware of social issues.
    </p>
<br/>
    <h1>Hostel</h1>
    <img src={img2} alt='images'/>
    <a href="https://www.skct.edu.in/#/hostel" target="_blank">
    </a>
<a href="https://www.skct.edu.in/#/Facilities" target="_blank">
    </a>
    <ul>
        <li>Food court</li>
        <li>Library</li>
        <li>Sports</li>
        <li>Extra-curricular Activities</li>
    </ul>
    <h1>Branch</h1>
    <ol>
        <li>B.E</li>
        <li>B.Tech</li>
    </ol>
    <h1>Programs</h1>
    <ol>
        <li>CSE</li>
        <li>ECE</li>
        <li>EEE</li>
        <li>IT</li>
        <li>AIML</li>
        <li>AIDS</li>
        <li>IOT</li>
    </ol>
    <br/>
    <h1>Video Of SKCT</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/1Qzr8jDWRVM?si=SuZc06np90boHSaF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <br/>
    <h1>For Enquery contact us through</h1>
            <br/>
            <br/>
        <a href="mailto:skct@gmail.com">
            <img src={img3} alt='images'/>
            <br/>
            <img src={img4} alt='images'/>
            
        </a>
        <br/>
        <button onClick={nav}>Back</button>
        </center>
    </div>
)
}
export default Home;
