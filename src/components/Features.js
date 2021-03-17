import Content from "./subComponents/Content"
import together from '../img/illustration-grow-together.svg'
import conversation from '../img/illustration-flowing-conversation.svg'
import users from '../img/illustration-your-users.svg'


const Features = () => {

    const features = [
        {
            title: 'Grow Together',
            content: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
            img: together,
            alt: 'Illustration. Two people side by side looking at each other',
            imgClass: "order-2",
            contentClass: "order-1 lg: mx-14"
        },
        {
            title: 'Flowing Conversations',
            content: 'You wouldn\'t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.',
            img: conversation,
            alt: 'Illustration. Four people sitting on a table outdoors',
            imgClass: "order-1",
            contentClass: "order-2 lg: mx-14"
        },
        {
            title: 'Your Users',
            content: 'It takes no time at all to integrate Huddle with your app\'s authentication solution. This means, once signed in to your app, your users can start chatting immediately.',
            img: users,
            alt: 'Illustration. Three people holding and showing their presentations',
            imgClass: "order-2",
            contentClass: "order-1 my-12 lg: mx-14"
        },
    ];

    const defImg = "max-h-48 m-auto xl:max-h-60 "

    const mappedFeatures = features.map((feature, index) =>
        <div key={index} className="my-20 sm:grid sm:grid-cols-2">
            <img  className={defImg + feature.imgClass} src={feature.img} alt="logo"/>
            <Content
                featureTitle={feature.title}
                featureContent={feature.content}
                featureClass={feature.contentClass}
            />
        </div>
    )

    return (
        <div className="p-4 text-center lg:text-left">
            {mappedFeatures}
        </div>
    );
}
 
export default Features;