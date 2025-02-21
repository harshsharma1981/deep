"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FaHome, FaUser, FaCalendarAlt, FaSearch } from "react-icons/fa";
import Link from "next/link";
import DOMPurify from "dompurify"; // ✅ Prevent XSS attacks
import Image from "next/image"; // ✅ Optimized Next.js Image
import { useBlogs } from "@/context/blogContext/BlogContext";
import Navbar from "@/app/home-component/Navbar";

// ✅ Define Blog Interface (Handling `image` as an array)
interface Blog {
  slug: string;
  title: string;
  description?: string;
  content?: string;
  image?: { formats: { small?: { url: string }; medium?: { url: string } } }[]; // ✅ Fixed: Image is now an array
  createdAt: string;
  category?: { categoryName: string };
  author?: string;
}

export default function BlogDetailPage() {
  const { blogs, loading } = useBlogs(); // Fetch blogs from context
  const { slug } = useParams(); // ✅ Fix for Next.js 14

  // ✅ Explicit Type for useState Hooks
  const [blog, setBlog] = useState<Blog | null>(null);
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    if (!slug || !blogs || blogs.length === 0) return;

    // ✅ Ensure correct type when setting state
    const selectedBlog: Blog | null = blogs.find((b) => b.slug === slug) || null;
    setBlog(selectedBlog);

    setRecentBlogs(blogs.filter((b) => b.slug !== slug).slice(0, 5));
  }, [slug, blogs]);

  if (loading) {
    return <p className="text-center text-xl">Loading blog content...</p>;
  }

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <p className="text-gray-500">We couldn&apos;t find the blog you were looking for.</p>
        <Link href="/blogs" className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Breadcrumb Navigation */}
      <div className="relative w-full h-[300px] bg-cover bg-center flex items-center px-6 md:px-20"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg')", backgroundColor: "rgb(27 26 26 / 68%)", backgroundBlendMode: "overlay" }}>
        <div className="absolute top-5 left-5 text-white text-sm flex items-center">
          <FaHome className="mr-2" />
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blogs" className="hover:underline">Blogs</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{blog.title}</span>
        </div>
        <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
      </div>

      {/* Blog Content Section */}
      <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row gap-10">
        {/* Left Side - Blog Content */}
        <div className="md:w-3/4 bg-white shadow-lg p-8 rounded-lg">
          {/* ✅ Fixed Image Handling (Mapping Over Images) */}
          {blog.image?.map((img, index) => (
            img.formats?.medium?.url && (
              <Image
                key={index}
                src={`http://localhost:1337${img.formats.medium.url}`}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-40 object-cover rounded-lg"
              />
            )
          ))}

          {/* Blog Meta Data */}
          <div className="flex justify-between items-center mt-6 text-gray-600 text-sm">
            <div className="flex items-center">
              <span className="bg-green-500 text-white px-3 py-1 rounded-md text-xs">{blog.category?.categoryName || "General"}</span>
              <FaCalendarAlt className="ml-4 mr-2" />
              <span>{new Date(blog.createdAt).toDateString()}</span>
            </div>
            <div className="flex items-center">
              <FaUser className="mr-2" />
              <span>{blog.author || "Admin"}</span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="text-gray-700 mt-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content || "") }}></div>
        </div>

        {/* Right Sidebar */}
        <div className="md:w-1/4 space-y-6">
          {/* Search Bar */}
          <div className="bg-white shadow-lg p-4 rounded-lg flex items-center">
            <FaSearch className="text-gray-500 mr-2" />
            <input type="text" placeholder="Search blogs..." className="w-full border-none focus:outline-none" />
          </div>

          {/* Recent Blog List */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Recent Blogs</h3>
            <ul className="space-y-4">
              {recentBlogs.map((recent, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* ✅ Fixed Image Handling (Mapping Over Recent Blog Images) */}
                  {recent.image?.map((img, imgIndex) => (
                    img.formats?.medium?.url && (
                      <Image
                        key={imgIndex}
                        src={`http://localhost:1337${img.formats.medium.url}`}
                        alt={recent.title}
                        width={80}
                        height={80}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    )
                  ))}
                  <div>
                    <Link href={`/blog/${recent.slug}`} className="text-green-500 font-semibold hover:underline">
                      {recent.title}
                    </Link>
                    <p className="text-gray-500 text-sm">{new Date(recent.createdAt).toDateString()}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
