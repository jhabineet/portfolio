import { ABOUT } from "../constants"


const About = () => {
  return (
    <section id="about">
        <h2 className="my-10 text-center text-3xl lg:text-8xl">About Me</h2>
        <div className="flex items-center justify-center">
            <p className="m-8 max-w-6xl text-3xl lg:text-6xl">{ABOUT}</p>
        </div>
    </section>
  )
}

export default About