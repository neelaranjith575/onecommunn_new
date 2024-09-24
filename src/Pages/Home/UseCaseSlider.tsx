import { Stack } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UseCaseCard from "./UseCaseCard";



const UseCaseSlider = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
            slidesToSlide: 1,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const CommunityData = [
        {
            id: 1,
            imageurl:require('../../Assets/Images/Home/2.png'),
            title: "Homemaker",
            description: "Transform your home into a global hub for homemakers to share recipes, home decor ideas, parenting tips, and more, cultivating a family-like, nurturing community.",
        },
        {
            id: 2,
            imageurl:require('../../Assets/Images/Home/3.png'),
            title: "Entrepreneur",
            description: "Supercharge your professional connections. Network with fellow entrepreneurs, freelancers, and experts. Share insights, collaborate, and unlock business opportunities.",
        },
        {
            id: 3,
            imageurl:require('../../Assets/Images/Home/4.png'),
            title: "Gym Owner   ",
            description: "Elevate your gym experience. Forge a tight-knit fitness community where members share workout routines, nutritional advice, and motivate each other.",
            
        },
        {
            id: 4,
            imageurl:require('../../Assets/Images/Home/2.png'),
            title: "Homemakers",
            description: "Transform your home into a global hub for homemakers to share recipes, home decor ideas, parenting tips, and more, cultivating a family-like, nurturing community.",
        },
        {
            id: 5,
            imageurl:require('../../Assets/Images/Home/3.png'),
            title: "Entrepreneurs",
            description: "Supercharge your professional connections. Network with fellow entrepreneurs, freelancers, and experts. Share insights, collaborate, and unlock business opportunities.",
        },
        {
            id: 6,
            imageurl:require('../../Assets/Images/Home/4.png'),
            title: "Gym Owner   ",
            description: "Supercharge your professional connections. Network with fellow entrepreneurs, freelancers, and experts. Share insights, collaborate, and unlock business opportunities.",
            
        },
        
        
        
        
    ];

    const Data = CommunityData.map((item) => (
        <UseCaseCard
            title={item.title}
            url={item.imageurl}
            description={item.description}

        />
    ));

    return (
        <>
            <Stack>
                <Carousel showDots={false} arrows={true}
                    responsive={responsive}>
                    {Data}
                </Carousel>
            </Stack>
        </>
    )
}

export default UseCaseSlider;