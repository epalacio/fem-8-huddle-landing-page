const Content = (props) => {

    return (
        <div className={props.featureClass}>
            <h3 className="text-lg mb-4 text-darkCyan lg:px-6 lg:pt-10">{props.featureTitle}</h3>
            <p className="text-sm px-6 text-grayBlue font-normal">{props.featureContent}</p>
        </div>
    );
}
 
export default Content;