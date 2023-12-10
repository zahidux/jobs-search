
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center ">
            <h2 className="text-3xl font-bold text-[#1A1919] mt-32 mb-5">{heading}</h2>
            <span className="text-lg font-medium text-[#757575]">{subHeading}</span>
        </div>
    );
};

export default SectionTitle;