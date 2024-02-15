
const PhoneCard = ({ id, name, description, price, imageFileName }) => {

    return (
        < div className="lg:w-1/3 sm:w-1/2 p-4" >
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={imageFileName}
                        className="h-full w-full object-cover"

                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {name}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            €{price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {description}
                    </p>
                </div>
            </div>
        </div >
    );
}

export default PhoneCard;