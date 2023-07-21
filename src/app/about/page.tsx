const About = () => {
    process.env.NEXT_PUBLIC_TITLE = "lee's blog";

    return <div>env:{process.env.NEXT_PUBLIC_TITLE}</div>;
};

export default About;
