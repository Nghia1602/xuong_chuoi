import React from "react";

const Title = ({title}) => {
    return (
        <div className="bg-[#C6C6C6] flex items-center justify-center w-full py-2 rounded-t-md">
                    <span className="font-medium text-[#495057] text-sm uppercase ">{title}</span>
                </div>
    )
}

export default Title;