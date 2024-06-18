//shadcn and radix
//MUI is very hard to customize
// Code here will not restrict H or W of Card, whosoever is using intersection
// will choose it dimensions
export const RevenueCard=({
    title,
    orderCount,
    amount
}) => {
    /*
    bg-white: Sets the background color to white.
    rounded: Applies a border-radius to create rounded corners.
    shadow-md: Adds a medium shadow for depth.
    p-4: Adds padding around the content.
    hover:bg-blue-200: Changes the background color to a light blue (
    //blue-200 in Tailwind's color palette) when the container is hovered over.
    */
    return <div className="bg-white rounded shadow-md p-4 hover:bg-blue-300">
        <div className="text-gray-700 flex">
            <div>
                {title}
            </div>
            
        
        {/* ml-2: Adds a left margin of 0.5rem.
        flex: Applies Flexbox layout to the container.
        justify-center: Centers the content horizontally within the Flexbox container. */}
            <div className="ml-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div>
        </div>
        {/* pt-2: padding at top */}
        <div className="flex justify-between pt-2">
        {/* font-semibold: Applies a semi-bold font weight to the text.
        text-2xl: Sets the font size to 2xl (extra-large). */}

            <div className="font-semibold text-2xl">
            Rs {amount} 
            </div>
            {orderCount ? <div className="flex cursor-pointer underline font-medium">
                <div className="text-blue-700">
                    {orderCount} order(s) 
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
        </div>: null}
    </div>
    </div>
}