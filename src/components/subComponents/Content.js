const Content = (props) => {

    return (
        <div className={props.featureClass}>
            <h3 className="text-lg mb-4 text-darkCyan lg:px-6 lg:pt-10 lg:text-xl">{props.featureTitle}</h3>
            <p className="text-sm px-6 text-grayBlue font-normal leading-6">{props.featureContent}</p>
        </div>
    );
}
 
export default Content;