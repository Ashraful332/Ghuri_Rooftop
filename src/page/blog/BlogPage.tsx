/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminUrl = import.meta.env.VITE_ADMIN_URL;

type BlogData = {
    _id: string,
    title: string,
    SortDes: string,
    photoUrl: string,
    description: string,
    View: string

}


const BlogPage = () => {
    const [blogs, setBlogs] = useState<BlogData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // lode the blog
    useEffect(() => {
        async function LoadBlog() {
            try {
                const response = await axios.get(`${AdminUrl}/all-blog`)
                setBlogs(response.data)
                setIsLoading(false);
            } catch (error) {
                console.error("error is comming on get blog data")
            }

        }
        LoadBlog()
    }, [])
    return (
        <div>
            <Navbar />
            <div className="mt-m mb-h">
                <h3 className="text-center text-lg md:text-4xl font-bold mt-h mb-low ">All Blog</h3>
                <div className="max-w-[1500px] mx-auto ">
                    {isLoading ? (
                        <div className="flex space-x-2 mt-7 mb-4">
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce"></div>
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.8s]"></div>
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.10s]"></div>
                        </div>

                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-6 md:p-4 mb-sec">
                            {blogs.map((blog) => (
                                <div key={blog._id} className=" w-[97vw] sm:w-[370px] ">
                                    <div className="w-[97vw] sm:w-[350px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
                                        <img src={blog.photoUrl} alt="photo 1" className="w-full h-full object-cover rounded-lg " />
                                    </div>
                                    <div className="h-[180px] flex flex-col justify-between ">
                                        <div>
                                            <div className="mt-5 flex justify-between text-2xl">
                                                <h4 className="font-bold text-sm">
                                                    {blog.title}
                                                </h4>
                                            </div>
                                            <p className="text-[var(--pTx-color)] text-sm pt-[6px] pr-2 pb-4  ">
                                                {blog.SortDes}
                                            </p>
                                        </div>

                                        <div className="flex justify-between">
                                            <Link to={`/blog/${blog._id}`}
                                                className="hero-btn ">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default BlogPage;