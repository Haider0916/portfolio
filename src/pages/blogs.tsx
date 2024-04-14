import React from "react";

function blogs() {

    const projectContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.`.substring(0, 160) + "...";

    return (
        <div className="py-16 px-16 lg:px-52 max-sm:pt-9 max-sm:px-9">
            <p className="flex font-bold text-3xl sm:justify-start md:mb-5 ">Blog</p>
            {
                [1, 2, 3].map(_ => <>
                    <div className="bg-white py-5">
                        <h1 className="text-xl font-bold mb-2">Making a design system from scratch</h1>
                        <p className="mb-2">12th Feb 2020 &nbsp;&nbsp; | &nbsp;&nbsp; Design, Pattern</p>
                        <p className="h-[240] lg:pr-20">{projectContent}</p>
                    </div>
                    <hr />
                </>)
            }
        </div>
    );
}

export default blogs;
