const Content = (props) => {
    return (
        <div className="my-12">
            <h3 className="text-lg mb-4 text-darkCyan">{props.featureTitle}</h3>
            <p className="text-sm px-6 text-grayBlue font-normal">{props.featureContent}</p>
        </div>
    );
}
 
export default Content;