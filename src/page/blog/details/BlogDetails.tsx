/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentBlog from "./Comment";
import Eye from "../../../assets/icon/eye.svg";
import Calendar from "../../../assets/icon/calendar-days.svg";
import Comments from "../../../assets/icon/icons8-comment.svg";
import Navbar from "../../../components/navigation/Navbar";
import Footer from "../../../components/navigation/Footer";


const Public = import.meta.env.VITE_API_URL;

type BlogData = {
    _id: string,
    title: string,
    SortDes: string,
    photoUrl: string,
    description: string,
    date: string,
    View: string,
    comments: string[],
}


function wrapIframe(html: string): string {
    // iframe ট্যাগ খুঁজে বের করে তার চারপাশে responsive div র‍্যাপ করো
    return html.replace(
        /<iframe.*?<\/iframe>/g,
        (match) => `<div class="responsive-iframe">${match}</div>`
    );
}



export default function BlogDetails() {
    const [blogs, setBlogs] = useState<BlogData | any>(null)
    const { id } = useParams(); // fecht the id of blog

    // fetch the data
    useEffect(() => {
        async function LoadData() {
            try {
                const response = await axios.post(`${Public}/blog-details-all`, { id })
                // const response = await axios.get(`${Public}/blog-details-all/${id}`)

                setBlogs(response.data)
                console.log(response.data);
            } catch (error) {
                console.error("the error is coming on load blog", error)
            }
        }
        LoadData()
    }, [id])

    if (!blogs) {
        return <p>Loading...</p>;
    }

    const safeHtml = wrapIframe(blogs.description);

    return (
        <div className="max-w-screen overflow-x-hidden">
            <Navbar />
            <div className="flex flex-col items-center justify-center mx-auto mt-h">
                <div className="mb-m px-1 sm:px-6 lg:px-0 max-w-[1500px] mx-auto w-full">
                    <div className="bg-[#F6F6F6] backdrop-blur p-2 sm:p-6 lg:p-8 rounded-md border border-[#ddd] border-dashed">
                        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl border border-[#ddd] border-dashed">

                            {/* Blog Image */}
                            <div>
                                <img
                                    src={blogs.photoUrl}
                                    alt="Blog image"
                                    className="w-full h-[220px] sm:h-[350px] lg:h-[500px] rounded-lg object-cover"
                                />
                            </div>

                            {/* Meta info */}
                            <hr className="mt-6 text-[#ddd]" />
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 my-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <img src={Calendar} alt="calendar" className="w-5" />
                                        <p>{blogs.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <img src={Comments} alt="comments" className="w-5" />
                                        <p>{blogs?.comments?.length || 0}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <img src={Eye} alt="eye icon" className="w-5" />
                                    <p>{blogs.View}</p>
                                </div>
                            </div>
                            <hr className="mb-4 text-[#ddd]" />

                            {/* Blog Title + Description */}
                            <div>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 leading-snug">
                                    {blogs.title}
                                </h2>
                            </div>
                            <p className="w-full sm:w-[80%] text-sm mb-6 text-c-sec">
                                {blogs.SortDes}
                            </p>

                            {/* Responsive iframe wrapper */}
                            <style>
                                {`
                            .responsive-iframe {
                                position: relative;
                                width: 100%;
                                height: 0;
                                padding-bottom: 56.25%;
                                margin: 1.5rem 0;
                            }
                            .responsive-iframe iframe {
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                left: 0;
                                top: 0;
                                border-radius: 12px;
                            }
                            `}
                            </style>

                            {/* Blog Body */}
                            <div
                                className="prose prose-sm sm:prose lg:prose-lg max-w-full lg:max-w-[70vw] mx-auto rounded-2xl"
                                dangerouslySetInnerHTML={{ __html: safeHtml }}
                            />

                            {/* Comment Section */}
                            <div className="flex flex-col items-center mt-m mb-low">
                                <CommentBlog MyBlogData={blogs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

        // <div className="max-w-screen overflow-x-hidden">
        //     <Navbar />
        //     <div className="flex flex-col items-center justify-center mx-auto mt-h" >
        //         <div className="mb-m px-2 lg:p-0 max-w-[1500px] mx-auto ">
        //             <div className=" bg-[#F6F6F6] backdrop-blur-[8.3px] p-2 lg:p-8 rounded-md border-[1.5px] border-[#ddd] border-dashed ">
        //                 <div className="bg-white p-6 rounded-xl border-[1.5px] border-[#ddd] border-dashed ">
        //                     <div>
        //                         <img src={blogs.photoUrl} alt="Blog image" className="w-[100%] h-[500px] rounded-lg object-cover " />
        //                     </div>
        //                     <hr className="mt-6 text-[#ddd] " />
        //                     <div className="flex flex-col sm:flex-row items-center justify-between my-2">
        //                         <div className="flex flex-row gap-3">
        //                             <div className="flex items-center gap-3">
        //                                 <img src={Calendar} alt="eye icon" className="w-5" />
        //                                 <p>{blogs.date}</p>
        //                             </div>
        //                             <div className="flex items-center gap-3">
        //                                 <img src={Comments} alt="eye icon" className="w-5" />
        //                                 <p>{blogs?.comments?.length || 0 }</p>
        //                             </div>
        //                         </div>
        //                         <div>
        //                             <div className="flex items-center gap-3">
        //                                 <img src={Eye} alt="eye icon" />
        //                                 <p>{blogs.View}</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <hr className="mb-3 text-[#ddd] " />

        //                     <div >
        //                         <h2 className="text-lg sm:text-2xl font-bold mb-3 ">{blogs.title}</h2>
        //                     </div>
        //                     <p className=" w-full sm:w-[80%] text-sm  mb-6 text-c-sec ">{blogs.SortDes}</p>

        //                     {/* Responsive iframe CSS */}
        //                     <style>
        //                         {`
        //                 .responsive-iframe {
        //                     position: relative;
        //                     width: 100%;
        //                     height: 0;
        //                     padding-bottom: 56.25%;
        //                     margin-top: 1rem;
        //                     margin-bottom: 1rem;
        //                 }
        //                 .responsive-iframe iframe {
        //                     position: absolute;
        //                     width: 100%;
        //                     height: 100%;
        //                     left: 0;
        //                     top: 0;
        //                 }
        //                 `}
        //                     </style>
        //                     <div
        //                         className="prose prose-lg mx-w-[90vw] lg:max-w-[70vw] mx-auto rounded-2xl p-6 "
        //                         dangerouslySetInnerHTML={{ __html: safeHtml }}
        //                     />
        //                     {/* coment section */}
        //                     <div className="flex flex-col items-center mt-m mb-low">
        //                         <CommentBlog MyBlogData={blogs} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <Footer />
        // </div>
    )
}